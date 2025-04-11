import React, { useEffect, useRef, useState } from 'react';
import './Xgeo.css';
import Brazil from './brazil/Brazil';
import Us from './us/Us';
import filebox from '../../../assets/filebox.png';
import { QuizType } from './constants';
import Mongolia from './mongolia/Mongolia';
import { ContentType } from '../../../constants/ContentType';
import { Path } from '../../../constants/Path';
import UsAdoptAHighway from './us/AdoptAHighway/UsAdoptAHighway';
import Filebox, { LINK_CLICK_COLOR } from '../../common/Filebox';
import { preloadImage2 } from '../../common/preloadImage';
import lice from '../../../assets/fileboxicons/xp/msvbvm50.dll_14_1202-2.png';
import phone from '../../../assets/gifs/phone.gif'
import texas from '../../../assets/fileboxicons/xp/oledb32r.dll_14_206-1.png';
import putlitter from '../../../assets/fileboxicons/xp/cleanmgr.exe_14_104-2.png';
import UsFlags from './us/Flags/UsFlags';
import head from '../../../assets/fileboxicons/xp/shimgvw.dll_14_1-1.png';
import shortcut from '../../../assets/fileboxicons/shortcut.png';
import car from '../../../assets/fileboxicons/car.png';
import folder from '../../../assets/fileboxicons/folder.png';
import folder2 from '../../../assets/fileboxicons/xp/shell32.dll_14_20-8.png';
import sticky from '../../../assets/fileboxicons/xp/ntbackup.exe_14_102-1.png';
import regency from '../../../assets/fileboxicons/xp/freecell.exe_14_601-4.png';
import provinces from '../../../assets/fileboxicons/xp/dfrgres.dll_14_106-4.png';
import regions from '../../../assets/fileboxicons/xp/icwconn1.exe_14_200-2.png';

import chevron from '../../../assets/fileboxicons/xp/mfc90.dll_14_17100-0.png';
import bollard from '../../../assets/fileboxicons/xp/dot3ui.dll_14_2000-15.png';
import guardrail from '../../../assets/fileboxicons/xp/compstui.dll_14_64002-1.png';
import pedestrian from '../../../assets/fileboxicons/xp/msmsgs.exe_14_1-5.png';
import domain from '../../../assets/fileboxicons/ie.png';

import navigatehere from '../../../assets//navigatehere.png';
import UsStateHighways from './us/StateHighways/UsStateHighways';
import UsAbbreviations from './us/Abbreviations/UsAbbreviations';
import BrazilAbbreviations from './brazil/Abbreviations/BrazilAbbreviations';
import BrazilPostcodes from './brazil/Postcodes/BrazilPostcodes';
import UsWindshieldStickers from './us/WindshieldStickers/UsWindshieldStickers';
import CompoundFilebox from '../../common/CompoundFilebox';
import Kabupaten from './indo/Kabupaten/Kabupaten';
import EuChevrons from './europe/chevrons/EuChevrons';
import EuDomains from './europe/domains/EuDomains';
import EuGuardrails from './europe/guardrails/EuGuardrails';
import FiloProvinces from './phillipines/provinces/FiloProvinces';
import FiloRegions from './phillipines/regions/FiloRegions';
import EuPedestrians from './europe/ped/EuPedestrians';
import EuFlags from './europe/flags/EuFlags';
import EuBollards from './europe/bollards/EuBollards';

export interface XgeoProps {
    contentType?: ContentType;
}

const Xgeo = (props: XgeoProps): React.ReactElement => {

    const NA_IMGS = [lice, texas, shortcut, putlitter, head, sticky, phone];
    const NA_STRINGS = ['License Plates', 'State Flags', 'Abbreviations', 'Adopt-A-Highway', 'State Highway', 'Windshield Stickers', 'Area Codes Coming Soon'];
    const NA_LINKS = [Path.XGEO_US, Path.XGEO_US_STATE_FLAGS, Path.XGEO_NA_ABBREVIATIONS, Path.XGEO_US_ADOPT_A_HIGHWAY, Path.XGEO_US_STATE_HIGHWAY, Path.XGEO_US_WINDSHIELD_STICKERS, Path.SOON];
    const NA_STYLES = [{width: '16px' as const, height: '16px' as const, paddingLeft: '4px' as const, paddingTop: '3px' as const}, {width: '16px' as const, height: '16px' as const, paddingLeft: '4px' as const, paddingTop: '3px' as const}, {}, {width: '16px' as const, height: '16px' as const, paddingLeft: '4px' as const, paddingTop: '3px' as const}, {paddingLeft: '4px' as const, paddingTop: '3px' as const}, {width: '16px' as const, height: '16px' as const, paddingLeft: '4px' as const, paddingTop: '3px' as const}];

    const BR_IMGS = [phone, shortcut, folder];
    const BR_STRINGS = ['Phone Codes', '2-Letter Abbreviations', 'Postcodes (CEP)'];
    const BR_LINKS = [Path.XGEO_BR, Path.XGEO_BR_ABBREVIATIONS, Path.XGEO_BR_POSTCODES];

    const EU_IMGS = [chevron, bollard, domain, guardrail, texas, pedestrian];
    const EU_STRINGS = ['Chevrons', 'Bollards', 'Country code TLDomains', 'Guardrails', 'Flags', 'Pedestrian Crossings'];
    const EU_LINKS = [Path.XGEO_EU_CHEVRONS, Path.XGEO_EU_BOLLARDS, Path.XGEO_EU_DOMAINS, Path.XGEO_EU_GUARDRAILS, Path.XGEO_EU_FLAGS, Path.XGEO_EU_PEDESTRIAN_CROSSINGS];
    const EU_STYLES = [{width: '16px' as const, height: '16px' as const, paddingLeft: '4px' as const, paddingTop: '3px' as const}, {width: '16px' as const, height: '16px' as const, paddingLeft: '4px' as const, paddingTop: '3px' as const}, {width: '16px' as const, height: '16px' as const, paddingLeft: '4px' as const, paddingTop: '3px' as const}, {width: '16px' as const, height: '16px' as const, paddingLeft: '4px' as const, paddingTop: '3px' as const}, {paddingLeft: '4px' as const, paddingTop: '3px' as const}, {paddingLeft: '4px' as const, paddingTop: '3px' as const}, {paddingLeft: '4px' as const, paddingTop: '3px' as const}];

    const MONG_IMGS = [car];
    const MONG_STRINGS = ['Driving Direction'];
    const MONG_LINKS = [Path.XGEO_MONG];
    const MONG_STYLES = [{width: '16px' as const, height: '16px' as const, paddingLeft: '4px' as const, paddingTop: '3px' as const}];

    const INDO_IMGS = [regency];
    const INDO_STRINGS = ['Kabupaten'];
    const INDO_LINKS = [Path.XGEO_INDONESIA_KABUPATEN];
    const INDO_STYLES = [{width: '16px' as const, height: '16px' as const, paddingLeft: '4px' as const, paddingTop: '3px' as const}];

    const PHILLIPINES_IMGS = [provinces, regions];
    const PHILLIPINES_STRINGS = ['Provinces', 'Regions'];
    const PHILLIPINES_LINKS = [Path.XGEO_PHILLIPINES_PROVINCES, Path.XGEO_PHILLIPINES_REGIONS];
    const PHILLIPINES_STYLES = [{width: '16px' as const, height: '16px' as const, paddingLeft: '4px' as const, paddingTop: '3px' as const}, {width: '16px' as const, height: '16px' as const, paddingLeft: '4px' as const, paddingTop: '3px' as const}];
    
    const TOP_IMGS = [folder2, folder2, folder2];
    const TOP_STRINGS = ['Mongolia', 'Indonesia', 'Phillipines'];
    const TOP_STYLES = [{width: '16px' as const, height: '16px' as const, paddingLeft: '4px' as const, paddingTop: '3px' as const}, {width: '16px' as const, height: '16px' as const, paddingLeft: '4px' as const, paddingTop: '3px' as const}, {width: '16px' as const, height: '16px' as const, paddingLeft: '4px' as const, paddingTop: '3px' as const}];
    const TOP_SUB_SRCS = [MONG_IMGS, INDO_IMGS, PHILLIPINES_IMGS];
    const TOP_SUB_STRINGS = [MONG_STRINGS, INDO_STRINGS, PHILLIPINES_STRINGS];
    const TOP_SUB_LINKS = [MONG_LINKS, INDO_LINKS, PHILLIPINES_LINKS];
    const TOP_SUB_STYLES = [MONG_STYLES, INDO_STYLES, PHILLIPINES_STYLES];

    const [showFilebox, setShowFilebox] = useState<boolean[]>([false, false, false, false, false]);
    const [showNavigateHere, setShowNavigateHere] = useState<boolean>(true);

    useEffect(() => {
        NA_IMGS.forEach((src) => {
            preloadImage2(src);
        });
        BR_IMGS.forEach((src) => {
            preloadImage2(src);
        });
        EU_IMGS.forEach((src) => {
            preloadImage2(src);
        });
        TOP_IMGS.forEach((src) => {
            preloadImage2(src);
        });
    }, []);
    
    const getGame = () => {
        switch(props.contentType) {
            default:
            case ContentType.XGEO_US:
                return <Us quizType={QuizType.US_LICENSE_PLATES}/>;
            case ContentType.XGEO_US_ADOPT_A_HIGHWAY:
                return <UsAdoptAHighway />;
            case ContentType.XGEO_US_STATE_HIGHWAY:
                return <UsStateHighways/>;
            case ContentType.XGEO_US_COUNTY_SECONDARY_HIGHWAY:
                return <Us quizType={QuizType.US_COUNTY_SECONDARY_HIGHWAY}/>;
            case ContentType.XGEO_US_STATE_FLAGS:
                return <UsFlags/>;
            case ContentType.XGEO_US_WINDSHIELD_STICKERS:
                return <UsWindshieldStickers/>;
            case ContentType.XGEO_NA_ABBREVIATIONS:
                return <UsAbbreviations />;
            case ContentType.XGEO_BR:
                return <Brazil />;
            case ContentType.XGEO_BR_ABBREVIATIONS:
                return <BrazilAbbreviations />;
            case ContentType.XGEO_BR_POSTCODES:
                return <BrazilPostcodes />;
            case ContentType.XGEO_EU_BOLLARDS:
                return <EuBollards />;
            case ContentType.XGEO_EU_CHEVRONS:
                return <EuChevrons />;
            case ContentType.XGEO_EU_DOMAINS:
                return <EuDomains />;
            case ContentType.XGEO_EU_FLAGS:
                return <EuFlags />;
            case ContentType.XGEO_EU_GUARDRAILS:
                return <EuGuardrails />;
            case ContentType.XGEO_EU_PEDESTRIAN_CROSSINGS:
                return <EuPedestrians />;
            case ContentType.XGEO_MONG:
                return <Mongolia quizType={QuizType.MONG_DRIVING_DIRECTION} />;
            case ContentType.XGEO_INDONESIA_KABUPATEN:
                return <Kabupaten />;
            case ContentType.XGEO_PHILLIPINES_PROVINCES:
                return <FiloProvinces />;
            case ContentType.XGEO_PHILLIPINES_REGIONS:
                return <FiloRegions />;
        }
    };

    const handleClick = (index: number) => {
        setShowNavigateHere(false);
        setShowFilebox(showFilebox.map((val, i) => {if (i === index) { return !val; } else { return false; }}));
    }

    const onFileboxClick = () => {
        setShowFilebox([false, false, false, false, false]);
    }

    const getLinkBackgroundColor = (index: number): string | undefined => {
        return showFilebox[index] ? LINK_CLICK_COLOR : undefined;
    };

    const ref = useRef<any>(null);
    
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                onFileboxClick();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);

    return (
        <div>
            <div style={{height: '20px'}}>
                <div style={{paddingTop: '2px', position: 'relative'}} ref={ref}>
                    <div style={{left: '20px'}} onClick={() => handleClick(0)} className='fileboxlink top'><p className='fileboxlink top' style={{backgroundColor: getLinkBackgroundColor(0), color: showFilebox[0] ? 'white' : 'black'}}>North America</p></div>
                    {showFilebox[0] && <div style={{position: 'absolute', left: '20px', top: '22px', zIndex: 10}}><Filebox imageSrcs={NA_IMGS} strings={NA_STRINGS} links={NA_LINKS} styles={NA_STYLES} onClick={onFileboxClick}></Filebox></div>}
                    <div style={{left: '130px'}} onClick={() => handleClick(1)} className='fileboxlink top'><p className='fileboxlink top'  style={{backgroundColor: getLinkBackgroundColor(1), color: showFilebox[1] ? 'white' : 'black'}}>Brazil</p></div>
                    {showFilebox[1] && <div style={{position: 'absolute', left: '130px', top: '22px', zIndex: 10}}><Filebox imageSrcs={BR_IMGS} strings={BR_STRINGS} links={BR_LINKS} onClick={onFileboxClick}></Filebox></div>}
                    <div style={{left: '180px'}} onClick={() => handleClick(2)} className='fileboxlink top'><p className='fileboxlink top'  style={{backgroundColor: getLinkBackgroundColor(2), color: showFilebox[2] ? 'white' : 'black'}}>Europe</p></div>
                    {showFilebox[2] && <div style={{position: 'absolute', left: '180px', top: '22px', zIndex: 10}}><Filebox imageSrcs={EU_IMGS} strings={EU_STRINGS} links={EU_LINKS} styles={EU_STYLES} onClick={onFileboxClick}></Filebox></div>}
                    <div style={{left: '240px'}} onClick={() => handleClick(3)} className='fileboxlink top'><p className='fileboxlink top'  style={{backgroundColor: getLinkBackgroundColor(3), color: showFilebox[3] ? 'white' : 'black'}}>Other Countries</p></div>
                    {showFilebox[3] && <div style={{position: 'absolute', left: '240px', top: '22px', zIndex: 10}}>
                            <CompoundFilebox topImageSrcs={TOP_IMGS} topStrings={TOP_STRINGS} topStyles={TOP_STYLES} imageSrcs={TOP_SUB_SRCS} strings={TOP_SUB_STRINGS} links={TOP_SUB_LINKS} styles={TOP_SUB_STYLES} onClick={onFileboxClick}></CompoundFilebox>
                        </div>}
                </div>
                <img className='filebox' src={filebox}></img>
                <img src={navigatehere} alt='Navigate here' style={{pointerEvents: 'none', position: 'absolute', top: '25px', left: '260px', display: showNavigateHere ? undefined : 'none'}}></img>
            </div>
            {getGame()}
        </div>
    );
};

export default Xgeo;
