import React from 'react';
import window from '../../assets/xp.png';
import windowtop from '../../assets/xptop.png';
import windowsides from '../../assets/xpsides.png';
import windowbottom from '../../assets/xpbottom.png';
import { ContentType } from '../../constants/ContentType';
import AppContent from './AppContent';

export interface AppWindowProps {
    contentType: ContentType;
}

export const getContentSize = (type: ContentType) => {
    switch (type) {
        case ContentType.HOME:
            return 500;
        case ContentType.ABOUT:
            return 500;
        case ContentType.PROJECTS:
            return 800;
        case ContentType.XGEO:
            return 1000;
        case ContentType.XGEO_US:
            return 1000;
        case ContentType.XGEO_BR:
            return 1000;
        case ContentType.SOON:
            return 500;
    }
}

const AppWindow = (props: AppWindowProps): React.ReactElement => {

    const TOP_BAR_HEIGHT = 20;

    return (
        <div className='appwindow'>
            <img style={{paddingLeft: '0px', position: 'absolute'}} src={windowtop}></img>
            <img style={{paddingLeft: '0px', position: 'absolute', width: '465px', height: `${getContentSize(props.contentType) - TOP_BAR_HEIGHT}px`, paddingTop: TOP_BAR_HEIGHT}} src={windowsides}></img>
            <img style={{paddingLeft: '0px', position: 'absolute', paddingTop: `${getContentSize(props.contentType)}px`}} src={windowbottom}></img>
            <div className='appWindowContent' style={{height: `${getContentSize(props.contentType) - TOP_BAR_HEIGHT}px`}}>
                <AppContent contentType={props.contentType}/>
            </div>
        </div>
    );
};

export default AppWindow;
