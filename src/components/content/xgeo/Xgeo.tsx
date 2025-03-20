import React, { useEffect, useRef, useState } from 'react';
import './Xgeo.css';
import Brazil from './brazil/Brazil';
import Us from './us/Us';
import filebox from '../../../assets/filebox.png';
import { Link } from 'react-router';
import { QuizType } from './constants';
import Mongolia from './mongolia/Mongolia';
import { ContentType } from '../../../constants/ContentType';
import { Path } from '../../../constants/Path';
import GenericRegionSelectionQuiz from './common/GenericRegionSelectionQuiz';
import UsAdoptAHighway from './us/AdoptAHighway/UsAdoptAHighway';
import Filebox, { LINK_CLICK_COLOR, LINK_HOVER_COLOR } from '../../common/Filebox';
import lice from '../../../assets/plates/iowa/reg2018.png';
import mi from '../../../assets/adopt-a-highway/mi.png';
import { preloadImage2 } from '../../common/preloadImage';
import phone from '../../../assets/gifs/phone.gif'
import texas from '../../../assets/gifs/texas.gif';
import putlitter from '../../../assets/fileboxicons/put-litter-in-its-place.png';
import UsFlags from './us/Flags/UsFlags';
import head from '../../../assets/fileboxicons/ca.png';
import navigatehere from '../../../assets//navigatehere.png';

export interface XgeoProps {
    contentType?: ContentType;
}

const Xgeo = (props: XgeoProps): React.ReactElement => {

    const NA_IMGS = [lice, texas, putlitter, head];
    const NA_STRINGS = ['License Plates', 'State Flags', 'Adopt-A-Highway', 'State Highway'];
    const NA_LINKS = [Path.XGEO_US, Path.XGEO_US_STATE_FLAGS, Path.XGEO_US_ADOPT_A_HIGHWAY, Path.XGEO_US_ADOPT_A_HIGHWAY];

    const BR_IMGS = [phone];
    const BR_STRINGS = ['Phone Codes'];
    const BR_LINKS = [Path.XGEO_BR];

    const [showFilebox, setShowFilebox] = useState<boolean[]>([false, false, false, false, false]);
    const [showNavigateHere, setShowNavigateHere] = useState<boolean>(true);

    useEffect(() => {
        NA_IMGS.forEach((src) => {
            preloadImage2(src);
        });
        BR_IMGS.forEach((src) => {
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
                return <Us quizType={QuizType.US_STATE_HIGHWAY}/>;
            case ContentType.XGEO_US_COUNTY_SECONDARY_HIGHWAY:
                return <Us quizType={QuizType.US_COUNTY_SECONDARY_HIGHWAY}/>;
            case ContentType.XGEO_US_STATE_FLAGS:
                return <UsFlags/>;
            case ContentType.XGEO_BR:
                return <Brazil />;
            case ContentType.XGEO_MONG:
                return <Mongolia quizType={QuizType.MONG_DRIVING_DIRECTION} />;
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
                    {showFilebox[0] && <div style={{position: 'absolute', left: '10px', top: '22px', zIndex: 10}}><Filebox imageSrcs={NA_IMGS} strings={NA_STRINGS} links={NA_LINKS} onClick={onFileboxClick}></Filebox></div>}
                    <div style={{left: '130px'}} onClick={() => handleClick(1)} className='fileboxlink top'><p className='fileboxlink top'  style={{backgroundColor: getLinkBackgroundColor(1), color: showFilebox[1] ? 'white' : 'black'}}>Brazil</p></div>
                    {showFilebox[1] && <div style={{position: 'absolute', left: '120px', top: '22px', zIndex: 10}}><Filebox imageSrcs={BR_IMGS} strings={BR_STRINGS} links={BR_LINKS} onClick={onFileboxClick}></Filebox></div>}

                </div>
                <img className='filebox' src={filebox}></img>
                <img src={navigatehere} style={{pointerEvents: 'none', position: 'absolute', top: '25px', left: '160px', display: showNavigateHere ? undefined : 'none'}}></img>
            </div>
            {getGame()}
        </div>
    );
};

export default Xgeo;
