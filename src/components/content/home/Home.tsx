import React, { useEffect, useRef, useState } from 'react';
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
import { Path } from '../../../constants/Path';
import smile from '../../../assets/fileboxicons/smile.gif';
import biggrin from '../../../assets/fileboxicons/biggrin.gif';
import wink from '../../../assets/fileboxicons/wink.gif';
import cool from '../../../assets/fileboxicons/cool.gif';
import folder from '../../../assets/fileboxicons/folder.png';
import briefcase from '../../../assets/fileboxicons/brief.png';
import ie from '../../../assets/fileboxicons/ie.png';
import note from '../../../assets/fileboxicons/note.png';
import word from '../../../assets/fileboxicons/word.png';
import zip from '../../../assets/fileboxicons/zip.png';
import recyclebin from '../../../assets/fileboxicons/recyclebin.png';
import { preloadImage2 } from '../../common/preloadImage';
import Filebox, { LINK_CLICK_COLOR } from '../../common/Filebox';
import star from '../../../assets/gifs/Yellow_Star.gif';

const Home = (): React.ReactElement => {

    const FB_IMGS = [smile, biggrin, wink, cool];
    const FB_STRINGS = ['Hey!', 'Hello!', 'Hiya!', 'Howdy!'];
    const FB_LINKS = [Path.HOME, Path.HOME, Path.HOME, Path.HOME];
    const FB_STYLES = [{width: '15px' as const, height: '15px' as const, paddingLeft: '4px' as const, paddingTop: '4px' as const},
        {width: '15px' as const, height: '15px' as const, paddingLeft: '4px' as const, paddingTop: '4px' as const},
        {width: '15px' as const, height: '15px' as const, paddingLeft: '4px' as const, paddingTop: '4px' as const},
        {width: '15px' as const, height: '15px' as const, paddingLeft: '4px' as const, paddingTop: '4px' as const},
    ];

    const FB2_IMGS = [folder, briefcase, ie];
    const FB2_STRINGS = ['I', 'Love', 'Windows XP!'];
    const FB2_LINKS = [Path.HOME, Path.HOME, Path.HOME, Path.HOME];

    const FB3_IMGS = [zip, note, word, recyclebin];
    const FB3_STRINGS = ['Winzip', 'Notepad', 'type shit', 'Recycle bin'];
    const FB3_LINKS = [Path.HOME, Path.HOME, Path.HOME, Path.HOME];

    const [showFilebox, setShowFilebox] = useState<boolean[]>([false, false, false, false, false]);

    useEffect(() => {
        FB_IMGS.forEach((src) => {
            preloadImage2(src);
        });
        FB2_IMGS.forEach((src) => {
            preloadImage2(src);
        });
        FB3_IMGS.forEach((src) => {
            preloadImage2(src);
        });
    }, []);

    const handleClickWA = () => {
        window.open('https://en.wikipedia.org/wiki/Washington_(state)', '_blank');
    };

    const handleClickTX = () => {
        window.open('https://en.wikipedia.org/wiki/Texas', '_blank');
    };

    const handleClick = (index: number) => {
        setShowFilebox(showFilebox.map((val, i) => {if (i === index) { return !val; } else { return false; }}));
    }

    const onFileboxClick = () => {
        setShowFilebox([false, false, false, false, false]);
    }

    const getLinkBackgroundColor = (index: number): string | undefined => {
        return showFilebox[index] ? LINK_CLICK_COLOR : undefined;
    };

    const ref = useRef<any>(null);
    
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                onFileboxClick();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);

    return (
        <div style={{position: 'relative'}}>
            <img src={home}></img>
            <div style={{position: 'absolute', padding: '0', top: '30px', left: '10px', width: '306px', height: '329px'}}>
                <div ref={ref} style={{position: 'absolute', left: '14px', top: '0px'}} onClick={() => handleClick(0)} className='fileboxlink top'><p className='fileboxlink top' style={{paddingTop: '2px', paddingBottom: '0px', backgroundColor: getLinkBackgroundColor(0), fontFamily: 'basiic', color: showFilebox[0] ? 'white' : 'black'}}>Home</p></div>
                {showFilebox[0] && <div style={{position: 'absolute', left: '10px', top: '20px', zIndex: 10}}><Filebox imageSrcs={FB_IMGS} strings={FB_STRINGS} links={FB_LINKS} styles={FB_STYLES} onClick={onFileboxClick}></Filebox></div>}
                <p style={{paddingTop: '2px', paddingLeft: '14px', marginTop: 0}}><span style={{textDecoration: 'underline'}}>H</span>ome</p>
                <p style={{paddingTop: '20px', paddingLeft: '10px'}}>you've stumbled upon the webmaster's humble <img style={{height: '15px'}} src={house}></img> homestead <img style={{height: '15px'}} src={house}></img> {'on the internet 8}'}</p>
            </div>
            <div style={{position: 'absolute', padding: '0', top: '171px', left: '124px', width: '326px', height: '329px'}}>
                <div ref={ref} style={{position: 'absolute', left: '14px', top: '0px'}} onClick={() => handleClick(1)} className='fileboxlink top'><p className='fileboxlink top' style={{paddingTop: '2px', paddingBottom: '0px', backgroundColor: getLinkBackgroundColor(1), fontFamily: 'basiic', color: showFilebox[1] ? 'white' : 'black'}}>What you'll find</p></div>
                {showFilebox[1] && <div style={{position: 'absolute', left: '10px', top: '20px', zIndex: 10}}><Filebox imageSrcs={FB2_IMGS} strings={FB2_STRINGS} links={FB2_LINKS} onClick={onFileboxClick}></Filebox></div>}
                <p style={{paddingTop: '2px', paddingLeft: '14px', marginTop: 0}}><span style={{textDecoration: 'underline'}}>W</span>hat you'll find</p>
                <ul style={{paddingTop: '20px', paddingLeft: '20px', zIndex: 8}}>
                    <li>a yearning for the <span style={{color: 'darkgoldenrod'}}>color</span> and
                        <span style={{color: 'green'}}> c</span>
                        <span style={{color: 'red'}}>h</span>
                        <span style={{color: 'brown'}}>a</span>
                        <span style={{color: 'purple'}}>r</span>
                        <span style={{color: 'aquamarine'}}>a</span>
                        <span style={{color: 'pink'}}>c</span>
                        <span style={{color: 'orange'}}>t</span>
                        <span style={{color: 'goldenrod'}}>e</span>
                        <span style={{color: 'limegreen'}}>r </span>
                    of the past</li>
                    <li>bits and pieces from the webmaster's life</li>
                    <li>some works..</li>
                    <li>geography quizzes (hello GeoGuessr friends! click xgeo {'<--'})</li>
                </ul>
                <img style={{position: 'absolute', top: '170px', left: '270px', zIndex: 7}} src={star} />
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
                <div ref={ref} style={{position: 'absolute', left: '14px', top: '0px'}} onClick={() => handleClick(2)} className='fileboxlink top'><p className='fileboxlink top' style={{paddingTop: '2px', paddingBottom: '0px', backgroundColor: getLinkBackgroundColor(2), fontFamily: 'basiic', color: showFilebox[2] ? 'white' : 'black'}}>What you absolutely will NOT find</p></div>
                {showFilebox[2] && <div style={{position: 'absolute', left: '10px', top: '20px', zIndex: 10}}><Filebox imageSrcs={FB3_IMGS} strings={FB3_STRINGS} links={FB3_LINKS} onClick={onFileboxClick}></Filebox></div>}
                <p style={{paddingTop: '2px', paddingLeft: '14px', marginTop: 0}}><span style={{textDecoration: 'underline'}}>W</span>hat you absolutely will NOT find</p>
                <ul style={{paddingTop: '20px', paddingLeft: '20px'}}>
                    <li>millenial gray</li>
                    <li><a href='https://simple.wikipedia.org/wiki/Hotlinking' target="_blank" rel="noopener noreferrer">hotlinking</a></li>
                    <li>anything that's fully complete. This whole website will always be a work in progress!!</li>
                </ul>
                <p style={{paddingTop: '20px', paddingLeft: '10px'}}></p>
            </div>
        </div>
    );
};

export default Home;
