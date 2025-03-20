import React, { useLayoutEffect, useState } from 'react';
import './Content.css';
import BarOne from './content/BarOne';
import Sidebar from './content/sidebar';
import AppWindow, { getContentSize } from './content/AppWindow';
import { ContentType } from '../constants/ContentType';
import Loafer from './content/Loafer';
import Counter from './content/Counter';
import piano from '../assets/piano.gif';
import lizard from '../assets/lizardll.gif';
import neko from '../assets/luckyneko.gif';
import BarTwo from './content/BarTwo';
import stars from '../assets/stars.png';
import coco from '../assets/coco.png';
import monet from '../assets/ft.jpg';
import Rightbar from './content/rightbar';
import { Chatbox } from './content/chatbox/Chatbox';
import BarBar from './content/BarBar';
import Home from './content/home/Home';
import underconstruction from '../assets/88x31/construction.gif';

export interface ContentProps {
  contentType?: ContentType;
}

const Content = (props: ContentProps): React.ReactElement => {
  const [vw, setVw] = useState<number>(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0));

  useLayoutEffect(() => {
    function updateSize() {
        setVw(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0));
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className="cbox">
        <p style={{textAlign: 'left', paddingLeft: '10px'}}>Hi! Welcome to my website. WIP!!</p>
        <img className='sidebar' style={{width: '100%', paddingTop: '0px', paddingBottom: '5px', paddingLeft: '0px'}} src={stars}></img>
        <hr className='barlinedashed'></hr>
        <div style={{width: '100%', height: `${getContentSize(props.contentType ?? ContentType.HOME) + 450}px`}}>
          <div className='sidebar'>
            <Sidebar />
            <Loafer />
            <Counter />
            <div style={{position: 'relative'}}>
              {
                (getContentSize(props.contentType ?? ContentType.HOME) > 600) ? <img style={{
                  height: `${getContentSize(props.contentType ?? ContentType.HOME) - 450}px`,
                  imageRendering: 'pixelated',
                  position: 'absolute',
                }} src={lizard}></img> : <></>
              }
            </div>
            <BarBar />
          </div>
          <div style={{marginLeft: '30px', float: 'left', width: '465px', height: `${getContentSize(props.contentType ?? ContentType.HOME) + 450}px`, paddingBottom: '10px'}}>
            {props.contentType === ContentType.HOME ? <Home /> : <AppWindow contentType={props.contentType ?? ContentType.HOME}/>}
            <Chatbox />
          </div>
          <Rightbar />
          {/* <div style={{paddingBottom: '30px'}}>
            <img className='sidebar' style={{width: '100%', paddingTop: '0px', paddingBottom: '5px', paddingLeft: '0px'}} src={stars}></img>
            <hr className='barlinedashed'></hr>
            <hr className='barlinedashed'></hr>
            <BarTwo />
          </div> */}
        </div>
        <p style={{textAlign: 'center'}}>(C) Peturland 2025 <img src={underconstruction} /></p>
        {/* <div style={{position: 'absolute', backgroundColor: 'rgb(255, 255, 255)', height: '300px', opacity: '100%', width: '200%', paddingLeft: '-50px'}}>
          <img src={neko} style={{paddingLeft: '425px', paddingTop: '100px'}}></img>
        </div> */}
        <div style={{position: 'fixed', bottom: '-10px', left: '0px', width: '200px', pointerEvents: 'none'}}> 
          <img src={coco} style={{width: '100%', pointerEvents: 'none'}}></img>
          <p style={{position: 'absolute', bottom: '10px', right: '50px', fontFamily: 'RomanceA', fontSmooth: 'never', color: 'white', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'}}>Coco says to save old homes!</p>
        </div>
    </div>
  );
}

export default Content;
