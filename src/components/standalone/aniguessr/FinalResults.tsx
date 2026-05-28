import React from "react";
import { Results } from "./Results";
import { teamColor } from "./maps/SpectatorMap";
import type { GameState } from "./client";

export interface FinalResultsProps {
    state: GameState;
    quizInfo: any;
    googleApiKey: string;
    getPlayerIcon: (playerId: string) => React.ReactElement;
    showTeams?: boolean;
}

export const FinalResults: React.FC<FinalResultsProps> = ({
    state,
    quizInfo,
    googleApiKey,
    getPlayerIcon,
    showTeams,
}) => {
    const total = state.roundResults.length;
    const [selectedRound, setSelectedRound] = React.useState<number>(
        Math.max(0, total - 1),
    );

    if (total === 0) {
        return (
            <div style={{ color: "white", padding: 20 }}>
                No rounds were played.
            </div>
        );
    }

    const teamTotals = new Map<string, number>();
    for (const round of state.roundResults) {
        for (const o of round.teamOutcomes) {
            teamTotals.set(o.team, (teamTotals.get(o.team) ?? 0) + o.roundScore);
        }
    }

    // Winner: highest HP, ties broken by total score.
    const ranked = [...state.teams].sort((a, b) => {
        if (b.hp !== a.hp) return b.hp - a.hp;
        return (teamTotals.get(b.name) ?? 0) - (teamTotals.get(a.name) ?? 0);
    });
    const winner = ranked[0];

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            {/* Scoreboard */}
            <div style={scoreboardStyle}>
                <div style={{ fontSize: 18, fontWeight: "bold", marginBottom: 6 }}>
                    👑 {winner ? winner.name : "—"} wins
                </div>
                <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
                    <table style={{ borderCollapse: "collapse", width: "calc(100% - 12px)"}}>
                        <tbody>
                        {ranked.map((team) => (
                            <tr key={team.name} style={{ color: teamColor(team.name, state.teams), borderBottom: "2px solid #1e1642" }}>
                                <td style={{ padding: "4px" }}>
                                    <strong>{team.name}</strong>{" "}
                                    <span style={{ color: "#ccc" }}>
                                        · HP {team.hp}
                                    </span>
                                    {showTeams && (
                                        <span style={{ float: "right", color: "#ccc", fontWeight: "normal", fontStyle: "italic" }}>
                                            {team.players.join(", ")}
                                        </span>
                                    )}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Round picker */}
            <div style={pickerStyle}>
                {state.roundResults.map((round, i) => {
                    const wColor =
                        round.winningTeam !== null
                            ? teamColor(round.winningTeam, state.teams)
                            : "#555";
                    const selected = i === selectedRound;
                    return (
                        <button
                            key={i}
                            onClick={() => setSelectedRound(i)}
                            style={{
                                padding: "6px 12px",
                                background: selected ? "#334" : "#1a1a2a",
                                color: "white",
                                border: `2px solid ${selected ? wColor : "transparent"}`,
                                borderRadius: 3,
                                cursor: "pointer",
                                fontFamily: "inherit",
                                fontSize: 13,
                                flexShrink: 0,
                            }}
                        >
                            Round {i + 1}
                        </button>
                    );
                })}
            </div>

            {/* The selected round's full results (map + table) */}
            <div style={{ flex: 1, minHeight: 0 }}>
                <Results
                    state={state}
                    quizInfo={quizInfo}
                    googleApiKey={googleApiKey}
                    getPlayerIcon={getPlayerIcon}
                    roundIndex={selectedRound}
                />
            </div>
        </div>
    );
};

const scoreboardStyle: React.CSSProperties = {
    padding: "12px 16px",
    background: "#10103a",
    borderBottom: "1px solid #2a2a4a",
    color: "white",
    flexShrink: 0,
};

const pickerStyle: React.CSSProperties = {
    padding: "8px 16px",
    background: "#0a0a2a",
    borderBottom: "1px solid #2a2a4a",
    display: "flex",
    gap: 6,
    overflowX: "auto",
    flexShrink: 0,
};
