import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './../us/Us.css';
import './../Xgeo.css';
import { BADS, CLICK_DRAG_DISTANCE_THRESHOLD, MAP_COLOR, MAP_HOVER_COLOR, MAP_LAST_COLOR, NICES } from '../constants';
import { randomElement } from '../helpers';
import { preloadImage } from '../../../common/preloadImage';
import { isMobile } from 'react-device-detect';
import { HOLDER_COLORS, REGION_INDEX_TO_BIT, REGISTRATION_STICKER_COLORS } from '../us/constants';
import { PLATE_TUPLE, PLATE_TYPE } from '../us/plate/constants';
import Plate from '../us/plate/Plate';
import MapWithInsets from '../us/MapWithInsets';
import ScrollingDisabler from '../../../common/ScrollingDisabler';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { MapParameters } from './RegionSelectionQuiz';


type LAST_PLATE_INFO = {
    region: string,
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

export interface LicensePlatesQuizProps {
    mapJsonSrc: any;
    useMapWithInsets?: boolean;
    mapParameters?: MapParameters;
    styleFunction?: (rsmKey: string, lastItemKeys: string[] | undefined, mouseDownPos?: [number, number] | null) => any;
    clickText: string;
    enableRegions: boolean[];
    enableOld: boolean;
    enableVanity: boolean;
    regionsBitFlag?: number[];
    regionIndexArray: string[],
    platesLibrary: Map<string, Map<PLATE_TYPE, PLATE_TUPLE[]>>;
    defaultPlateWidth: number;
    defaultPlateHeight: number;
    enableBlur?: boolean;
    enableSkew?: boolean;
    enableRandBlur?: boolean;
    enableLowRes?: boolean;
    enableRRSC?: boolean;
    streakKey: string;
}

const LicensePlatesQuiz = (props: LicensePlatesQuizProps): React.ReactElement => {
    const [toFind, setToFind] = useState<number>(0); 
    const [message, setMessage] = useState<string>("");
    const [messageColor, setMessageColor] = useState<string>("green");

    const [randBlur, setRandBlur] = useState<number>(10.0);
    const [rsc, setRSC] = useState<string>("#000000");
    const [rsc2, setRSC2] = useState<string>("#000000");
    const [hc, setHC] = useState<string>("black"); // holder color
    const [randomSepia, setRandomSepia] = useState<number>(0.0);
    const [randomBrightness, setRandomBrightness] = useState<number>(1.0);
    const [randomSkew, setRandomSkew] = useState<number[]>([0, 0]);
    const [randomScale, setRandomScale] = useState<number>(1.0);

    const [currentPlateWidth, setCurrentPlateWidth] = useState<number>(props.defaultPlateWidth);
    const [currentPlateHeight, setCurrentPlateHeight] = useState<number>(props.defaultPlateHeight);

    const [vanityOrOldIndex, setVanityOrOldIndex] = useState<number>(Math.floor(Math.random() * 100));
    const [index2, setIndex2] = useState<number>(Math.floor(Math.random() * 1000));
    const [currentType, setCurrentType] = useState<PLATE_TYPE>(PLATE_TYPE.REGULAR);

    const [lastPlates, setLastPlates] = useState<LAST_PLATE_INFO[]>([]);
    const [lastPlateKey, setLastPlateKey] = useState<string | undefined>(undefined);
    const [enablePPBlur, setEnablePPBlur] = useState<boolean>(false);

    const [streak, setStreak] = useState<number>(0);
    const [bestStreak, setBestStreak] = useState<number>(localStorage.getItem(props.streakKey) ? Number(localStorage.getItem(props.streakKey)) : 0);

    const [nextPlate, setNextPlate] = useState<NEXT_PLATE_INFO | undefined>(undefined);

    const [loading, setLoading] = useState<boolean>(true);

    const [isMobileDebug, setIsMobileDebug] = useState<boolean>(false);
    const [showDebugCheckbox, setShowDebugCheckbox] = useState<boolean>(isMobile);

    const [mouseDownPos, setMouseDownPos] = useState<[number, number] | null>(null);

    /* ----------------- */

    useEffect(() => {
        const handleKeyDown = (event: any) => {
            if (event.shiftKey && event.altKey && event.keyCode === 68) {
                event.preventDefault();
                setShowDebugCheckbox(!showDebugCheckbox);
                console.log('Debug mode enabled!');
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const getRandomEnabledStateIndexFast = (enableRegion: boolean[]): number | null => {
        if (!props.regionsBitFlag) return Math.floor(Math.random() * props.regionIndexArray.length);

        // Convert enableRegion array to a bit flag
        const enabledRegionBitFlag = enableRegion.reduce((acc, enabled, index) => {
          return enabled ? acc | REGION_INDEX_TO_BIT[index] : acc;
        }, 0);
        
        // If no regions enabled, return null
        if (enabledRegionBitFlag === 0) return null;
      
        // Find all props.regionIndexArray that match the enabled regions
        const candidateIndices = [];
        for (let i = 0; i < (props.regionsBitFlag).length; i++) {
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

    const [position, setPosition] = useState({
        coordinates: props.mapParameters?.center ?? [-105, 36],
        zoom: props.mapParameters?.zoom ?? 1,
    });

    const [hoveredElement, setHoveredElement] = useState<number | null>(null);

    useEffect(() => {
        setStreak(0);
        setBestStreak(localStorage.getItem(props.streakKey) ? Number(localStorage.getItem(props.streakKey)) : 0);
    }, [props.streakKey]);

    useEffect(() => {
        if(!isStateEnabled(props.enableRegions ?? [], nextPlate?.newt ?? 0)) {
            generateNewFind(true);
        }
        setStreak(0);
        setBestStreak(localStorage.getItem(props.streakKey) ? Number(localStorage.getItem(props.streakKey)) : 0);
    }, [JSON.stringify(props.enableRegions), props.enableSkew]);

    const handleMoveEnd = (pos: any) => {
        setPosition(pos);
    };

    const generateNewRandBlur = (): number => {
        return Math.random()*30+10;
    };

    const generateRandomParameters = (): void => {
        setRandBlur(props.enableRandBlur ? generateNewRandBlur() : 15);
        setRSC(randomElement(REGISTRATION_STICKER_COLORS));
        setRSC2(randomElement(REGISTRATION_STICKER_COLORS));
        setHC(randomElement(HOLDER_COLORS));
        setRandomSepia(Math.random() * 0.2);
        setRandomBrightness(Math.random() * 0.1 + 0.9);
        setRandomSkew([Math.random()*20-10, Math.random()*160-80]);
        setRandomScale(Math.random()*0.5+0.5);
        setIndex2(Math.floor(Math.random() * 1000));
    };

    const updateLastPlateInfo = () => {
        setLastPlates((prev) => {
            const newLastPlate = [...prev];
            const lastPlateTupleArray = props.platesLibrary.get(props.regionIndexArray[toFind])!.get(currentType)!;
            newLastPlate.unshift({
                region: props.regionIndexArray[toFind],
                type: currentType,
                tuple: lastPlateTupleArray[vanityOrOldIndex % lastPlateTupleArray.length],
                blur: props.enableBlur ? (props.enableRandBlur ? randBlur : 15) : 0,
                rsc: props.enableRRSC ? rsc : undefined,
                rsc2: props.enableRRSC ? rsc2 : undefined,
                hc: props.enableRRSC ? hc : undefined,
                sepia: props.enableRandBlur ? randomSepia : 0,
                brightness: props.enableRandBlur ? randomBrightness : 1,
                skew: props.enableSkew ? randomSkew : undefined,
                scale: props.enableSkew ? randomScale : 1,
                index2: index2,
            });
            if (lastPlates.length >= 5) {
                newLastPlate.pop();
            }
            return newLastPlate as LAST_PLATE_INFO[];
        });
        setLastPlateKey(`geo-${toFind}`);
    };

    function generateFirstFind() {
        let tries = 0;
        const oldToFind = toFind;
        while(tries < 1000) {
            const newt = getRandomEnabledStateIndexFast(props.enableRegions) ?? 0;
            if (props.platesLibrary.get(props.regionIndexArray[newt])) {
                let types = [PLATE_TYPE.REGULAR];
                if (props.enableOld && props.platesLibrary.get(props.regionIndexArray[newt])!.get(PLATE_TYPE.OLD)) {
                    types.push(PLATE_TYPE.OLD);
                }
                if (props.enableVanity && props.platesLibrary.get(props.regionIndexArray[newt])!.get(PLATE_TYPE.VANITY)) {
                    types.push(PLATE_TYPE.VANITY);
                }
                const newType = randomElement(types);
                const newVanityOrOldIndex = Math.floor(Math.random() * 100);
                generateRandomParameters();
                setToFind(newt);
                setCurrentType(newType);
                setVanityOrOldIndex(newVanityOrOldIndex);
                setCurrentPlateWidth(props.platesLibrary.get(props.regionIndexArray[newt])!.get(newType)![newVanityOrOldIndex % props.platesLibrary.get(props.regionIndexArray[newt])!.get(newType)!.length][6]?.[0] ?? props.defaultPlateWidth);
                setCurrentPlateHeight(props.platesLibrary.get(props.regionIndexArray[newt])!.get(newType)![newVanityOrOldIndex % props.platesLibrary.get(props.regionIndexArray[newt])!.get(newType)!.length][6]?.[1] ?? props.defaultPlateHeight);
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
            const newt = getRandomEnabledStateIndexFast(props.enableRegions) ?? 0;
            if (props.platesLibrary.get(props.regionIndexArray[newt])) {
                let types = [PLATE_TYPE.REGULAR];
                if (props.enableOld && props.platesLibrary.get(props.regionIndexArray[newt])!.get(PLATE_TYPE.OLD)) {
                    types.push(PLATE_TYPE.OLD);
                }
                if (props.enableVanity && props.platesLibrary.get(props.regionIndexArray[newt])!.get(PLATE_TYPE.VANITY)) {
                    types.push(PLATE_TYPE.VANITY);
                }
                if (loading) {
                    setLoading(false);
                }
                const newType = randomElement(types);
                const newVanityOrOldIndex = Math.floor(Math.random() * 100);
                const plateMap = props.platesLibrary.get(props.regionIndexArray[newt])!.get(newType)!;
                preloadImage(plateMap[newVanityOrOldIndex % plateMap.length][0]);
                preloadImage(plateMap[newVanityOrOldIndex % plateMap.length][1]);
                preloadImage(plateMap[newVanityOrOldIndex % plateMap.length][2]);
                if (nextPlate && !skipCurrentUpdate) {
                    generateRandomParameters();
                    setToFind(nextPlate!.newt);
                    setCurrentType(nextPlate!.type);
                    setVanityOrOldIndex(nextPlate!.vanityOrOldIndex);  
                    setCurrentPlateWidth(props.platesLibrary.get(props.regionIndexArray[nextPlate!.newt])!.get(nextPlate!.type)![nextPlate!.vanityOrOldIndex % props.platesLibrary.get(props.regionIndexArray[nextPlate!.newt])!.get(nextPlate!.type)!.length][6]?.[0] ?? props.defaultPlateWidth);
                    setCurrentPlateHeight(props.platesLibrary.get(props.regionIndexArray[nextPlate!.newt])!.get(nextPlate!.type)![nextPlate!.vanityOrOldIndex % props.platesLibrary.get(props.regionIndexArray[nextPlate!.newt])!.get(nextPlate!.type)!.length][6]?.[1] ?? props.defaultPlateHeight);
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
        if(!isStateEnabled(props.enableRegions, nextPlate?.newt ?? 0)) {
            generateNewFind(true);
        }
        setStreak(0);
        setBestStreak(localStorage.getItem(props.streakKey) ? Number(localStorage.getItem(props.streakKey)) : 0);
    }, [JSON.stringify(props.enableRegions), props.enableSkew]);

    useEffect(() => {
        setRandBlur(props.enableRandBlur ? generateNewRandBlur() : 15);
    }, [props.enableRandBlur]);

    useEffect(() => {
        setRSC(randomElement(REGISTRATION_STICKER_COLORS));
        setRSC2(randomElement(REGISTRATION_STICKER_COLORS));
        setHC(randomElement(HOLDER_COLORS));
    }, [props.enableRRSC]);

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
                localStorage.setItem(props.streakKey, (streak + 1).toString());
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

    useEffect(() => {
        generateNewFind();
    }, []);

    const currentPlate = useMemo(() => {
        if (loading) return null;
        
        return (
            <Plate
                platesLibrary={props.platesLibrary}
                defaultPlateDimensions={[props.defaultPlateWidth, props.defaultPlateHeight]}
                region={props.regionIndexArray[toFind]}
                type={currentType}
                vanityOrOldIndex={vanityOrOldIndex}
                show={false}
                blur={props.enableBlur ? (props.enableRandBlur ? randBlur : 15) : 0}
                rsc={props.enableRRSC ? rsc : undefined}
                rsc2={props.enableRRSC ? rsc2 : undefined}
                hc={props.enableRRSC ? hc : undefined}
                sepia={props.enableRandBlur ? randomSepia : 0}
                brightness={props.enableRandBlur ? randomBrightness : 1}
                skew={props.enableSkew ? randomSkew : undefined}
                scale={props.enableSkew ? randomScale : 1}
                lowRes={props.enableLowRes}
                index2={index2}
            />
        );
    }, [
        toFind, currentType, vanityOrOldIndex, 
        props.enableBlur, props.enableRandBlur, rsc, rsc2, hc, 
        randomSepia, randomBrightness, randomSkew, 
        randomScale, props.enableLowRes, index2, props.enableRRSC, 
        props.enableSkew, loading
    ]);

    const mapStyleFunction = useCallback((key: string, mouseDownPos?: [number, number] | null) => {
        return {
            default: { fill: (key === lastPlateKey) ? MAP_LAST_COLOR : MAP_COLOR, stroke: "#000000", outline: 'none' },
            hover: { fill: !mouseDownPos ? MAP_HOVER_COLOR : MAP_COLOR, stroke: "#000000", outline: 'none' },
            pressed: { fill: "green", outline: 'none' },
        };
    }, [lastPlateKey, mouseDownPos]);

    return (
        <div style={{height: '100%'}}>
            <div style={{paddingTop: '6px'}}>
                <p style={{display: 'inline'}}>{props.clickText} </p><button onClick={() => { setStreak(0); generateNewFind(); }}>Regenerate</button> <button onClick={giveUp}>Give up</button>
                <div style={{display: 'block', width: `${currentPlateWidth}px`, height: `${currentPlateHeight}px`, marginTop: '5px', border: "dashed 1px black"}}>
                    {currentPlate}
                </div>
                {(message !== "") && <p style={{color: messageColor}}>{message}</p>}
            </div>
            <div style={{paddingTop: '10px'}}>
                {props.useMapWithInsets ? <MapWithInsets clickHandler={handleClick} enableRegions={props.enableRegions} styleFunction={mapStyleFunction}/>
                : <ScrollingDisabler>
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
                                        style={
                                            props.styleFunction ? props.styleFunction(geo.rsmKey, undefined, mouseDownPos) : {
                                            default: { fill: MAP_COLOR, stroke: "#000000"},
                                            hover: { fill: "#efd900", stroke: "#000000"},
                                            pressed: { fill: "green" },
                                        }}
                                    />
                                ))
                        }
                    </Geographies>
                    </ZoomableGroup>
                </ComposableMap>
            </ScrollingDisabler>}
            </div>
            {lastPlates.length ? <div className="scrollable-content" style={{border: 'dashed 1px #808080', overflow: 'scroll', height: '250px', width: `${props.defaultPlateWidth + 50}px`, marginTop: '5px', paddingBottom: '5px', paddingLeft: '5px', paddingRight: '5px'}}>
                <p style={{marginBottom: '5px', textDecoration: 'underline'}}>Previous plates (P.P.):</p>
                <span>Distort<input type='checkbox' onChange={() => {setEnablePPBlur(!enablePPBlur);}} checked={enablePPBlur}></input></span>
                {lastPlates.map((lastPlate, index) => 
                    <div style={{paddingBottom: '5px'}}>
                    <Plate
                        platesLibrary={props.platesLibrary}
                        defaultPlateDimensions={[props.defaultPlateWidth, props.defaultPlateHeight]}
                        region={lastPlate.region}
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
                        lowRes={props.enableLowRes}
                        index2={lastPlate.index2}
                        showYears
                        show={!enablePPBlur}
                        svgFilterIndex={1 + index}
                    />
                    {
                        isMobileDebug && <p style={{color: 'red', width: '200px', display: 'inline'}}>{`
                            region: ${lastPlate.region}
                            type: ${lastPlate.type}
                            tuple: ${lastPlate.tuple}
                            blur: ${lastPlate.blur}
                            rsc: ${lastPlate.rsc}
                            rsc2: ${lastPlate.rsc2}
                            hc: ${lastPlate.hc}
                            sepia: ${lastPlate.sepia}
                            brightness: ${lastPlate.brightness}
                            skew: ${lastPlate.skew}
                            scale: ${lastPlate.scale}
                            index2: ${lastPlate.index2}
                        `}</p>
                    }
                    </div>
                )}
            </div> : <></>
            }
            {showDebugCheckbox && <div style={{position: 'absolute', bottom: '10px', right: '10px'}}>
                <input type='checkbox' onChange={() => {setIsMobileDebug(!isMobileDebug);}} checked={isMobileDebug}></input>Debug mode (mobile only)
            </div>}
        </div>
    );
};

export default LicensePlatesQuiz;
