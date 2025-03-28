import React, { useEffect, useState } from 'react';
import './Us.css';
import './../Xgeo.css';
import { BADS, LocalStorageStreakKeys, NICES, QuizType } from '../constants';
import { getStreakKey, randomElement } from '../helpers';
import { getRandomEnabledStateIndexFast, HOLDER_COLORS, isStateEnabled, REGISTRATION_STICKER_COLORS, STATE_NAMES, STATES, TERRITORY_NAMES } from './constants';
import Plate from './plate/Plate';
import dots from '../../../../assets/dots.png';
import canada from '../../../../assets/canadamf.gif';
import mexico from '../../../../assets/mexico.gif';
import { PLATE_TUPLE, PLATE_TYPE, PLATES } from './plate/constants';
import { preloadImage } from '../../../common/preloadImage';
import MapWithInsets from './MapWithInsets';

export interface UsProps {
    quizType: QuizType;
}

type LAST_PLATE_INFO = {
    state: STATE_NAMES,
    type: PLATE_TYPE,
    tuple: PLATE_TUPLE,
    blur: number,
    rsc: string | undefined,
    rsc2: string | undefined,
    hc: string | undefined,
    sepia: number,
    brightness: number,
    skew?: number[],
    scale?: number,
    index2: number,
};

type NEXT_PLATE_INFO = {
    newt: number,
    type: PLATE_TYPE,
    vanityOrOldIndex: number,
};

const Us = (props: UsProps): React.ReactElement => {
    const [toFind, setToFind] = useState<number>(37); // phone code to find
    const [message, setMessage] = useState<string>("");
    const [messageColor, setMessageColor] = useState<string>("green");
    const [enableRegion, setEnableRegion] = useState<boolean[]>([true, true, true, true, true, false, false, false]);
    const [enableBlur, setEnableBlur] = useState<boolean>(true);
    const [enableSkew, setEnableSkew] = useState<boolean>(false);
    const [enableRandBlur, setEnableRandBlur] = useState<number>(10);
    const [enableVanity, setEnableVanity] = useState<boolean>(false);
    const [enableOld, setEnableOld] = useState<boolean>(true);

    const [enableRRSC, setEnableRRSC] = useState<boolean>(true); // random registration sticker color
    const [rsc, setRSC] = useState<string>("#000000");
    const [rsc2, setRSC2] = useState<string>("#000000");
    const [hc, setHC] = useState<string>("black"); // holder color
    const [randomSepia, setRandomSepia] = useState<number>(0.0);
    const [randomBrightness, setRandomBrightness] = useState<number>(1.0);
    const [randomSkew, setRandomSkew] = useState<number[]>([0, 0]);
    const [randomScale, setRandomScale] = useState<number>(1.0);

    const [vanityOrOldIndex, setVanityOrOldIndex] = useState<number>(Math.floor(Math.random() * 100));
    const [index2, setIndex2] = useState<number>(Math.floor(Math.random() * 1000));
    const [currentType, setCurrentType] = useState<PLATE_TYPE>(PLATE_TYPE.REGULAR);

    // const [lastPlate, setLastPlate] = useState<LAST_PLATE_INFO | undefined>(undefined);
    const [lastPlates, setLastPlates] = useState<LAST_PLATE_INFO[]>([]);
    const [enablePPBlur, setEnablePPBlur] = useState<boolean>(false);

    const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

    const [streak, setStreak] = useState<number>(0);
    const [bestStreak, setBestStreak] = useState<number>(localStorage.getItem(getStreakKey(QuizType.US_LICENSE_PLATES, [...enableRegion, false])) ? Number(localStorage.getItem(getStreakKey(QuizType.US_LICENSE_PLATES, [...enableRegion, false]))) : 0);

    const [nextPlate, setNextPlate] = useState<NEXT_PLATE_INFO | undefined>(undefined);

    const [loading, setLoading] = useState<boolean>(true);

    /* ----------------- */

    const generateNewRandBlur = (): number => {
        return Math.random()*20+10;
    };

    const generateRandomParameters = (): void => {
        setEnableRandBlur(enableRandBlur ? generateNewRandBlur() : 0);
        setRSC(randomElement(REGISTRATION_STICKER_COLORS));
        setRSC2(randomElement(REGISTRATION_STICKER_COLORS));
        setHC(randomElement(HOLDER_COLORS));
        setRandomSepia(Math.random() * 0.2);
        setRandomBrightness(Math.random() * 0.15 + 0.85);
        setRandomSkew([Math.random()*20-10, Math.random()*160-80]);
        setRandomScale(Math.random()*0.5+0.5);
    };

    const getStreakIndicatorArray = (): boolean[] => {
        return [...enableRegion, enableSkew];
    }

    const updateLastPlateInfo = () => {
        setLastPlates((prev) => {
            const newLastPlate = [...prev];
            const lastPlateTupleArray = PLATES.get(STATES[toFind])!.get(currentType)!;
            newLastPlate.unshift({
                state: STATES[toFind],
                type: currentType,
                tuple: lastPlateTupleArray[vanityOrOldIndex % lastPlateTupleArray.length],
                blur: enableBlur ? (enableRandBlur ? enableRandBlur : 15) : 0,
                rsc: enableRRSC ? rsc : undefined,
                rsc2: enableRRSC ? rsc2 : undefined,
                hc: enableRRSC ? hc : undefined,
                sepia: enableRandBlur ? randomSepia : 0,
                brightness: enableRandBlur ? randomBrightness : 1,
                skew: enableSkew ? randomSkew : undefined,
                scale: enableSkew ? randomScale : 1,
                index2: index2,
            });
            if (lastPlates.length >= 5) {
                newLastPlate.pop();
            }
            return newLastPlate as LAST_PLATE_INFO[];
        });
    };

    function generateFirstFind() {
        let tries = 0;
        const oldToFind = toFind;
        while(tries < 1000) {
            const newt = getRandomEnabledStateIndexFast(enableRegion) ?? 0;
            if (PLATES.get(STATES[newt])) {
                let types = [PLATE_TYPE.REGULAR];
                if (enableOld && PLATES.get(STATES[newt])!.get(PLATE_TYPE.OLD)) {
                    types.push(PLATE_TYPE.OLD);
                }
                if (enableVanity && PLATES.get(STATES[newt])!.get(PLATE_TYPE.VANITY)) {
                    types.push(PLATE_TYPE.VANITY);
                }
                const newType = randomElement(types);
                const newVanityOrOldIndex = Math.floor(Math.random() * 100);
                generateRandomParameters();
                setToFind(newt);
                setCurrentType(newType);
                setVanityOrOldIndex(newVanityOrOldIndex);
                break;
            }
            tries++;
        }
    }

    function generateNewFind(skipCurrentUpdate?: boolean) {
        let tries = 0;
        const oldToFind = toFind;
        if (!nextPlate) {
            generateFirstFind();
        }
        while(tries < 1000) {
            const newt = getRandomEnabledStateIndexFast(enableRegion) ?? 0;
            if (PLATES.get(STATES[newt])) {
                let types = [PLATE_TYPE.REGULAR];
                if (enableOld && PLATES.get(STATES[newt])!.get(PLATE_TYPE.OLD)) {
                    types.push(PLATE_TYPE.OLD);
                }
                if (enableVanity && PLATES.get(STATES[newt])!.get(PLATE_TYPE.VANITY)) {
                    types.push(PLATE_TYPE.VANITY);
                }
                if (loading) {
                    setLoading(false);
                }
                const newType = randomElement(types);
                const newVanityOrOldIndex = Math.floor(Math.random() * 100);
                const plateMap = PLATES.get(STATES[newt])!.get(newType)!;
                preloadImage(plateMap[newVanityOrOldIndex % plateMap.length][0]);
                preloadImage(plateMap[newVanityOrOldIndex % plateMap.length][1]);
                preloadImage(plateMap[newVanityOrOldIndex % plateMap.length][2]);
                if (nextPlate && !skipCurrentUpdate) {
                    generateRandomParameters();
                    setToFind(nextPlate!.newt);
                    setCurrentType(nextPlate!.type);
                    setVanityOrOldIndex(nextPlate!.vanityOrOldIndex);
                }
                setNextPlate({
                    newt: newt,
                    type: newType,
                    vanityOrOldIndex: newVanityOrOldIndex,
                });
                break;
            }
            tries++;
        }
    }

    useEffect(() => {
        if(!isStateEnabled(enableRegion, nextPlate?.newt ?? 0)) {
            generateNewFind(true);
        }
        setStreak(0);
        setBestStreak(localStorage.getItem(getStreakKey(QuizType.US_LICENSE_PLATES, getStreakIndicatorArray())) ? Number(localStorage.getItem(getStreakKey(QuizType.US_LICENSE_PLATES, getStreakIndicatorArray()))) : 0);
    }, [JSON.stringify(enableRegion), enableSkew]);

    function lose() {
        let newMessage;
        do {
            newMessage = randomElement(BADS)
        } while (newMessage === message)
        setStreak(0);
        setMessage(newMessage);
        setMessageColor("red");
    }

    function giveUp() {
        lose();
        updateLastPlateInfo();
        generateNewFind();
    }

    function handleClick(key: string) {
        if (`geo-${toFind}` === key) {
            let newMessage;
            do {
                newMessage = randomElement(NICES)
            } while (newMessage === message)
            setStreak(streak + 1);
            if (streak + 1 > bestStreak) {
                setBestStreak(streak + 1);
                localStorage.setItem(getStreakKey(QuizType.US_LICENSE_PLATES, getStreakIndicatorArray()), (streak + 1).toString());
            }
            newMessage += ` Streak: ${streak + 1}, Best Streak: ${streak + 1 > bestStreak ? streak + 1 : bestStreak}`;
            setMessage(newMessage);
            setMessageColor("green");
            updateLastPlateInfo();
            generateNewFind();
        } else {
            lose();
        }
    }

    function handleCheck(index: number) {
        const newEnableRegion = enableRegion.map((val, i) => {if (i === index) { return !val; } else { return val; }}); setEnableRegion(newEnableRegion);
    }

    function changeSetting(index: number) {
        switch (index) {
            case 0:
                setEnableBlur(!enableBlur);
                break;
            case 1:
                setEnableSkew(!enableSkew);
                break;
            case 2:
                setEnableRandBlur(enableRandBlur ? 0 : generateNewRandBlur());
                break;
            case 3:
                setEnableVanity(!enableVanity);
                break;
            case 4:
                setEnableOld(!enableOld);
                break;
            case 5:
                setRSC(randomElement(REGISTRATION_STICKER_COLORS));
                setRSC2(randomElement(REGISTRATION_STICKER_COLORS));
                setHC(randomElement(HOLDER_COLORS));
                setEnableRRSC(!enableRRSC);
                break;
        }
    }

    useEffect(() => {
        generateNewFind();
    }, []);

    return (
        <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <p style={{paddingBottom: '10px'}}>US license plates</p>
            <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
            <div>
                <div>
                    Special plates<input type="checkbox" onChange={() => {changeSetting(3)}} checked={enableVanity}></input>
                    Old plates (2000-Present)<input type="checkbox" onChange={() => {changeSetting(4)}} checked={enableOld}></input>
                </div>
                <div>
                    Blur plate<input type="checkbox" onChange={() => {changeSetting(0)}} checked={enableBlur}></input>
                    Use random skew<input type="checkbox" onChange={() => { setStreak(0); changeSetting(1); }} checked={enableSkew}></input>
                    Use random blur<input type="checkbox" onChange={() => {changeSetting(2)}} checked={!!enableRandBlur}></input>
                    Random registration sticker/holder color<input type="checkbox" onChange={() => {changeSetting(5)}} checked={enableRRSC}></input>
                </div>
            </div>
            <img style={{position: 'absolute', left: '-2px', top: '176px'}} src={dots}></img>
            <div style={{paddingTop: '10px', paddingBottom: '5px', paddingRight: '0px'}}>
                <div>
                    Northeast<input type="checkbox" onChange={() => {handleCheck(0)}} checked={enableRegion[0]}></input>
                    Deep South<input type="checkbox" onChange={() => {handleCheck(1)}} checked={enableRegion[1]}></input>
                    Southwest<input type="checkbox" onChange={() => {handleCheck(2)}} checked={enableRegion[2]}></input>
                    West<input type="checkbox" onChange={() => {handleCheck(3)}} checked={enableRegion[3]}></input>
                    Midwest<input type="checkbox" onChange={() => {handleCheck(4)}} checked={enableRegion[4]}></input>
                </div>
                <div style={{paddingTop: '10px'}}>
                    <img style={{height: '15px'}} src={canada}></img> Canada<img style={{height: '15px'}} src={canada}></img><input type="checkbox" onChange={() => {handleCheck(5)}} checked={enableRegion[5]}></input>
                    <img style={{height: '15px'}} src={mexico}></img> Mexico <img style={{height: '15px'}} src={mexico}></img><input type="checkbox" onChange={() => {handleCheck(6)}} checked={enableRegion[6]}></input>
                    U.S. Territories<input type="checkbox" onChange={() => {handleCheck(7)}} checked={enableRegion[7]}></input>
                </div> 
            </div>
            <img style={{position: 'absolute', left: '-2px', top: '234px'}} src={dots}></img>
            <div style={{paddingTop: '6px'}}>
                <p style={{display: 'inline'}}>Click on the right state! </p><button onClick={() => { setStreak(0); generateNewFind(); }}>Regenerate</button> <button onClick={giveUp}>Give up</button>
                <div style={{display: 'block', width: '150px', height: '75px', marginTop: '5px', border: "dashed 1px black"}}>
                    {!loading && <Plate
                        state={STATES[toFind]}
                        type={currentType}
                        vanityOrOldIndex={vanityOrOldIndex}
                        show={false}
                        blur={enableBlur ? (enableRandBlur ? enableRandBlur : 15) : 0}
                        rsc={enableRRSC ? rsc : undefined}
                        rsc2={enableRRSC ? rsc2 : undefined}
                        hc={enableRRSC ? hc : undefined}
                        sepia={enableRandBlur ? randomSepia : 0}
                        brightness={enableRandBlur ? randomBrightness : 1}
                        skew={enableSkew ? randomSkew : undefined}
                        scale={enableSkew ? randomScale : 1}
                        index2={index2}
                    />}
                </div>
                {(message !== "") && <p style={{color: messageColor}}>{message}</p>}
            </div>
            <div style={{paddingTop: '10px'}}>
                <MapWithInsets clickHandler={handleClick} enableRegions={enableRegion}/>
            </div>
            {lastPlates.length ? <div className="scrollable-content" style={{border: 'dashed 1px #808080', overflow: 'scroll', height: '250px', width: '200px', marginTop: '5px', paddingBottom: '5px', paddingLeft: '5px', paddingRight: '5px'}}>
                <p style={{marginBottom: '5px', textDecoration: 'underline'}}>Previous plates (P.P.):</p>
                <span>Blur<input type='checkbox' onChange={() => {setEnablePPBlur(!enablePPBlur);}} checked={enablePPBlur}></input></span>
                {lastPlates.map((lastPlate, index) => 
                    <Plate
                        state={lastPlate.state}
                        type={lastPlate.type}
                        tuple={lastPlate.tuple}
                        blur={lastPlate.blur}
                        rsc={lastPlate.rsc}
                        rsc2={lastPlate.rsc2}
                        hc={lastPlate.hc}
                        sepia={lastPlate.sepia}
                        brightness={lastPlate.brightness}
                        skew={lastPlate.skew}
                        scale={lastPlate.scale}
                        index2={lastPlate.index2}
                        showYears
                        show={!enablePPBlur}
                        svgFilterIndex={1 + index}
                    />
                )}
            </div> : <></>
            }
        </div>
    );
};

export default Us;
