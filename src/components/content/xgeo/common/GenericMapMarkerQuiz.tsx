import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './../Xgeo.css';
import { BADS, NICES, QuizType } from '../constants';
import { getStreakKey, randomElement, shuffle } from '../helpers';
import CompassSelector from '../common/CompassSelector';
import mapmarker from '../../../../assets/mapmarker.png';
import mapmarkerlight from '../../../../assets/mapmarkerl.gif';
import dots from '../../../../assets/dots.png';
import { CoordinateAnswerPair, SelectorType } from './constants';
import ZoomableImage from '../../../common/ZoomableImage';
import { clamp } from 'lodash';
import ScrollingDisabler from '../../../common/ScrollingDisabler';

export interface MultipleChoiceConfig {
    numChoices: number;
    itemHeight: number;
    srcs?: string[];
    strings?: string[];
    choiceLabels?: string[];
    choicesZoomable?: boolean;
}

export interface GenericMapMarkerQuizProps {
    quizTitle: React.ReactElement;
    showGeoWarning: boolean;
    regionToMapSrcMap: Map<string, string>;
    enableRegions?: string[];
    enableRegionsRows?: number;
    disableRegions?: boolean[];
    defaultRegionIndex?: number;
    clickText: string;
    selectorType: SelectorType;
    regionToCoordinateAnswerPairsMap: Map<string, CoordinateAnswerPair[]>;
    answerIndex: number;
    getHintFromAnswerArray?: (answerArray: string[]) => any;
    hintText?: string;
    quizType: QuizType;
    disallowRepeats?: boolean;
    multipleChoiceConfig?: MultipleChoiceConfig;
    zoomable?: boolean;
    map441Height?: number;
}

const GenericMapMarkerQuiz = (props: GenericMapMarkerQuizProps): React.ReactElement => {

    const MAPMARKER_SPRITE_DIMENSIONS = [25, 30];
    const DIAGONAL_DIRECTIONS = ['northeast', 'southeast', 'southwest', 'northwest'];

    const [currentRegion, setCurrentRegion] = useState<string>(props.enableRegions?.[props.defaultRegionIndex ?? 0] ?? "DEFAULT");

    const [toFind, setToFind] = useState<number>(Math.floor(Math.random() * props.regionToCoordinateAnswerPairsMap.get(currentRegion)!.length));
    const [message, setMessage] = useState<string>("");
    const [messageColor, setMessageColor] = useState<string>("green");

    const [choices, setChoices] = useState<number[]>([]);
    const [loading, setLoading] = useState<boolean>(props.selectorType === SelectorType.MULTIPLE_CHOICE);

    const [currentZoomPos, setCurrentZoomPos] = useState<[number, number]>([0, 0]);
    const [currentZoomScale, setCurrentZoomScale] = useState<number>(1);

    const [enableDebug, setEnableDebug] = useState<boolean>(window.location.hostname === "localhost");
    const [showDebugCheckbox, setShowDebugCheckbox] = useState<boolean>(window.location.hostname === "localhost");

    /* ----------------- */

    useEffect(() => {
        const handleKeyDown = (event: any) => {
            if (event.shiftKey && event.altKey && event.keyCode === 68) {
                event.preventDefault();
                setShowDebugCheckbox(true);
                console.log('Debug mode enabled!');
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const getStreakSuffix = (): boolean[] => {
        if (!props.enableRegions) {
            return [false];
        }
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

    const debugLog = (_toFind: number) => {
        console.log(`coordX: ${props.regionToCoordinateAnswerPairsMap.get(currentRegion)![_toFind][0][0]}, coordY: ${props.regionToCoordinateAnswerPairsMap.get(currentRegion)![_toFind][0][1]}, answer: ${props.regionToCoordinateAnswerPairsMap.get(currentRegion)![_toFind][1][props.answerIndex]}`);
    }

    function generateNewFind() {
        let tries = 0;
        const oldToFind = toFind;
        let newChoices: number[] = [];
        let foundNewt = toFind;
        while(tries < 1000) {
            const newt = Math.floor(Math.random() * props.regionToCoordinateAnswerPairsMap.get(currentRegion)!.length);
            const newIndex = Math.floor(Math.random() * 1000);
            if (oldToFind === newt && props.disallowRepeats) {
                tries++;
                continue;
            }
            setToFind(newt);
            foundNewt = newt;
            if (Array.isArray(props.regionToCoordinateAnswerPairsMap.get(currentRegion)![newt][1][props.answerIndex])) {
                newChoices = [props.regionToCoordinateAnswerPairsMap.get(currentRegion)![newt][1][props.answerIndex][newIndex % props.regionToCoordinateAnswerPairsMap.get(currentRegion)![newt][1][props.answerIndex].length]];
            } else {
                newChoices = [props.regionToCoordinateAnswerPairsMap.get(currentRegion)![newt][1][props.answerIndex]];
            }
            break;
        }
        if (props.selectorType === SelectorType.MULTIPLE_CHOICE) {
            for (let i = 0; i < props.multipleChoiceConfig?.numChoices! - 1; i++) {
                let _tries = 0;
                while (_tries < 1000) {
                    const newt = Math.floor(Math.random() * props.regionToCoordinateAnswerPairsMap.get(currentRegion)!.length);
                    const newIndex = Math.floor(Math.random() * 1000);
                    if (newt === foundNewt && props.disallowRepeats) {
                        _tries++;
                        continue;
                    }
                    if (newChoices.includes(props.regionToCoordinateAnswerPairsMap.get(currentRegion)![newt][1][props.answerIndex])) {
                        _tries++;
                        continue;
                    }
                    let newChoice = Array.isArray(props.regionToCoordinateAnswerPairsMap.get(currentRegion)![newt][1][props.answerIndex]) ? props.regionToCoordinateAnswerPairsMap.get(currentRegion)![newt][1][props.answerIndex][newIndex % props.regionToCoordinateAnswerPairsMap.get(currentRegion)![newt][1][props.answerIndex].length] : props.regionToCoordinateAnswerPairsMap.get(currentRegion)![newt][1][props.answerIndex];
                    if (Array.isArray(props.regionToCoordinateAnswerPairsMap.get(currentRegion)![foundNewt][1][props.answerIndex])) {
                        if (props.regionToCoordinateAnswerPairsMap.get(currentRegion)![foundNewt][1][props.answerIndex].includes(newChoice)) {
                            _tries++;
                            continue;
                        }
                        newChoices.push(newChoice);
                    } else {
                        if (props.regionToCoordinateAnswerPairsMap.get(currentRegion)![foundNewt][1][props.answerIndex] === newChoice) {
                            _tries++;
                            continue;
                        }
                        newChoices.push(newChoice);
                    }
                    break;
                }
            }
            shuffle(newChoices);
            setChoices(newChoices);
        }
        if (enableDebug) {
            debugLog(foundNewt);
        }
        if (loading) {
            setLoading(false);
        }
    }

    function handleClick(key: any) {
        let correct = false;
        if (Array.isArray(props.regionToCoordinateAnswerPairsMap.get(currentRegion)![toFind][1][props.answerIndex]) && props.regionToCoordinateAnswerPairsMap.get(currentRegion)![toFind][1][props.answerIndex].includes(key)) {
            correct = true;
        }
        if (props.regionToCoordinateAnswerPairsMap.get(currentRegion)![toFind][1][props.answerIndex] === key) {
            correct = true;
        }
        if (correct) {
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
        if (!props.enableRegions) {
            return;
        }
        setCurrentRegion(props.enableRegions[index]);
        setToFind(0); // stop out of bounds errors
    }

    const regionSelectionElements = useMemo(() => {
        if (!props.enableRegions) {
            return <></>;
        }
        return props.enableRegions.map((region, i) => {
            const isSelected = props.enableRegions?.[i] === currentRegion;
            return (
                <>
                    {region}<input type="checkbox" onChange={() => {handleCheck(i)}} checked={isSelected} disabled={isSelected || props.disableRegions?.[i]}></input>
                </>
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

    const selector = useMemo(() => {
        switch (props.selectorType) {
            case SelectorType.COMPASS:
                return <CompassSelector onDirectionSelected={handleClick} diagonal={DIAGONAL_DIRECTIONS.includes(props.regionToCoordinateAnswerPairsMap.get(currentRegion)![toFind][1][0])}/>;
            case SelectorType.MULTIPLE_CHOICE:
                return <div style={{display: 'flex', flexWrap: 'wrap', paddingTop: '5px', paddingBottom: '5px', paddingRight: '0px'}}>
                {choices.map((choice, index) => {
                    return (
                        <div style={{display: 'inline-block', width: '45%', margin: '10px', cursor: 'pointer'}} onClick={() => {handleClick(choice);}} >
                            <div>
                            <p style={{display: 'inline'}}>{['A.', 'B.', 'C.', 'D.', 'E.', 'F.'][index]}</p>
                            {
                                (!(loading || props.multipleChoiceConfig?.strings) && (props.multipleChoiceConfig?.choicesZoomable ? 
                                    <ZoomableImage src={props.multipleChoiceConfig?.srcs?.[choice]}
                                        imageStyleProps={{height: `${props.multipleChoiceConfig?.itemHeight ?? 75}px`,
                                        maxWidth: `${(props.multipleChoiceConfig?.itemHeight ?? 75) * 1.1}px`}}
                                        divProps={{height: `${props.multipleChoiceConfig?.itemHeight ?? 75}px`, display: 'inline-block', verticalAlign:'middle', paddingLeft: '5px', marginTop: '5px'}}
                                        zoomTextOpacity={0.5}
                                        zoomTextRight={12}
                                    />
                                    : <img style={{
                                        height: `${props.multipleChoiceConfig?.itemHeight ?? 75}px`,
                                        maxWidth: `${(props.multipleChoiceConfig?.itemHeight ?? 75) * 1.2}px`,
                                        display: 'inline',
                                        verticalAlign:'middle',
                                        paddingLeft: '5px',
                                        marginTop: '5px',
                                    }} src={props.multipleChoiceConfig?.srcs?.[choice]}></img>))
                            }
                            {props.multipleChoiceConfig?.choiceLabels && <p title={props.multipleChoiceConfig?.choiceLabels[choice]} style={{position: 'relative', whiteSpace: (index % 2 === 0) ? 'normal' : 'nowrap', height: '16px', textOverflow: 'ellipsis', marginTop: '5px', paddingLeft: '18px', marginBottom: '10px', zIndex: 15, width: '108%'}}>{props.multipleChoiceConfig?.choiceLabels[choice]}</p>}
                            </div>
                        </div>
                    );
                })}
            </div>
            default:
                return <></>;
        }
    }, [loading, choices, currentRegion]);

    const getMarker = (maxWidth: number, maxHeight: number) => {
        const isOutOfBounds = (props.regionToCoordinateAnswerPairsMap.get(currentRegion)![toFind][0][0] * currentZoomScale + currentZoomPos[0] < 0 || props.regionToCoordinateAnswerPairsMap.get(currentRegion)![toFind][0][1] * currentZoomScale + currentZoomPos[1] < 0)
            || (props.regionToCoordinateAnswerPairsMap.get(currentRegion)![toFind][0][0] * currentZoomScale + currentZoomPos[0] > maxWidth || props.regionToCoordinateAnswerPairsMap.get(currentRegion)![toFind][0][1] * currentZoomScale + currentZoomPos[1] > maxHeight);
        const left = Math.round(clamp((props.regionToCoordinateAnswerPairsMap.get(currentRegion)![toFind][0][0] * Math.pow(currentZoomScale, 0.997)+ currentZoomPos[0]), 0, maxWidth) - Math.floor(MAPMARKER_SPRITE_DIMENSIONS[0]/2 ) - 1);
        const top = Math.round(clamp((props.regionToCoordinateAnswerPairsMap.get(currentRegion)![toFind][0][1] * Math.pow(currentZoomScale, 0.995) + currentZoomPos[1]), 0, maxHeight) - MAPMARKER_SPRITE_DIMENSIONS[1] + 5);
        return <img src={mapMarkerSrc} style={{
            position: 'absolute',
            left,
            top,
            padding: 0,
            margin: 0,
            opacity: isOutOfBounds ? 0.5 : 1,
            pointerEvents: 'none',
        }}/>
    };


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
                            This particular quiz is only applicable for Geoguessr/Google Streetview!
                        </div>
                        <img style={{position: 'absolute', left: '-2px', top: '153px'}} src={dots}></img>
                    </>
                    : <></>
                }
                <div style={{paddingBottom: '12px', paddingTop: '8px'}}>
                    {regionSelectionElements}
                </div>
                {props.enableRegions && <img style={{position: 'absolute', left: '-2px', top: props.showGeoWarning ? `${161 + (props.enableRegionsRows ?? 1) * 20}px` : '163px'}} src={dots}></img>}
            <div style={{padding: 0, margin: 0, width: '100%'}}>
                {getClickText()} <button onClick={() => { setStreak(0); generateNewFind(); }}>Regenerate</button>
                <div style={{paddingTop: '10px', paddingBottom: '5px'}}>
                {selector}
                </div>
                {(message !== "") && <p style={{color: messageColor}}>{message}</p>}
                <div style={{position: 'relative', width: '100%', paddingTop: '5px'}}>
                    {props.zoomable ? 
                        <ScrollingDisabler>
                            <ZoomableImage src={props.regionToMapSrcMap.get(currentRegion)} imageStyleProps={{width: '100%'}} divProps={{width: '100%', border: "solid 2px black", boxSizing: 'border-box'}} setPos={setCurrentZoomPos} setScale={setCurrentZoomScale} />
                        </ScrollingDisabler>
                        : <img style={{width: '100%', border: "solid 1px black", boxSizing: 'border-box'}} src={props.regionToMapSrcMap.get(currentRegion)}></img>}
                    {getMarker(441, props.map441Height ?? 1000)}
                </div>
            </div>
            {showDebugCheckbox && <div style={{position: 'absolute', bottom: '10px', right: '10px'}}><input type="checkbox" checked={enableDebug} onChange={() => {setEnableDebug(!enableDebug); debugLog(toFind)}}></input>Debug mode</div>}
        </div>
    );
};

export default GenericMapMarkerQuiz;
