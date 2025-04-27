import React, { useState } from 'react';
import './../../us/Us.css';
import './../../Xgeo.css';
import { QuizType } from '../../constants';
import { getStreakKey } from '../../helpers';
import dots from '../../../../../assets/dots.png';
import { isMobile } from 'react-device-detect';
import LicensePlatesQuiz from '../../common/LicensePlatesQuiz';
import aus from '../../../../../assets/geojsons/aus.json';
import { PLATES, STATE_TO_REGION_BITFLAG, STATES } from './constants';
import auskangaroo from '../../../../../assets/gifs/auskangaroo.gif';


const AustraliaPlates = (): React.ReactElement => {

    const [enableRegion, setEnableRegion] = useState<boolean[]>([true, false, true, true, true, false, false, false]);
    const [enableBlur, setEnableBlur] = useState<boolean>(true);
    const [enableSkew, setEnableSkew] = useState<boolean>(false);
    const [enableRandBlur, setEnableRandBlur] = useState<boolean>(true);
    const [enableLowRes, setEnableLowRes] = useState<boolean>(!isMobile);
    const [enableVanity, setEnableVanity] = useState<boolean>(true);
    const [enableOld, setEnableOld] = useState<boolean>(true);

    const [enableRRSC, setEnableRRSC] = useState<boolean>(true); // random registration sticker color

    /* ----------------- */

    const getStreakIndicatorArray = (): boolean[] => {
        return [...enableRegion, enableSkew];
    }

    function handleCheck(index: number) {
        const newEnableRegion = enableRegion.map((val, i) => {if (i === index) { return !val; } else { return val; }}); setEnableRegion(newEnableRegion);
    }

    function changeSetting(index: number) {
        switch (index) {
            case 0:
                setEnableBlur(!enableBlur);
                break;
            case 1:
                setEnableSkew(!enableSkew);
                break;
            case 2:
                setEnableRandBlur(!enableRandBlur);
                break;
            case 3:
                setEnableVanity(!enableVanity);
                break;
            case 4:
                setEnableOld(!enableOld);
                break;
            case 5:
                setEnableRRSC(!enableRRSC);
                break;
            case 6:
                setEnableLowRes(!enableLowRes);
        }
    }

    return (
        <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <p style={{paddingBottom: '10px'}}>Australian number plates</p>
            <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
            <div>
                <div>
                    Slimline plates<input type="checkbox" onChange={() => {changeSetting(3)}} checked={enableVanity}></input>
                    Old plates (2000-Present)<input type="checkbox" onChange={() => {changeSetting(4)}} checked={enableOld}></input>
                </div>
                <div>
                    Blur plate<input type="checkbox" onChange={() => {changeSetting(0)}} checked={enableBlur}></input>
                    Use random skew<input type="checkbox" onChange={() => { changeSetting(1); }} checked={enableSkew}></input>
                    Use rand blur<input type="checkbox" onChange={() => {changeSetting(2)}} checked={enableRandBlur}></input>
                    Low res<input type="checkbox" onChange={() => {changeSetting(6)}} checked={enableLowRes} disabled={isMobile}></input>
                    Random registration sticker/holder color<input type="checkbox" onChange={() => {changeSetting(5)}} checked={enableRRSC}></input>
                </div>
            </div>
            <img style={{position: 'absolute', left: '-2px', top: '176px'}} src={dots}></img>
            <div style={{paddingTop: '10px', paddingBottom: '5px', paddingRight: '0px'}}>
                <div>
                    Island Territories<input type="checkbox" disabled onChange={() => {handleCheck(1)}} checked={enableRegion[1]}></input>
                </div> 
            </div>
            <img style={{position: 'absolute', left: '-2px', top: '206px'}} src={dots}></img>
            <div style={{marginTop: '20px'}}>
                <LicensePlatesQuiz
                    mapJsonSrc={aus}
                    clickText={'Click on the right state!'}
                    regionsBitFlag={STATE_TO_REGION_BITFLAG}
                    enableRegions={enableRegion}
                    enableOld={enableOld}
                    enableVanity={enableVanity}
                    regionIndexArray={STATES}
                    platesLibrary={PLATES}
                    defaultPlateWidth={180}
                    defaultPlateHeight={65}
                    enableBlur={enableBlur}
                    enableSkew={enableSkew}
                    enableRandBlur={enableRandBlur}
                    enableLowRes={enableLowRes}
                    enableRRSC={enableRRSC}
                    streakKey={getStreakKey(QuizType.AUSTRALIA_PLATES, getStreakIndicatorArray())}
                    mapParameters={{scale: 800, center: [135, -27]}}
                />
            </div>
            <img style={{position: 'absolute', right: '20px', top: '220px', zIndex: -5, pointerEvents: 'none'}} src={auskangaroo}></img>
        </div>
    );
};

export default AustraliaPlates;
