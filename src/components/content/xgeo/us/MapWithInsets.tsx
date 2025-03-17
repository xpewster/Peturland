import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import usa from '../../../../assets/geojsons/mergedfile2_goodcopy.json';
import ScrollingDisabler from '../../../common/ScrollingDisabler';
import { isStateEnabled } from './constants';
import { MAP_COLOR } from '../constants';

export interface MapWithInsetsProps {
    clickHandler: (key: string) => void;
    enableRegions: boolean[];
}

const MapWithInsets = (props: MapWithInsetsProps) => {
    // Use the same position state for the main map
    const [position, setPosition] = useState({
        coordinates: [-105, 36],
        zoom: 1
    });
    const [position2, setPosition2] = useState({
        coordinates: [145.7, 15.2], // Centered on NMI
        zoom: 1
    });

    const handleMoveEnd = (pos: any) => {
        setPosition(pos);
    };
    const handleMoveEnd2 = (pos: any) => {
        setPosition2(pos);
    };

    // Function to get color for territories based on your logic
    const getCellColor = (rsmKey: string) => {
        return MAP_COLOR; // Default color
    };

    const handleClick = (rsmKey: string) => {
        props.clickHandler(rsmKey);
    };

    const getKeyNum = (rsmKey: string) => {
        return Number(rsmKey.split('-')[1]);
    };

    const filterFunction = (geo: any) => {
        if (geo.properties.NAME === "Northern Mariana Islands" || geo.properties.NAME === "Guam" || geo.properties.NAME === "American Samoa") {
            return false;
        } else if (!props.enableRegions[7]) {
            if (geo.properties.NAME === "Puerto Rico" || geo.properties.NAME === "U.S. Virgin Islands") {
                return false;
            }
        }
        if (!props.enableRegions[5] && getKeyNum(geo.rsmKey) >= 84 && getKeyNum(geo.rsmKey) <= 97) {
            return false; // canada
        }
        if (!props.enableRegions[6] && getKeyNum(geo.rsmKey) >= 52 && getKeyNum(geo.rsmKey) <= 83) {
            return false; // mexico
        }
        return isStateEnabled(props.enableRegions, getKeyNum(geo.rsmKey));
    }

    return (
        <div style={{ position: 'relative', width: '100%' }}>
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
                    <Geographies geography={usa}>
                        {({ geographies }) => 
                            geographies
                                .filter(filterFunction)
                                .map(geo => (
                                    <Geography 
                                        key={geo.rsmKey} 
                                        geography={geo} 
                                        onClick={() => { handleClick(geo.rsmKey); }} 
                                        style={{
                                            default: { fill: getCellColor(geo.rsmKey), stroke: "#000000"},
                                            hover: { fill: "#efd900", stroke: "#000000"},
                                            pressed: { fill: "green" },
                                        }}
                                    />
                                ))
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        {props.enableRegions[7] &&
            // Guam/NMI Inset
            <>
            <div style={{
                position: 'absolute',
                bottom: '0px',
                left: '80px',
                width: '80px',
                height: '80px',
                border: '1px solid #000',
                WebkitClipPath: 'polygon(0% 0%, 74% 0%, 100% 26%, 100% 100%, 0% 100%)',
                clipPath: 'polygon(0% 0%, 74% 0%, 100% 26%, 100% 100%, 0% 100%)',
                overflow: 'hidden',
                backgroundColor: '#fff'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '20px', // Adjust based on your slant size
                    height: '20px', // Adjust based on your slant size
                    overflow: 'hidden',
                    zIndex: 10,
                    pointerEvents: 'none'
                }}>
                    <div style={{
                        position: 'relative',
                        top: 0,
                        right: 0,
                        width: '1px',
                        height: '42px', // Slightly longer than needed
                        backgroundColor: '#000',
                        transform: 'rotate(-45deg)',
                        transformOrigin: 'top right'
                    }} />
                </div>
                <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{
                        scale: 4000,
                        center: [145.7, 15.2], // Centered on NMI
                    }}
                    style={{ width: "100%", height: "100%" }}
                >
                    <ZoomableGroup 
                        zoom={position2.zoom}
                        center={position2.coordinates as any}
                        onMoveEnd={handleMoveEnd2}
                        minZoom={0.1}
                        maxZoom={10}
                        translateExtent={[
                            [-200, -200],
                            [1000, 700]
                        ]}
                    >
                    <Geographies geography={usa}>
                        {({ geographies }) => 
                            geographies
                                .filter(geo => geo.properties.NAME === "Northern Mariana Islands" || geo.properties.NAME === "Guam")
                                .map(geo => (
                                    <Geography 
                                        key={geo.rsmKey} 
                                        geography={geo} 
                                        onClick={() => { handleClick(geo.rsmKey); }} 
                                        style={{
                                            default: { fill: getCellColor(geo.rsmKey), stroke: "#000000"},
                                            hover: { fill: "#efd900", stroke: "#000000"},
                                            pressed: { fill: "green" },
                                        }}
                                    />
                                ))
                        }
                    </Geographies>
                    </ZoomableGroup>
                </ComposableMap>
                <div style={{
                    position: 'absolute',
                    bottom: '5px',
                    left: '5px',
                    fontSize: '10px',
                    color: '#000',
                    padding: '2px 4px',
                }}>
                    Guam/N.M.I.
                </div>
            </div>
            {/* American Samoa Inset */}
            <div style={{
                position: 'absolute',
                bottom: '0px',
                left: '0px',
                width: '80px',
                height: '80px',
                border: '1px solid #000',
                overflow: 'hidden',
                backgroundColor: '#fff'
            }}>
                <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{
                        scale: 24000,
                        center: [-170.1, -14.3], // Centered on American Samoa
                    }}
                    style={{ width: "100%", height: "100%" }}
                >
                    <Geographies geography={usa}>
                        {({ geographies }) => 
                            geographies
                                .filter(geo => geo.properties.NAME === "American Samoa")
                                .map(geo => (
                                    <Geography 
                                        key={geo.rsmKey} 
                                        geography={geo} 
                                        onClick={() => { handleClick(geo.rsmKey); }} 
                                        style={{
                                            default: { fill: getCellColor(geo.rsmKey), stroke: "#000000"},
                                            hover: { fill: "#efd900", stroke: "#000000"},
                                            pressed: { fill: "green" },
                                        }}
                                    />
                                ))
                        }
                    </Geographies>
                </ComposableMap>
                <div style={{
                    position: 'absolute',
                    bottom: '5px',
                    left: '5px',
                    fontSize: '10px',
                    color: '#000',
                    padding: '2px 4px',
                }}>
                    American Samoa
                </div>
            </div>
            </>
            }
            </ScrollingDisabler>
        </div>
    );
};

export default MapWithInsets;
