import React, { useEffect, useRef, useState } from 'react';
import filebox from '../../../assets/filebox.png';
import dots from '../../../assets/dots.png';
import { preloadImage2 } from '../../common/preloadImage';
import Filebox, { LINK_CLICK_COLOR } from '../../common/Filebox';
import folder from '../../../assets/fileboxicons/folder.png';
import boy from '../../../assets/gifs/boy.gif';
import { Path } from '../../../constants/Path';
import mail from '../../../assets/gifs/MAIL.gif';
import animegirl from '../../../assets/animegirl.jpg';
import texas from '../../../assets/gifs/texas.gif';
import trees from '../../../assets/gifs/pinetree.gif';
import cool from '../../../assets/fileboxicons/cool.gif';
import telescope from '../../../assets/telescope.gif';
import { Link } from 'react-router';
import globe from '../../../assets/gifs/globe.gif';
import transfercrop from '../../../assets/gifs/transfercrop.gif';
import ig from '../../../assets/fileboxicons/ig2.png';
import discord from '../../../assets/fileboxicons/discord.png';
import myanimelist from '../../../assets/fileboxicons/mal.png';
import spotify from '../../../assets/fileboxicons/spotify.png';
import letterboxd from '../../../assets/fileboxicons/letterboxd.png';
import steam from '../../../assets/fileboxicons/steam.png';

/*

Favorites:
- Color combination: Green/Gold/Orange
- Video game: CS:GO
- Video game OST: Wind Waker
- Piano song: The Promise (FF13 piano collections)
- Movies: Princess Mononoke,
- Animes: HxH, Fairy Tail, Made in Abyss, Mushishi, any miyazaki movie
- Places: My bed, my desk, hm
- Stargazing spots: Steens Mountain, Grand Staircase-Escalante NM, Valley Spring TX
- Childhood games: Toontown rewritten, tales of pirates, Halo 3, xGen Stick Arena Ballistick
- Smash character: yoshi
*/

const About = (): React.ReactElement => {

    const LINKS_IMGS = [ig, discord, spotify, myanimelist, letterboxd, steam];
    const LINKS_STRINGS = ['Instagram', 'Discord', 'Spotify', 'MyAnimeList', 'Letterboxd', 'Steam'];
    const LINKS_LINKS = ["https://www.instagram.com/petethebeeat", Path.SUPPORT, "https://open.spotify.com/user/fresyonmzn6hgni6r0lj4d5ua", "https://myanimelist.net/profile/Pewster", "https://letterboxd.com/pewster/films/by/entry-rating/", "https://steamcommunity.com/id/xpewster/"];
    const LINKS_STYLES = [{imageRendering: 'pixelated' as const}, {imageRendering: 'pixelated' as const}, {imageRendering: 'pixelated' as const}, {imageRendering: 'pixelated' as const}, {imageRendering: 'pixelated' as const}, {imageRendering: 'pixelated' as const}, {imageRendering: 'pixelated' as const}];
    const LINKS_EXTERNAL = [true, false, true, true, true, true];   

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
        <div>
            <div style={{height: '20px'}}>
                <div style={{paddingTop: '2px', position: 'relative'}} ref={ref}>
                    <div style={{left: '20px'}} onClick={() => handleClick(0)} className='fileboxlink top'><p className='fileboxlink top' style={{backgroundColor: getLinkBackgroundColor(0), color: showFilebox[0] ? 'white' : 'black'}}>Links</p></div>
                    {showFilebox[0] && <div style={{position: 'absolute', left: '20px', top: '22px', zIndex: 10}}><Filebox imageSrcs={LINKS_IMGS} strings={LINKS_STRINGS} links={LINKS_LINKS} styles={LINKS_STYLES} externals={LINKS_EXTERNAL} onClick={onFileboxClick}></Filebox></div>}
                </div>
                <img className='filebox' src={filebox}></img>
            </div>
            <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
                <p style={{paddingBottom: '10px'}}>About the webmaster</p>
                <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
                <p style={{paddingTop: '2px'}}> <span style={{textDecoration: 'underline'}}>Pronouns</span>: <img src={boy} style={{height: '15px'}} /> (He/Him) <img src={boy} style={{height: '15px'}} />&nbsp;&nbsp;&nbsp;<span style={{textDecoration: 'underline'}}>Age</span>: 24</p>
                <img style={{position: 'absolute', left: '-2px', top: '136px'}} src={dots}></img>
                <img src={mail} />
                <p>Hi! My name is Peter. "Petur" is my childhood stuffed turtle up there on the header. He was envisioned as a gamer/hacker/coder type, and as I have become basically the same thing,
                    I have created this website vicariously for him. You can consider it as <i>our</i> website though. yes I am a grown man.. </p>
                <p>I've come to think of Petur
                    as an extension and preservation of my younger self and the light in his eyes that has long since been dwindled. lol.
                </p>
                <img className='iframe-container' src={animegirl} style={{width: '70%', margin: 'auto', height: '200px', zIndex: 20}} />
                <div style={{position: 'relative'}}>
                    <p style={{paddingTop: '2px', zIndex: 10, position: 'relative'}}> <span style={{textDecoration: 'underline'}}>Where I'm from</span>: I was born and raised in the beautiful&nbsp;
                    <a href={'https://www.google.com/maps/@?api=1&map_action=pano&pano=tKNcR0MWB2OrAT8fkCS40A&viewpoint=29.82585,-99.134259&heading=251.1045460580811&pitch=-3.4909402145744224&fov=82.437282220988&shorturl=1#extra%5Btags%5D=texas+hill+country&extra%5BloadMode%5D=latLng'} target="_blank" rel="noopener noreferrer">hill country</a> of Texas but moved to Seattle a few years ago. I love the grunge and sunleth beauty of Seattle but Texas will always be home :) </p>
                    <p>I love to travel and especially to road trip. Check out my <Link to={Path.TRAVEL_LOG}>travel chart</Link>!</p>
                    <img src={trees} style={{position: 'absolute', left: '260px', top: '-110px', zIndex: 5, opacity: '80%'}}></img>
                </div>
                <div>
                    <p style={{paddingTop: '2px'}}> <span style={{textDecoration: 'underline'}}>Hobbies</span>: </p>
                    <ul style={{paddingInlineStart: '15px', paddingRight: '20px'}}>
                        <li>Gaming. I'm also an amateur game dev--check out my portfolio! &lt;--</li>
                        <li>Anime.</li>
                        <li>Stargazing! I own two telescopes: An Orion 8" XT8+ and a Hubble Optics UL16. and an NMT 20" in the shop <img src={cool} /></li>
                        <li>Piano. I also play the Ocarina and am learning the guitar</li>
                        <li>Antiquing: Hitting up thrift shops and antique malls on a road trip is one of life's great joys.</li>
                    </ul>
                    <div style={{position: 'relative'}}>
                        <div style={{border: '1px dashed black', width: '60%', padding: '5px'}}>
                            <u>Favorites</u>
                            <ul style={{paddingInlineStart: '15px'}}>
                                <li><b>Video games (right now)</b>: CS:GO, GeoGuessr, ARAMs</li>
                                <li><b>Video games (childhood)</b>: ToonTown, Tales of Pirates, Halo 3, XGen Stick Arena: Ballistick</li>
                                <li><b>Movies</b>: Princess Mononoke, Dredd, The Princess Bride, </li>
                                <li><b>Anime</b>: HxH, Fairy Tail, MiA, Kaiba, Mushishi, Solo Leveling, any Miyazaki movie</li>
                                <li><b>OSTs</b>: Wind waker, FF13, Mononoke-hime, In This Corner of the World, Interstellar, 86</li>
                                <li><b>Bands/artists</b>: Mass of the Fermenting Dregs, Tricot, Gracie Abrams, The Strokes, Hideki Naganuma</li>
                                <li><b>Songs to play on the piano</b>: The Promise (FF13), Rouge no Dengon (Hirohashi Makiko), Kaze no Tani no Nausicaa (Makiko), You've got a friend in me</li>
                                <li><b>Stargazing spots</b>: Steens Mountain summit, Homestead Overlook (UT), Valley Spring (TX)</li>
                                <li><b>Color combination</b>: Green/Gold/Orange</li>
                            </ul>
                        </div>
                        <img src={transfercrop} style={{position: 'absolute', right: '0px', bottom: 'calc(50% - 30px)', height: '120px', imageRendering: 'pixelated'}}></img>
                    </div>
                    <div style={{position: 'relative', marginTop: '5px'}}>
                        <div style={{border: '1px dashed darkgoldenrod', width: '60%', padding: '5px'}}>
                            <u>Links</u>
                            <ul style={{paddingInlineStart: '15px'}}>
                                <li><b><a href={'https://www.instagram.com/petethebeeat'} target="_blank" rel="noopener noreferrer">Instagram</a></b> <img src={ig} style={{height: '15px', verticalAlign: 'middle', imageRendering: 'pixelated'}} /></li>
                                <li><b><a href={Path.SUPPORT} target="_blank" rel="noopener noreferrer">Discord</a></b> <img src={discord} style={{height: '15px', verticalAlign: 'middle', imageRendering: 'pixelated'}} /></li>
                                <li><b><a href={'https://myanimelist.net/profile/Pewster'} target="_blank" rel="noopener noreferrer">MyAnimeList</a></b> <img src={myanimelist} style={{height: '15px', verticalAlign: 'middle', imageRendering: 'pixelated'}} /></li>
                                <li><b><a href={'https://letterboxd.com/pewster/films/by/entry-rating/'} target="_blank" rel="noopener noreferrer">Letterboxd</a></b> <img src={letterboxd} style={{height: '15px', verticalAlign: 'middle', imageRendering: 'pixelated'}} /></li>
                                <li><b><a href={'https://open.spotify.com/user/fresyonmzn6hgni6r0lj4d5ua'} target="_blank" rel="noopener noreferrer">Spotify</a></b> <img src={spotify} style={{height: '15px', verticalAlign: 'middle', imageRendering: 'pixelated'}} /></li>
                                <li><b><a href={'https://steamcommunity.com/id/xpewster/'} target="_blank" rel="noopener noreferrer">Steam</a></b> <img src={steam} style={{height: '15px', verticalAlign: 'middle', imageRendering: 'pixelated'}} /></li>
                            </ul>
                        </div>
                    </div>
                    <p>Fin~ enjoy the site!</p>
                </div>
                <img style={{position: 'absolute', right: '20px', bottom: '50px', height: '145px'}} src={telescope}/>
            </div>
        </div>
        
    );
};

export default About;
