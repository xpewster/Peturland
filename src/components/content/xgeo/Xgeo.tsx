import React, { useState } from 'react';
import './Xgeo.css';
import Brazil from './brazil/Brazil';
import Us from './us/Us';
import { QuizType } from './us/constants';
import filebox from '../../../assets/filebox.png';
import { Path } from '../../../constants/Path';
import { Link } from 'react-router';

export interface XgeoProps {
    path?: string;
}

const Xgeo = (props: XgeoProps): React.ReactElement => {

    const getGame = () => {
        switch(props.path) {
            default:
            case Path.XGEO_US:
                return <Us quizType={QuizType.LICENSE_PLATES}/>;
            case Path.XGEO_BR:
                return <Brazil />;
        }
    };

    const [element, setElement] = useState<React.ReactElement>(getGame());

    const handleClick = (index: number) => {
        switch(index) {
            case 0:
                setElement(<Us quizType={QuizType.LICENSE_PLATES}/>);
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
