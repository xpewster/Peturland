import React from 'react';
import './Content.css';
import BarOne from './content/BarOne';
import Sidebar from './content/sidebar';
import AppWindow from './content/AppWindow';
import { ContentType } from '../constants/ContentType';

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
          <Sidebar />
          <AppWindow contentType={props.contentType ?? ContentType.HOME}/>
        </div>
    </div>
  );
}

export default Content;
