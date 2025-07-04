import React from 'react';
import { ContentType } from '../../constants/ContentType';
import Home from './home/Home';
import About from './about/About';
import Projects from './projects/Projects';
import Xgeo from './xgeo/Xgeo';
import Soon from './soon/Soon';
import { Path } from '../../constants/Path';

export interface AppContentProps {
    contentType: ContentType;
}

const AppContent = ({
    contentType,
}: AppContentProps): React.ReactElement => {

    const getContent = (): React.ReactElement => {
        switch(contentType) {
            case ContentType.ABOUT:
                return <About />;
            case ContentType.PROJECTS:
                return <Projects />;
            case ContentType.XGEO:
                return <Xgeo />;
            case ContentType.XGEO_SOON:
            case ContentType.XGEO_US:
            case ContentType.XGEO_US_ADOPT_A_HIGHWAY:
            case ContentType.XGEO_US_STATE_HIGHWAY:
            case ContentType.XGEO_US_COUNTY_SECONDARY_HIGHWAY:
            case ContentType.XGEO_US_STATE_FLAGS:
            case ContentType.XGEO_US_WINDSHIELD_STICKERS:
            case ContentType.XGEO_NA_AREA_CODES:
            case ContentType.XGEO_NA_ABBREVIATIONS:
            case ContentType.XGEO_NA_TREE_SPECIES:
            case ContentType.XGEO_BR:
            case ContentType.XGEO_BR_ABBREVIATIONS:
            case ContentType.XGEO_BR_POSTCODES:
            case ContentType.XGEO_EU:
            case ContentType.XGEO_EU_BOLLARDS:
            case ContentType.XGEO_EU_CHEVRONS:
            case ContentType.XGEO_EU_DOMAINS:
            case ContentType.XGEO_EU_GUARDRAILS:
            case ContentType.XGEO_EU_FLAGS:
            case ContentType.XGEO_EU_PEDESTRIAN_CROSSINGS:
            case ContentType.XGEO_MONG:
            case ContentType.XGEO_MONG_CAR_META:
            case ContentType.XGEO_INDONESIA_KABUPATEN:
            case ContentType.XGEO_PHILLIPINES_PROVINCES:
            case ContentType.XGEO_PHILLIPINES_REGIONS:
            case ContentType.XGEO_VIETNAM_PROVINCES:
            case ContentType.XGEO_VIETNAM_AREA_CODES:
            case ContentType.XGEO_NIGERIA_STATES:
            case ContentType.XGEO_KENYA_COUNTIES:
            case ContentType.XGEO_AUSTRALIA_PLATES:
            case ContentType.XGEO_ZA_PLATES:
            case ContentType.XGEO_ZA_PROVINCES:
            case ContentType.XGEO_JP_AREACODES:
            case ContentType.XGEO_JP_PREFECTURES:
            case ContentType.XGEO_JP_POLE_PLATES:
            case ContentType.XGEO_JP_POLE_REFLECTORS:
            case ContentType.XGEO_JP_POLE_ATTACHMENTS:
            case ContentType.XGEO_JP_KANJI:
            case ContentType.XGEO_JP_REGIONS:
                return <Xgeo contentType={contentType}/>;
            case ContentType.SOON:
                return <Soon />;    
            default: 
            case ContentType.HOME:
                return <Home />;
        }
    };

    return getContent();
};

export default AppContent;
