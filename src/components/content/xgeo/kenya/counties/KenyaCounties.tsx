import React, { useState } from 'react';
import './../../Xgeo.css';
import dots from '../../../../../assets/dots.png';
import RegionSelectionQuiz from '../../common/RegionSelectionQuiz';
import kenya from '../../../../../assets/geojsons/kenya2.json';
import { getStreakKey } from '../../helpers';
import { QuizType } from '../../constants';
import { COUNTIES, KENYA_REGIONS_BITFLAG, REGION_INDEX_TO_COUNTY_INDEX } from './constants';



const KenyaCounties = (): React.ReactElement => {

    const [enableRegion, setEnableRegion] = useState<boolean[]>(Array(18).fill(true));

    /* ----------------- */

    function handleCheck(index: number) {
        const newEnableRegion = enableRegion.map((val, i) => {if (i === index) { return !val; } else { return val; }}); setEnableRegion(newEnableRegion);
    }

    const getText = (index: number): React.ReactElement => {
        return <span style={{textDecoration: 'underline', display: "inline"}}>{COUNTIES[index]}</span>;
    }

    return (
        <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <p style={{paddingBottom: '10px'}}>Kenyan Counties</p>
            <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
            <div style={{marginBottom: '20px', paddingRight: '0px'}}>
                <div>
                    Nairobi<input type="checkbox" onChange={() => {handleCheck(0)}} checked={enableRegion[0]}></input>
                    Southwest<input type="checkbox" onChange={() => {handleCheck(1)}} checked={enableRegion[1]}></input>
                    North/East<input type="checkbox" onChange={() => {handleCheck(2)}} checked={enableRegion[2]}></input>
                </div>
                <img style={{position: 'absolute', left: '-2px', top: '136px'}} src={dots}></img>
            </div>
            <div style={{paddingTop: '10px'}}>
                <RegionSelectionQuiz
                    mapJsonSrc={kenya}
                    clickText={'Click on the right county!'}
                    regionIndexArray={COUNTIES}
                    toFindIndexToAnswerIndicesArray={REGION_INDEX_TO_COUNTY_INDEX}
                    answerIndexToText={getText}
                    streakKey={getStreakKey(QuizType.KENYA_COUNTIES, enableRegion)}
                    disallowRepeats={true}
                    enableRegions={enableRegion}
                    regionsBitFlag={KENYA_REGIONS_BITFLAG}
                    numLastItems={0}
                    sayWrongAnswer={true}
                    mapParameters={{scale: 3200, center: [38, 0.5]}}
                />
            </div>
        </div>
    );
};

export default KenyaCounties;
