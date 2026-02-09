import React from 'react';
import missilecave from '../../../../assets/portfolio/missilecavePV.png';
import missilecave2 from '../../../../assets/portfolio/missilecave2.png';
import picoban from '../../../../assets/portfolio/picobanPV.png';
import peturland from '../../../../assets/portfolio/peturland1.png';
import oceanrender from '../../../../assets/portfolio/OceanRender.png';
import sketchbook from '../../../../assets/portfolio/sketchbook.gif';
import space from '../../../../assets/portfolio/space.gif';
import t_pen from '../../../../assets/gifs/t_pen.gif';
import ProjectWindow from '../ProjectWindow';

const Programs = (): React.ReactElement => {
  return (
    <>
        <div style={{position: 'absolute', top: '347px', right: '15px', height: '1000px'}}>
            <ProjectWindow 
                projectName='Missilecave'
                playLink='https://drive.google.com/file/d/1x8JXBUyneb8767Kpt7kB2ce-I9rgBAWQ/view?usp=sharing'
                images={[missilecave, missilecave2]}
                text={<p>Missilecave was my pet project in highschool. It's a platformer game--I'm pretty happy with how the movement works in the game but I never got around to fleshing everything out/filling out the level chart. Shelved for now. <br /><br /> In the demo you can play levels 1-19. I also included old versions of levels 21-39 that I had deleted for fun. You can press ENTER to skip levels. If you press ENTER after level 19/20 you can play the SECRET hard levels!</p>}
            />
            <ProjectWindow 
                projectName='Peturland'
                playLink='https://peturland.com/about-me'
                sourceLink='https://github.com/xpewster/Peturland'
                images={[peturland]}
                text={<p>Wait... that's this website! Haha!</p>}
            />
            <ProjectWindow 
                projectName='Sketchbook'
                // playLink='' TODO 'View demo'
                sourceLink='https://github.com/xpewster/Sketchbook'
                images={[sketchbook, space]}
                text={<p>Fun little hardware/weather monitor that connects to a microcontroller/display I mounted onto one of my PC's 5.25 drive bays. I made a lot of cool skins for this. My first project involving microcontrollers!</p>}
                antiAliasing={true}
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
        <div style={{paddingLeft: '10px', marginTop: '1325px'}}>
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
    </>
    );
}

export default Programs;
