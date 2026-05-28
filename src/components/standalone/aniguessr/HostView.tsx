import React, { useEffect, useSyncExternalStore } from "react";
import { fetchGoogleApiKey, GuessingPhase, HostClient, HostClientState } from "./client";
import { frame } from "../../common/getImageFramed";
import { Results } from "./Results";
import { getPlayerIcon, getQuestion, getRoundTimer } from "./utils";
import { SpectatorMap } from "./maps/SpectatorMap";
import { FinalResults } from "./FinalResults";
import { TeamStatusPanel } from "./TeamStatusPanel";


function useHost(client: HostClient | null): HostClientState | null {
    return useSyncExternalStore(
        (callback) => {
            if (!client) return () => {};
            const unsubscribe = client.subscribe(callback);
            return () => unsubscribe();
        },
        () => client?.getState() ?? null
    );
}

export const HostView = (): React.ReactElement => {
    const [host, setHost] = React.useState<HostClient | null>(null);
    const [joined, setJoined] = React.useState(false);
    const [url, setUrl] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [googleApiKey, setGoogleApiKey] = React.useState('');

    const [teamName, setTeamName] = React.useState('');
    
    const state = useHost(host);

    const updateView = (state: HostClientState | null): void => {
        console.log("Host state updated:", state); // todo: remove
    }

    const endsAt = state?.gameState?.phase.type === "guessing"
            ? (state.gameState.phase as GuessingPhase).endsAt
            : null;
    const [timeLeft, setTimeLeft] = React.useState<number | null>(null);
    
    React.useEffect(() => {
        if (window.location.hostname === "localhost") {
            setUrl("http://localhost:8080"); // default for local dev
        }
    }, []);

    React.useEffect(() => {
        if (!endsAt) {
            setTimeLeft(null);
            return;
        }
        const tick = (): void => setTimeLeft(new Date(endsAt).getTime() - Date.now());
        tick();
        const id = setInterval(tick, 100); // lower value for higher precision
        return () => clearInterval(id);
    }, [endsAt]);

    const playerGuesses = React.useMemo(() => {
        const result: Array<{
            playerId: string;
            team: string;
            position: { lat: number; lng: number };
        }> = [];
        for (const p of state?.gameState?.players ?? []) {
            if (!p.team) continue;
            const g = state?.liveGuesses?.get(p.id);
            if (g?.type === "map") {
                result.push({
                    playerId: p.id,
                    team: p.team,
                    position: g.position,
                });
            }
        }
        return result;
    }, [state?.gameState?.players, state?.liveGuesses]);

    const correctAnswer = React.useMemo<{ lat: number; lng: number } | undefined>(() => {
        const ra = state?.currentRoundAnswer;
        const phase = state?.gameState?.phase;
        if (
            ra &&
            phase?.type === "guessing" &&
            ra.roundIndex === phase.roundIndex &&
            ra.answer.type === "map"
        ) {
            return ra.answer.correct;
        }
        return undefined;
    }, [state?.currentRoundAnswer, state?.gameState?.phase]);

    const join = async (): Promise<boolean> => {
        
        let newHost: HostClient;
        try {
            newHost = await HostClient.connect({ url, password });
        } catch (e) {
            console.error(`Could not join: ${(e as Error).message}`);
            return false;
        }

        const unsubscribe = newHost.subscribe(
            () => updateView(newHost?.getState() ?? null));
        updateView(newHost.getState());
        setHost(newHost);

        // Fetch the Google API key from the server
        const apiKey = await fetchGoogleApiKey(url, password);
        setGoogleApiKey(apiKey);
        console.log(`Fetched Google API key: ${apiKey}`);

        setJoined(true);
        return true;
    }

    const addTeam = async (teamName: string): Promise<boolean> => {
        if (!host) {
            console.error("Host client is not initialized.");
            return false;
        }
        try {
            await host.createTeam(teamName);
            setTeamName('');
            return true;
        } catch (e) {
            return false;
        }
    }

    const startGame = async (): Promise<boolean> => {
        if (!host) {
            console.error("Host client is not initialized.");
            return false;
        }
        try {
            await host.startGame();
            return true;
        } catch (e) {
            return false;
        }
    }

    const kickPlayer = async (playerId: string): Promise<boolean> => {
        if (!host) {
            console.error("Host client is not initialized.");
            return false;
        }
        try {
            await host.kickPlayer(playerId);
            return true;
        } catch (e) {
            return false;
        }
    }

    const getLobbyView = (): React.ReactElement => {
        return <div style={{padding: '20px'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'left'}}>
                <p style={{fontFamily: 'DOS, basiic, sans-serif', textDecoration: 'underline'}}>Lobby</p>
                <div>
                    <label htmlFor="team">Team: </label>
                    <input type="text" id="team" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
                    <button onClick={() => addTeam(teamName)}>Add Team</button>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'left', justifyContent: 'left', marginTop: '25px', marginBottom: '15px'}}>
                    {state?.gameState?.teams.map((team) => (
                        <div key={team.name} style={{border: 'dashed 1px black', position: 'relative', padding: '5px', margin: '5px', width: '150px', height: '250px', overflowY: 'hidden'}}>
                            <p style={{fontFamily: 'DOS, basiic, sans-serif', textAlign: 'center'}}>{team.name}</p>
                            <hr></hr>
                            <ul style={{padding: 0, margin: 0}}>
                                {team.players && team.players.map((player) => (
                                    <li key={player} style={{textAlign: 'left'}}>{player} <button type="button" onClick={() => kickPlayer(player)} aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button></li>
                                ))}
                            </ul>
                            <button onClick={() => host?.removeTeam(team.name)} style={{bottom: '10px', right: '5px', position: 'absolute'}}>Remove</button>
                        </div>
                    ))}
                </div>
                <button onClick={startGame}>Start Game</button>
            </div>
        </div>;
    }

    const advanceRound = async (): Promise<boolean> => {
        if (!host) {
            console.error("Host client is not initialized.");
            return false;
        }
        try {
            await host.advanceRound();
            return true;
        } catch (e) {
            return false;
        }
    }

    const endGame = async (): Promise<boolean> => {
        if (!host) {
            console.error("Host client is not initialized.");
            return false;
        }
        try {
            await host.endGame();
            return true;
        } catch (e) {
            return false;
        }
    }

    const resetToLobby = async (): Promise<boolean> => {
        if (!host) {
            console.error("Host client is not initialized.");
            return false;
        }
        try {
            await host.resetToLobby();
            return true;
        } catch (e) {
            return false;
        }
    }

    const overlayHostControls = (children: React.ReactNode, state: HostClientState): React.ReactElement => {
        return <div style={{position: 'relative', height: '100%'}}>
            {children}
            <div style={{position: 'absolute', bottom: 0, right: 0, padding: '10px'}}>
                {state?.gameState?.phase.type === "ended" ? <button onClick={resetToLobby}>Return to Lobby</button>
                : <>
                <button onClick={advanceRound} disabled={state?.gameState?.phase.type !== "results"}>Next Round</button>
                <button onClick={(e) => {
                    if(!window.confirm('Are you sure?')) {
                        e.preventDefault();
                        return;
                    }
                    endGame();
                }}>End Game</button>
                </>}
            </div>
        </div>;
    }

    const getGameView = (): React.ReactElement => {
        if (state?.gameState?.phase.type === "lobby") {
            return getLobbyView();
        } else if (state?.gameState?.phase.type === "guessing") {
            const phase = state.gameState.phase;

            return (
                <div style={{ position: "relative", height: "100%", backgroundColor: "#03072e" }}>
                    {getRoundTimer(phase.roundIndex, state.quizInfo?.totalRounds ?? 0, timeLeft)}
                    {overlayHostControls(
                        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                            <div style={{ flex: "1 1 60%", minHeight: 0 }}>
                                <SpectatorMap
                                    googleApiKey={googleApiKey}
                                    teams={state.gameState.teams}
                                    playerGuesses={playerGuesses}
                                    correctAnswer={correctAnswer}
                                    getPlayerIcon={getPlayerIcon}
                                />
                            </div>
                            <div style={{
                                flex: "1 1 40%",
                                minHeight: 0,
                                display: "flex",
                                gap: 10,
                                padding: 10,
                                color: "white",
                                paddingRight: 10,
                            }}>
                                <div style={{ flex: 1, minWidth: 0, position: "relative" }}>
                                    {getQuestion(phase)}
                                </div>
                                <TeamStatusPanel
                                    teams={state.gameState.teams}
                                    players={state.gameState.players}
                                    startingHp={state.quizInfo?.startingHp ?? 6000}
                                    submittedPlayerIds={phase.submittedPlayerIds}
                                    getPlayerIcon={getPlayerIcon}
                                    style={{ width: '50%', flexShrink: 0, overflowY: 'auto', overflowX: 'hidden' }}
                                />
                            </div>
                        </div>,
                        state
                    )}
                </div>
            );
        } else if (state?.gameState?.phase.type === "results") {
            return (<div style={{position: 'relative', height: '100%', backgroundColor: '#03072e'}}>
                    {getRoundTimer(state.gameState.phase.roundIndex, state.quizInfo?.totalRounds ?? 0)}
                    {overlayHostControls(
                        <Results state={state?.gameState} quizInfo={state?.quizInfo} googleApiKey={googleApiKey} getPlayerIcon={getPlayerIcon} />,
                        state
                    )}
                </div>
            );
        } else if (state?.gameState?.phase.type === "ended") {
            return (<div style={{position: 'relative', height: '100%', backgroundColor: '#03072e'}}>
                    {overlayHostControls(
                        <FinalResults
                            state={state.gameState}
                            quizInfo={state?.quizInfo}
                            googleApiKey={googleApiKey}
                            getPlayerIcon={getPlayerIcon}
                            showTeams={true}
                        />,
                        state
                    )}
                </div>
            );
        }
        return <div>
            <p>&nbsp;Host View</p>
        </div>;
    }


    return (
        !joined ? <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            <p style={{fontFamily: 'DOS, basiic, sans-serif', fontSize: '40px'}}>Aniguessr</p>
            <div style={{alignItems: 'left', display: 'flex', flexDirection: 'column'}}>
                <label htmlFor="url">Server IP:</label>
                <input type="text" id="url" value={url} onChange={(e) => setUrl(e.target.value.trim())} />
                <label htmlFor="password">Password:</label>
                <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={join}>Host Game</button>
            </div>
        </div> : <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            <div>
                {frame(getGameView(), 1, 900, 600)}
            </div>
        </div>
    );
}

export default HostView;
