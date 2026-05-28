import React, { useSyncExternalStore } from "react";
import { fetchGoogleApiKey, GuessingPhase, PlayerClient, PlayerClientState } from "./client";
import { frame } from "../../common/getImageFramed";
import { MapOverlay } from "./maps/GuessingMap";
import { getPlayerIcon, getQuestion, getRoundTimer } from "./utils";
import { Results } from "./Results";
import { FinalResults } from "./FinalResults";


function usePlayer(client: PlayerClient | null): PlayerClientState | null {
    return useSyncExternalStore(
        (callback) => {
            if (!client) return () => {};
            const unsubscribe = client.subscribe(callback);
            return () => unsubscribe();
        },
        () => client?.getState() ?? null
    );
}

export const PlayerView = (): React.ReactElement => {
    const [player, setPlayer] = React.useState<PlayerClient | null>(null);
    const [joined, setJoined] = React.useState(false);
    const [url, setUrl] = React.useState<string>('');
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [googleApiKey, setGoogleApiKey] = React.useState('');

    const state = usePlayer(player);

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

    const updateView = (state: PlayerClientState): void => {
        console.log("Player state updated:", state); // todo: remove
    }

    const join = async (): Promise<boolean> => {
        let newPlayer: PlayerClient;
        try {
        newPlayer = await PlayerClient.connect({ url, name, password });
        } catch (e) {
            console.error(`Could not join: ${(e as Error).message}`);
            return false;
        }

        const unsubscribe = newPlayer.subscribe(
            () => updateView(newPlayer.getState()));
            updateView(newPlayer.getState());
        setPlayer(newPlayer);

        // Fetch the Google API key from the server
        const apiKey = await fetchGoogleApiKey(url, password);
        setGoogleApiKey(apiKey);
        console.log(`Fetched Google API key: ${apiKey}`);

        setJoined(true);
        return true;
    }

    const joinTeam = async (teamName: string): Promise<boolean> => {
        if (!player) {
            console.error("Player client is not initialized.");
            return false;
        }
        try {
            await player.joinTeam(teamName);
            return true;
        } catch (e) {
            console.error(`Could not join team: ${(e as Error).message}`);
            return false;
        }
    }

    const getLobbyView = (): React.ReactElement => {
        return <div style={{padding: '20px'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'left'}}>
                <p style={{fontFamily: 'DOS, basiic, sans-serif', textDecoration: 'underline'}}>Lobby</p>
                {
                    state?.gameState?.teams
                        ? <div style={{display: 'flex', flexDirection: 'row', alignItems: 'left', justifyContent: 'left', marginTop: '25px', marginBottom: '15px'}}>
                            {state?.gameState?.teams.map((team) => (
                                <div key={team.name} style={{position: 'relative', border: 'dashed 1px black', padding: '5px', margin: '5px', width: '150px', height: '250px', overflowY: 'hidden'}}>
                                    <p style={{fontFamily: 'DOS, basiic, sans-serif', textAlign: 'center'}}>{team.name}</p>
                                    <hr></hr>
                                    <ul style={{padding: 0, margin: 0}}>
                                        {team.players && team.players.map((player) => (
                                            <li key={player} style={{textAlign: 'left'}}>{getPlayerIcon(player)} {player}</li>
                                        ))}
                                    </ul>
                                    <button onClick={() => joinTeam(team.name)} style={{bottom: '10px', right: '5px', position: 'absolute'}}>Join</button>
                                </div>
                            ))}
                        </div>
                        : <p>No teams yet.</p>
                }
                <p className="animatedEllipsis">Waiting</p>
            </div>
        </div>;
    }

    const getGameView = (): React.ReactElement => {
        if (state?.gameState?.phase.type === "lobby") {
            return getLobbyView();
        } else if (state?.gameState?.phase.type === "guessing") {
            const guessingState = state.gameState.phase;
            const myId = state.playerId;
            const myTeam = state.gameState.players.find((p) => p.id === myId)?.team ?? null;

            const ownLive = myId ? state.liveGuesses.get(myId) : undefined;
            const ownPosition = ownLive?.type === "map" ? ownLive.position : undefined;

            const teammateGuesses: { playerId: string; position: { lat: number; lng: number } }[] = [];
            if (myTeam) {
                for (const p of state.gameState.players) {
                    if (p.team !== myTeam || p.id === myId) continue;
                    const g = state.liveGuesses.get(p.id);
                    if (g?.type === "map") {
                        teammateGuesses.push({ playerId: p.id, position: g.position });
                    }
                }
            }

            const submitted = guessingState.submittedPlayerIds.includes(myId ?? "");

            return (
                <div style={{position: 'relative', height: '100%', backgroundColor: '#03072e'}}>
                    {getQuestion(guessingState)}
                    {getRoundTimer(guessingState.roundIndex, state.quizInfo?.totalRounds ?? 0, timeLeft)}
                    {googleApiKey && player && myId && (
                        <MapOverlay
                            googleApiKey={googleApiKey}
                            ownPlayerId={myId}
                            ownGuess={ownPosition}
                            teammateGuesses={teammateGuesses}
                            locked={submitted}
                            onPlaceGuess={(pos) =>
                                player.updateGuess({ type: "map", position: pos })
                            }
                            onSubmit={() => player.submitGuess()}
                            canSubmit={!!ownPosition && !submitted}
                            submitted={submitted}
                            getPlayerIcon={getPlayerIcon}
                        />
                    )}
                </div>
            );
        } else if (state?.gameState?.phase.type === "results") {
            return <div style={{position: 'relative', height: '100%', backgroundColor: '#03072e'}}>
                {getRoundTimer(state.gameState.phase.roundIndex, state.quizInfo?.totalRounds ?? 0)}
                <Results
                    state={state.gameState}
                    quizInfo={state.quizInfo}
                    googleApiKey={googleApiKey}
                    getPlayerIcon={getPlayerIcon}
                />
            </div>;
        } else if (state?.gameState?.phase.type === "ended") {
            return (<div style={{position: 'relative', height: '100%', backgroundColor: '#03072e'}}>
                    <FinalResults
                        state={state.gameState}
                        quizInfo={state.quizInfo}
                        googleApiKey={googleApiKey}
                        getPlayerIcon={getPlayerIcon}
                        showTeams={true}
                    />
                </div>
            );
        }
        return <div>    
            <p>&nbsp;Game View</p>
        </div>;
    }


    return (
        !joined ? <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            <p style={{fontFamily: 'DOS, basiic, sans-serif', fontSize: '40px'}}>Aniguessr</p>
            <div style={{alignItems: 'left', display: 'flex', flexDirection: 'column'}}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="url">Server IP:</label>
                <input type="text" id="url" value={url} onChange={(e) => setUrl(e.target.value.trim())} />
                <label htmlFor="password">Password:</label>
                <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={join}>Join Game</button>
            </div>
        </div> : <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            <div>
                {state?.connectionStatus === "reconnecting" && (
                    <div style={{
                        position: "fixed",
                        top: 10,
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "#aa3030",
                        color: "white",
                        padding: "6px 14px",
                        borderRadius: 4,
                        zIndex: 9999,
                        fontFamily: "DOS, basiic, sans-serif",
                    }}>
                        <p className="animatedEllipsis">Reconnecting</p>
                    </div>
                )}
                {state?.connectionStatus === "closed" && (
                    <div>
                        Disconnected. Try refreshing
                    </div>
                )}
                {frame(getGameView(), 1, 900, 600)}
            </div>
        </div>
    );
};

export default PlayerView;
