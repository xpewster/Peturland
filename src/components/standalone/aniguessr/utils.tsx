import React from "react"
import aegis from './icons/aegis.png';
import arendex from './icons/arendex.png';
import eepa from './icons/eepa.png';
import ivlivs from './icons/ivlivs.png';
import kevin from './icons/kevin.png';
import oof from './icons/oof.png';
import pew from './icons/pew.png';
import shuttles from './icons/shuttles.png';
import xiph0s from './icons/xiph0s.png'; 
import ayaya from './icons/ayaya.jpg';
import { GuessingPhase, ImageQuestion } from "./client";

const commonStyle = {
    width: '20px',
    height: '20px',
    verticalAlign: 'middle',
    imageRendering: 'pixelated' as const,
};

export const getPlayerIcon = (name: string): React.ReactElement => {
    const nameWithoutFirstChar = name.substring(1).toLowerCase();
    
    if ("aegis".includes(nameWithoutFirstChar) || "aegis".includes(name.toLowerCase()) || name.toLowerCase().includes("aegis")) {
        return <img src={aegis} alt="Aegis" style={commonStyle} />;
    } else if ("arendex".includes(nameWithoutFirstChar) || "arendex".includes(name.toLowerCase()) || name.toLowerCase().includes("arendex")) {
        return <img src={arendex} alt="Arendex" style={commonStyle} />;
    } else if ("eepa".includes(nameWithoutFirstChar) || "eepa".includes(name.toLowerCase()) || name.toLowerCase().includes("eepa")) {
        return <img src={eepa} alt="Eepa" style={commonStyle} />;
    } else if ("ivlivs".includes(nameWithoutFirstChar) || "ivlivs".includes(name.toLowerCase()) || name.toLowerCase().includes("ivlivs")) {
        return <img src={ivlivs} alt="Ivlivs" style={commonStyle} />;
    } else if ("kevinw0w".includes(nameWithoutFirstChar) || "kevinw0w".includes(name.toLowerCase()) || name.toLowerCase().includes("kevin") || name.toLowerCase().includes("w0w")) {
        return <img src={kevin} alt="Kevin" style={commonStyle} />;
    } else if ("oof".includes(nameWithoutFirstChar) || "oof".includes(name.toLowerCase()) || name.toLowerCase().includes("oof")) {
        return <img src={oof} alt="Oof" style={commonStyle} />;
    } else if ("pew".includes(nameWithoutFirstChar) || "pew".includes(name.toLowerCase()) || name.toLowerCase().includes("pew")) {
        return <img src={pew} alt="Pew" style={commonStyle} />;
    } else if ("shuttles".includes(nameWithoutFirstChar) || "shuttles".includes(name.toLowerCase()) || name.toLowerCase().includes("shuttles")) {
        return <img src={shuttles} alt="Shuttles" style={commonStyle} />;
    } else if ("xiph0s".includes(nameWithoutFirstChar) || "xiph0s".includes(name.toLowerCase()) || name.toLowerCase().includes("xiph0s")) {
        return <img src={xiph0s} alt="Xiph0s" style={commonStyle} />;
    }
    return <img src={ayaya} alt="Person" style={commonStyle} />;
}

const ImageQuestionView: React.FC<{ question: ImageQuestion, caption?: boolean }> = ({ question, caption = true }) => {
    const [aspectRatio, setAspectRatio] = React.useState<string>("16 / 9");

    return (
        <div style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
        }}>
            <div style={{
                position: "relative",
                aspectRatio,
                maxWidth: "100%",
                maxHeight: "100%",
            }}>
                <img
                    src={question.src}
                    alt="Question"
                    onLoad={(e) => {
                        const { naturalWidth, naturalHeight } = e.currentTarget;
                        if (naturalWidth && naturalHeight) {
                            setAspectRatio(`${naturalWidth} / ${naturalHeight}`);
                        }
                    }}
                    style={{ display: "block", width: "100%", height: "100%", border: "" }}
                />
                <div style={{
                    position: "absolute",
                    inset: 0,
                    boxShadow: "inset 0 0 0 1px white, inset 0 0 3px 1px black",
                    pointerEvents: "none",
                }} />
                {caption && question.caption && (
                    <p style={{
                        position: "absolute",
                        bottom: 10,
                        left: 10,
                        color: "white",
                        textShadow: "1px 1px 2px black",
                        margin: 0,
                    }}>{question.caption}</p>
                )}
            </div>
        </div>
    );
};

export const getQuestion = (guessingState: GuessingPhase, decorations?: boolean): React.ReactElement => {
    switch (guessingState.question.type) {
        case "image":
            return <ImageQuestionView question={guessingState.question} caption={decorations ?? true} />;
        case "text":
            return <div style={{border: '1px dashed goldenrod', padding: '10px'}}><p>{guessingState.question.content}</p></div>;
        default:
            return <p>Unknown question type</p>;
    }
}

export const getRoundTimer = (roundIndex: number, maxRounds: number, timeLeft?: number | null): React.ReactElement => {
    const secondsLeft = Math.max(0, Math.floor((timeLeft ?? 0) / 1000));
    return <div style={{position: 'absolute', top: '10px', right: '20px', zIndex: 9, color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textShadow: '1px 1px 2px black'}}>
        <div style={{width: '121px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: "inset 0 0 0 1px white, inset 0 0 3px 1px black"}}>
            <p>Round {roundIndex + 1} of {maxRounds}</p>
        </div>
        {(timeLeft !== undefined && timeLeft !== null) && (
            <div style={{width: '145px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: "inset 0 0 0 1px white, inset 0 0 3px 1px black"}}>
                <p>Time left: {Math.floor(secondsLeft / 60)}:{secondsLeft % 60 < 10 ? `0${secondsLeft % 60}` : secondsLeft % 60}</p>
            </div>
        )}
    </div>;
}