import React, { useEffect, useState } from 'react';
import './../Xgeo.css';
import { BADS, NICES } from '../constants';
import { randomElement } from '../helpers';
import CompassSelector from '../common/CompassSelector';
import mapmarker from '../../../../assets/mapmarker.png';
import mapmarkerlight from '../../../../assets/mapmarkerl.gif';
import { CoordinateAnswerPair, SelectorType } from './constants';

export interface GenericRegionSelectionQuizProps {
    mapJsonSrc: string;
    clickText: string;
    regionIndexArray: string[];
    toFindIndexToRegionMap: Map<number, number>;
    toFindIndexToElementMap: Map<number, React.ReactElement>;
    streakKey: string;
    disallowRepeats?: boolean;
    enableRegions?: string[];
    enableRegionsMapFilter?: (key: string) => boolean;
    toFindFilter?: (index: number) => boolean;
}

const GenericRegionSelectionQuiz = (props: GenericRegionSelectionQuizProps): React.ReactElement => {

    // const MAPMARKER_SPRITE_DIMENSIONS = [25, 30];
    // const DIAGONAL_DIRECTIONS = ['northeast', 'southeast', 'southwest', 'northwest'];

    // const [toFind, setToFind] = useState<number>(Math.floor(Math.random() * props.coordinateAnswerPairs.length));
    // const [message, setMessage] = useState<string>("");
    // const [messageColor, setMessageColor] = useState<string>("green");

    // const [streak, setStreak] = useState<number>(0);
    // const [bestStreak, setBestStreak] = useState<number>(localStorage.getItem(props.streakKey) ? Number(localStorage.getItem(props.streakKey)) : 0);

    // const [mapMarkerSrc, setMapMarkerSrc] = useState<string>(mapmarkerlight);

    // useEffect(() => {
    //     setStreak(0);
    //     setBestStreak(localStorage.getItem(props.streakKey) ? Number(localStorage.getItem(props.streakKey)) : 0);
    // }, [props.streakKey]);

    // function generateNewFind() {
    //     let tries = 0;
    //     const oldToFind = toFind;
    //     while(tries < 1000) {
    //         const newt = Math.floor(Math.random() * props.coordinateAnswerPairs.length);
    //         if (oldToFind === newt && props.disallowRepeats) {
    //             tries++;
    //             continue;
    //         }
    //         setToFind(newt);
    //         break;
    //     }
    // }

    // function handleClick(key: string) {
    //     if (props.coordinateAnswerPairs[toFind][1][props.answerIndex] === key) {
    //         let newMessage;
    //         do {
    //             newMessage = randomElement(NICES)
    //         } while (newMessage === message)
    //         setStreak(streak + 1);
    //         if (streak + 1 > bestStreak) {
    //             setBestStreak(streak + 1);
    //             localStorage.setItem(props.streakKey, (streak + 1).toString());
    //         }
    //         newMessage += ` Streak: ${streak + 1}, Best Streak: ${streak + 1 > bestStreak ? streak + 1 : bestStreak}`;
    //         setMessage(newMessage);
    //         setMessageColor("green");
    //         generateNewFind();
    //     } else {
    //         let newMessage;
    //         do {
    //             newMessage = randomElement(BADS)
    //         } while (newMessage === message)
    //         setStreak(0);
    //         setMessage(newMessage);
    //         setMessageColor("red");
    //     }
    // }


    // useEffect(() => {
    //     setMapMarkerSrc(mapmarkerlight);
    //     setTimeout(() => {
    //         setMapMarkerSrc(mapmarker);
    //     }, 500);
    // }, [toFind]);

    // return (
    //     <div style={{padding: 0, margin: 0, width: '100%'}}>
    //         <p style={{display: 'inline'}}>{props.clickText}</p><button onClick={() => { setStreak(0); generateNewFind(); }}>Regenerate</button>
    //         {props.selectorType === SelectorType.COMPASS ? <CompassSelector onDirectionSelected={handleClick} diagonal={DIAGONAL_DIRECTIONS.includes(props.coordinateAnswerPairs[toFind][1][0])}/> : <></>}
    //         {(message !== "") && <p style={{color: messageColor}}>{message}</p>}
    //         <div style={{position: 'relative', width: '100%', paddingTop: '5px'}}>
    //             <img style={{width: '100%', border: "solid 1px black", boxSizing: 'border-box'}} src={props.mapSrc}></img>
    //             <img src={mapMarkerSrc} style={{position: 'absolute', left: props.coordinateAnswerPairs[toFind][0][0] - Math.floor(MAPMARKER_SPRITE_DIMENSIONS[0]/2) - 1, top: props.coordinateAnswerPairs[toFind][0][1] - MAPMARKER_SPRITE_DIMENSIONS[1] + 5, padding: 0, margin: 0}}></img>
    //         </div>
    //     </div>
    // );

    return <></>
};

export default GenericRegionSelectionQuiz;
