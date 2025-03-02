import React, { useEffect, useState } from 'react';
import './Us.css';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps"
import usa from '../../../../assets/geojsons/u_20m.json';
import './../Xgeo.css';
import { BADS, NICES } from '../constants';
import { randomElement } from '../helpers';
import { QuizType, STATE_NAMES, STATES } from './constants';
import Plate from './plate/Plate';
import dots from '../../../../assets/dots.png';
import canada from '../../../../assets/canadamf.gif';
import mexico from '../../../../assets/mexico.gif';
import { PLATE_TUPLE, PLATE_TYPE, PLATES } from './plate/constants';
import ScrollingDisabler from '../../../common/ScrollingDisabler';

export interface UsProps {
    quizType: QuizType;
}

const Us = (props: UsProps): React.ReactElement => {
    const MAP_COLOR = "#FF5533";

    const [toFind, setToFind] = useState<number>(37); // phone code to find
    const [message, setMessage] = useState<string>("");
    const [messageColor, setMessageColor] = useState<string>("green");
    const [enableRegion, setEnableRegion] = useState<boolean[]>(Array(9).fill(true));
    const [enableBlur, setEnableBlur] = useState<boolean>(true);
    const [enableSkew, setEnableSkew] = useState<boolean>(false);
    const [enableRandBlur, setEnableRandBlur] = useState<number>(10);
    const [enableVanity, setEnableVanity] = useState<boolean>(false);
    const [enableOld, setEnableOld] = useState<boolean>(true);
    const [enableRRSC, setEnableRRSC] = useState<boolean>(false); // random registration sticker color
    const [vanityOrOldIndex, setVanityOrOldIndex] = useState<number>(Math.floor(Math.random() * 100));
    const [currentType, setCurrentType] = useState<PLATE_TYPE>(PLATE_TYPE.REGULAR);

    const [lastPlate, setLastPlate] = useState<PLATE_TUPLE | undefined>(undefined);

    const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

    function handleMoveEnd(position: any) {
      setPosition(position);
    }

    function generateNewFind() {
        let tries = 0;
        const oldToFind = toFind;
        while(tries < 1000) {
            const newt = Math.floor(Math.random() * STATES.length);
            if (PLATES.get(STATES[newt])) {
                let types = [PLATE_TYPE.REGULAR];
                if (enableOld) {
                    types.push(PLATE_TYPE.OLD);
                }
                if (enableVanity) {
                    types.push(PLATE_TYPE.VANITY);
                }
                const newType = types[Math.floor(Math.random() * types.length)];
                if (PLATES.get(STATES[newt])!.get(newType)) {
                    setCurrentType(newType);
                    setVanityOrOldIndex(Math.floor(Math.random() * 100));
                    setToFind(newt);
                    break;
                }
            }
            tries++;
        }
    }

    function handleClick(key: string) {
        if (`geo-${toFind}` === key) {
            let newMessage;
            do {
                newMessage = randomElement(NICES)
            } while (newMessage === message)
            setMessage(newMessage);
            setMessageColor("green");
            const lastPlateTupleArray = PLATES.get(STATES[toFind])!.get(currentType)!;
            setLastPlate(lastPlateTupleArray[vanityOrOldIndex % lastPlateTupleArray.length]);
            generateNewFind();
        } else {
            let newMessage;
            do {
                newMessage = randomElement(BADS)
            } while (newMessage === message)
            setMessage(newMessage);
            setMessageColor("red");
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
                setEnableRandBlur(enableRandBlur ? 0 : Math.random()*14+15);
                break;
            case 3:
                setEnableVanity(!enableVanity);
                break;
            case 4:
                setEnableOld(!enableOld);
                break;
            case 5:
                setEnableRRSC(!enableRRSC);
                break;
        }
    }

    function getCellColor(key: string): string {
        // if (enableBlur) {
        //     const index = Number(key.split("-")[1]);
        //     return STATE_COLORS[index];
        // }
        return MAP_COLOR;
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
                    Vanity plates<input disabled type="checkbox" onChange={() => {changeSetting(3)}} checked={enableVanity}></input>
                    Old plates (2000-Present)<input type="checkbox" onChange={() => {changeSetting(4)}} checked={enableOld}></input>
                </div>
                <div>
                    Blur plate<input type="checkbox" onChange={() => {changeSetting(0)}} checked={enableBlur}></input>
                    Use random skew<input type="checkbox" disabled onChange={() => {changeSetting(1)}} checked={enableSkew}></input>
                    Use random blur<input type="checkbox" onChange={() => {changeSetting(2)}} checked={!!enableRandBlur}></input>
                    Random registration sticker color<input disabled type="checkbox" onChange={() => {changeSetting(5)}} checked={enableRRSC}></input>
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
                    <img style={{height: '15px'}} src={canada}></img> Canada<img style={{height: '15px'}} src={canada}></img><input disabled type="checkbox" onChange={() => {handleCheck(5)}} checked={!enableRegion[5]}></input>
                    <img style={{height: '15px'}} src={mexico}></img> Mexico <img style={{height: '15px'}} src={mexico}></img><input disabled type="checkbox" onChange={() => {handleCheck(6)}} checked={!enableRegion[6]}></input>
                    U.S. Territories<input type="checkbox" onChange={() => {handleCheck(7)}} checked={enableRegion[7]}></input>
                </div> 
            </div>
            <img style={{position: 'absolute', left: '-2px', top: '234px'}} src={dots}></img>
            <div style={{paddingTop: '6px'}}>
                <p style={{display: 'inline'}}>Click on the right state! </p><button onClick={generateNewFind}>Regenerate</button> <button onClick={generateNewFind}>Give up</button>
                <div style={{display: 'block', paddingTop: "5px", width: '150px', border: "dashed 1px black"}}>
                    <Plate state={STATES[toFind]} type={currentType} vanityOrOldIndex={vanityOrOldIndex} show={false} blur={enableBlur ? (enableRandBlur ? enableRandBlur : 15) : 0}/>
                </div>
                {(message !== "") && <p style={{color: messageColor}}>{message}</p>}
            </div>
            <div style={{paddingTop: '10px'}}>
                <ScrollingDisabler>
                    <ComposableMap 
                        projection="geoMercator"
                        projectionConfig={{
                            scale: 400,
                            center: [-100, 40],
                        }} style={{
                            width: "100%",
                            height: "auto",
                            border: "solid 1px black"
                        }}
                    >
                        <ZoomableGroup 
                            zoom={position.zoom}
                            center={position.coordinates as any}
                            onMoveEnd={handleMoveEnd}
                            maxZoom={100}
                        >
                            <Geographies geography={usa}>
                                {({ geographies }) =>
                                geographies.map((geo) => (
                                    (geo.rsmKey !== 'geo-19' || enableRegion[7]) &&
                                    <Geography key={geo.rsmKey} geography={geo} onClick={() => { handleClick(geo.rsmKey); }} style={{
                                        default: { fill: getCellColor(geo.rsmKey), stroke: "#000000"},
                                        hover: { fill: "#efd900", stroke: "#000000"},
                                        pressed: { fill: "green" },
                                    }}/>
                                ))
                                }
                            </Geographies>
                        </ZoomableGroup>
                    </ComposableMap>
                </ScrollingDisabler>
            </div>
            {lastPlate && <div>
                <p>Previous plate (P.P.):</p>
                <Plate tuple={lastPlate} showYears show />
            </div>}
        </div>
    );
};

export default Us;
