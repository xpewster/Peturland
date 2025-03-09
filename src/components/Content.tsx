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
        <div>
          <div className='sidebar'>
            <Sidebar />
            <Loafer />
            <Counter />
            {
              (getContentSize(props.contentType ?? ContentType.HOME) > 600) ? <img style={{height: `${getContentSize(props.contentType ?? ContentType.HOME) - 450}px`}} src={lizard}></img> : <></>
            }
          </div>
          <div style={{paddingBottom: '10px'}}>
            <AppWindow contentType={props.contentType ?? ContentType.HOME}/>
            {/* <div className='appwindow' style={{paddingTop: '5px'}}>
              <img style={{width: '620px', height: '250px', border: 'solid 1px darkgreen'}} src={monet}></img>
            </div> */}
          </div>
          <Rightbar />
          <div style={{paddingBottom: '30px'}}>
            {/* <img className='sidebar' style={{width: 'calc(100% - 40px)', paddingTop: '10px', paddingBottom: '10px', opacity: '90%'}} src={piano}></img> */}
            <img className='sidebar' style={{width: '100%', paddingTop: '0px', paddingBottom: '5px', paddingLeft: '0px'}} src={stars}></img>
            {/* <iframe style={{borderRadius: '12px', width: '90%'}} src="https://open.spotify.com/embed/playlist/3LA3NO864Yyu2vNXlD89TI?utm_source=generator" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
            <hr className='barlinedashed'></hr>
            {/* <BarOne /> */}
            <hr className='barlinedashed'></hr>
            <BarTwo />
          </div>
        </div>
        <hr className='barline'></hr>
        <p style={{textAlign: 'center'}}>(C) Peter 2025</p>
        <div style={{position: 'absolute', backgroundColor: 'rgb(255, 255, 255)', height: '300px', opacity: '100%', width: '200%', paddingLeft: '-50px'}}>
          <img src={neko} style={{paddingLeft: '425px', paddingTop: '100px'}}></img>
        </div>
        {/* left: `${vw * 0.5 - 360}px` */}
        <div style={{position: 'fixed', bottom: '-10px', left: '0px', width: '200px'}}> 
          <img src={coco} style={{width: '100%'}}></img>
          <p style={{position: 'absolute', bottom: '10px', right: '50px', fontFamily: 'RomanceA', fontSmooth: 'never', color: 'white', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'}}>Coco says to save old homes!</p>
        </div>
    </div>
  );
}

export default Content;
