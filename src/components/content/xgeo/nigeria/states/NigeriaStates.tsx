import React, { useState } from 'react';
import './../../Xgeo.css';
import dots from '../../../../../assets/dots.png';
import RegionSelectionQuiz from '../../common/RegionSelectionQuiz';
import nigeria from '../../../../../assets/geojsons/nigeria.json';
import { getStreakKey } from '../../helpers';
import { MAP_COLOR, MAP_HOVER_COLOR, MAP_LAST_COLOR, QuizType } from '../../constants';
import { NIGERIA_REGION_BITFLAG, REGION_INDEX_TO_NIGERIAN_STATE_INDEX, STATES } from './constants';


const NigeriaStates = (): React.ReactElement => {

    const [enableRegion, setEnableRegion] = useState<boolean[]>(Array(18).fill(true));

    /* ----------------- */

    function handleCheck(index: number) {
        const newEnableRegion = enableRegion.map((val, i) => {if (i === index) { return !val; } else { return val; }}); setEnableRegion(newEnableRegion);
    }

    const getText = (index: number): React.ReactElement => {
        return <span style={{textDecoration: 'underline', display: "inline"}}>{STATES[index]}</span>;
    }

    return (
        <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <p style={{paddingBottom: '10px'}}>Nigerian States</p>
            <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
            <div style={{marginBottom: '20px', paddingRight: '0px'}}>
                <div>
                    Southwest<input type="checkbox" onChange={() => {handleCheck(0)}} checked={enableRegion[0]}></input>
                    Southeast<input type="checkbox" onChange={() => {handleCheck(1)}} checked={enableRegion[1]}></input>
                    North<input type="checkbox" onChange={() => {handleCheck(2)}} checked={enableRegion[2]}></input>
                </div>
                <img style={{position: 'absolute', left: '-2px', top: '136px'}} src={dots}></img>
            </div>
            <div style={{paddingTop: '10px'}}>
                <RegionSelectionQuiz
                    mapJsonSrc={nigeria}
                    clickText={'Click on the right state!'}
                    regionIndexArray={STATES}
                    toFindIndexToAnswerIndicesArray={REGION_INDEX_TO_NIGERIAN_STATE_INDEX}
                    answerIndexToText={getText}
                    streakKey={getStreakKey(QuizType.NIGERIA_STATES, enableRegion)}
                    disallowRepeats={true}
                    enableRegions={enableRegion}
                    regionsBitFlag={NIGERIA_REGION_BITFLAG}
                    numLastItems={0}
                    sayWrongAnswer={true}
                    mapParameters={{scale: 2400, center: [8.5, 9]}}
                />
            </div>
        </div>
    );
};

export default NigeriaStates;
