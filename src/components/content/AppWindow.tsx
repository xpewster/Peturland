import React from 'react';
import window from '../../assets/xp.png';
import { ContentType } from '../../constants/ContentType';
import AppContent from './AppContent';

export interface AppWindowProps {
    contentType: ContentType;
}

const AppWindow = (props: AppWindowProps): React.ReactElement => {
    return (
        <div className='appwindow'>
            <img style={{paddingLeft: '20px', position: 'absolute'}} src={window}></img>
            <div className='appWindowContent'>
                <AppContent contentType={props.contentType}/>
            </div>
        </div>
    );
};

export default AppWindow;
