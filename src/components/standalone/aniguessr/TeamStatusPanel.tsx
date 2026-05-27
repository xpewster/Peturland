import React from "react";
import { HealthBar } from "./HealthBar";
import { teamColor } from "./maps/SpectatorMap";
import type { Player, Team } from "./client";

export interface TeamStatusPanelProps {
    teams: readonly Team[];
    players: readonly Player[];
    startingHp: number;
    /** If provided, players in this set get a ✓ marker. */
    submittedPlayerIds?: readonly string[];
    getPlayerIcon: (playerId: string) => React.ReactElement;
    style?: React.CSSProperties;
}

export const TeamStatusPanel: React.FC<TeamStatusPanelProps> = ({
    teams,
    players,
    startingHp,
    submittedPlayerIds,
    getPlayerIcon,
    style,
}) => {
    return (
        <div className="scrollable-content" style={{
            overflowY: "auto",
            color: "white",
            ...style,
        }}>
            {teams.map((team) => {
                const color = teamColor(team.name, teams);
                const roster = players.filter((p) => p.team === team.name);
                return (
                    <div key={team.name} style={{ marginBottom: 14 }}>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            marginBottom: 4,
                        }}>
                            <span style={{
                                color,
                                fontWeight: "bold",
                                fontFamily: "DOS, basiic, sans-serif",
                            }}>
                                {team.name}
                            </span>
                            <span style={{ color: "#d0d1a4", fontSize: 12 }}>
                                DMG ×{team.multiplier.toFixed(1)}
                            </span>
                        </div>
                        <HealthBar
                            hp={team.hp}
                            maxHp={startingHp}
                            color={color}
                        />
                        <ul style={{
                            listStyle: "none",
                            padding: 0,
                            margin: "6px 0 0 0",
                        }}>
                            {roster.map((p) => {
                                const submitted = submittedPlayerIds?.includes(p.id);
                                return (
                                    <li key={p.id} style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 6,
                                        padding: "2px 0",
                                        opacity: p.connected ? 1 : 0.45,
                                    }}>
                                        {getPlayerIcon(p.id)}
                                        <span>{p.name}</span>
                                        {!p.connected && (
                                            <span style={{ color: "#888", fontSize: 11 }}>
                                                (off)
                                            </span>
                                        )}
                                        <span style={{ marginLeft: "auto", color: "#7fb069" }}>
                                            {submitted ? "✓" : ""}
                                        </span>
                                    </li>
                                );
                            })}
                            {roster.length === 0 && (
                                <li style={{
                                    color: "#888",
                                    fontStyle: "italic",
                                    padding: "2px 0",
                                }}>
                                    (no players)
                                </li>
                            )}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};
