import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps"
import brazil_phone_codes from '../../../../assets/geojsons/brazil_phone_codes.json';
import './../Xgeo.css';
import { BADS, NICES } from '../constants';
import { randomElement } from '../helpers';
import { PHONE_CODES } from './constants';

const Brazil = (): React.ReactElement => {
    const [toFind, setToFind] = useState<number>(Math.floor(Math.random() * PHONE_CODES.length)); // phone code to find
    const [message, setMessage] = useState<string>("");
    const [messageColor, setMessageColor] = useState<string>("green");
    const [enablePrefix, setEnablePrefix] = useState<boolean[]>(Array(9).fill(true));

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
        const oldToFind = toFind;
        while(true) {
            const newt = Math.floor(Math.random() * PHONE_CODES.length);
            if (enablePrefix[Math.trunc(PHONE_CODES[newt]/10) - 1] && oldToFind !== newt) {
                setToFind(newt);
                break;
            }
        }
    }

    function handleClick(key: string) {
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

    return (
        <div style={{height: '100%', paddingTop: '10px'}}>
            <p>Bra71l area codes</p>
            <div>
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
            <ComposableMap 
            projectionConfig={{
                scale: 800,
                center: [-55, -15],
            }} style={{
                width: "100%",
                height: "auto",
            }}>
                <ZoomableGroup 
                    zoom={position.zoom}
                    center={position.coordinates as any}
                    onMoveEnd={handleMoveEnd}
                >
                    <Geographies geography={brazil_phone_codes}>
                        {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography key={geo.rsmKey} geography={geo} onClick={() => { handleClick(geo.rsmKey); }} style={{
                                default: { fill: "#06F" },
                                hover: { fill: "#04D" },
                                pressed: { fill: "green" },
                            }}/>
                        ))
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </div>
    );
};

export default Brazil;
