import React from 'react';
import { Path } from '../../constants/Path';

import sayNo from '../../assets/roly-saynotoweb3.gif';
import lain from '../../assets/lain.gif';
import shiina from '../../assets/shiina.png';
import wtf from '../../assets/1971.gif';
import catagolue from '../../assets/catagolue.png';
import tt from '../../assets/tt.png';
import oriland from '../../assets/oribana.gif';
import smlnew from '../../assets/smlnew.gif';
import a9 from '../../assets/aliennine.png'
import cs from '../../assets/cs.gif';
import hostyellow from '../../assets/hostyellow.gif';
import npp from '../../assets/notepadpp3.gif';
import xp from '../../assets/winxp.gif';
import yoshi from '../../assets/yoshihatchbutton.gif';

const Rightbar = (): React.ReactElement => {


    return (
        <div className='rightbar'>
            <a className='rightbarlink' href='credits'>Credits</a>
            <a className='rightbarlink' href='credits'>Digicam</a>
            <a className='rightbarlink' href='https://cyber.dabamos.de/88x31/index.html' target="_blank" rel="noopener noreferrer">88x31</a>
            <a href='https://yesterweb.org/no-to-web3/' target="_blank" rel="noopener noreferrer"><img className='rbarbox' style={{marginTop: '30px'}}  src={sayNo}/></a>
            <a href='https://myanimelist.net/anime/339/Serial_Experiments_Lain?q=lain&cat=anime' target="_blank" rel="noopener noreferrer"><img className='rbarbox' src={lain}/></a>
            <a href='https://animemusicquiz.com/' target="_blank" rel="noopener noreferrer"><img className='rbarbox' src={shiina}/></a>
            <a href='https://wtfhappenedin1971.com/' target="_blank" rel="noopener noreferrer"><img className='rbarbox' src={wtf}/></a>
            <img className='rbarbox' src={cs}/>
            <a href='https://www.toontownrewritten.com/' target="_blank" rel="noopener noreferrer"><img className='rbarbox' src={tt}/></a>
            <a href='https://www.oriland.com/gallery/animals/main.php?index.php' target="_blank" rel="noopener noreferrer"><img className='rbarbox' src={oriland}/></a>
            <a href='https://github.com/dremin/RetroBar' target="_blank" rel="noopener noreferrer"><img className='rbarbox' src={xp}/></a>
            <img className='rbarbox' src={hostyellow}/>
            <img className='rbarbox' src={npp}/>
            <img className='rbarbox' style={{outline: '1px solid grey'}} src={a9}/>
            <p className='rightbarlink'>Feed</p>
            <a href="https://info.flagcounter.com/ImIH"><img className='rbarbox' src="https://s05.flagcounter.com/count/ImIH/bg_FFD21F/txt_004502/border_B8B8B8/columns_2/maxflags_20/viewers_0/labels_0/pageviews_0/flags_0/percent_0/" alt="Flag Counter" style={{
                outline: 0,
                width: '100%',
            }} /></a>
            <a href="https://info.flagcounter.com/ImIH"><img className='rbarbox' src="https://s05.flagcounter.com/count_US/ImIH/bg_FFD21F/txt_004502/border_B8B8B8/columns_2/maxflags_20/viewers_0/labels_0/pageviews_0/flags_0/percent_0/" alt="Flag Counter" style={{
                outline: 0,
                width: '100%',
            }} /></a>
            <p className='rightbarlink' style={{marginTop: 0}}>See who's visited from  <span><a className='rightbarlink' href='credits'>your country!</a></span></p>
            <a href='https://catagolue.hatsya.com/home' target="_blank" rel="noopener noreferrer"><img className='rbarbox' src={catagolue}/></a>
            <img className='rbarbox' src={yoshi}/>
          </div>
    );
};

export default Rightbar;
