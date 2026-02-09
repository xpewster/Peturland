import React from 'react';
import { Path } from '../../constants/Path';

import sayNo from '../../assets/88x31/roly-saynotoweb3.gif';
import lain from '../../assets/88x31/lain.gif';
import shiina from '../../assets/88x31/shiina.png';
import wtf from '../../assets/88x31/1971.gif';
import tt from '../../assets/88x31/tt.png';
import oriland from '../../assets/88x31/oribana.gif';
import smlnew from '../../assets/smlnew.gif';
import a9 from '../../assets/aliennine.png'
import cs from '../../assets/88x31/cs.gif';
import hostyellow from '../../assets/88x31/hostyellow.gif';
import npp from '../../assets/88x31/notepadpp3.gif';
import xp from '../../assets/88x31/winxp.gif';
import { Link } from 'react-router';

export interface RightbarProps {
    contentHeight?: number;
}

const Rightbar = (props: RightbarProps): React.ReactElement => {

    return (
        <div className='rightbar' style={{position: 'relative'}}>
            <Link className='rightbarlink' to={Path.CREDITS}><span >Credits</span></Link>
            <Link className='rightbarlink' to={Path.ANNOUNCEMENTS}><span >Updates</span></Link>
            <Link className='rightbarlink' to={Path.EIGHTYEIGHT}><span >88x31</span></Link>
            <a href='https://yesterweb.org/no-to-web3/' target="_blank" rel="noopener noreferrer"><img className='rbarbox' style={{marginTop: '30px'}}  src={sayNo}/></a>
            <a href='https://myanimelist.net/anime/339/Serial_Experiments_Lain?q=lain&cat=anime' target="_blank" rel="noopener noreferrer"><img className='rbarbox' src={lain}/></a>
            <a href='https://animemusicquiz.com/' target="_blank" rel="noopener noreferrer"><img className='rbarbox' src={shiina}/></a>
            <a href='https://wtfhappenedin1971.com/' target="_blank" rel="noopener noreferrer"><img className='rbarbox' src={wtf}/></a>
            <img className='rbarbox' src={cs}/>
            <a href='https://www.toontownrewritten.com/' target="_blank" rel="noopener noreferrer"><img className='rbarbox' src={tt}/></a>
            <a href='https://www.oriland.com/gallery/animals/main.php?index.php' target="_blank" rel="noopener noreferrer"><img className='rbarbox' src={oriland}/></a>
            <a href='https://github.com/dremin/RetroBar' target="_blank" rel="noopener noreferrer"><img className='rbarbox' src={xp}/></a>
            <img className='rbarbox' src={hostyellow}/>
            <a href="https://notepad-plus-plus.org/" target="_blank" rel="noopener noreferrer"><img className='rbarbox' src={npp}/></a>
            <img className='rbarbox' style={{outline: '1px solid grey', boxShadow: '-1px -1px #ffffff, 1px 1px #808080, 2px 2px #0a0a0a, -2px -2px #dfdfdf'}} src={a9}/>
            {/* <p className='rightbarlink'>Feed</p> */}
            <div style={{border: 'dashed 1px darkgoldenrod', padding: '5px', marginBottom: '10px'}}>
                <img src={smlnew} style={{position: 'absolute', top: '710px', right: '0px'}}/>
                <a href="https://info.flagcounter.com/ImIH" target="_blank" rel="noopener noreferrer"><img className='rbarbox' src="https://s05.flagcounter.com/count/ImIH/bg_FFD21F/txt_004502/border_B8B8B8/columns_2/maxflags_20/viewers_0/labels_0/pageviews_0/flags_0/percent_0/" alt="Flag Counter" style={{
                    outline: 0,
                    width: '100%',
                }} /></a>
                <img className='rbarbox' src="https://s05.flagcounter.com/count_US/ImIH/bg_FFD21F/txt_004502/border_B8B8B8/columns_2/maxflags_20/viewers_0/labels_0/pageviews_0/flags_0/percent_0/" alt="Flag Counter" style={{
                    outline: 0,
                    width: '100%',
                }} />
                <p className='rightbarlink' style={{marginTop: 0, fontFamily: 'DOS, basiic, sans-serif', color: 'goldenrod'}}>See who's visited from  <span><Link to={Path.VISITORS} className='rightbarlink' style={{color: 'goldenrod'}}>your country!</Link></span></p>
                {/* <a href='https://catagolue.hatsya.com/home' target="_blank" rel="noopener noreferrer"><img className='rbarbox' src={catagolue}/></a>
                <img className='rbarbox' src={yoshi}/> */}
            </div>
            {
                (props.contentHeight && props.contentHeight >= 1000) && 
                <div style={{border: 'dashed 1px darkgoldenrod', padding: '5px', marginBottom: '10px'}}>
                    <a href="https://www.moonconnection.com" target="mc_moon_ph"><img src="https://www.moonmodule.com/cs/dm/vn.gif" width="118" height="196" alt="Moon phase" /></a><div style={{position: 'relative', width: '118px'}}><div style={{position: 'absolute', top: '-20px', left: '6px', background: '#000000', width:'116px', textAlign: 'center'}}><a href="https://www.moonconnection.com/" target="mc_moon_ph"></a></div></div>
                </div>
            }
            {/* <a href='https://konachan.com/' target="_blank" rel="noopener noreferrer"><img className='rbarbox2' src={kona}/></a>
            <a href="https://en.wikipedia.org/wiki/Source_(game_engine)"><img className='rbarbox2' src="https://88x31.kate.pet/source-poweredby-orange.png" height="31" /></a> */}
            <div style={{width: '100%', height: '200px'}}>
                <iframe 
                    src="/InTheSky?hemisphere=north&objectFont=DOS" 
                    width="100%" 
                    height="100%" 
                    style={{maxWidth: '100%', border: 'none', overflow: 'scroll'}}
                    title="Tonight's Visible Object"
                ></iframe>
            </div>
            <div style={{width: '100%', height: '200px'}}>
                <iframe 
                    src="/InTheSky?hemisphere=south&objectFont=DOS" 
                    width="100%" 
                    height="100%" 
                    style={{maxWidth: '100%', border: 'none', overflow: 'scroll'}}
                    title="Tonight's Visible Object"
                ></iframe>
            </div>
            <hr style={{marginBottom: '5px'}}/>
            <Link className='staticA' to={Path.GET_IN_THE_SKY} style={{float: 'right', textAlign: 'right', fontSize: '12px', marginTop: '0px', textDecoration: 'none', color: 'darkblue'}} >Get this widget. [?]</Link>
        </div>
    );
};

export default Rightbar;
