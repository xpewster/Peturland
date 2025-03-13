import React, { useEffect, useState } from 'react';
import './../Xgeo.css';
import { BADS, NICES, QuizType } from '../constants';
import { getStreakKey, randomElement } from '../helpers';
import dots from '../../../../assets/dots.png';
import fareast from '../../../../assets/maps/mong_fareast.png';
import { COORDINATE_ANSWER_PAIRS } from './constants';
import CompassSelector from '../common/CompassSelector';
import mapmarker from '../../../../assets/mapmarker.png';
import mapmarkerlight from '../../../../assets/mapmarkerl.gif';

export interface MongoliaProps {
    quizType: QuizType;
}

const Mongolia = (props: MongoliaProps): React.ReactElement => {

    const MAPMARKER_SPRITE_DIMENSIONS = [25, 30];
    const DIAGONAL_DIRECTIONS = ['northeast', 'southeast', 'southwest', 'northwest'];

    const [toFind, setToFind] = useState<number>(Math.floor(Math.random() * COORDINATE_ANSWER_PAIRS.length));
    const [message, setMessage] = useState<string>("");
    const [messageColor, setMessageColor] = useState<string>("green");
    const [enablePrefix, setEnablePrefix] = useState<boolean[]>(Array(9).fill(true));

    const [streak, setStreak] = useState<number>(0);
    const [bestStreak, setBestStreak] = useState<number>(localStorage.getItem(getStreakKey(QuizType.MONG_DRIVING_DIRECTION, enablePrefix)) ? Number(localStorage.getItem(getStreakKey(QuizType.MONG_DRIVING_DIRECTION, enablePrefix))) : 0);

    const [mapMarkerSrc, setMapMarkerSrc] = useState<string>(mapmarkerlight);

    useEffect(() => {
        setStreak(0);
        setBestStreak(localStorage.getItem(getStreakKey(QuizType.MONG_DRIVING_DIRECTION, enablePrefix)) ? Number(localStorage.getItem(getStreakKey(QuizType.MONG_DRIVING_DIRECTION, enablePrefix))) : 0);
    }, [JSON.stringify(enablePrefix)]);

    function generateNewFind() {
        let tries = 0;
        const oldToFind = toFind;
        while(tries < 1000) {
            const newt = Math.floor(Math.random() * COORDINATE_ANSWER_PAIRS.length);
            setToFind(newt);
            break;
            tries++;
        }
    }

    function handleClick(key: string) {
        if (COORDINATE_ANSWER_PAIRS[toFind][1][0] === key) {
            let newMessage;
            do {
                newMessage = randomElement(NICES)
            } while (newMessage === message)
            setStreak(streak + 1);
            if (streak + 1 > bestStreak) {
                setBestStreak(streak + 1);
                localStorage.setItem(getStreakKey(QuizType.MONG_DRIVING_DIRECTION, enablePrefix), (streak + 1).toString());
            }
            newMessage += ` Streak: ${streak + 1}, Best Streak: ${streak + 1 > bestStreak ? streak + 1 : bestStreak}`;
            setMessage(newMessage);
            setMessageColor("green");
            generateNewFind();
        } else {
            let newMessage;
            do {
                newMessage = randomElement(BADS)
            } while (newMessage === message)
            setStreak(0);
            setMessage(newMessage);
            setMessageColor("red");
        }
    }

    function handleCheck(index: number) {
        const newEnablePrefix = enablePrefix.map((val, i) => {if (i === index) { return !val; } else { return val; }}); setEnablePrefix(newEnablePrefix);
    }

    const getClickText = (): string => {
        switch(props.quizType) {
            case QuizType.MONG_DRIVING_DIRECTION:
                return "Click on the driving direction for this road and car ";
            default:
                return "Not yet supported";
        }
    }

    useEffect(() => {
        setMapMarkerSrc(mapmarkerlight);
        setTimeout(() => {
            setMapMarkerSrc(mapmarker);
        }, 500);
    }, [toFind]);

    return (
        <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <p style={{paddingBottom: '12px'}}>Mongolia driving directions</p>
            <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
            <div>
                This quiz is only applicable for Geoguessr/Google Streetview!
            </div>
            <img style={{position: 'absolute', left: '-2px', top: '148px'}} src={dots}></img>
            <div style={{paddingBottom: '8px', paddingTop: '8px'}}>
                Far east<input type="checkbox" onChange={() => {handleCheck(0)}} checked={enablePrefix[0]}></input>
                Central forests<input type="checkbox" onChange={() => {handleCheck(1)}} checked={enablePrefix[1]}></input>
                Ulaan-Erdenet<input type="checkbox" onChange={() => {handleCheck(2)}} checked={enablePrefix[2]}></input>
                Far west<input type="checkbox" onChange={() => {handleCheck(3)}} checked={enablePrefix[3]}></input>
                South<input type="checkbox" onChange={() => {handleCheck(4)}} checked={enablePrefix[4]}></input>
                Central west<input type="checkbox" onChange={() => {handleCheck(5)}} checked={enablePrefix[5]}></input>
            </div>
            <img style={{position: 'absolute', left: '-2px', top: '196px'}} src={dots}></img>
            <p style={{display: 'inline'}}>{getClickText()}</p><button onClick={() => { setStreak(0); generateNewFind(); }}>Regenerate</button>
            {props.quizType === QuizType.MONG_DRIVING_DIRECTION ? <CompassSelector onDirectionSelected={handleClick} diagonal={DIAGONAL_DIRECTIONS.includes(COORDINATE_ANSWER_PAIRS[toFind][1][0])}/> : <></>}
            {(message !== "") && <p style={{color: messageColor}}>{message}</p>}
            <div style={{position: 'relative', width: '100%', paddingTop: '5px'}}>
                <img style={{width: '100%', border: "solid 1px black", boxSizing: 'border-box'}} src={fareast}></img>
                <img src={mapMarkerSrc} style={{position: 'absolute', left: COORDINATE_ANSWER_PAIRS[toFind][0][0] - Math.floor(MAPMARKER_SPRITE_DIMENSIONS[0]/2) - 1, top: COORDINATE_ANSWER_PAIRS[toFind][0][1] - MAPMARKER_SPRITE_DIMENSIONS[1] + 5, padding: 0, margin: 0}}></img>
            </div>
        </div>
    );
};

export default Mongolia;
