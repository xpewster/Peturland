import React, { useState } from 'react';
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

export interface UsProps {
    quizType: QuizType;
}

const Us = (props: UsProps): React.ReactElement => {
    const MAP_COLOR = "#FF5533";

    const [toFind, setToFind] = useState<number>(Math.floor(Math.random() * STATES.length)); // phone code to find
    const [message, setMessage] = useState<string>("");
    const [messageColor, setMessageColor] = useState<string>("green");
    const [enablePrefix, setEnablePrefix] = useState<boolean[]>(Array(9).fill(true));
    const [enableBlur, setEnableBlur] = useState<boolean>(true);
    const [enableSkew, setEnableSkew] = useState<boolean>(false);
    const [enableRandBlur, setEnableRandBlur] = useState<boolean>(true);
    const [enableVanity, setEnableVanity] = useState<boolean>(true);
    const [enableOld, setEnableOld] = useState<boolean>(true);

    const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

    function handleZoomIn() {
      if (position.zoom >= 4) return;
      setPosition((pos: any) => ({ ...pos, zoom: pos.zoom * 2 }));
    }
  
    function handleZoomOut() {
      if (position.zoom <= 1) return;
      setPosition((pos: any) => ({ ...pos, zoom: pos.zoom / 2 }));
    }
  
    function handleMoveEnd(position: any) {
      setPosition(position);
    }

    function generateNewFind() {
        let tries = 0;
        const oldToFind = toFind;
        while(tries < 1000) {
            const newt = Math.floor(Math.random() * STATES.length);
            if (true) {
                setToFind(newt);
                break;
            }
            tries++;
        }
    }

    function handleClick(key: string) {
        console.log(STATES[Number(key.split('-')[1])].toString())
        if (`geo-${toFind}` === key) {
            setMessage(randomElement(NICES));
            setMessageColor("green");
            generateNewFind();
        } else {
            setMessage(randomElement(BADS));
            setMessageColor("red");
        }
    }

    function handleCheck(index: number) {
        const newEnablePrefix = enablePrefix.map((val, i) => {if (i === index) { return !val; } else { return val; }}); setEnablePrefix(newEnablePrefix);
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
                setEnableRandBlur(!enableRandBlur);
                break;
            case 3:
                setEnableVanity(!enableVanity);
                break;
            case 4:
                setEnableOld(!enableOld);
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

    return (
        <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <p style={{paddingBottom: '10px'}}>US license plates</p>
            <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
            <div>
                <div>
                    Vanity plates<input type="checkbox" onChange={() => {changeSetting(3)}} checked={enableVanity}></input>
                    Old plates (2000-Present)<input type="checkbox" onChange={() => {changeSetting(4)}} checked={enableOld}></input>
                </div>
                <div>
                    Blur plate<input type="checkbox" onChange={() => {changeSetting(0)}} checked={enableBlur}></input>
                    Use random skew<input type="checkbox" disabled onChange={() => {changeSetting(1)}} checked={enableSkew}></input>
                    Use random blur<input type="checkbox" onChange={() => {changeSetting(2)}} checked={enableRandBlur}></input>
                </div>
            </div>
            <img style={{position: 'absolute', left: '-2px', top: '156px'}} src={dots}></img>
            <div style={{paddingTop: '10px', paddingBottom: '5px', paddingRight: '0px'}}>
                <div>
                    Northeast<input type="checkbox" onChange={() => {handleCheck(0)}} checked={enablePrefix[0]}></input>
                    Deep South<input type="checkbox" onChange={() => {handleCheck(1)}} checked={enablePrefix[1]}></input>
                    Southwest<input type="checkbox" onChange={() => {handleCheck(2)}} checked={enablePrefix[2]}></input>
                    West<input type="checkbox" onChange={() => {handleCheck(3)}} checked={enablePrefix[3]}></input>
                    Midwest<input type="checkbox" onChange={() => {handleCheck(4)}} checked={enablePrefix[4]}></input>
                </div>
                <div style={{paddingTop: '10px'}}>
                    <img style={{height: '15px'}} src={canada}></img> Canada<img style={{height: '15px'}} src={canada}></img><input type="checkbox" onChange={() => {handleCheck(4)}} checked={enablePrefix[5]}></input>
                    <img style={{height: '15px'}} src={mexico}></img> Mexico <img style={{height: '15px'}} src={mexico}></img><input type="checkbox" onChange={() => {handleCheck(4)}} checked={enablePrefix[6]}></input>
                    U.S. Territories<input type="checkbox" onChange={() => {handleCheck(4)}} checked={enablePrefix[6]}></input>
                </div> 
            </div>
            <img style={{position: 'absolute', left: '-2px', top: '214px'}} src={dots}></img>
            <div style={{paddingTop: '6px'}}>
                <p style={{display: 'inline'}}>Click on the right state! </p><button onClick={generateNewFind}>Regenerate</button> <button onClick={generateNewFind}>Give up</button>
                <div style={{display: 'block', paddingTop: "5px", width: '150px', border: "dashed 1px black"}}>
                    <Plate state={STATE_NAMES.MAINE} blur={10}/>
                </div>
                {(message !== "") && <p style={{color: messageColor}}>{message}</p>}
            </div>
            <div style={{paddingTop: '10px'}}>
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
                                <Geography key={geo.rsmKey} geography={geo} onClick={() => { handleClick(geo.rsmKey); }} style={{
                                    default: { fill: getCellColor(geo.rsmKey), stroke: "#000000"},
                                    hover: { fill: enableSkew ? "#efd900" : getCellColor(geo.rsmKey), stroke: "#000000"},
                                    pressed: { fill: "green" },
                                }}/>
                            ))
                            }
                        </Geographies>
                    </ZoomableGroup>
                </ComposableMap>
            </div>
        </div>
    );
};

export default Us;
