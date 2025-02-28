import React, { useState } from 'react';
import './Xgeo.css';
import Brazil from './brazil/Brazil';
import Us from './us/Us';
import { QuizType } from './us/constants';
import filebox from '../../../assets/filebox.png';

const Xgeo = (): React.ReactElement => {
    const [element, setElement] = useState<React.ReactElement>(<Brazil />);

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
                    <a href="#" style={{left: '0px'}} className='fileboxlink' onClick={(event) => { event?.preventDefault(); handleClick(0); }}>North America</a>
                    <a href="#" style={{left: '110px'}} className='fileboxlink' onClick={(event) => { event?.preventDefault(); handleClick(1); }}>Bra71l</a>
                </div>
                <img className='filebox' src={filebox}></img>
            </div>
            {element}
        </div>
    );
};

export default Xgeo;
