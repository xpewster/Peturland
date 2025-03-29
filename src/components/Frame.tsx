import React from 'react';
import header from '../assets/header2.png';
import petur from '../assets/petur2.gif';
import dragon from '../assets/dragongold.gif';
import './Frame.css';
import Content from './Content';
import { Path } from '../constants/Path';
import { ContentType } from '../constants/ContentType';
import coco from '../assets/coco.png';

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
      case Path.XGEO_US:
        return ContentType.XGEO_US;
      case Path.XGEO_US_ADOPT_A_HIGHWAY:
        return ContentType.XGEO_US_ADOPT_A_HIGHWAY;
      case Path.XGEO_US_COUNTY_SECONDARY_HIGHWAY:
        return ContentType.XGEO_US_COUNTY_SECONDARY_HIGHWAY;
      case Path.XGEO_US_STATE_FLAGS:
        return ContentType.XGEO_US_STATE_FLAGS;
      case Path.XGEO_US_STATE_HIGHWAY:
        return ContentType.XGEO_US_STATE_HIGHWAY;
      case Path.XGEO_US_WINDSHIELD_STICKERS:
        return ContentType.XGEO_US_WINDSHIELD_STICKERS;
      case Path.XGEO_NA_ABBREVIATIONS:
        return ContentType.XGEO_NA_ABBREVIATIONS;
      case Path.XGEO_BR:
        return ContentType.XGEO_BR;
      case Path.XGEO_BR_ABBREVIATIONS:
        return ContentType.XGEO_BR_ABBREVIATIONS;
      case Path.XGEO_BR_POSTCODES:
        return ContentType.XGEO_BR_POSTCODES;
      case Path.XGEO_MONG:
        return ContentType.XGEO_MONG;
      case Path.SOON:
        return ContentType.SOON;
    }
  }


  return (
    <div>
      <div className="box">
          <img className="box-header" src={header}/>
          <img className="petur" src={petur}/>
          <img className="dragon" src={dragon}/>
          
          <Content contentType={getContentType()}></Content>
      </div>
      {/* <div style={{position: 'fixed', bottom: '-10px', left: 'calc(50% - 350px)', width: '200px'}}>
        <img src={coco} style={{width: '100%'}}></img>
        <p style={{position: 'absolute', bottom: '10px', right: '50px', fontFamily: 'RomanceA', fontSmooth: 'never', color: 'white', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'}}>Coco says to save old homes!</p>
      </div> */}
      
    </div>
  );
}

export default Frame;
