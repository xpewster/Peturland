import React, { useCallback, useEffect, useState } from 'react';
import './../Xgeo.css';
import { BADS, NICES, QuizType } from '../constants';
import { getStreakKey, randomElement } from '../helpers';
import CompassSelector from '../common/CompassSelector';
import mapmarker from '../../../../assets/mapmarker.png';
import mapmarkerlight from '../../../../assets/mapmarkerl.gif';
import dots from '../../../../assets/dots.png';
import { CoordinateAnswerPair, SelectorType } from './constants';

export interface GenericMapMarkerQuizProps {
    quizTitle: React.ReactElement;
    showGeoWarning: boolean;
    regionToMapSrcMap: Map<string, string>;
    enableRegions: string[];
    defaultRegionIndex?: number;
    clickText: string;
    selectorType: SelectorType;
    regionToCoordinateAnswerPairsMap: Map<string, CoordinateAnswerPair[]>;
    answerIndex: number;
    getHintFromAnswerArray?: (answerArray: string[]) => any;
    hintText?: string;
    quizType: QuizType;
    disallowRepeats?: boolean;
}

const GenericMapMarkerQuiz = (props: GenericMapMarkerQuizProps): React.ReactElement => {

    const MAPMARKER_SPRITE_DIMENSIONS = [25, 30];
    const DIAGONAL_DIRECTIONS = ['northeast', 'southeast', 'southwest', 'northwest'];

    const [currentRegion, setCurrentRegion] = useState<string>(props.enableRegions[props.defaultRegionIndex ?? 0]);

    const [toFind, setToFind] = useState<number>(Math.floor(Math.random() * props.regionToCoordinateAnswerPairsMap.get(currentRegion)!.length));
    const [message, setMessage] = useState<string>("");
    const [messageColor, setMessageColor] = useState<string>("green");

    const getStreakSuffix = (): boolean[] => {
        let arr = Array(props.enableRegions.length).fill(false);
        arr[props.enableRegions.indexOf(currentRegion)] = true;
        return arr;
    };

    const [streak, setStreak] = useState<number>(0);
    const [bestStreak, setBestStreak] = useState<number>(localStorage.getItem(getStreakKey(props.quizType, getStreakSuffix())) ? Number(localStorage.getItem(getStreakKey(props.quizType, getStreakSuffix()))) : 0);

    const [mapMarkerSrc, setMapMarkerSrc] = useState<string>(mapmarkerlight);

    useEffect(() => {
        setStreak(0);
        setBestStreak(localStorage.getItem(getStreakKey(props.quizType, getStreakSuffix())) ? Number(localStorage.getItem(getStreakKey(props.quizType, getStreakSuffix()))) : 0);
        setMessage("");
    }, [getStreakKey(props.quizType, getStreakSuffix())]);

    function generateNewFind() {
        let tries = 0;
        const oldToFind = toFind;
        while(tries < 1000) {
            const newt = Math.floor(Math.random() * props.regionToCoordinateAnswerPairsMap.get(currentRegion)!.length);
            if (oldToFind === newt && props.disallowRepeats) {
                tries++;
                continue;
            }
            setToFind(newt);
            break;
        }
    }

    function handleClick(key: string) {
        if (props.regionToCoordinateAnswerPairsMap.get(currentRegion)![toFind][1][props.answerIndex] === key) {
            let newMessage;
            do {
                newMessage = randomElement(NICES)
            } while (newMessage === message)
            setStreak(streak + 1);
            if (streak + 1 > bestStreak) {
                setBestStreak(streak + 1);
                localStorage.setItem(getStreakKey(props.quizType, getStreakSuffix()), (streak + 1).toString());
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
        setCurrentRegion(props.enableRegions[index]);
        setToFind(0); // stop out of bounds errors
    }

    const getRegionSelectionElements = useCallback(() => {
        return props.enableRegions.map((region, i) => {
            const isSelected = props.enableRegions[i] === currentRegion;
            return (
                <div key={i} style={{display: 'inline'}}>
                    {region}<input type="checkbox" onChange={() => {handleCheck(i)}} checked={isSelected} disabled={isSelected}></input>
                </div>
            );
        });
    }, [currentRegion]);

    const getClickText = () => {
        let hint;
        if (props.getHintFromAnswerArray) {
            hint = props.getHintFromAnswerArray(props.regionToCoordinateAnswerPairsMap.get(currentRegion)![toFind][1]);
            if (hint) {
                return <p style={{display: 'inline'}}>{props.clickText} for {props.hintText}: {hint}</p>;
            }
        }
        return <p style={{display: 'inline'}}>{props.clickText}</p>;
    }

    useEffect(() => {
        setMapMarkerSrc(mapmarkerlight);
        setTimeout(() => {
            setMapMarkerSrc(mapmarker);
        }, 500);
    }, [toFind]);

    useEffect(() => {
        generateNewFind();
    }, [currentRegion]);

    return (
        <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <p style={{paddingBottom: '12px'}}>{props.quizTitle}</p>
                <img style={{position: 'absolute', left: '-2px', top: '111px'}} src={dots}></img>
                {props.showGeoWarning ?
                    <>
                        <div>
                            This quiz is only applicable for Geoguessr/Google Streetview!
                        </div>
                        <img style={{position: 'absolute', left: '-2px', top: '153px', paddingBottom: '8px'}} src={dots}></img>
                    </>
                    : <></>
                }
                <div style={{paddingBottom: '12px', paddingTop: '7px'}}>
                    {getRegionSelectionElements()}
                </div>
                <img style={{position: 'absolute', left: '-2px', top: props.showGeoWarning ? '201px' : '163px'}} src={dots}></img>
            <div style={{padding: 0, margin: 0, width: '100%'}}>
                {getClickText()} <button onClick={() => { setStreak(0); generateNewFind(); }}>Regenerate</button>
                <div style={{paddingTop: '10px', paddingBottom: '5px'}}>
                {props.selectorType === SelectorType.COMPASS ? <CompassSelector onDirectionSelected={handleClick} diagonal={DIAGONAL_DIRECTIONS.includes(props.regionToCoordinateAnswerPairsMap.get(currentRegion)![toFind][1][0])}/> : <></>}
                </div>
                {(message !== "") && <p style={{color: messageColor}}>{message}</p>}
                <div style={{position: 'relative', width: '100%', paddingTop: '5px'}}>
                    <img style={{width: '100%', border: "solid 1px black", boxSizing: 'border-box'}} src={props.regionToMapSrcMap.get(currentRegion)}></img>
                    <img src={mapMarkerSrc} style={{position: 'absolute', left: props.regionToCoordinateAnswerPairsMap.get(currentRegion)![toFind][0][0] - Math.floor(MAPMARKER_SPRITE_DIMENSIONS[0]/2) - 1, top: props.regionToCoordinateAnswerPairsMap.get(currentRegion)![toFind][0][1] - MAPMARKER_SPRITE_DIMENSIONS[1] + 5, padding: 0, margin: 0}}></img>
                </div>
            </div>
        </div>
    );
};

export default GenericMapMarkerQuiz;
