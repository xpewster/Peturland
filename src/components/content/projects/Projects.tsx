import React, { useEffect, useRef, useState } from 'react';
import portw from '../../../assets/portw.png';
import dots from '../../../assets/dots.png';
import mail from '../../../assets/gifs/MAIL.gif';
import missilecave from '../../../assets/portfolio/missilecavePV.png';
import missilecave2 from '../../../assets/portfolio/missilecave2.png';
import picoban from '../../../assets/portfolio/picobanPV.png';
import peturland from '../../../assets/portfolio/peturland1.png';
import peturland2 from '../../../assets/portfolio/peturland2.png';
import oceanrender from '../../../assets/portfolio/OceanRender.png';
import folder from '../../../assets/fileboxicons/folder.png';
import github from '../../../assets/fileboxicons/github.png';
import phone from '../../../assets/gifs/phone.gif'
import ps from '../../../assets/fileboxicons/ps.png';
import filebox from '../../../assets/filebox.png';
import circles from '../../../assets/circles.png';
import t_pen from '../../../assets/gifs/t_pen.gif';
import { preloadImage2 } from '../../common/preloadImage';
import Filebox, { LINK_CLICK_COLOR } from '../../common/Filebox';
import ProjectWindow from './ProjectWindow';
import { Path } from '../../../constants/Path';

const Projects = (): React.ReactElement => {

    const LINKS_IMGS = [github, folder, phone];
    const LINKS_STRINGS = ['Github', 'More about', 'Contact'];
    const LINKS_LINKS = ["https://github.com/xpewster", Path.ABOUT, Path.SUPPORT];
    // const LINKS_STYLES = [{imageRendering: 'pixelated' as const}, {imageRendering: 'pixelated' as const}, {imageRendering: 'pixelated' as const}, {imageRendering: 'pixelated' as const}, {imageRendering: 'pixelated' as const}, {imageRendering: 'pixelated' as const}, {imageRendering: 'pixelated' as const}];
    const LINKS_EXTERNAL = [true, false, false, true, true, true];   

    const [showFilebox, setShowFilebox] = useState<boolean[]>([false, false, false, false, false]);

    useEffect(() => {
        LINKS_IMGS.forEach((src) => {
            preloadImage2(src);
        });
    }, []);
    

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

    return (
        <div>
            <div style={{height: '20px'}}>
                <div style={{paddingTop: '2px', position: 'relative'}} ref={ref}>
                    <div style={{left: '20px'}} onClick={() => handleClick(0)} className='fileboxlink top'><p className='fileboxlink top' style={{backgroundColor: getLinkBackgroundColor(0), color: showFilebox[0] ? 'white' : 'black'}}>Links</p></div>
                    {showFilebox[0] && <div style={{position: 'absolute', left: '20px', top: '22px', zIndex: 10}}><Filebox imageSrcs={LINKS_IMGS} strings={LINKS_STRINGS} links={LINKS_LINKS} externals={LINKS_EXTERNAL} onClick={onFileboxClick}></Filebox></div>}
                </div>
                <img className='filebox' src={filebox}></img>
            </div>
            <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
                <p style={{paddingBottom: '10px'}}>Portfolio</p>
                <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
                <p style={{paddingTop: '2px'}}> <span style={{textDecoration: 'underline'}}>Skills</span>: Java,C++,Go,Typescript,React,Clojure,Photoshop<img src={ps} style={{height: '18px', verticalAlign: 'middle', opacity: '0.8'}} /></p>
                <img style={{position: 'absolute', left: '-2px', top: '136px'}} src={dots}></img>
                <img src={mail} />
                <p>Hello! I was indoctrinated into programming from a young age~ I found my passion in game development though! I made a ton of games as a kid on Yoyogames with GameMaker. Once high school rolled around I started dabbling in <i>serious</i> languages like C++, Java, etc. My corporate wage cage has brought my amateur career to a screeching halt but I hope to get back to it soon! Here are some of my projects from over the years:</p>
            </div>
            <img style={{position: 'absolute', left: '4px', top: '700px', height: '500px', imageRendering: 'pixelated', opacity: '0.5'}} src={circles}></img>
            <img style={{position: 'absolute', right: '100px', top: '300px', height: '340px', imageRendering: 'pixelated', opacity: '0.5', transform: 'scale(-1,-1)'}} src={circles}></img>
            <div style={{position: 'absolute', top: '347px', right: '15px', height: '1000px'}}>
                <ProjectWindow 
                    projectName='Missilecave'
                    playLink='https://drive.google.com/file/d/1x8JXBUyneb8767Kpt7kB2ce-I9rgBAWQ/view?usp=sharing'
                    images={[missilecave, missilecave2]}
                    text={<p>Missilecave was my pet project in highschool. It's a platformer game--I'm pretty happy with how the movement works in the game but I never got around to fleshing everything out/filling out the level chart. Shelved for now. In the demo you can play levels 1-19. I also included old versions of levels 21-39 that I had deleted for fun. You can press ENTER to skip levels. If you press ENTER after level 19/20 you can play the SECRET hard levels!</p>}
                />
                <ProjectWindow 
                    projectName='Peturland'
                    playLink='https://peturland.com/about-me'
                    sourceLink='https://github.com/xpewster/Peturland'
                    images={[peturland]}
                    text={<p>Wait... that's this website! Haha!</p>}
                />
                <ProjectWindow 
                    projectName='OceanRender'
                    sourceLink='https://github.com/xpewster/OceanRender'
                    images={[oceanrender]}
                    text={<p>Cool 3d raytracing demo I made for the final project of my Graphics class. Some nice code in there and it works but don't actually run it or I may be exposed for the fraud I am</p>}
                />
                <ProjectWindow 
                    projectName='Picoban'
                    images={[picoban]}
                    text={<p>Fun little puzzle game based on Sokoban and an old mobile game PicoPicoPuzzle. Unfortunately the files for this one are lost but a remake is coming soon, stay tuned.</p>}
                />
            </div>
            <div style={{paddingLeft: '10px', marginTop: '1060px'}}>
                <p style={{textAlign: 'center'}}><u>Other projects</u>: </p>
                <ul style={{paddingInlineStart: '15px', paddingRight: '20px'}}>
                    <li><b>GerryAway</b>: Detecting Gerrymandering programatically <a href='https://github.com/xpewster/GerryAway' target="_blank" rel="noopener noreferrer">Source</a></li>
                    <li><b>Ghiblify</b>: Suggesting that computers can recreate what the artists at Studio Ghibli have heartfully crafted is an insult--but I leave this up as it is interesting and produces some nice results <a href='https://github.com/xpewster/Ghiblify' target="_blank" rel="noopener noreferrer">Source</a></li>
                    <li><b>SatApprox</b>: fast Monte Carlo approximation MAX-SAT solver using ClojureScript <a href='https://github.com/xpewster/SatApproxWeb' target="_blank" rel="noopener noreferrer">Source</a></li>
                    <li><b>JSMediaAnalysis</b>: Analyzing bias in Israel media sources with regard to Israeli settlements <a href='https://github.com/xpewster/JSMediaAnalysis' target="_blank" rel="noopener noreferrer">Source</a></li>
                    <li><b>Heightmap Generator</b>: Generates random terrain in a UI using a modified diamond-square algorithm <a href='https://github.com/xpewster/HeightmapGen' target="_blank" rel="noopener noreferrer">Source</a></li>
                </ul>
            </div>
            <img style={{display: 'block', margin: 'auto', height: '128px', imageRendering: 'pixelated'}} src={t_pen}></img>
        </div>
    );
};

export default Projects;
