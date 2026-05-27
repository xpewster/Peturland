import React from "react";
import { createRoot, type Root } from "react-dom/client";
import type { Team } from "../client";

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

// Indexed by team order. Wraps if there are more teams than colors.
export const TEAM_COLORS: readonly string[] = [
    "#e74c3c", "#3498db", "#2ecc71", "#f39c12",
    "#9b59b6", "#1abc9c", "#e67e22", "#7f8c8d",
];

export function teamColor(teamName: string, allTeams: readonly Team[]): string {
    const idx = allTeams.findIndex((t) => t.name === teamName);
    if (idx < 0) return "#999";
    return TEAM_COLORS[idx % TEAM_COLORS.length]!;
}

function createPlayerMarkerDom(color: string): {
    container: HTMLDivElement;
    iconHost: HTMLDivElement;
} {
    const container = document.createElement("div");
    container.style.cssText = `
        display: flex; flex-direction: column; align-items: center;
        pointer-events: none;
        filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
    `;
    const iconHost = document.createElement("div");
    iconHost.style.cssText = `display: flex; align-items: center; justify-content: center;`;
    container.appendChild(iconHost);
    const triangle = document.createElement("div");
    triangle.style.cssText = `
        width: 0; height: 0; margin-top: -2px;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 12px solid ${color};
    `;
    container.appendChild(triangle);
    return { container, iconHost };
}

function createCorrectAnswerDom(): HTMLDivElement {
    const dom = document.createElement("div");
    dom.style.cssText = `
        width: 24px; height: 24px;
        border-radius: 50%;
        background: gold;
        border: 3px solid white;
        box-shadow: 0 0 14px rgba(255, 215, 0, 0.9);
        transform: translate(0, 50%);
    `;
    return dom;
}

export interface SpectatorMapProps {
    googleApiKey: string;
    teams: readonly Team[];
    playerGuesses: ReadonlyArray<{
        playerId: string;
        team: string;
        position: { lat: number; lng: number };
    }>;
    correctAnswer?: { lat: number; lng: number };
    getPlayerIcon: (playerId: string) => React.ReactElement;
}

export const SpectatorMap: React.FC<SpectatorMapProps> = ({
    googleApiKey,
    teams,
    playerGuesses,
    correctAnswer,
    getPlayerIcon,
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [map, setMap] = React.useState<google.maps.Map | null>(null);
    const [error, setError] = React.useState<string | null>(null);

    // Build markers once map is ready. With `key={roundIndex}` on the parent,
    // this runs once per round.
    React.useEffect(() => {
        let cancelled = false;
        loadGoogleMaps(googleApiKey)
            .then(() => {
                if (cancelled || !containerRef.current) return;
                const m = new google.maps.Map(containerRef.current, {
                    center: correctAnswer ?? { lat: 20, lng: 0 },
                    zoom: 2,
                    mapId: "DEMO_MAP_ID",
                    clickableIcons: false,
                    streetViewControl: false,
                    fullscreenControl: false,
                    mapTypeControl: false,
                    gestureHandling: "greedy",
                    draggableCursor: "default",
                    draggingCursor: "move",
                });
                setMap(m);
            })
            .catch((e: Error) => {
                if (!cancelled) setError(e.message);
            });
        return () => { cancelled = true; };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [googleApiKey]);

    const fittedRef = React.useRef(false);

    React.useEffect(() => {
        if (!map) return;
        const cleanups: Array<() => void> = [];
        const bounds = new google.maps.LatLngBounds();

        if (correctAnswer) {
            const correctMarker = new google.maps.marker.AdvancedMarkerElement({
                map,
                position: correctAnswer,
                content: createCorrectAnswerDom(),
                zIndex: 1000,
            });
            cleanups.push(() => { correctMarker.map = null; });
            bounds.extend(correctAnswer);
        }

        for (const g of playerGuesses) {
            const color = teamColor(g.team, teams);
            const { container, iconHost } = createPlayerMarkerDom(color);
            const root = createRoot(iconHost);
            root.render(getPlayerIcon(g.playerId));
            const marker = new google.maps.marker.AdvancedMarkerElement({
                map,
                position: g.position,
                content: container,
            });
            cleanups.push(() => {
                marker.map = null;
                root.unmount();
            });
            bounds.extend(g.position);
        }

        // Auto-fit only in "final" mode (correctAnswer present), and only once.
        // Live spectator mode preserves whatever the host has panned/zoomed to.
        if (correctAnswer && !fittedRef.current) {
            if (playerGuesses.length > 0) {
                map.fitBounds(bounds, 80);
            } else {
                map.setCenter(correctAnswer);
                map.setZoom(5);
            }
            fittedRef.current = true;
        }

        return () => cleanups.forEach((c) => c());
    }, [map, teams, playerGuesses, correctAnswer, getPlayerIcon]);

    return (
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <div ref={containerRef} style={{ width: "100%", height: "100%" }} />
            {!map && !error && <div style={overlayStyle}>Loading map…</div>}
            {error && <div style={overlayStyle}>Map error: {error}</div>}
        </div>
    );
};

const overlayStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#222",
    color: "white",
    pointerEvents: "none",
};