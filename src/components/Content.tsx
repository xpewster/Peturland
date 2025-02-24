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

export interface ContentProps {
  contentType?: ContentType;
}

const Content = (props: ContentProps): React.ReactElement => {
  return (
    <div className="cbox">
        <p style={{textAlign: 'center'}}>Hi! Welcome to my website. WIP!!</p>
        <hr style={{width: '95%', color: 'darkgreen', backgroundColor: 'darkgreen', height: '1px', borderWidth: '0'}}></hr>
        <BarOne />
        <hr style={{width: '95%', color: 'darkgreen', backgroundColor: 'darkgreen', height: '1px', borderWidth: '0'}}></hr>
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
          <img className='sidebar' style={{width: 'calc(100% - 40px)', paddingTop: '10px', paddingBottom: '30px', opacity: '90%'}} src={piano}></img>
        </div>
        <hr style={{width: '95%', color: 'darkgreen', backgroundColor: 'darkgreen', height: '1px', borderWidth: '0'}}></hr>
    </div>
  );
}

export default Content;
