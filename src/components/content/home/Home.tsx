import React from 'react';
import fish from '../../../assets/fish1.gif';
import bar from '../../../assets/bar.png';
import barflip from '../../../assets/barflip.png';
import filebox from '../../../assets/filebox.png';
import { Link } from 'react-router';
import dots from '../../../assets/dots.png';
import home from '../../../assets/home.png';
import house from '../../../assets/gifs/house02.gif';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import texas from '../../../assets/geojsons/texas.json';
import washington from '../../../assets/geojsons/washington.json';
import { MAP_COLOR } from '../xgeo/constants';

const Home = (): React.ReactElement => {
    const handleClickWA = () => {
        window.open('https://en.wikipedia.org/wiki/Washington_(state)', '_blank');
    };

    const handleClickTX = () => {
        window.open('https://en.wikipedia.org/wiki/Texas', '_blank');
    };

    return (
        <div style={{position: 'relative'}}>
            {/* <div style={{height: '20px'}}>
                <div style={{paddingTop: '2px'}}>
                    <div style={{left: '20px'}} className='fileboxlink'><p className='fileboxlink'>Home</p></div>
                </div>
                <img className='filebox' src={filebox}></img>
            </div> */}
            <img src={home}></img>
            <div style={{position: 'absolute', padding: '0', top: '30px', left: '10px', width: '306px', height: '329px'}}>
                {/* <img style={{position: 'absolute', left: '-2px', top: '70px'}} src={dots}></img> */}
                <p style={{paddingTop: '2px', paddingLeft: '14px', marginTop: 0}}><span style={{textDecoration: 'underline'}}>H</span>ome</p>
                <p style={{paddingTop: '20px', paddingLeft: '10px'}}>the webmaster's little <img style={{height: '15px'}} src={house}></img> home <img style={{height: '15px'}} src={house}></img> {'on the internet 8}'}</p>
                {/* <img style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}} src={fish}></img> */}
                {/* <img style={{display: 'block', position: 'absolute', top: '120px', left: '-100px', clipPath: 'rect(0px 100% 100% 102px)'}} src={bar}></img>
                <p className='bartext' style={{position: 'absolute', top: '110px', left: '40px'}}>what youll find</p>
                {/* <img style={{display: 'block', position: 'absolute', top: '300px', right: '-140px', clipPath: 'rect(0px 272px 100% 0px)'}} src={barflip}></img>
                <p className='bartext' style={{position: 'absolute', top: '290px', right: '40px'}}>what you <span style={{textDecoration: 'underline'}}>WONT</span> find</p> */}
                {/* <img style={{display: 'block', position: 'absolute', top: '450px', left: '-100px', clipPath: 'rect(0px 100% 100% 102px)'}} src={bar}></img>
                <p className='bartext' style={{position: 'absolute', top: '440px', left: '90px'}}>what you <span style={{textDecoration: 'underline'}}>WONT</span> find</p> } */}
            </div>
            <div style={{position: 'absolute', padding: '0', top: '171px', left: '124px', width: '326px', height: '329px'}}>
                <p style={{paddingTop: '2px', paddingLeft: '14px', marginTop: 0}}><span style={{textDecoration: 'underline'}}>W</span>hat you'll find</p>
                <ul style={{paddingTop: '20px', paddingLeft: '20px'}}>
                    <li>a yearning for the color and character of the past</li>
                    <li>bits and pieces from the webmaster's life (not too much though..)</li>
                    <li>some works..</li>
                    <li>geography quizzes (hello GeoGuessr friends! click xgeo {'<--'})</li>
                </ul>
                <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{
                        scale: 3200,
                        center: [-124, 44],
                    }} style={{
                        width: "40%",
                        height: "145px",
                        border: "0"
                    }}
                >
                    <Geographies geography={washington}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography key={geo.rsmKey} geography={geo} onClick={handleClickWA} style={{
                                    default: { fill: MAP_COLOR, stroke: "#000000", strokeWidth:'4px'},
                                    hover: { fill: "#efd900", stroke: "#000000", strokeWidth: '4px'},
                                }}/>
                            ))
                        }
                    </Geographies>
                </ComposableMap>
                <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{
                        scale: 2400,
                        center: [-98, 31],
                    }} style={{
                        width: "50%",
                        height: "145px",
                        border: "0"
                    }}
                >
                    <Geographies geography={texas}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography key={geo.rsmKey} geography={geo} onClick={handleClickTX}  style={{
                                    default: { fill: MAP_COLOR, stroke: "#000000", strokeWidth:'4px'},
                                    hover: { fill: "#efd900", stroke: "#000000", strokeWidth: '4px'},
                                }}/>
                            ))
                        }
                    </Geographies>
                </ComposableMap>
                <p style={{position: 'absolute', top: '250px', paddingLeft: '70px', width: '50%', fontSize: '11px'}}>home states!</p>
            </div>
            <div style={{position: 'absolute', padding: '0', top: '526px', left: '48px', width: '356px', height: '200px'}}>
                <p style={{paddingTop: '2px', paddingLeft: '14px', marginTop: 0}}><span style={{textDecoration: 'underline'}}>W</span>hat you absolutely will NOT find</p>
                <ul style={{paddingTop: '20px', paddingLeft: '20px'}}>
                    <li>millenial gray</li>
                    <li>hotlinking -_-</li>
                    <li>anything that's fully complete. This whole website will always be a work in progress!!</li>
                </ul>
                <p style={{paddingTop: '20px', paddingLeft: '10px'}}></p>
            </div>
        </div>
    );
};

export default Home;
