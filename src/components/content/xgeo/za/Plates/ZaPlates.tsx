import React, { useState } from 'react';
import './../../us/Us.css';
import './../../Xgeo.css';
import { QuizType } from '../../constants';
import { getStreakKey } from '../../helpers';
import dots from '../../../../../assets/dots.png';
import { isMobile } from 'react-device-detect';
import LicensePlatesQuiz from '../../common/LicensePlatesQuiz';
import za from '../../../../../assets/geojsons/za.json';
import { PLATES } from './constants';
import { PROVINCE_TO_REGION_BITFLAG, PROVINCES } from '../constants';


const ZaPlates = (): React.ReactElement => {

    const [enableRegion, setEnableRegion] = useState<boolean[]>([true, false, true, true, true, false, false, false]);
    const [enableBlur, setEnableBlur] = useState<boolean>(true);
    const [enableSkew, setEnableSkew] = useState<boolean>(false);
    const [enableRandBlur, setEnableRandBlur] = useState<boolean>(true);
    const [enableLowRes, setEnableLowRes] = useState<boolean>(!isMobile);
    const [enableVanity, setEnableVanity] = useState<boolean>(false);
    const [enableOld, setEnableOld] = useState<boolean>(true);

    const [enableRRSC, setEnableRRSC] = useState<boolean>(false); // random registration sticker color

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
            <p style={{paddingBottom: '10px'}}>South African number plates</p>
            <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
            <div>
                <div>
                    Old plates (2000-Present)<input type="checkbox" onChange={() => {changeSetting(4)}} checked={enableOld}></input>
                </div>
                <div>
                    Blur plate<input type="checkbox" onChange={() => {changeSetting(0)}} checked={enableBlur}></input>
                    Use random skew<input type="checkbox" onChange={() => { changeSetting(1); }} checked={enableSkew}></input>
                    Use rand blur<input type="checkbox" onChange={() => {changeSetting(2)}} checked={enableRandBlur}></input>
                    Low res<input type="checkbox" onChange={() => {changeSetting(6)}} checked={enableLowRes} disabled={isMobile}></input>
                </div>
            </div>
            <img style={{position: 'absolute', left: '-2px', top: '156px'}} src={dots}></img>
            <div style={{marginTop: '20px'}}>
                <LicensePlatesQuiz
                    mapJsonSrc={za}
                    clickText={'Click on the right province!'}
                    regionsBitFlag={PROVINCE_TO_REGION_BITFLAG}
                    enableRegions={enableRegion}
                    enableOld={enableOld}
                    enableVanity={enableVanity}
                    regionIndexArray={PROVINCES}
                    platesLibrary={PLATES}
                    defaultPlateWidth={256}
                    defaultPlateHeight={55}
                    enableBlur={enableBlur}
                    enableSkew={enableSkew}
                    enableRandBlur={enableRandBlur}
                    enableLowRes={enableLowRes}
                    enableRRSC={enableRRSC}
                    streakKey={getStreakKey(QuizType.SOUTH_AFRICA_PLATES, getStreakIndicatorArray())}
                    mapParameters={{scale: 2000, center: [24, -29]}}
                />
            </div>
        </div>
    );
};

export default ZaPlates;
