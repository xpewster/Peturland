import React, { useEffect, useRef, useState } from 'react';
import dots from '../../../assets/dots.png';
import mail from '../../../assets/gifs/MAIL.gif';
import ps from '../../../assets/fileboxicons/ps.png';
import circles from '../../../assets/circles.png';
import folder from '../../../assets/fileboxicons/xp/dot3ui.dll_14_2000-15.png';
import github from '../../../assets/fileboxicons/xp/progman.exe_14_147-7.png';
import phone from '../../../assets/gifs/phone.gif'
import filebox from '../../../assets/filebox.png';
import games from '../../../assets/fileboxicons/xp/iexplore.exe_14_32541-1.png';
import pictures from '../../../assets/fileboxicons/xp/wiashext.dll_14_103-4.png';
import camera from '../../../assets/fileboxicons/xp/wiashext.dll_14_101-7.png';
import { preloadImage2 } from '../../common/preloadImage';
import Filebox, { LINK_CLICK_COLOR } from '../../common/Filebox';
import ProjectWindow from './ProjectWindow';
import { Path } from '../../../constants/Path';
import Art from './portfolios/Art';
import Programs from './portfolios/Programs';
import { ContentType } from '../../../constants/ContentType';
import wink from '../../../assets/fileboxicons/wink.gif';
import art1 from '../../../assets/portfolio/art1.png';
import games1 from '../../../assets/portfolio/games1.png';
import digicam1 from '../../../assets/portfolio/digicam1.jpg';
import t_pen from '../../../assets/gifs/t_pen.gif';
import { Link, useNavigate } from 'react-router';
import articon from '../../../assets/portfolio/shell32.dll_14_239-6.png';
import gamesicon from '../../../assets/portfolio/shell32.dll_14_20-6.png';
import digicamicon from '../../../assets/portfolio/wiashext.dll_14_101-5.png';
import musicicon from '../../../assets/portfolio/music.png';
import back from '../../../assets/gifs/back.gif';

export interface ProjectsProps {
    contentType?: ContentType;
}

const Projects = (props: ProjectsProps): React.ReactElement => {

    const LINKS_IMGS = [github, folder, phone];
    const LINKS_STRINGS = ['Github', 'More about', 'Contact'];
    const LINKS_LINKS = ["https://github.com/xpewster", Path.ABOUT, Path.SUPPORT];
    const LINKS_STYLES = [{width: '16px' as const, height: '16px' as const, paddingLeft: '4px' as const, paddingTop: '3px' as const}, {width: '16px' as const, height: '16px' as const, paddingLeft: '4px' as const, paddingTop: '3px' as const}, {}];
    const LINKS_EXTERNAL = [true, false, false, true, true, true];

    const PORTFOLIO_IMGS = [pictures, games, camera, musicicon];
    const PORTFOLIO_STRINGS = ['Art', 'Games/Programs', 'Digicam', 'Musescore'];
    const PORTFOLIO_LINKS = [Path.PROJECTS_ART, Path.PROJECTS_PROGRAMS, Path.DIGICAM, "https://musescore.com/user/7517616"];
    const PORTFOLIO_STYLES = [{width: '16px' as const, height: '16px' as const, paddingLeft: '4px' as const, paddingTop: '3px' as const}, {width: '16px' as const, height: '16px' as const, paddingLeft: '4px' as const, paddingTop: '3px' as const}, {width: '16px' as const, height: '16px' as const, paddingLeft: '4px' as const, paddingTop: '3px' as const}, {width: '16px' as const, height: '16px' as const, paddingLeft: '4px' as const, paddingTop: '3px' as const}];
    const PORTFOLIO_EXTERNAL = [false, false, false, true];

    const [showFilebox, setShowFilebox] = useState<boolean[]>([false, false, false, false, false]);

    useEffect(() => {
        LINKS_IMGS.forEach((src) => {
            preloadImage2(src);
        });
        PORTFOLIO_IMGS.forEach((src) => {
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

    const getTitle = (): React.ReactElement => {
        switch (props.contentType) {
            case ContentType.PROJECTS_ART:
                return <p style={{paddingBottom: '10px'}}>Art Portfolio</p>;
            case ContentType.PROJECTS_PROGRAMS:
                return <p style={{paddingBottom: '10px'}}>Software Portfolio</p>;
            default:
                return <p style={{paddingBottom: '10px'}}>Portfolio</p>;
        }
    }

    const getContent = () => {
        switch (props.contentType) {
            case ContentType.PROJECTS_ART:
                return <Art />;
            case ContentType.PROJECTS_PROGRAMS:
                return <Programs />;
            default:
                return <div>
                    <div style={{float: 'left', textAlign: 'center', margin: 'auto', width: '100%'}}>
                        <p style={{fontFamily: 'Bangalore'}}><Link to={Path.PROJECTS_ART}><img src={articon} alt="Art Portfolio" style={{width: '96px', verticalAlign: 'middle', marginRight: '5px'}}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Art</Link></p>
                        <p style={{fontFamily: 'Bangalore'}}><Link to={Path.PROJECTS_PROGRAMS}><img src={gamesicon} alt="Games/Programs Portfolio" style={{width: '96px', verticalAlign: 'middle', marginRight: '5px'}}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Games/Software</Link></p>
                        <p style={{fontFamily: 'Bangalore'}}><Link to={Path.DIGICAM}><img src={digicamicon} alt="Digicam Portfolio" style={{width: '96px', verticalAlign: 'middle', marginRight: '5px'}}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Digicam</Link></p>
                        <p style={{fontFamily: 'Bangalore'}}><a href="https://musescore.com/user/7517616" target="_blank" rel="noopener noreferrer"><img src={musicicon} alt="Musescore Portfolio" style={{width: '96px', verticalAlign: 'middle', marginRight: '5px'}}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Musescore</a></p>
                    </div>
                    {/* <p style={{paddingLeft: '10px'}}><b>Thanks for viewing!</b></p> */}
                    <img style={{display: 'block', margin: 'auto', height: '128px', imageRendering: 'pixelated'}} src={t_pen}></img>
                </div>;
                        
                // return <>
                //     <div style={{position: 'absolute', top: '277px', right: '15px', height: '1000px'}}>
                //         <ProjectWindow 
                //             projectName='Art'
                //             playLink={`https://peturland.com${Path.PROJECTS_ART}`}
                //             sourceLink='https://github.com/xpewster/Peturland'
                //             images={[art1]}
                //             text={<p></p>}
                //         />
                //         <ProjectWindow 
                //             projectName='Games/Programs'
                //             playLink={`https://peturland.com${Path.PROJECTS_PROGRAMS}`}
                //             sourceLink='https://github.com/xpewster/Peturland'
                //             images={[games1]}
                //             text={<p></p>}
                //         />
                //         <ProjectWindow 
                //             projectName='Digicam'
                //             playLink={`https://peturland.com${Path.DIGICAM}`}
                //             sourceLink='https://github.com/xpewster/OceanRender'
                //             images={[digicam1]}
                //             text={<p></p>}
                //         />
                //     </div>
                //     {/* <div style={{paddingLeft: '10px', marginTop: '1060px'}}>
                //         <p style={{textAlign: 'center'}}><u>Other projects</u>: </p>
                //         <ul style={{paddingInlineStart: '15px', paddingRight: '20px'}}>
                //             <li><b>GerryAway</b>: Detecting Gerrymandering programatically <a href='https://github.com/xpewster/GerryAway' target="_blank" rel="noopener noreferrer">Source</a></li>
                //             <li><b>Ghiblify</b>: Suggesting that computers can recreate what the artists at Studio Ghibli have heartfully crafted is an insult--but I leave this up as it is interesting and produces some nice results <a href='https://github.com/xpewster/Ghiblify' target="_blank" rel="noopener noreferrer">Source</a></li>
                //             <li><b>SatApprox</b>: fast Monte Carlo approximation MAX-SAT solver using ClojureScript <a href='https://github.com/xpewster/SatApproxWeb' target="_blank" rel="noopener noreferrer">Source</a></li>
                //             <li><b>JSMediaAnalysis</b>: Analyzing bias in Israel media sources with regard to Israeli settlements <a href='https://github.com/xpewster/JSMediaAnalysis' target="_blank" rel="noopener noreferrer">Source</a></li>
                //             <li><b>Heightmap Generator</b>: Generates random terrain in a UI using a modified diamond-square algorithm <a href='https://github.com/xpewster/HeightmapGen' target="_blank" rel="noopener noreferrer">Source</a></li>
                //         </ul>
                //     </div> */}
                //     <img style={{display: 'block', margin: 'auto', height: '128px', imageRendering: 'pixelated'}} src={t_pen}></img>
                // </>;
        }
    }

    const getDescription = (): React.ReactElement => {
        switch (props.contentType) {
            case ContentType.PROJECTS_ART:
                return <p>Hello! I've always liked to draw and stuff but got more into art recently when making anime jeopardy boards with my friends! Here are some preliminary works as I hone my skills. <img src={wink} alt='Wink' style={{width: '15px' as const, height: '15px' as const, paddingLeft: '0px' as const, paddingTop: '0px' as const}} /> <i>Click for full size!</i></p>;
            case ContentType.PROJECTS_PROGRAMS:
                return <p>Hello! I was indoctrinated into programming from a young age~ I found my passion in game development though! I made a ton of games as a kid on <a href='https://web.archive.org/web/20141016194718/http://sandbox.yoyogames.com/users/pikachu123' target="_blank" rel="noopener noreferrer">Yoyogames</a> with GameMaker. Once high school rolled around I started dabbling in <i>serious</i> languages like C++, Java, etc. My corporate wage cage has brought my amateur career to a screeching halt but I hope to get back to it soon! Here are some of my projects from over the years:</p>;
            default:
                return <p>Hello! Welcome to my portfolio. I dabble in a lot of creative endeavours, <b>please click below to view some of my works!</b> Thanks for viewing!</p>;
        }
    }

    const nav = useNavigate();

    const handleNavigation = () => {
        try {
            if (window.history.state && window.history.state.idx > 0) {
                nav(-1);
            } else {
                nav(Path.PROJECTS);
            }
        } catch (e) {
            nav(Path.PROJECTS);
        }
    };

    return (
        <div>
            <div style={{height: '20px'}}>
                <div style={{paddingTop: '2px', position: 'relative'}} ref={ref}>
                    <div style={{left: '20px'}} onClick={() => handleClick(0)} className='fileboxlink top'><p className='fileboxlink top' style={{backgroundColor: getLinkBackgroundColor(0), color: showFilebox[0] ? 'white' : 'black'}}>Links</p></div>
                    {showFilebox[0] && <div style={{position: 'absolute', left: '20px', top: '22px', zIndex: 10}}><Filebox imageSrcs={LINKS_IMGS} strings={LINKS_STRINGS} links={LINKS_LINKS} externals={LINKS_EXTERNAL} styles={LINKS_STYLES} onClick={onFileboxClick}></Filebox></div>}
                    <div style={{left: '70px'}} onClick={() => handleClick(1)} className='fileboxlink top'><p className='fileboxlink top' style={{backgroundColor: getLinkBackgroundColor(1), color: showFilebox[1] ? 'white' : 'black'}}>Portfolios</p></div>
                    {showFilebox[1] && <div style={{position: 'absolute', left: '70px', top: '22px', zIndex: 10}}><Filebox imageSrcs={PORTFOLIO_IMGS} strings={PORTFOLIO_STRINGS} links={PORTFOLIO_LINKS} externals={PORTFOLIO_EXTERNAL} styles={PORTFOLIO_STYLES} onClick={onFileboxClick}></Filebox></div>}
                </div>
                <img className='filebox' src={filebox}></img>
            </div>
                <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
                {getTitle()}
                {props.contentType !== ContentType.PROJECTS && <Link to={Path.HOME} onClick={() => {handleNavigation()}} style={{textDecoration: 'none', color: 'black'}}>
                    <img style={{imageRendering: 'pixelated', position: 'absolute', right: '7px', top: '56px', height: '50px'}} src={back}></img>
                </Link>}
                <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
                <p style={{paddingTop: '2px'}}> <span style={{textDecoration: 'underline'}}>Skills</span>: Programming, Photoshop<img src={ps} alt='Ps' style={{height: '18px', verticalAlign: 'middle', opacity: '0.8'}} />, Contemplating</p>
                <img style={{position: 'absolute', left: '-2px', top: '136px'}} src={dots}></img>
                <img src={mail} />
                {getDescription()}
            </div>
            {
                (props.contentType === ContentType.PROJECTS_PROGRAMS) &&
                <>
                    <img style={{position: 'absolute', left: '4px', top: '700px', height: '500px', imageRendering: 'pixelated', opacity: '0.5'}} src={circles}></img>
                    <img style={{position: 'absolute', right: '100px', top: '300px', height: '340px', imageRendering: 'pixelated', opacity: '0.5', transform: 'scale(-1,-1)'}} src={circles}></img>
                </>
            }
            {getContent()}
        </div>
    );
};

export default Projects;
