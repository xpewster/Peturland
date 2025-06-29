import React, { useState } from 'react';
import './../../Xgeo.css';
import dots from '../../../../../assets/dots.png';
import RegionSelectionQuiz from '../../common/RegionSelectionQuiz';
import vn from '../../../../../assets/geojsons/vietnam.json';
import { getStreakKey } from '../../helpers';
import { AREA_CODES, REGION_INDEX_TO_PROVINCE_INDEX } from './constants';
import { PROVINCES, VIETNAM_REGIONS_BITFLAG } from '../constants';
import { QuizType } from '../../constants';
import pho from '../../../../../assets/gifs/pho.gif';


const VnAreaCodes = (): React.ReactElement => {

    const [enableRegion, setEnableRegion] = useState<boolean[]>(Array(18).fill(true));

    /* ----------------- */

    function handleCheck(index: number) {
        const newEnableRegion = enableRegion.map((val, i) => {if (i === index) { return !val; } else { return val; }}); setEnableRegion(newEnableRegion);
    }

    const getText = (index: number): React.ReactElement => {
        return <span style={{textDecoration: 'underline', display: "inline"}}>{AREA_CODES[index]}</span>;
    }

    return (
        <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <p style={{paddingBottom: '10px'}}>Vietnamese Phone Codes (Landline)</p>
            <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
            <div style={{marginTop: '10px', marginBottom: '20px', paddingRight: '0px'}}>
                <div>
                    Northeast<input type="checkbox" onChange={() => {handleCheck(0)}} checked={enableRegion[0]}></input>
                    Northwest<input type="checkbox" onChange={() => {handleCheck(1)}} checked={enableRegion[1]}></input>
                    Red River Delta<input type="checkbox" onChange={() => {handleCheck(2)}} checked={enableRegion[2]}></input>
                    North Central Coast<input type="checkbox" onChange={() => {handleCheck(3)}} checked={enableRegion[3]}></input>
                    South Central Coast<input type="checkbox" onChange={() => {handleCheck(4)}} checked={enableRegion[4]}></input>
                    Central Highlands<input type="checkbox" onChange={() => {handleCheck(5)}} checked={enableRegion[5]}></input>
                    Southeast<input type="checkbox" onChange={() => {handleCheck(6)}} checked={enableRegion[6]}></input>
                    Mekong River Delta<input type="checkbox" onChange={() => {handleCheck(7)}} checked={enableRegion[7]}></input>
                </div>
                <img style={{position: 'absolute', left: '-2px', top: '176px'}} src={dots}></img>
            </div>
            <div style={{paddingTop: '10px'}}>
                <RegionSelectionQuiz
                    mapJsonSrc={vn}
                    clickText={'Click on the right province!'}
                    regionIndexArray={PROVINCES}
                    toFindIndexToAnswerIndicesArray={REGION_INDEX_TO_PROVINCE_INDEX}
                    answerIndexToText={getText}
                    streakKey={getStreakKey(QuizType.VIETNAM_AREA_CODES, enableRegion)}
                    disallowRepeats={true}
                    enableRegions={enableRegion}
                    regionsBitFlag={VIETNAM_REGIONS_BITFLAG}
                    numLastItems={5}
                    sayWrongAnswer={true}
                    mapParameters={{scale: 1600, center: [105.5, 14.5]}}
                />
            </div>
            <p style={{position: 'absolute', bottom: '20px', right: '150px', fontFamily: 'Comic Sans MS' }}>It's pronounced pho, not pho!</p>
            <img alt='Pho' style={{position: 'absolute', bottom: '20px', right: '20px', pointerEvents: 'none', opacity: '0.9'}} src={pho}></img>
        </div>
    );
};

export default VnAreaCodes;
