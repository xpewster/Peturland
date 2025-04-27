import React from 'react';
import header from '../assets/header2.png';
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
      case Path.XGEO_NA_AREA_CODES:
        return ContentType.XGEO_NA_AREA_CODES;
      case Path.XGEO_BR:
        return ContentType.XGEO_BR;
      case Path.XGEO_BR_ABBREVIATIONS:
        return ContentType.XGEO_BR_ABBREVIATIONS;
      case Path.XGEO_BR_POSTCODES:
        return ContentType.XGEO_BR_POSTCODES;
      case Path.XGEO_EU:
        return ContentType.XGEO_EU;
      case Path.XGEO_EU_BOLLARDS:
        return ContentType.XGEO_EU_BOLLARDS;
      case Path.XGEO_EU_CHEVRONS:
        return ContentType.XGEO_EU_CHEVRONS;
      case Path.XGEO_EU_DOMAINS:
        return ContentType.XGEO_EU_DOMAINS;
      case Path.XGEO_EU_GUARDRAILS:
        return ContentType.XGEO_EU_GUARDRAILS;
      case Path.XGEO_EU_FLAGS:
        return ContentType.XGEO_EU_FLAGS;
      case Path.XGEO_EU_PEDESTRIAN_CROSSINGS:
        return ContentType.XGEO_EU_PEDESTRIAN_CROSSINGS;
      case Path.XGEO_MONG:
        return ContentType.XGEO_MONG;
      case Path.XGEO_MONG_CAR_META:
        return ContentType.XGEO_MONG_CAR_META;
      case Path.XGEO_INDONESIA_KABUPATEN:
        return ContentType.XGEO_INDONESIA_KABUPATEN;
      case Path.XGEO_PHILLIPINES_PROVINCES:
        return ContentType.XGEO_PHILLIPINES_PROVINCES;
      case Path.XGEO_PHILLIPINES_REGIONS:
        return ContentType.XGEO_PHILLIPINES_REGIONS;
      case Path.XGEO_NIGERIA_STATES:
        return ContentType.XGEO_NIGERIA_STATES;
      case Path.XGEO_KENYA_COUNTIES:
        return ContentType.XGEO_KENYA_COUNTIES;
      case Path.XGEO_AUSTRALIA_PLATES:
        return ContentType.XGEO_AUSTRALIA_PLATES;
      case Path.XGEO_ZA_PLATES:
        return ContentType.XGEO_ZA_PLATES;
      case Path.XGEO_ZA_PROVINCES:
        return ContentType.XGEO_ZA_PROVINCES;
      case Path.XGEO_JP_AREACODES:
        return ContentType.XGEO_JP_AREACODES;
      case Path.XGEO_JP_PREFECTURES:
        return ContentType.XGEO_JP_PREFECTURES;
      case Path.XGEO_JP_POLE_PLATES:
        return ContentType.XGEO_JP_POLE_PLATES;
      case Path.XGEO_JP_POLE_REFLECTORS:
        return ContentType.XGEO_JP_POLE_REFLECTORS;
      case Path.XGEO_JP_POLE_ATTACHMENTS:
        return ContentType.XGEO_JP_POLE_ATTACHMENTS;
      case Path.XGEO_JP_KANJI:
        return ContentType.XGEO_JP_KANJI;
      case Path.SOON:
        return ContentType.SOON;
    }
  }


  return (
    <div>
      <div className="box">
          <img className="box-header" alt='Header' src={header}/>
          <img className="petur" alt='Petur' src={petur}/>
          <img className="dragon" src={dragon}/>
          
          <Content contentType={getContentType()}></Content>
      </div>
    </div>
  );
}

export default Frame;
