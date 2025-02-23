import React from 'react';
import go_home from '../../assets/go_home.png';
import go_about from '../../assets/go_about.png';
import go_xgeo from '../../assets/go_xgeo.png';
import go_soon from '../../assets/go_soon.png';

const Sidebar = (): React.ReactElement => {
    return (
        <div className='sidebar'>
            <img className='go-button' src={go_home}></img>
            <img className='go-button' src={go_about}></img>
            <img className='go-button' src={go_xgeo}></img>
            <img className='go-button' src={go_soon}></img>
        </div>
    );
};

export default Sidebar;
