import React from 'react';
import window from '../../assets/xp.png';

const AppWindow = (): React.ReactElement => {
    return (
        <div className='appwindow'>
            <img style={{paddingLeft: '20px'}} src={window}></img>
        </div>
    );
};

export default AppWindow;
