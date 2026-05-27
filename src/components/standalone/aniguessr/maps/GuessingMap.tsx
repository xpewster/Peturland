import React from "react";
import { createRoot, type Root } from "react-dom/client";

// Singleton script loader. Loads with the `marker` library for AdvancedMarkerElement.
let googleMapsLoading: Promise<void> | null = null;
function loadGoogleMaps(apiKey: string): Promise<void> {
    if (googleMapsLoading) return googleMapsLoading;
    if (typeof window !== "undefined" && (window as any).google?.maps?.marker) {
        googleMapsLoading = Promise.resolve();
        return googleMapsLoading;
    }
    googleMapsLoading = new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src =
            `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}` +
            `&v=weekly&libraries=marker`;
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Google Maps failed to load"));
        document.head.appendChild(script);
    });
    return googleMapsLoading;
}

// =============================================================================
// Inner map component — just the map and its markers. No overlay treatment.
// =============================================================================

type ManagedMarker = {
    marker: google.maps.marker.AdvancedMarkerElement;
    root: Root;
};

const OWN_TRIANGLE = "#e74c3c";
const TEAMMATE_TRIANGLE = "#e2cf22";

function createMarkerDom(isOwn: boolean): { container: HTMLDivElement; iconHost: HTMLDivElement } {
    const container = document.createElement("div");
    container.style.cssText = `
        display: flex;
        flex-direction: column;
        align-items: center;
        pointer-events: none;
        filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
    `;

    const iconHost = document.createElement("div");
    iconHost.style.cssText = `display: flex; align-items: center; justify-content: center;`;
    container.appendChild(iconHost);

    const triangle = document.createElement("div");
    triangle.style.cssText = `
        width: 0;
        height: 0;
        margin-top: -2px;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 12px solid ${isOwn ? OWN_TRIANGLE : TEAMMATE_TRIANGLE};
    `;
    container.appendChild(triangle);

    return { container, iconHost };
}

interface MapInnerProps {
    googleApiKey: string;
    ownPlayerId: string;
    ownGuess?: { lat: number; lng: number };
    teammateGuesses: Array<{ playerId: string; position: { lat: number; lng: number } }>;
    locked: boolean;
    onPlaceGuess: (position: { lat: number; lng: number }) => void;
    getPlayerIcon: (playerId: string) => React.ReactElement;
}

const MapInner: React.FC<MapInnerProps> = ({
    googleApiKey,
    ownPlayerId,
    ownGuess,
    teammateGuesses,
    locked,
    onPlaceGuess,
    getPlayerIcon,
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [map, setMap] = React.useState<google.maps.Map | null>(null);
    const [error, setError] = React.useState<string | null>(null);
    const ownMarkerRef = React.useRef<ManagedMarker | null>(null);
    const teammateMarkersRef = React.useRef(new Map<string, ManagedMarker>());

    const onPlaceGuessRef = React.useRef(onPlaceGuess);
    const lockedRef = React.useRef(locked);
    React.useEffect(() => { onPlaceGuessRef.current = onPlaceGuess; }, [onPlaceGuess]);
    React.useEffect(() => { lockedRef.current = locked; }, [locked]);

    // Load + create map.
    React.useEffect(() => {
        let cancelled = false;
        loadGoogleMaps(googleApiKey)
            .then(() => {
                if (cancelled || !containerRef.current) return;
                const m = new google.maps.Map(containerRef.current, {
                    center: { lat: 20, lng: 0 },
                    zoom: 2,
                    mapId: "DEMO_MAP_ID",      // required for AdvancedMarkerElement
                    clickableIcons: false,
                    streetViewControl: false,
                    fullscreenControl: false,
                    mapTypeControl: true,
                    gestureHandling: "greedy",
                    disableDoubleClickZoom: true,
                    draggableCursor: "default",
                    draggingCursor: "move",
                });
                m.addListener("click", (e: google.maps.MapMouseEvent) => {
                    if (lockedRef.current) return;
                    const ll = e.latLng;
                    if (!ll) return;
                    onPlaceGuessRef.current({ lat: ll.lat(), lng: ll.lng() });
                });
                setMap(m);
            })
            .catch((e: Error) => { if (!cancelled) setError(e.message); });
        return () => { cancelled = true; };
    }, [googleApiKey]);

    const ensureMarker = React.useCallback(
        (
            playerId: string,
            position: { lat: number; lng: number },
            isOwn: boolean,
            existing: ManagedMarker | undefined,
        ): ManagedMarker => {
            if (!map) throw new Error("map not ready");
            if (existing) {
                existing.marker.position = position;
                existing.root.render(getPlayerIcon(playerId));
                return existing;
            }
            const { container, iconHost } = createMarkerDom(isOwn);
            const root = createRoot(iconHost);
            root.render(getPlayerIcon(playerId));
            const marker = new google.maps.marker.AdvancedMarkerElement({
                map,
                position,
                content: container,
            });
            return { marker, root };
        },
        [map, getPlayerIcon],
    );

    // Own marker.
    React.useEffect(() => {
        if (!map) return;
        if (!ownGuess) {
            if (ownMarkerRef.current) {
                ownMarkerRef.current.marker.map = null;
                ownMarkerRef.current.root.unmount();
                ownMarkerRef.current = null;
            }
            return;
        }
        ownMarkerRef.current = ensureMarker(
            ownPlayerId,
            ownGuess,
            true,
            ownMarkerRef.current ?? undefined,
        );
    }, [map, ownGuess, ownPlayerId, ensureMarker]);

    // Teammate markers.
    React.useEffect(() => {
        if (!map) return;
        const markers = teammateMarkersRef.current;
        const seen = new Set<string>();
        for (const tm of teammateGuesses) {
            seen.add(tm.playerId);
            markers.set(
                tm.playerId,
                ensureMarker(tm.playerId, tm.position, false, markers.get(tm.playerId)),
            );
        }
        markers.forEach((m, pid) => {
            if (!seen.has(pid)) {
                m.marker.map = null;
                m.root.unmount();
                markers.delete(pid);
            }
        });
    }, [map, teammateGuesses, ensureMarker]);

    // Cleanup on unmount.
    React.useEffect(() => {
        return () => {
            if (ownMarkerRef.current) {
                ownMarkerRef.current.marker.map = null;
                ownMarkerRef.current.root.unmount();
                ownMarkerRef.current = null;
            }
            teammateMarkersRef.current.forEach((m) => {
                m.marker.map = null;
                m.root.unmount();
            });
            teammateMarkersRef.current.clear();
        };
    }, []);

    return (
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <div ref={containerRef} style={{ width: "100%", height: "100%" }} />
            {!map && !error && <div style={overlayPlaceholderStyle}>Loading map…</div>}
            {error && <div style={overlayPlaceholderStyle}>Map error: {error}</div>}
        </div>
    );
};

const overlayPlaceholderStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#222",
    color: "white",
    pointerEvents: "none",
};

// =============================================================================
// Outer wrapper: positions the map in the bottom-right, dims it when not
// hovered, expands + opaque on hover. Contains the submit button.
// =============================================================================

export interface MapOverlayProps extends MapInnerProps {
    onSubmit: () => void;
    canSubmit: boolean;
    submitted: boolean;
}

export const MapOverlay: React.FC<MapOverlayProps> = ({
    onSubmit,
    canSubmit,
    submitted,
    ...mapProps
}) => {
    const [hovered, setHovered] = React.useState(false);

    const collapsed = { width: 260, height: 190, opacity: 0.55 };
    const expanded = { width: 560, height: 420, opacity: 1.0 };
    const target = hovered ? expanded : collapsed;

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                position: "absolute",
                bottom: 16,
                right: 16,
                width: target.width,
                height: target.height,
                opacity: target.opacity,
                transition: "width 220ms ease, height 220ms ease, opacity 220ms ease",
                display: "flex",
                flexDirection: "column",
                background: "rgba(20,20,20,0.85)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 4px 16px rgba(0,0,0,0.5)",
                zIndex: 10,
            }}
        >
            <div style={{ flex: 1, position: "relative" }}>
                <MapInner {...mapProps} />
            </div>
            <button
                onClick={onSubmit}
                disabled={!canSubmit}
                style={{
                    flex: "0 0 auto",
                    padding: "8px 12px",
                    border: "none",
                    borderTop: "1px solid rgba(255,255,255,0.2)",
                    background: submitted ? "#2c4a2c" : canSubmit ? "#2c5aa0" : "#333",
                    color: "white",
                    fontFamily: "inherit",
                    fontSize: 14,
                    cursor: canSubmit ? "pointer" : "default",
                }}
            >
                {submitted
                    ? "Submitted ✓"
                    : canSubmit
                        ? "Submit guess"
                        : "Click the map to place a marker"}
            </button>
        </div>
    );
};