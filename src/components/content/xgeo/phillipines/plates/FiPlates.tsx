import React, { useState } from 'react';
import './../../us/Us.css';
import './../../Xgeo.css';
import { QuizType } from '../../constants';
import { getStreakKey } from '../../helpers';
import dots from '../../../../../assets/dots.png';
import { isMobile } from 'react-device-detect';
import LicensePlatesQuiz from '../../common/LicensePlatesQuiz';
import regs from '../../../../../assets/geojsons/phl_regs.json';
import { PLATES } from './constants';
import { FILOREGION_BITFLAG, REGIONS } from '../regions/constants';


const ZaPlates = (): React.ReactElement => {

    const [enableRegion, setEnableRegion] = useState<boolean[]>([true, true, true]);
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
            <p style={{paddingBottom: '10px'}}>Filipino motorcycle plates</p>
            <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
            <div>
                <div>
                    Blur plate<input type="checkbox" onChange={() => {changeSetting(0)}} checked={enableBlur}></input>
                    Use random skew<input type="checkbox" onChange={() => { changeSetting(1); }} checked={enableSkew}></input>
                    Use rand blur<input type="checkbox" onChange={() => {changeSetting(2)}} checked={enableRandBlur}></input>
                    Low res<input type="checkbox" onChange={() => {changeSetting(6)}} checked={enableLowRes} disabled={isMobile}></input>
                </div>
            </div>
            <img style={{position: 'absolute', left: '-2px', top: '136px'}} src={dots}></img>
            <div style={{marginTop: '20px'}}>
                <LicensePlatesQuiz
                    mapJsonSrc={regs}
                    clickText={'Click on the right region!'}
                    regionsBitFlag={FILOREGION_BITFLAG}
                    enableRegions={enableRegion}
                    enableOld={enableOld}
                    enableVanity={enableVanity}
                    regionIndexArray={REGIONS}
                    platesLibrary={PLATES}
                    defaultPlateWidth={150}
                    defaultPlateHeight={75}
                    enableBlur={enableBlur}
                    enableSkew={enableSkew}
                    enableRandBlur={enableRandBlur}
                    enableLowRes={enableLowRes}
                    enableRRSC={enableRRSC}
                    streakKey={getStreakKey(QuizType.PHILLIPINES_PLATES, getStreakIndicatorArray())}
                    mapParameters={{scale: 2000, center: [122, 11]}}
                />
            </div>
        </div>
    );
};

export default ZaPlates;
