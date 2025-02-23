import React from 'react';
import header from '../assets/header.png';
import petur from '../assets/petur2.gif';
import dragon from '../assets/dragongold.gif';
import './Frame.css';
import Content from './Content';
import { Path } from '../constants/Path';
import { ContentType } from '../constants/ContentType';

export interface FrameProps {
  path?: string;
}

const Frame = (props: FrameProps): React.ReactElement => {

  const getContentType = () => {
    switch(props.path) {
      case Path.HOME:
        return ContentType.HOME;
      case Path.ABOUT:
        return ContentType.ABOUT;
      case Path.PROJECTS:
        return ContentType.PROJECTS;
      case Path.XGEO:
        return ContentType.XGEO;
      case Path.SOON:
        return ContentType.SOON;
    }
  }

  return (
    <div className="box">
        <img className="box-header" src={header}/>
        <img className="petur" src={petur}/>
        <img className="dragon" src={dragon}/>
        
        <Content contentType={getContentType()}></Content>
    </div>
  );
}

export default Frame;
