import React from 'react';
import header from '../assets/header.png';
import petur from '../assets/petur2.gif';
import dragon from '../assets/dragongold.gif';
import './Frame.css';
import Content from './Content';

const Frame = (): React.ReactElement => {
  return (
    <div className="box">
        <img className="box-header" src={header}/>
        <img className="petur" src={petur}/>
        <img className="dragon" src={dragon}/>
        <Content></Content>
    </div>
  );
}

export default Frame;
