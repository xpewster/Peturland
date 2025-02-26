import React from 'react';
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

export interface ContentProps {
  contentType?: ContentType;
}

const Content = (props: ContentProps): React.ReactElement => {
  return (
    <div className="cbox">
        <p style={{textAlign: 'center'}}>Hi! Welcome to my website. WIP!!</p>
        <img className='sidebar' style={{width: '700px', paddingTop: '0px', paddingBottom: '5px', paddingLeft: '0px'}} src={stars}></img>
        <hr className='barlinedashed'></hr>
        <BarOne />
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
          <AppWindow contentType={props.contentType ?? ContentType.HOME}/>
          <div style={{paddingBottom: '30px'}}>
            {/* <img className='sidebar' style={{width: 'calc(100% - 40px)', paddingTop: '10px', paddingBottom: '10px', opacity: '90%'}} src={piano}></img> */}
            <img className='sidebar' style={{width: '700px', paddingTop: '0px', paddingBottom: '5px', paddingLeft: '0px'}} src={stars}></img>
            {/* <iframe style={{borderRadius: '12px', width: '90%'}} src="https://open.spotify.com/embed/playlist/3LA3NO864Yyu2vNXlD89TI?utm_source=generator" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
            <hr className='barlinedashed'></hr>
            <BarTwo />
          </div>
        </div>
        <hr className='barline'></hr>
        <p style={{textAlign: 'center'}}>(C) Peter 2025</p>
        <div style={{position: 'absolute', backgroundColor: 'rgb(0, 12, 63)', height: '300px', opacity: '100%', width: '200%', paddingLeft: '-50px'}}>
          <img src={neko} style={{paddingLeft: '325px', paddingTop: '100px'}}></img>
        </div>
    </div>
  );
}

export default Content;
