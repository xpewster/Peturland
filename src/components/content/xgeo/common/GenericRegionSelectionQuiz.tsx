import React, { useEffect, useState } from 'react';
import './../Xgeo.css';
import { BADS, MAP_COLOR, MAP_HOVER_COLOR, NICES } from '../constants';
import { randomElement } from '../helpers';
import { ComposableMap, ZoomableGroup, Geographies, Geography } from 'react-simple-maps';
import ScrollingDisabler from '../../../common/ScrollingDisabler';
import { REGION_INDEX_TO_BIT } from '../us/constants';

export interface GenericRegionSelectionQuizProps {
    mapJsonSrc: any;
    clickText: string;
    regionIndexArray: string[];
    toFindIndexToRegionIndicesArray: number[][];
    toFindIndexToElement: (toFind: number) => React.ReactElement;
    streakKey: string;
    disallowRepeats?: boolean;
    enableRegions?: boolean[];
    regionsBitFlag?: number[];
}

const GenericRegionSelectionQuiz = (props: GenericRegionSelectionQuizProps): React.ReactElement => {

    const [toFind, setToFind] = useState<number>(Math.floor(Math.random() * props.toFindIndexToRegionIndicesArray.length));
    const [message, setMessage] = useState<string>("");
    const [messageColor, setMessageColor] = useState<string>("green");

    const [streak, setStreak] = useState<number>(0);
    const [bestStreak, setBestStreak] = useState<number>(localStorage.getItem(props.streakKey) ? Number(localStorage.getItem(props.streakKey)) : 0);

    const [position, setPosition] = useState({
        coordinates: [-105, 36],
        zoom: 1
    });

    useEffect(() => {
        setStreak(0);
        setBestStreak(localStorage.getItem(props.streakKey) ? Number(localStorage.getItem(props.streakKey)) : 0);
    }, [props.streakKey]);

    const handleMoveEnd = (pos: any) => {
        setPosition(pos);
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
        // updateLastPlateInfo();
        generateNewFind();
    }

    const getRandomEnabledStateIndexFast = (enableRegion: boolean[]): number | null => {
        if (!props.regionsBitFlag) return null;

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

    const isStateEnabled = (enableRegion: boolean[], index: number): boolean => {
        if (!props.regionsBitFlag) return true;

        const enabledRegionBitFlag = enableRegion.reduce((acc, enabled, index) => {
        return enabled ? acc | REGION_INDEX_TO_BIT[index] : acc;
        }, 0);
        
        if (enabledRegionBitFlag === 0) return false;

        return !!(props.regionsBitFlag[index] & enabledRegionBitFlag);
    };
    

    function generateNewFind() {
        let tries = 0;
        const oldToFind = toFind;
        while(tries < 1000) {
            const newt = getRandomEnabledStateIndexFast(props.enableRegions ?? []) ?? 0;
            if (oldToFind === newt && props.disallowRepeats) {
                tries++;
                continue;
            }
            setToFind(newt);
            break;
        }
    }

    function handleClick(key: string) {
        if (props.toFindIndexToRegionIndicesArray[toFind].includes(Number(key.split("-")[1]))) {
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
            generateNewFind();
        } else {
            lose();
        }
    }

    return (
        <div style={{padding: 0, margin: 0, width: '100%'}}>
            <p style={{display: 'inline'}}>{props.clickText} </p><button onClick={() => { setStreak(0); generateNewFind(); }}>Regenerate</button> <button onClick={giveUp}>Give up</button>
            {(message !== "") && <p style={{color: messageColor}}>{message}</p>}
            <div style={{position: 'relative', width: '100%', paddingTop: '5px'}}>
            <ScrollingDisabler>
                <ComposableMap 
                    projection="geoMercator"
                    projectionConfig={{
                        scale: 400,
                        center: [-105, 36],
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
                        minZoom={0.5}
                        maxZoom={100}
                        translateExtent={[
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
                                            onClick={() => { handleClick(geo.rsmKey); }} 
                                            style={{
                                                default: { fill: MAP_COLOR, stroke: "#000000"},
                                                hover: { fill: MAP_HOVER_COLOR, stroke: "#000000"},
                                                pressed: { fill: "green" },
                                            }}
                                        />
                                    ))
                            }
                        </Geographies>
                    </ZoomableGroup>
                </ComposableMap>
            </ScrollingDisabler>
            </div>
        </div>
    );

    return <></>
};

export default GenericRegionSelectionQuiz;
