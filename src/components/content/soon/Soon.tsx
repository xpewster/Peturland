import React from 'react';
import kodama from '../../../assets/kodamani.gif';

const Soon = (): React.ReactElement => {
    return (
        <div>
            <p style={{paddingLeft: '5px'}}>The kodama are hard at work on this page..</p>
            <img style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}} src={kodama}></img>
        </div>
    );
};

export default Soon;
