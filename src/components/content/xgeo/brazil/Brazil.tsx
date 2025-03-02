import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps"
import brazil_phone_codes from '../../../../assets/geojsons/brazil_phone_codes.json';
import './../Xgeo.css';
import { BADS, NICES } from '../constants';
import { randomElement } from '../helpers';
import { PHONE_CODES, STATE_COLORS } from './constants';
import dots from '../../../../assets/dots.png';
import brazilcheat from '../../../../assets/brazilcheat.png';
import ZoomableImage from '../../../common/ZoomableImage';
import ScrollingDisabler from '../../../common/ScrollingDisabler';

const Brazil = (): React.ReactElement => {
    const MAP_COLOR = "#FF5533";

    const [toFind, setToFind] = useState<number>(Math.floor(Math.random() * PHONE_CODES.length)); // phone code to find
    const [message, setMessage] = useState<string>("");
    const [messageColor, setMessageColor] = useState<string>("green");
    const [enablePrefix, setEnablePrefix] = useState<boolean[]>(Array(9).fill(true));
    const [enableStates, setEnableStates] = useState<boolean>(true);
    const [enableBorders, setEnableBorders] = useState<boolean>(true);
    const [showCheat, setShowCheat] = useState<boolean>(false);

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
            const newt = Math.floor(Math.random() * PHONE_CODES.length);
            if (enablePrefix[Math.trunc(PHONE_CODES[newt]/10) - 1] && oldToFind !== newt) {
                setToFind(newt);
                break;
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
        const newEnablePrefix = enablePrefix.map((val, i) => {if (i === index) { return !val; } else { return val; }}); setEnablePrefix(newEnablePrefix);
    }

    function changeSetting(index: number) {
        switch (index) {
            case 0:
                setEnableStates(!enableStates);
                break;
            case 1:
                setEnableBorders(!enableBorders);
                break;
            case 2:
                setShowCheat(!showCheat);
                break;
        }
    }

    function getCellColor(key: string): string {
        if (enableStates) {
            const index = Number(key.split("-")[1]);
            return STATE_COLORS[index];
        }
        return MAP_COLOR;
    }

    function getStrokeWidth(key: string): string {
        const num = Number(key.split("-")[1])
        if (num < 14) {
            if (num > 8) {
                return "0.2px"
            }
            return "0.8px";
        } else if (num >= STATE_COLORS.length - 9) {
            return "1.3px";
        }
        return "1px";
    }

    return (
        <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <p>Bra71l area codes</p>
            <div>
                Show states<input type="checkbox" onChange={() => {changeSetting(0)}} checked={enableStates}></input>
                Show area borders<input type="checkbox" onChange={() => {changeSetting(1)}} checked={enableBorders}></input>
            </div>
            <div style={{paddingBottom: '5px'}}>
                1<input type="checkbox" onChange={() => {handleCheck(0)}} checked={enablePrefix[0]}></input>
                2<input type="checkbox" onChange={() => {handleCheck(1)}} checked={enablePrefix[1]}></input>
                3<input type="checkbox" onChange={() => {handleCheck(2)}} checked={enablePrefix[2]}></input>
                4<input type="checkbox" onChange={() => {handleCheck(3)}} checked={enablePrefix[3]}></input>
                5<input type="checkbox" onChange={() => {handleCheck(4)}} checked={enablePrefix[4]}></input>
                6<input type="checkbox" onChange={() => {handleCheck(5)}} checked={enablePrefix[5]}></input>
                7<input type="checkbox" onChange={() => {handleCheck(6)}} checked={enablePrefix[6]}></input>
                8<input type="checkbox" onChange={() => {handleCheck(7)}} checked={enablePrefix[7]}></input>
                9<input type="checkbox" onChange={() => {handleCheck(8)}} checked={enablePrefix[8]}></input>
            </div>
            <p style={{display: 'inline'}}>Click on the region for phone code <span className='guess-text'>{PHONE_CODES[toFind]}</span> </p><button onClick={generateNewFind}>Regenerate</button>
            {(message !== "") && <p style={{color: messageColor}}>{message}</p>}
            <ScrollingDisabler>
                <ComposableMap 
                    projection="geoMercator"
                    projectionConfig={{
                        scale: 800,
                        center: [-55, -15],
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
                    >
                        <Geographies geography={brazil_phone_codes}>
                            {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography key={geo.rsmKey} geography={geo} onClick={() => { handleClick(geo.rsmKey); }} style={{
                                    default: { fill: getCellColor(geo.rsmKey), stroke: enableBorders ? "#000000" : getCellColor(geo.rsmKey), strokeWidth: enableBorders ? '1px' : getStrokeWidth(geo.rsmKey)},
                                    hover: { fill: enableBorders ? "#efd900" : getCellColor(geo.rsmKey), stroke: enableBorders ? "#000000" : getCellColor(geo.rsmKey), strokeWidth: enableBorders ? '1px' : getStrokeWidth(geo.rsmKey)},
                                    pressed: { fill: "green" },
                                }}/>
                            ))
                            }
                        </Geographies>
                    </ZoomableGroup>
                </ComposableMap>
            </ScrollingDisabler>
            <img style={{position: 'absolute', left: '0px', top: message ? '566px' : '516px'}} src={dots}></img>
            <div style={{paddingTop: '40px'}}>
                <div style={{display: 'inline'}}>
                    Hide cheatsheet<input type="checkbox" onChange={() => {changeSetting(2)}} checked={!showCheat}></input><span style={{color: 'darkblue'}}>    Zoom in!</span> 
                </div>
            </div>
            <div onScroll={(event) => { event.preventDefault(); }}>
                <ZoomableImage src={brazilcheat} divProps={{border: 'dashed 1px black', width: '80%'}} imageStyleProps={{display: 'block', width: '100%', filter: showCheat ? '' : 'blur(3px)'}}/>
            </div>
            From <a href='https://www.plonkit.net/brazil' target="_blank" rel="noopener noreferrer">Plonkit</a>
        </div>
    );
};

export default Brazil;
