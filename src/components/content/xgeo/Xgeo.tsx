import React, { useState } from 'react';
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
import UsAdoptAHighway from './us/UsAdoptAHighway';

export interface XgeoProps {
    contentType?: ContentType;
}

const Xgeo = (props: XgeoProps): React.ReactElement => {

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
                return <Us quizType={QuizType.US_STATE_FLAGS}/>;
            case ContentType.XGEO_BR:
                return <Brazil />;
            case ContentType.XGEO_MONG:
                return <Mongolia quizType={QuizType.MONG_DRIVING_DIRECTION} />;
        }
    };

    const [element, setElement] = useState<React.ReactElement>(getGame());

    const handleClick = (index: number) => {
        switch(index) {
            case 0:
                setElement(<Us quizType={QuizType.US_LICENSE_PLATES}/>);
                break;
            default:    
            case 1:
                setElement(<Brazil />);
                break;
        }
    }

    return (
        <div>
            <div style={{height: '20px'}}>
                <div style={{paddingTop: '2px'}}>
                    <div style={{left: '20px'}} className='fileboxlink'><Link to={Path.XGEO_US}><p className='fileboxlink'>North America</p></Link></div>
                    <div style={{left: '130px'}} className='fileboxlink'><Link to={Path.XGEO_BR}><p className='fileboxlink'>Brazil</p></Link></div>
                
                    {/* <a href="#" style={{left: '0px'}} className='fileboxlink' onClick={(event) => { event?.preventDefault(); handleClick(0); }}>North America</a>
                    <a href="#" style={{left: '110px'}} className='fileboxlink' onClick={(event) => { event?.preventDefault(); handleClick(1); }}>Bra71l</a> */}
                </div>
                <img className='filebox' src={filebox}></img>
            </div>
            {getGame()}
        </div>
    );
};

export default Xgeo;
