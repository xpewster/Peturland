import React, { useEffect, useMemo, useState } from 'react';
import './../Xgeo.css';
import { BADS, MAP_COLOR, MAP_HOVER_COLOR, NICES } from '../constants';
import { randomElement, shuffle } from '../helpers';
import { ComposableMap, ZoomableGroup, Geographies, Geography } from 'react-simple-maps';
import ScrollingDisabler from '../../../common/ScrollingDisabler';
import { preloadImage } from '../../../common/preloadImage';

export interface MultipleChoiceQuizProps {
    mapJsonSrc: any;
    clickText: string;
    regionIndexArray: string[];
    regionIndexToAnswerIndicesArray: number[][];
    answerIndexToSrc?: (toFind: number) => any;
    answerIndexToText?: (toFind: number) => React.ReactElement;
    numChoices: number;
    answerDescriptions?: string[];
    streakKey: string;
    disallowRepeats?: boolean;
    enableSkew?: boolean;
    enableRandColor?: boolean;
    randColorEnabledIndices?: boolean[];
    enableRegions?: boolean[];
    answerIndexToYears?: (number[] | null)[];
    showYears?: boolean;
    regionsBitFlag?: number[];
    dashedBorder?: boolean;
    itemHeight?: number;
    minRandScale?: number;
    answerIndexToShowSrc?: any[];
    numLastItems?: number;
    mapParameters?: MapParameters;
    styleFunction?: (rsmKey: string) => any;
}

type LastItem = [number, number, number, number[], number, number]; // [region, answer, sepia, skew, scale, hue_rotate]

type NextItem = {
    newt: number,
};

export interface MapParameters {
    center: [number, number];
    scale: number;
    minZoom?: number;
    maxZoom?: number;
    translateExtent?: [
        [number, number],
        [number, number]
    ];
}

type Choice = {
    answerIndex: number;
}

const MultipleChoiceQuiz = (props: MultipleChoiceQuizProps): React.ReactElement => {

    const [toFind, setToFind] = useState<number>(props.regionIndexToAnswerIndicesArray.findIndex((val) => val.length > 0) ?? 1);
    const [randIndex, setRandIndex] = useState<number>(Math.floor(Math.random() * 100));
    const [choices, setChoices] = useState<Choice[]>([]);

    const [sepia, setSepia] = useState<number>(0);
    const [skew, setSkew] = useState<number[]>([0, 0]);
    const [scale, setScale] = useState<number>(1);
    const [hueRotate, setHueRotate] = useState<number>(0);

    const [loading, setLoading] = useState<boolean>(true);

    const [message, setMessage] = useState<string>("");
    const [messageColor, setMessageColor] = useState<string>("green");

    const [lastItems, setLastItems] = useState<LastItem[]>(Array.from({ length: props.numLastItems ?? 1 }, () => [-1, 0, 0, [0, 0, 0], 1, 0]));
    const [enablePPSkew, setEnablePPSkew] = useState<boolean>(false);
    const [nextItem, setNextItem] = useState<NextItem | null>(null);
    const [nextChoices, setNextChoices] = useState<Choice[]>([]);

    const [streak, setStreak] = useState<number>(0);
    const [bestStreak, setBestStreak] = useState<number>(localStorage.getItem(props.streakKey) ? Number(localStorage.getItem(props.streakKey)) : 0);

    const [position, setPosition] = useState({
        coordinates: props.mapParameters?.center ?? [-105, 36],
        zoom: 1
    });

    useEffect(() => {
        setStreak(0);
        setBestStreak(localStorage.getItem(props.streakKey) ? Number(localStorage.getItem(props.streakKey)) : 0);
    }, [props.streakKey]);

    useEffect(() => {
        if(!isStateEnabled(props.enableRegions ?? [], nextItem?.newt ?? 0)) {
            generateNewFind(true);
        }
        setStreak(0);
        setBestStreak(localStorage.getItem(props.streakKey) ? Number(localStorage.getItem(props.streakKey)) : 0);
    }, [JSON.stringify(props.enableRegions), props.enableSkew]);

    const handleMoveEnd = (pos: any) => {
        setPosition(pos);
    };

    const generateRandomParameters = (): void => {
        setSepia(Math.random() * 0.2);
        setSkew([Math.random()*20-10, Math.random()*160-80]);
        setScale(Math.random()*(1-(props.minRandScale ?? 0.5))+(props.minRandScale ?? 0.5));
        setHueRotate(Math.random()*360);
    };

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
        updateLastItem(choices.find((choice) => props.regionIndexToAnswerIndicesArray[toFind].includes(choice.answerIndex))?.answerIndex ?? -1);
        generateNewFind();
    }

    const updateLastItem = (key: number) => {
        if (props.numLastItems === 0) return;
        setLastItems((prev) => {
            const newLastItem = [...prev];
            newLastItem.unshift([lastItems[lastItems.length-1][0] === -2 ? -1 : toFind, key, sepia, skew, scale, hueRotate]);
            newLastItem.pop();
            return newLastItem as LastItem[];
        });
    }

    const REGION_INDEX_TO_BIT = [0x1, 0x2, 0x4, 0x8, 0x10, 0x20, 0x40, 0x80, 0x100, 0x200, 0x400, 0x800, 0x1000, 0x2000, 0x4000, 0x8000, 0x10000, 0x20000, 0x40000, 0x80000,
        0x100000, 0x200000, 0x400000, 0x800000, 0x1000000, 0x2000000, 0x4000000, 0x8000000, 0x10000000, 0x20000000, 0x40000000, 0x80000000];

    const getRandomEnabledStateIndexFast = (enableRegion: boolean[]): number | null => {
        if (!props.regionsBitFlag) return Math.floor(Math.random() * props.regionIndexToAnswerIndicesArray.length);

        // Convert enableRegion array to a bit flag
        const enabledRegionBitFlag = enableRegion.reduce((acc, enabled, index) => {
          return enabled ? acc | REGION_INDEX_TO_BIT[index] : acc;
        }, 0);
        
        // If no regions enabled, return null
        if (enabledRegionBitFlag === 0) return null;
      
        // Find all states that match the enabled regions
        const candidateIndices = [];
        for (let i = 0; i < props.regionsBitFlag.length; i++) {
          if (props.regionsBitFlag[i] & enabledRegionBitFlag) {
            candidateIndices.push(i);
          }
        }
        
        // Return a random state from the candidate indices
        return candidateIndices[Math.floor(Math.random() * candidateIndices.length)];
    };

    const isStateEnabled = useMemo(() => {
        return (enableRegion: boolean[], index: number): boolean => {
            if (!props.regionsBitFlag) return true;

            const enabledRegionBitFlag = enableRegion.reduce((acc, enabled, index) => {
            return enabled ? acc | REGION_INDEX_TO_BIT[index] : acc;
            }, 0);
            
            if (enabledRegionBitFlag === 0) return false;

            return !!(props.regionsBitFlag[index] & enabledRegionBitFlag);
        };
    }, [props.regionsBitFlag]);
        
    function generateFirstFind() {
        let tries = 0;
        let newChoices: Choice[] = [];
        let foundNewt = toFind;
        while(tries < 1000) {
            const newt = getRandomEnabledStateIndexFast(props.enableRegions ?? []) ?? 0;
            if (props.regionIndexToAnswerIndicesArray[newt].length === 0) {
                tries++;
                continue;
            }
            generateRandomParameters();
            setRandIndex(Math.floor(Math.random() * 100));
            setToFind(newt);
            newChoices.push({ answerIndex: props.regionIndexToAnswerIndicesArray[newt][randIndex % props.regionIndexToAnswerIndicesArray[newt].length] });
            foundNewt = newt;
            break;
        }
        for(let i = 0; i < props.numChoices - 1; i++) {
            while(tries < 1000) {
                const newt = getRandomEnabledStateIndexFast(props.enableRegions ?? []) ?? 0;
                if ((props.regionIndexToAnswerIndicesArray[newt]?.length ?? 0) === 0 || foundNewt === newt) {
                    tries++;
                    continue;
                }
                const newIndex = (Math.floor(Math.random() * 100));
                if (newChoices.find((choice) => choice.answerIndex === props.regionIndexToAnswerIndicesArray[newt][newIndex % props.regionIndexToAnswerIndicesArray[newt].length])
                    || (props.regionIndexToAnswerIndicesArray[foundNewt].includes(props.regionIndexToAnswerIndicesArray[newt][newIndex % props.regionIndexToAnswerIndicesArray[newt].length]))) {
                    tries++;
                    continue;
                }
                newChoices.push({ answerIndex: props.regionIndexToAnswerIndicesArray[newt][newIndex % props.regionIndexToAnswerIndicesArray[newt].length] });
                break;
            }
        }
        shuffle(newChoices);
        setChoices(newChoices);
    }

    function generateNewFind(skipCurrentUpdate?: boolean) {
        let tries = 0;
        const currentOrFutureToFind = nextItem ? nextItem.newt : toFind;
        if (!nextItem) {
            generateFirstFind();
        }
        let newNextChoices: Choice[] = [];
        let foundNewt = currentOrFutureToFind;
        while(tries < 1000) {
            const newt = getRandomEnabledStateIndexFast(props.enableRegions ?? []) ?? 0;
            if ((currentOrFutureToFind === newt && props.disallowRepeats) || (props.regionIndexToAnswerIndicesArray[newt]?.length ?? 0) === 0) {
                tries++;
                continue;
            }
            if (loading) {
                setLoading(false);
            }
            const newIndex = (Math.floor(Math.random() * 100));
            if (props.answerIndexToSrc) {
                preloadImage(props.answerIndexToSrc(props.regionIndexToAnswerIndicesArray[newt][newIndex % props.regionIndexToAnswerIndicesArray[newt].length]));
            }
            if (nextItem && !skipCurrentUpdate) {
                generateRandomParameters();
                setToFind(nextItem!.newt);
            }
            setNextItem({
                newt: newt,
            });
            foundNewt = newt;
            newNextChoices.push({ answerIndex: props.regionIndexToAnswerIndicesArray[newt][newIndex % props.regionIndexToAnswerIndicesArray[newt].length] });
            break;
        }
        for(let i = 0; i < props.numChoices - 1; i++) {
            while(tries < 1000) {
                const newt = getRandomEnabledStateIndexFast(props.enableRegions ?? []) ?? 0;
                if ((currentOrFutureToFind === newt && props.disallowRepeats) || (props.regionIndexToAnswerIndicesArray[newt]?.length ?? 0) === 0 || foundNewt === newt) {
                    tries++;
                    continue;
                }
                const newIndex = (Math.floor(Math.random() * 100));
                if (newNextChoices.find((choice) => choice.answerIndex === props.regionIndexToAnswerIndicesArray[newt][newIndex % props.regionIndexToAnswerIndicesArray[newt].length])
                        || (props.regionIndexToAnswerIndicesArray[foundNewt].includes(props.regionIndexToAnswerIndicesArray[newt][newIndex % props.regionIndexToAnswerIndicesArray[newt].length]))) {
                    tries++;
                    continue;
                }
                if (props.answerIndexToSrc) {
                    preloadImage(props.answerIndexToSrc(props.regionIndexToAnswerIndicesArray[newt][newIndex % props.regionIndexToAnswerIndicesArray[newt].length]));
                }
                if (nextChoices.length && !skipCurrentUpdate) {
                    setChoices(nextChoices);
                }
                newNextChoices.push({ answerIndex: props.regionIndexToAnswerIndicesArray[newt][newIndex % props.regionIndexToAnswerIndicesArray[newt].length] });
                break;
            }
        }
        shuffle(newNextChoices);
        setNextChoices(newNextChoices);
    }

    useEffect(() => {
        generateNewFind();
    }, []);

    function handleClick(key: number) {
        if (props.regionIndexToAnswerIndicesArray[toFind].includes(key)) {
            let newMessage;
            do {
                newMessage = randomElement(NICES)
            } while (newMessage === message)
            setStreak(streak + 1);
            if (streak + 1 > bestStreak) {
                setBestStreak(streak + 1);
                localStorage.setItem(props.streakKey, (streak + 1).toString());
            }
            newMessage += ` Streak: ${streak + 1}, Best Streak: ${streak + 1 > bestStreak ? streak + 1 : bestStreak}`;
            setMessage(newMessage);
            setMessageColor("green");
            updateLastItem(key);
            generateNewFind();
        } else {
            lose();
        }
    }

    const getFilterId = (baseId: string, index: number): string => {
        return `${baseId}${index}`;
    };

    const getSrc = (choice: Choice, index: number = 0): any => {
        if (props.answerIndexToSrc) {
            if (index === 1) {
                if (props.answerIndexToShowSrc && props.answerIndexToShowSrc[choice.answerIndex]) {
                    return props.answerIndexToShowSrc[choice.answerIndex];
                }
            }
            return props.answerIndexToSrc(choice.answerIndex);
        } else if (props.answerIndexToText) {
            return props.answerIndexToText(choice.answerIndex);
        }
    }

    const getYearString = (index: number): string => {
        if (props.answerIndexToYears?.[index] === null) {
            return "";
        } else if (props.answerIndexToYears?.[index]![0] === null && props.answerIndexToYears[index]![1] !== null) {
            return `(-${props.answerIndexToYears?.[index]![1]})`;
        } else if (props.answerIndexToYears?.[index]![1] === null) {
            return `(${props.answerIndexToYears[index]![0]}-)`;
        }
        return `(${props.answerIndexToYears?.[index]![0]}-${props.answerIndexToYears?.[index]![1]})`;
    }

    return (
        <div style={{padding: 0, margin: 0, width: '100%'}}>
            <p style={{display: 'inline'}}>{props.clickText} <u>({props.regionIndexArray[toFind]})</u> </p><div style={{display: 'inline-block'}}><button onClick={() => { setStreak(0); generateNewFind(); }}>Regenerate</button> <button onClick={giveUp}>Give up</button></div>
            <div style={{display: 'block', paddingTop: '5px', paddingBottom: '5px', paddingRight: '0px'}}>
                {choices.map((choice, index) => {
                    return (
                        <div style={{display: 'inline-block', width: '40%', margin: '10px', cursor: 'pointer'}} onClick={() => {handleClick(choice.answerIndex);}} >
                            <div>
                            <p style={{display: 'inline'}}>{['A.', 'B.', 'C.', 'D.', 'E.', 'F.'][index]}</p>
                            {!(loading || props.answerIndexToText) && props.enableSkew ? <div style={{filter: (props.enableRandColor && (props.randColorEnabledIndices?.[choice.answerIndex] ?? false))? `hue-rotate(${hueRotate}deg)` : undefined}}><svg height={`${props.itemHeight ?? 75}px`} width={`${props.itemHeight ?? 75}px`} style={{display: 'inline', verticalAlign: 'middle', paddingLeft: '5px', border: props.dashedBorder ? 'dashed 1px black' : undefined, marginTop: '5px'}}>
                                <defs>
                                    <filter id={getFilterId("combinedFilter", 2)}>
                                        <feColorMatrix type="matrix"
                                            values={`${(0.393 + 0.607 * (1 - sepia))} ${(0.769 - 0.769 * (1 - sepia))} ${(0.189 - 0.189 * (1 - sepia))} 0 0
                                                    ${(0.349 - 0.349 * (1 - sepia))} ${(0.686 + 0.314 * (1 - sepia))} ${(0.168 - 0.168 * (1 - sepia))} 0 0
                                                    ${(0.272 - 0.272 * (1 - sepia))} ${(0.534 - 0.534 * (1 - sepia))} ${(0.131 + 0.869 * (1 - sepia))} 0 0
                                                    0 0 0 1 0`}
                                            result="sepia" />
                                    </filter>
                                </defs>
                                <image href={getSrc(choice)} xlinkHref={getSrc(choice)} x="0" y="0" width="100%" height="100%"
                                    style={props.enableSkew ? {
                                        transformStyle: 'preserve-3d',
                                        transform: `rotateX(${skew[0] ?? 0}deg) rotateY(${skew[1] ?? 0}deg) scale(${scale ?? 1})`,
                                        transformOrigin: 'center center',
                                        height: `${props.itemHeight ?? 75}px`,
                                    } : {}}
                                    filter={props.enableSkew ? `url(#${getFilterId("combinedFilter", 2)})` : undefined}
                                />        
                            </svg></div>
                            : (!(loading || props.answerIndexToText) && <img style={{height: `${props.itemHeight ?? 75}px`, display: 'inline', verticalAlign: 'middle', paddingLeft: '5px', marginTop: '5px', filter: (props.enableRandColor && (props.randColorEnabledIndices?.[props.regionIndexToAnswerIndicesArray[toFind][randIndex % props.regionIndexToAnswerIndicesArray[toFind].length]] ?? false)) ? `hue-rotate(${hueRotate}deg)` : undefined}} src={getSrc(choice)}></img>)
                            }
                            </div>
                        </div>
                    );
                })}
            </div>
            {(message !== "") && <p style={{color: messageColor}}>{message}</p>}
            <div style={{position: 'relative', width: '100%', paddingTop: '5px'}}>
            <ScrollingDisabler>
                <ComposableMap 
                    projection="geoMercator"
                    projectionConfig={{
                        scale: props.mapParameters?.scale ?? 400,
                        center: props.mapParameters?.center ?? [-105, 36],
                    }} 
                    style={{
                        width: "100%",
                        height: "auto",
                        border: "solid 1px black"
                    }}
                >
                    <ZoomableGroup 
                        zoom={position.zoom}
                        center={position.coordinates as any}
                        onMoveEnd={handleMoveEnd}
                        minZoom={props.mapParameters?.minZoom ?? 0.5}
                        maxZoom={props.mapParameters?.maxZoom ?? 100}
                        translateExtent={props.mapParameters?.translateExtent ?? [
                            [-500, -1000],
                            [1200, 1000]
                        ]}
                    >
                        <Geographies geography={props.mapJsonSrc}>
                            {({ geographies }) => 
                                geographies
                                    .filter((geo) => { return isStateEnabled(props.enableRegions ?? [], Number(geo.rsmKey.split("-")[1])); })
                                    .map(geo => (
                                        <Geography 
                                            key={geo.rsmKey} 
                                            geography={geo} 
                                            onClick={() => {}} 
                                            style={props.styleFunction ? props.styleFunction(geo.rsmKey) : (geo.rsmKey === `geo-${toFind}` ? {
                                                    default: { fill: MAP_HOVER_COLOR, stroke: "#000000", outline: 'none' },
                                                    hover: { fill: MAP_HOVER_COLOR, stroke: "#000000", outline: 'none' },
                                                } : {
                                                    default: { fill: MAP_COLOR, stroke: "#000000", outline: 'none' },
                                                    hover: { fill: MAP_COLOR, stroke: "#000000", outline: 'none' },
                                                    pressed: { fill: "green", outline: 'none' }
                                                })
                                            }
                                        />
                                    ))
                            }
                        </Geographies>
                    </ZoomableGroup>
                </ComposableMap>
            </ScrollingDisabler>
            </div>
            {((props.numLastItems ?? 1) > 0 && lastItems[0][0] >= 0) && <div className="scrollable-content" style={{paddingLeft: '5px', marginTop: '5px', border: (props.numLastItems ?? 1 > 1) ? 'dashed 1px #808080' : undefined, height: `${(props.itemHeight ?? 75) + 100}px`, overflow: (props.numLastItems ?? 1) > 1 ? 'scroll' : undefined, width: `${(props.itemHeight ?? 25) + 125}px`}}>
                <p style={{marginBottom: '5px', textDecoration: 'underline'}}>{(props.numLastItems ?? 1) > 1 ? "Previous items:" : "Previous item:"}</p>
                {props.enableSkew && <span>Angle<input type='checkbox' onChange={() => {setEnablePPSkew(!enablePPSkew);}} checked={enablePPSkew}></input></span>}
                {lastItems.map((lastItem, index) => <>
                    {lastItem[0] === -1 ? <></> :
                        <div style={{display: 'block', paddingBottom: '5px'}}>
                            <p style={{marginTop: 0}}>{index + 1}. {props.answerIndexToText ? getSrc({ answerIndex: lastItem[1] }, 1) : ((enablePPSkew && props.enableSkew) ? <div style={{filter: (props.enableRandColor && (props.randColorEnabledIndices?.[lastItem[1]] ?? false)) ? `hue-rotate(${lastItem[5]}deg)` : undefined}}><svg height={`${props.itemHeight ?? 75}px`} width={`${props.itemHeight ?? 75}px`} style={{display: 'block', border: props.dashedBorder ? 'dashed 1px black' : undefined}}>
                                    <defs>
                                        <filter id={getFilterId("combinedFilter", 3 + index)}>
                                            <feColorMatrix type="matrix"
                                                values={`${(0.393 + 0.607 * (1 - lastItem[2]))} ${(0.769 - 0.769 * (1 - lastItem[2]))} ${(0.189 - 0.189 * (1 - lastItem[2]))} 0 0
                                                        ${(0.349 - 0.349 * (1 - lastItem[2]))} ${(0.686 + 0.314 * (1 - lastItem[2]))} ${(0.168 - 0.168 * (1 - lastItem[2]))} 0 0
                                                        ${(0.272 - 0.272 * (1 - lastItem[2]))} ${(0.534 - 0.534 * (1 - lastItem[2]))} ${(0.131 + 0.869 * (1 - lastItem[2]))} 0 0
                                                        0 0 0 1 0`}
                                                result="sepia" />
                                        </filter>
                                    </defs>
                                    <image href={getSrc({ answerIndex: lastItem[1] }, 1)} xlinkHref={getSrc({ answerIndex: lastItem[1] }, 1)} x="0" y="0" width="100%" height="100%"
                                        style={props.enableSkew ? {
                                            transformStyle: 'preserve-3d',
                                            transform: `rotateX(${lastItem[3][0] ?? 0}deg) rotateY(${lastItem[3][1] ?? 0}deg) scale(${lastItem[4] ?? 1})`,
                                            transformOrigin: 'center center',
                                            height: `${props.itemHeight ?? 75}px`,
                                        } : {}}
                                        filter={props.enableSkew ? `url(#${getFilterId("combinedFilter", 3 + index)})` : undefined}
                                    />        
                                </svg></div>
                                : <img style={{height: `${props.itemHeight ?? 75}px`, display: 'block', filter: (props.enableRandColor && (props.randColorEnabledIndices?.[lastItem[1]] ?? false)) ? `hue-rotate(${lastItem[5]}deg)` : undefined}} src={getSrc({ answerIndex: lastItem[1] }, 1)}></img>
                            )}
                            {<span className='p-old' style={{margin: 'auto', textAlign: 'left'}}>{props.regionIndexArray[lastItem[0]]?.toString()} {(props.showYears && props.answerIndexToYears)
                                ? getYearString(props.regionIndexToAnswerIndicesArray[lastItem[0]][lastItem[1] % props.regionIndexToAnswerIndicesArray[lastItem[0]].length])
                                : ''}</span>}
                            </p>
                        </div>
                    }
                    </>
                )}
            </div>}
        </div>
    );

    return <></>
};

export default MultipleChoiceQuiz;
