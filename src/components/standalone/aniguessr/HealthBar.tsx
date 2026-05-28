import React from "react";

export interface HealthBarProps {
    hp: number;
    maxHp: number;
    /** If provided, renders a translucent segment for this much damage
     *  adjacent to the current HP bar, and shows "−N" next to the HP text. */
    damageTaken?: number;
    /** Fill color for the live HP segment. Defaults to red. */
    color?: string;
    style?: React.CSSProperties;
}

export const HealthBar: React.FC<HealthBarProps> = ({
    hp,
    maxHp,
    damageTaken,
    color = "#c0392b",
    style,
}) => {
    const safeMax = Math.max(1, maxHp);
    const hpPct = Math.max(0, Math.min(100, (hp / safeMax) * 100));
    const dmgPct = damageTaken
        ? Math.max(0, Math.min(100 - hpPct, (damageTaken / safeMax) * 100))
        : 0;

    return (
        <div
            style={{
                position: "relative",
                background: "#1a1a1a",
                border: "1px solid #555",
                height: 18,
                width: "100%",
                overflow: "hidden",
                color: "white",
                fontSize: 14,
                display: "inline-block",
                verticalAlign: "middle",
                ...style,
            }}
        >
            {/* Live HP */}
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: `${hpPct}%`,
                    background: color,
                    transition: "width 400ms ease-out",
                }}
            />
            {/* Damage ghost, adjacent and to the right of the live HP */}
            {dmgPct > 0 && (
                <div
                    style={{
                        position: "absolute",
                        left: `${hpPct}%`,
                        top: 0,
                        bottom: 0,
                        width: `${dmgPct}%`,
                        background: "rgba(255, 100, 100, 0.5)",
                        transition: "width 400ms ease-out",
                    }}
                />
            )}
            {/* Text overlay */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    fontWeight: "bold",
                    textShadow: "1px 1px 2px black, 0 0 3px black",
                    pointerEvents: "none",
                    lineHeight: 1
                }}
            >
                <span>{hp}</span>
                {damageTaken !== undefined && damageTaken > 0 && (
                    <span style={{ color: "#ffaaaa" }}>−{damageTaken}</span>
                )}
            </div>
        </div>
    );
};
