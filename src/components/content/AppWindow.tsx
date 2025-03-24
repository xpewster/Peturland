import React from 'react';
import window from '../../assets/xp.png';
import windowtop from '../../assets/xptop.png';
import windowsides from '../../assets/xpsides.png';
import windowbottom from '../../assets/xpbottom.png';
import { ContentType } from '../../constants/ContentType';
import AppContent from './AppContent';
import { QuizType } from './xgeo/constants';

export interface AppWindowProps {
    contentType: ContentType;
}

export const getContentSize = (type: ContentType) => {
    switch (type) {
        case ContentType.HOME:
            return 700;
        case ContentType.ABOUT:
            return 1750;
        case ContentType.PROJECTS:
            return 800;
        case ContentType.XGEO:
            return 1000;
        case ContentType.XGEO_US:
            return 1010;
        case ContentType.XGEO_US_STATE_FLAGS:
            return 1050;
        case ContentType.XGEO_US_ADOPT_A_HIGHWAY:
            return 1050;
        case ContentType.XGEO_US_STATE_HIGHWAY:
            return 905;
        case ContentType.XGEO_US_COUNTY_SECONDARY_HIGHWAY:
            return 1000;
        case ContentType.XGEO_NA_ABBREVIATIONS:
            return 820;
        case ContentType.XGEO_BR:
            return 1000;
        case ContentType.XGEO_BR_ABBREVIATIONS:
            return 800;
        case ContentType.XGEO_BR_POSTCODES:
            return 1070;
        case ContentType.XGEO_MONG:
            return 900;
        case ContentType.SOON:
            return 700;
        default:
            return 1000;
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
                <AppContent contentType={props.contentType} />
            </div>
        </div>
    );
};

export default AppWindow;
