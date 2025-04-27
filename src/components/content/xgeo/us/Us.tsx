import React, { useState } from 'react';
import './Us.css';
import './../Xgeo.css';
import { QuizType } from '../constants';
import { getStreakKey } from '../helpers';
import { STATE_NAMES, STATE_TO_REGION_BITFLAG, STATES, TERRITORY_NAMES } from './constants';
import dots from '../../../../assets/dots.png';
import canada from '../../../../assets/canadamf.gif';
import mexico from '../../../../assets/mexico.gif';
import { PLATES } from './plate/constants';
import { isMobile } from 'react-device-detect';
import GenericLicensePlatesQuiz from '../common/GenericLicensePlatesQuiz';
import usa from '../../../../assets/geojsons/mergedfile2_goodcopy.json';


const Us = (): React.ReactElement => {

    const [enableRegion, setEnableRegion] = useState<boolean[]>([true, true, true, true, true, false, false, false]);
    const [enableBlur, setEnableBlur] = useState<boolean>(true);
    const [enableSkew, setEnableSkew] = useState<boolean>(false);
    const [enableRandBlur, setEnableRandBlur] = useState<boolean>(true);
    const [enableLowRes, setEnableLowRes] = useState<boolean>(!isMobile);
    const [enableVanity, setEnableVanity] = useState<boolean>(false);
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
            <p style={{paddingBottom: '10px'}}>US license plates</p>
            <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
            <div>
                <div>
                    Special plates<input type="checkbox" onChange={() => {changeSetting(3)}} checked={enableVanity}></input>
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
                    Northeast<input type="checkbox" onChange={() => {handleCheck(0)}} checked={enableRegion[0]}></input>
                    Deep South<input type="checkbox" onChange={() => {handleCheck(1)}} checked={enableRegion[1]}></input>
                    Southwest<input type="checkbox" onChange={() => {handleCheck(2)}} checked={enableRegion[2]}></input>
                    West<input type="checkbox" onChange={() => {handleCheck(3)}} checked={enableRegion[3]}></input>
                    Midwest<input type="checkbox" onChange={() => {handleCheck(4)}} checked={enableRegion[4]}></input>
                </div>
                <div style={{paddingTop: '10px'}}>
                    <img style={{height: '15px'}} src={canada}></img> Canada<img style={{height: '15px'}} src={canada}></img><input type="checkbox" onChange={() => {handleCheck(5)}} checked={enableRegion[5]}></input>
                    <img style={{height: '15px'}} src={mexico}></img> Mexico <img style={{height: '15px'}} src={mexico}></img><input type="checkbox" onChange={() => {handleCheck(6)}} checked={enableRegion[6]}></input>
                    U.S. Territories<input type="checkbox" onChange={() => {handleCheck(7)}} checked={enableRegion[7]}></input>
                </div> 
            </div>
            <img style={{position: 'absolute', left: '-2px', top: '234px'}} src={dots}></img>
            <div style={{}}>
                <GenericLicensePlatesQuiz
                    mapJsonSrc={usa}
                    useMapWithInsets={true}
                    clickText={'Click on the right state!'}
                    enableRegions={enableRegion}
                    enableOld={enableOld}
                    enableVanity={enableVanity}
                    regionsBitFlag={STATE_TO_REGION_BITFLAG}
                    regionIndexArray={STATES}
                    platesLibrary={PLATES}
                    plateWidth={150}
                    plateHeight={75}
                    enableBlur={enableBlur}
                    enableSkew={enableSkew}
                    enableRandBlur={enableRandBlur}
                    enableLowRes={enableLowRes}
                    enableRRSC={enableRRSC}
                    streakKey={getStreakKey(QuizType.US_LICENSE_PLATES, getStreakIndicatorArray())}
                />
            </div>
        </div>
    );
};

export default Us;
