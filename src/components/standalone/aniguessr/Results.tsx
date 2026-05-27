import React from "react";
import { SpectatorMap, teamColor } from "./maps/SpectatorMap";
import type { GameState, SubmittedGuess } from "./client";
import { getQuestion } from "./utils";
import { HealthBar } from "./HealthBar";

export interface ResultsProps {
    state: GameState;
    quizInfo: any;
    googleApiKey: string;
    getPlayerIcon: (playerId: string) => React.ReactElement;
    /** If provided, show this round. Otherwise falls back to
     *  `state.phase.roundIndex` (only valid in the results phase). */
    roundIndex?: number;
    showQuestion?: boolean;
}

export const Results: React.FC<ResultsProps> = ({
    state,
    quizInfo,
    googleApiKey,
    getPlayerIcon,
    roundIndex: explicitRoundIndex,
    showQuestion = true,
}) => {
    const roundIndex =
        explicitRoundIndex ??
        (state.phase.type === "results" ? state.phase.roundIndex : -1);
    if (roundIndex < 0) {
        throw new Error(`Invalid round index: ${roundIndex}`);
    }
    const completed = state.roundResults[roundIndex];

    // Filter player guesses for the map (only map-type, non-null).
    const playerGuesses = React.useMemo(
        () =>
            completed.results
                .filter((r): r is SubmittedGuess & { guess: { type: "map"; position: { lat: number; lng: number } } } =>
                    r.guess !== null && r.guess.type === "map",
                )
                .map((r) => ({
                    playerId: r.playerId,
                    team: r.team,
                    position: r.guess.position,
                })),
        [completed],
    );

    if (completed.correctAnswer.type !== "map") {
        // Text-answer results would go here in the future.
        return <div style={msgStyle}>Non-map results not implemented yet.</div>;
    }

    // Group by team, sort by score desc within each.
    const playersByTeam = new Map<string, SubmittedGuess[]>();
    for (const t of state.teams) playersByTeam.set(t.name, []);
    for (const r of completed.results) {
        playersByTeam.get(r.team)?.push(r);
    }
    playersByTeam.forEach((arr) => {
        arr.sort((a, b) => b.score - a.score);
    });

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <div style={{ flex: "1 1 60%", minHeight: 0, position: "relative" }}>
                <SpectatorMap
                    key={roundIndex}
                    googleApiKey={googleApiKey}
                    teams={state.teams}
                    playerGuesses={playerGuesses}
                    correctAnswer={completed.correctAnswer.correct}
                    getPlayerIcon={getPlayerIcon}
                />
                {showQuestion && completed.question && (
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, width: "20%", padding: 8, backgroundColor: "rgba(0,0,0,0.5)", color: "white" }}>
                        {getQuestion({ question: completed.question, submittedPlayerIds: completed.results.map(r => r.playerId), type: "guessing", roundIndex, startedAt: 0, endsAt: 0, answer: { type: "map" } }, false)}
                    </div>
                )}
            </div>
            <div className="scrollable-content" style={{ flex: "1 1 40%", overflow: "auto", padding: 10, paddingRight: 0, width: "calc(100% - 12px)", color: "white" }}>
                <table style={{ width: "calc(100% - 12px)", borderCollapse: "collapse", fontSize: 14 }}>
                    <tbody>
                        {state.teams.map((team) => {
                            const players = playersByTeam.get(team.name) ?? [];
                            const topScore = players[0]?.score ?? 0;
                            const color = teamColor(team.name, state.teams);
                            const outcome = completed.teamOutcomes.find((o) => o.team === team.name);
                            const isWinner = completed.winningTeam === team.name;
                            return (
                                <React.Fragment key={team.name}>
                                    <tr style={{ borderBottom: "2px solid #1e1642" }}>
                                        <td colSpan={4} style={{ padding: "8px 4px", color, fontWeight: "bold" }}>
                                            <span style={{fontFamily: 'DOS, basiic, sans-serif'}}>{team.name} {isWinner ? "👑" : ""}</span>
                                            {outcome && (
                                                <span style={{
                                                    float: "right",
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    gap: 6,
                                                    color: "#ccc",
                                                    fontWeight: "normal",
                                                }}>
                                                    {/* <span style={{ color: "#c29898" }}>HP <span style={{textDecoration: 'underline'}}>{outcome.hpAfter}</span></span>
                                                    {outcome.damageTaken > 0 && (
                                                        <span style={{ color: "#e74c3c" }}> (−{outcome.damageTaken})</span>
                                                    )} */}
                                                    <HealthBar
                                                        hp={outcome.hpAfter}
                                                        maxHp={quizInfo.startingHp}
                                                        damageTaken={outcome.damageTaken}
                                                        color={teamColor(team.name, state.teams)}
                                                        style={{ width: 160 }}
                                                    />
                                                    <span>·</span>
                                                    <span style={{ color: "#d0d1a4" }}>
                                                        DMG ×{outcome.multiplierAfter.toFixed(1)}
                                                        {outcome.multiplierIncrease > 0 && ` (+${outcome.multiplierIncrease.toFixed(1)})`}
                                                    </span>
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                    {players.map((p, index) => (
                                        <tr key={p.playerId} style={{borderBottom: index === players.length - 1 ? "2px solid #150f31" : "2px dashed #150f31"}}>
                                            <td style={{ padding: "4px", width: 24 }}>
                                                {p.score === topScore && p.score > 0 ? "★" : ""}
                                            </td>
                                            <td style={{ padding: "4px" }}>{p.playerId}</td>
                                            <td style={{ padding: "4px", textAlign: "right", color: "#aaa" }}>
                                                {p.guess === null
                                                    ? "—"
                                                    : p.distanceKm !== undefined
                                                        ? `${formatDistance(p.distanceKm)}`
                                                        : ""}
                                            </td>
                                            <td style={{ padding: "4px", textAlign: "right", width: 60 }}>
                                                {p.score} pts
                                            </td>
                                        </tr>
                                    ))}
                                    {players.length === 0 && (
                                        <tr><td colSpan={4} style={{ padding: "4px", color: "#888888", fontStyle: "italic" }}>
                                            (no players)
                                        </td></tr>
                                    )}
                                    {state.teams.length > 0 && state.teams.findIndex((team) => team.name === team.name) !== state.teams.length - 1 && (
                                        <tr><td colSpan={4}><hr style={{borderColor: "#b2aedb"}} /></td></tr>
                                    )}
                                </React.Fragment>
                            );
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

function formatDistance(km: number): string {
    if (km < 1) return `${Math.round(km * 1000)} m`;
    if (km < 10) return `${km.toFixed(1)} km`;
    return `${Math.round(km)} km`;
}

const msgStyle: React.CSSProperties = {
    height: "100%",
    display: "grid",
    placeItems: "center",
    color: "white",
};