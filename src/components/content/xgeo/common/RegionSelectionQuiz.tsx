import React, { useEffect, useMemo, useState } from 'react';
import './../Xgeo.css';
import { BADS, CLICK_DRAG_DISTANCE_THRESHOLD, MAP_COLOR, MAP_HOVER_COLOR, MAP_LAST_COLOR, MAP_SELECT_COLOR, NICES } from '../constants';
import { randomElement } from '../helpers';
import { ComposableMap, ZoomableGroup, Geographies, Geography } from 'react-simple-maps';
import ScrollingDisabler from '../../../common/ScrollingDisabler';
import { preloadImage } from '../../../common/preloadImage';
import MapWithInsets from '../us/MapWithInsets';

export interface RegionSelectionQuizProps {
    mapJsonSrc: any;
    clickText: string;
    regionIndexArray: string[];
    toFindIndexToAnswerIndicesArray: number[][];
    answerIndexToSrc?: (toFind: number) => any;
    answerIndexToText?: (toFind: number) => React.ReactElement;
    correctAnswerBoxIndexToElement?: (toFind: number) => React.ReactElement;
    answerIndexToRegionIndices?: number[][];
    unevenAnswerDistribution?: boolean;
    answerDescriptions?: string[];
    streakKey: string;
    disallowRepeats?: boolean;
    enableSkew?: boolean;
    enableRandColor?: boolean;
    randColorEnabledIndices?: boolean[];
    enableRegions?: boolean[];
    answerIndexToLabelExtra?: (toFind: number) => React.ReactElement | string;
    answerBoxWidthPadding?: number;
    answerBoxHeightPadding?: number;
    regionsBitFlag?: number[];
    dashedBorder?: boolean;
    itemHeight?: number;
    minRandScale?: number;
    showImages?: any[];
    answerIndexToShowIndex?: number[][];
    numLastItems?: number;
    sayWrongAnswer?: boolean;
    showAllWrong?: boolean;
    mapParameters?: MapParameters;
    styleFunction?: (rsmKey: string, lastItemKeys: string[] | undefined, mouseDownPos?: [number, number] | null) => any;
    useMapWithInsets?: boolean;
    insetEnableIndex?: number;
    regionIsAnswer?: boolean;
    highlightGroups?: number[][];
    multiselect?: boolean;
    debugMode?: boolean;
}

type LastItem = [number, number, number, number[], number, number]; // [toFind, randIndex, sepia, skew, scale, hue_rotate]

type NextItem = {
    newt: number,
    index: number,
};

export interface MapParameters {
    center: [number, number];
    scale: number;
    zoom?: number;
    minZoom?: number;
    maxZoom?: number;
    translateExtent?: [
        [number, number],
        [number, number]
    ];
}

const RegionSelectionQuiz = (props: RegionSelectionQuizProps): React.ReactElement => {

    const [toFind, setToFind] = useState<number>(props.toFindIndexToAnswerIndicesArray.findIndex((val) => val.length > 0) ?? 1);
    const [randIndex, setRandIndex] = useState<number>(Math.floor(Math.random() * 100));
    const [sepia, setSepia] = useState<number>(0);
    const [skew, setSkew] = useState<number[]>([0, 0]);
    const [scale, setScale] = useState<number>(1);
    const [hueRotate, setHueRotate] = useState<number>(0);

    const [loading, setLoading] = useState<boolean>(true);

    const [message, setMessage] = useState<string>("");
    const [messageColor, setMessageColor] = useState<string>("green");
    const [answer, setAnswer] = useState<React.ReactElement | string>("");

    const [lastItems, setLastItems] = useState<LastItem[]>(Array.from({ length: (!props.numLastItems || props.numLastItems === 0) ? 1 : props.numLastItems}, () => [-1, 0, 0, [0, 0, 0], 1, 0]));
    const [enablePPSkew, setEnablePPSkew] = useState<boolean>(false);
    const [nextItem, setNextItem] = useState<NextItem | null>(null);

    const [streak, setStreak] = useState<number>(0);
    const [bestStreak, setBestStreak] = useState<number>(localStorage.getItem(props.streakKey) ? Number(localStorage.getItem(props.streakKey)) : 0);

    const [position, setPosition] = useState({
        coordinates: props.mapParameters?.center ?? [-105, 36],
        zoom: props.mapParameters?.zoom ?? 1,
    });

    const [hoveredElement, setHoveredElement] = useState<number | null>(null);
    const [mouseDownPos, setMouseDownPos] = useState<[number, number] | null>(null);

    const [selectedRegions, setSelectedRegions] = useState<string[]>([]);

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
        updateLastItem();
        generateNewFind();
    }

    const updateLastItem = () => {
        setLastItems((prev) => {
            const newLastItem = [...prev];
            newLastItem.unshift([lastItems[lastItems.length-1][0] === -2 ? -1 : toFind, randIndex, sepia, skew, scale, hueRotate]);
            newLastItem.pop();
            return newLastItem as LastItem[];
        });
    }

    const REGION_INDEX_TO_BIT = [0x1, 0x2, 0x4, 0x8, 0x10, 0x20, 0x40, 0x80, 0x100, 0x200, 0x400, 0x800, 0x1000, 0x2000, 0x4000, 0x8000, 0x10000, 0x20000, 0x40000, 0x80000,
        0x100000, 0x200000, 0x400000, 0x800000, 0x1000000, 0x2000000, 0x4000000, 0x8000000, 0x10000000, 0x20000000, 0x40000000, 0x80000000];

    const getRandomEnabledStateIndexFast = (enableRegion: boolean[]): number | null => {
        if (!props.regionsBitFlag) return Math.floor(Math.random() * props.toFindIndexToAnswerIndicesArray.length);

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

    // Pick a random answer index first, then find a province containing it.
    // This gives every unique answer equal probability regardless of how many provinces share it.
    const getRandomAnswerFirst = (enableRegion: boolean[]): { newt: number, answerIdx: number } | null => {
        const enabledRegionBitFlag = enableRegion.reduce((acc, enabled, index) => {
            return enabled ? acc | REGION_INDEX_TO_BIT[index] : acc;
        }, 0);

        // Collect all unique answer indices from enabled provinces
        const answerSet = new Set<number>();
        for (let i = 0; i < props.toFindIndexToAnswerIndicesArray.length; i++) {
            if (props.regionsBitFlag && !(props.regionsBitFlag[i] & enabledRegionBitFlag)) continue;
            for (const idx of props.toFindIndexToAnswerIndicesArray[i]) {
                answerSet.add(idx);
            }
        }

        if (answerSet.size === 0) return null;

        // Pick a random answer uniformly
        const answers = Array.from(answerSet);
        const chosenAnswer = answers[Math.floor(Math.random() * answers.length)];

        // Find all enabled provinces that contain this answer
        const candidateProvinces: number[] = [];
        for (let i = 0; i < props.toFindIndexToAnswerIndicesArray.length; i++) {
            if (props.regionsBitFlag && !(props.regionsBitFlag[i] & enabledRegionBitFlag)) continue;
            if (props.toFindIndexToAnswerIndicesArray[i].includes(chosenAnswer)) {
                candidateProvinces.push(i);
            }
        }

        const newt = candidateProvinces[Math.floor(Math.random() * candidateProvinces.length)];
        // Find the position of chosenAnswer within the province's array so randIndex maps to it
        const answerIdx = props.toFindIndexToAnswerIndicesArray[newt].indexOf(chosenAnswer);
        return { newt, answerIdx };
    };
    
    function generateFirstFind() {
        let tries = 0;
        while(tries < 1000) {
            const newt = getRandomEnabledStateIndexFast(props.enableRegions ?? []) ?? 0;
            if (props.toFindIndexToAnswerIndicesArray[newt].length === 0) {
                tries++;
                continue;
            }
            generateRandomParameters();
            setRandIndex(Math.floor(Math.random() * 100));
            setToFind(newt);
            break;
        }
    }

    function generateNewFind(skipCurrentUpdate?: boolean) {
        let tries = 0;
        const currentOrFutureToFind = nextItem ? nextItem.newt : toFind;
        const currentOrFutureIndex = nextItem ? nextItem.index : randIndex;
        if (!nextItem) {
            generateFirstFind();
        }

        const currentAnswerIdx = props.toFindIndexToAnswerIndicesArray[currentOrFutureToFind]?.[currentOrFutureIndex % props.toFindIndexToAnswerIndicesArray[currentOrFutureToFind]?.length];

        while(tries < 1000) {
            let newt: number;
            let newIndex: number;

            if (!props.unevenAnswerDistribution) {
                const result = getRandomAnswerFirst(props.enableRegions ?? []);
                if (!result) break;
                newt = result.newt;
                newIndex = result.answerIdx;
                const newAnswerIdx = props.toFindIndexToAnswerIndicesArray[newt][newIndex];
                if (props.disallowRepeats && newAnswerIdx === currentAnswerIdx) {
                    tries++;
                    continue;
                }
            } else {
                newt = getRandomEnabledStateIndexFast(props.enableRegions ?? []) ?? 0;
                if ((currentOrFutureToFind === newt && props.disallowRepeats) || (props.toFindIndexToAnswerIndicesArray[newt]?.length ?? 0) === 0) {
                    tries++;
                    continue;
                }
                newIndex = Math.floor(Math.random() * 100);
                if (props.disallowRepeats && props.answerIndexToRegionIndices?.[props.toFindIndexToAnswerIndicesArray[currentOrFutureToFind][currentOrFutureIndex % props.toFindIndexToAnswerIndicesArray[currentOrFutureToFind].length]]?.includes(newt)) {
                    tries++;
                    continue;
                }
            }

            if (loading) {
                setLoading(false);
            }
            if (props.answerIndexToSrc) {
                preloadImage(props.answerIndexToSrc(props.toFindIndexToAnswerIndicesArray[newt][newIndex % props.toFindIndexToAnswerIndicesArray[newt].length]));
            }
            if (nextItem && !skipCurrentUpdate) {
                generateRandomParameters();
                setToFind(nextItem!.newt);
                setRandIndex(nextItem!.index);
            }
            if (props.debugMode) {
                console.log(`Generated new find: ${nextItem?.newt}, index: ${randIndex}`);
            }
            setNextItem({
                newt: newt,
                index: newIndex,
            });
            break;
        }
        setAnswer("");
    }

    useEffect(() => {
        if (!props.toFindIndexToAnswerIndicesArray[toFind][randIndex % props.toFindIndexToAnswerIndicesArray[toFind].length]) {
            generateFirstFind();
        } else if (nextItem?.newt && !props.toFindIndexToAnswerIndicesArray[nextItem?.newt][nextItem?.index % props.toFindIndexToAnswerIndicesArray[nextItem?.newt].length]) {
            setNextItem(null);
        }
    }, [props.toFindIndexToAnswerIndicesArray.toString(), props.answerIndexToRegionIndices?.toString()]);

    useEffect(() => {
        generateNewFind();
    }, []);

    const highlightGroupKeysMap = useMemo(() => {
        if (!props.highlightGroups) return null;
        return props.highlightGroups.map(group => group.map(val => `geo-${val}`));
    }, [props.highlightGroups]);
    const selectedRegionsSet = useMemo(() => new Set(selectedRegions), [selectedRegions]);

    function handleClick(key: string) {
        if (props.multiselect) {
            const regionIndex = Number(key.split("-")[1]);
            const groupKeys = highlightGroupKeysMap?.[regionIndex] ?? [key];
            const anySelected = groupKeys.some((k) => selectedRegionsSet.has(k));
            if (anySelected) {
                setSelectedRegions(selectedRegions.filter((val) => !groupKeys.includes(val)));
            } else {
                setSelectedRegions(Array.from(new Set([...selectedRegions, ...groupKeys])));
            }
            return;
        }

        let newAnswer: any = "";
        if (props.debugMode && props.answerIndexToRegionIndices) {
            console.log(`Answer regions for toFind ${toFind}: ${props.answerIndexToRegionIndices[props.toFindIndexToAnswerIndicesArray[toFind][randIndex % props.toFindIndexToAnswerIndicesArray[toFind].length]]}`);
        }
        if (props.answerIndexToRegionIndices
                ? props.answerIndexToRegionIndices[props.toFindIndexToAnswerIndicesArray[toFind][randIndex % props.toFindIndexToAnswerIndicesArray[toFind].length]].map((val) => { return `geo-${val}`; }).includes(key)
                : `geo-${toFind}` === key) {
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
            updateLastItem();
            generateNewFind();
        } else {
            const guessedToFind = Number(key.split("-")[1]);
            if (props.showAllWrong && props.answerIndexToText && props.toFindIndexToAnswerIndicesArray[guessedToFind].length > 1) {
                newAnswer = <>
                    {
                        props.toFindIndexToAnswerIndicesArray[guessedToFind].map((val, index) => {
                            if (index !== props.toFindIndexToAnswerIndicesArray[guessedToFind].length - 1) {
                                return <span key={index}>{props.answerIndexToText!(val)}/</span>;
                            } else {
                                return <span key={index}>{props.answerIndexToText!(val)}</span>;
                            }
                        })
                    }
                </>;
            } else {
                newAnswer = props.answerIndexToSrc ? props.answerIndexToSrc(props.toFindIndexToAnswerIndicesArray[guessedToFind][randIndex % props.toFindIndexToAnswerIndicesArray[guessedToFind].length]) : props.answerIndexToText ? props.answerIndexToText(props.toFindIndexToAnswerIndicesArray[guessedToFind][randIndex % props.toFindIndexToAnswerIndicesArray[guessedToFind].length]) : "[]";
            }
            lose();
        }
        setAnswer(newAnswer);
    }

    const handleMultiSubmit = () => {
        let correct = true;
        const correctRegionIndices = props.answerIndexToRegionIndices ? props.answerIndexToRegionIndices[props.toFindIndexToAnswerIndicesArray[toFind][randIndex % props.toFindIndexToAnswerIndicesArray[toFind].length]].map((val) => { return `geo-${val}`; }) : [`geo-${toFind}`];
        for (let i = 0; i < selectedRegions.length; i++) {
            if (!correctRegionIndices.includes(selectedRegions[i])) {
                correct = false;
                break;
            }
        }
        if (correctRegionIndices.length !== selectedRegions.length) {
            correct = false;
        }
        if (correct) {
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
            setSelectedRegions([]);
            updateLastItem();
            generateNewFind();
        } else {
            lose();
            setSelectedRegions([]);
        }
    }

    const getFilterId = (baseId: string, index: number): string => {
        return `${baseId}${index}`;
    };

    const getSrc = (index: number = 0, lastItemIndex?: number, answerBox?: boolean): any => {
        if (answerBox && props.correctAnswerBoxIndexToElement) {
            if (index === 1) {
                return props.correctAnswerBoxIndexToElement(props.toFindIndexToAnswerIndicesArray[lastItems[lastItemIndex ?? 0][0]][lastItems[lastItemIndex ?? 0][1] % props.toFindIndexToAnswerIndicesArray[lastItems[lastItemIndex ?? 0][0]].length]);
            }
            return props.correctAnswerBoxIndexToElement(props.toFindIndexToAnswerIndicesArray[toFind][randIndex % props.toFindIndexToAnswerIndicesArray[toFind].length]);
        }
        if (props.answerIndexToSrc) {
            if (index === 1) {
                const showIndex = props.answerIndexToShowIndex?.[props.toFindIndexToAnswerIndicesArray[lastItems[lastItemIndex ?? 0][0]][lastItems[lastItemIndex ?? 0][1] % props.toFindIndexToAnswerIndicesArray[lastItems[lastItemIndex ?? 0][0]].length]][0] ?? -1;
                if (props.showImages && showIndex >= 0) {
                    return props.showImages[showIndex];
                }
                return props.answerIndexToSrc(props.toFindIndexToAnswerIndicesArray[lastItems[lastItemIndex ?? 0][0]][lastItems[lastItemIndex ?? 0][1] % props.toFindIndexToAnswerIndicesArray[lastItems[lastItemIndex ?? 0][0]].length])
            }
            return props.answerIndexToSrc(props.toFindIndexToAnswerIndicesArray[toFind][randIndex % props.toFindIndexToAnswerIndicesArray[toFind].length]);
        } else if (props.answerIndexToText) {
            if (index === 1) {
                return props.answerIndexToText(props.toFindIndexToAnswerIndicesArray[lastItems[lastItemIndex ?? 0][0]][lastItems[lastItemIndex ?? 0][1] % props.toFindIndexToAnswerIndicesArray[lastItems[lastItemIndex ?? 0][0]].length]);
            }
            return props.answerIndexToText(props.toFindIndexToAnswerIndicesArray[toFind][randIndex % props.toFindIndexToAnswerIndicesArray[toFind].length]);
        }
    }

    const getLastItemsKeys = useMemo(() => {
        return ((props.answerIndexToRegionIndices && lastItems[0][0] >= 0) ? props.answerIndexToRegionIndices[props.toFindIndexToAnswerIndicesArray[lastItems[0][0]][lastItems[0][1] % props.toFindIndexToAnswerIndicesArray[lastItems[0][0]].length]].map((val) => { return `geo-${val}`; }) : [`geo-${lastItems[0][0]}`]);
    }, [props.answerIndexToRegionIndices?.toString(), lastItems[0][0], lastItems[0][1]]);

    const defaultStyleFunction = (key: string) => {
        const regionIndex = Number(key.split("-")[1]);
        const groupHovered = (hoveredElement && props.highlightGroups?.[hoveredElement]?.includes(regionIndex));
        const selected = selectedRegionsSet.has(key);
        return {
            default: { fill: (groupHovered && !mouseDownPos) ? MAP_HOVER_COLOR : (selected ? MAP_SELECT_COLOR
                : (getLastItemsKeys.includes(key) ? MAP_LAST_COLOR : MAP_COLOR)), stroke: "#000000", outline: 'none' },
            hover: { fill: !mouseDownPos ? MAP_HOVER_COLOR : MAP_COLOR, stroke: "#000000", outline: 'none' },
            pressed: { fill: "green", outline: 'none' },
        }
    };

    return (
        <div style={{padding: 0, margin: 0, width: '100%'}}>
            <p style={{display: 'inline'}}>{props.clickText} {props.answerIndexToText && getSrc(0)} </p><div style={{display: 'inline-block'}}><button onClick={() => { setStreak(0); generateNewFind(); }}>Regenerate</button> <button onClick={giveUp}>Give up</button></div>
            {props.multiselect && <div style={{display: 'block', paddingTop: '10px'}}><button style={{display: 'inline'}} onClick={handleMultiSubmit}>Submit</button> <p style={{display: 'inline'}}>{`${selectedRegions.length} regions selected!`}</p></div>}
            {!(loading || props.answerIndexToText) && props.enableSkew ? <div style={{filter: (props.enableRandColor && (props.randColorEnabledIndices?.[props.toFindIndexToAnswerIndicesArray[toFind][randIndex % props.toFindIndexToAnswerIndicesArray[toFind].length]] ?? false))? `hue-rotate(${hueRotate}deg)` : undefined}}><svg height={`${props.itemHeight ?? 75}px`} width={`${props.itemHeight ?? 75}px`} style={{display: 'block', border: props.dashedBorder ? 'dashed 1px black' : undefined, marginTop: '5px'}}>
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
                    <image href={getSrc()} xlinkHref={getSrc()} x="0" y="0" width="100%" height="100%"
                        style={props.enableSkew ? {
                            transformStyle: 'preserve-3d',
                            transform: `rotateX(${skew[0] ?? 0}deg) rotateY(${skew[1] ?? 0}deg) scale(${scale ?? 1})`,
                            transformOrigin: 'center center',
                            height: `${props.itemHeight ?? 75}px`,
                        } : {}}
                        filter={props.enableSkew ? `url(#${getFilterId("combinedFilter", 2)})` : undefined}
                    />        
                </svg></div>
                : (!(loading || props.answerIndexToText) && <img style={{height: `${props.itemHeight ?? 75}px`, display: 'block', marginTop: '5px', filter: (props.enableRandColor && (props.randColorEnabledIndices?.[props.toFindIndexToAnswerIndicesArray[toFind][randIndex % props.toFindIndexToAnswerIndicesArray[toFind].length]] ?? false)) ? `hue-rotate(${hueRotate}deg)` : undefined}} src={getSrc()}></img>)
            }
            {(message !== "") && <p style={{color: messageColor}}>{message}{props.sayWrongAnswer ? <>
                {answer && ((props.answerIndexToText || (typeof answer !== 'string')) ? <span style={{display: 'inline'}}> that one's {answer}..</span> : <span style={{display: 'inline'}}> that one's <img style={{height: `${(props.itemHeight ?? 75)/3}px`, display: 'inline', verticalAlign: 'middle'}} src={answer}></img>..</span>)}
            </> : <></>}</p>}
            <div style={{position: 'relative', width: '100%', paddingTop: '5px'}}>
            {
                !props.useMapWithInsets ? <ScrollingDisabler>
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
                                                onFocus={(e) => { if (!mouseDownPos) e.target.blur(); }}
                                                onPointerDown={(e) => { setMouseDownPos([e.clientX, e.clientY]); }}
                                                onPointerUp={(e) => {
                                                    if (mouseDownPos) {
                                                        const dx = e.clientX - mouseDownPos[0];
                                                        const dy = e.clientY - mouseDownPos[1];
                                                        if (Math.sqrt(dx * dx + dy * dy) < CLICK_DRAG_DISTANCE_THRESHOLD) {
                                                            handleClick(geo.rsmKey);
                                                        }
                                                    }
                                                    setMouseDownPos(null);
                                                }}
                                                style={props.styleFunction ? props.styleFunction(geo.rsmKey, lastItems[0][0] < 0 ? undefined : getLastItemsKeys, mouseDownPos) : defaultStyleFunction(geo.rsmKey)}
                                                onMouseEnter={() => { setHoveredElement(Number(geo.rsmKey.split("-")[1])); }}
                                                onMouseLeave={() => { setHoveredElement(null); }}
                                            />
                                        ))
                                }
                            </Geographies>
                        </ZoomableGroup>
                    </ComposableMap>
                </ScrollingDisabler>
                : <MapWithInsets 
                    mapJsonSrc={props.mapJsonSrc}
                    mapParameters={props.mapParameters}
                    enableRegions={props.enableRegions ?? []}
                    clickHandler={(key: string) => { handleClick(key); }}
                    styleFunction={props.styleFunction ? (key) => props.styleFunction!(key, lastItems[0][0] < 0 ? undefined : getLastItemsKeys) : defaultStyleFunction}
                    regionBitflags={props.regionsBitFlag}
                    insetEnableIndex={6}
                />
            }
            </div>
            {((props.numLastItems ?? 1) > 0 && lastItems[0][0] >= 0) && <div className="scrollable-content" style={{paddingLeft: '5px', marginTop: '5px', border: (props.numLastItems ?? 1 > 1) ? 'dashed 1px #808080' : undefined, height: `${(props.itemHeight ?? 75) + 100 + (props.answerBoxHeightPadding ?? 0)}px`, overflow: (props.numLastItems ?? 1) > 1 ? 'scroll' : undefined, width: `${(props.itemHeight ?? 25) + 125 + (props.answerBoxWidthPadding ?? 0)}px`}}>
                <p style={{marginBottom: '5px', textDecoration: 'underline'}}>{(props.numLastItems ?? 1) > 1 ? "Previous items:" : "Previous item:"}</p>
                {props.enableSkew && <span>Angle<input type='checkbox' onChange={() => {setEnablePPSkew(!enablePPSkew);}} checked={enablePPSkew}></input></span>}
                {lastItems.map((lastItem, index) => <>
                    {lastItem[0] === -1 ? <></> :
                        <div style={{display: 'block', paddingBottom: '5px'}}>
                            <p style={{marginTop: 0}}>{index + 1}. {(props.answerIndexToText || props.correctAnswerBoxIndexToElement) ? getSrc(1, index, true) : ((enablePPSkew && props.enableSkew) ? <div style={{filter: (props.enableRandColor && (props.randColorEnabledIndices?.[props.toFindIndexToAnswerIndicesArray[lastItem[0]][lastItem[1] % props.toFindIndexToAnswerIndicesArray[lastItem[0]].length]] ?? false)) ? `hue-rotate(${lastItem[5]}deg)` : undefined}}><svg height={`${props.itemHeight ?? 75}px`} width={`${props.itemHeight ?? 75}px`} style={{display: 'block', border: props.dashedBorder ? 'dashed 1px black' : undefined}}>
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
                                    <image href={getSrc(1, index, true)} xlinkHref={getSrc(1, index, true)} x="0" y="0" width="100%" height="100%"
                                        style={props.enableSkew ? {
                                            transformStyle: 'preserve-3d',
                                            transform: `rotateX(${lastItem[3][0] ?? 0}deg) rotateY(${lastItem[3][1] ?? 0}deg) scale(${lastItem[4] ?? 1})`,
                                            transformOrigin: 'center center',
                                            height: `${props.itemHeight ?? 75}px`,
                                        } : {}}
                                        filter={props.enableSkew ? `url(#${getFilterId("combinedFilter", 3 + index)})` : undefined}
                                    />        
                                </svg></div>
                                : <img style={{height: `${props.itemHeight ?? 75}px`, display: 'block', filter: (props.enableRandColor && (props.randColorEnabledIndices?.[props.toFindIndexToAnswerIndicesArray[lastItem[0]][lastItem[1] % props.toFindIndexToAnswerIndicesArray[lastItem[0]].length]] ?? false)) ? `hue-rotate(${lastItem[5]}deg)` : undefined}} src={getSrc(1, index, true)}></img>
                            )}
                            {props.answerIndexToText && <span>&nbsp;</span>}{<span className='p-old' style={{margin: 'auto', textAlign: 'left'}}>{!props.regionIsAnswer && props.regionIndexArray[lastItem[0]]?.toString()} {(props.answerIndexToLabelExtra)
                                ? props.answerIndexToLabelExtra(props.toFindIndexToAnswerIndicesArray[lastItem[0]][lastItem[1] % props.toFindIndexToAnswerIndicesArray[lastItem[0]].length])
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

export default RegionSelectionQuiz;
