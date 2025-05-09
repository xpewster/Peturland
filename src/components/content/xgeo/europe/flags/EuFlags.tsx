import React, { useState } from 'react';
import dots from '../../../../../assets/dots.png';
import europe from '../../../../../assets/geojsons/europe2.json';
import { getStreakKey } from '../../helpers';
import { QuizType } from '../../constants';
import { COUNTRIES, COUNTRY_TO_REGION_BITFLAG } from '../constants';
import RegionSelectionQuiz from '../../common/RegionSelectionQuiz';
import { COUNTRY_INDEX_TO_FLAG_INDEX, FLAGS } from './constants';


const EuFlags = (): React.ReactElement => {

    const [enableRegion, setEnableRegion] = useState<boolean[]>([true, true, true, true, true, false, false, false]);

    /* ----------------- */


    function handleCheck(index: number) {
        const newEnableRegion = enableRegion.map((val, i) => {if (i === index) { return !val; } else { return val; }}); setEnableRegion(newEnableRegion);
    }

    const getFlagImage = (index: number): any => {
        return FLAGS[index];
    }

    return (
        <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <p style={{paddingBottom: '10px'}}>EU Flags</p>
            <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
            <div style={{paddingBottom: '5px', paddingRight: '0px'}}>
                <div>
                    Western<input type="checkbox" onChange={() => {handleCheck(0)}} checked={enableRegion[0]}></input>
                    Scandinavia<input type="checkbox" onChange={() => {handleCheck(1)}} checked={enableRegion[1]}></input>
                    Central<input type="checkbox" onChange={() => {handleCheck(2)}} checked={enableRegion[2]}></input>
                    Baltics<input type="checkbox" onChange={() => {handleCheck(3)}} checked={enableRegion[3]}></input>
                    Eastern<input type="checkbox" onChange={() => {handleCheck(4)}} checked={enableRegion[4]}></input>
                </div>
            </div>
            <img style={{position: 'absolute', left: '-2px', top: '136px'}} src={dots}></img>
            <div style={{paddingTop: '10px'}}>
                <RegionSelectionQuiz
                    mapJsonSrc={europe}
                    clickText={'Click on the right country!'}
                    regionIndexArray={COUNTRIES}
                    toFindIndexToAnswerIndicesArray={COUNTRY_INDEX_TO_FLAG_INDEX}
                    answerIndexToSrc={getFlagImage}
                    streakKey={getStreakKey(QuizType.EU_FLAGS, [...enableRegion])}
                    disallowRepeats={true}
                    enableRegions={enableRegion}
                    regionsBitFlag={COUNTRY_TO_REGION_BITFLAG}
                    numLastItems={10}
                    sayWrongAnswer={true}
                    mapParameters={{scale: 600, center: [10, 55]}}
                />
            </div>
        </div>
    );
};

export default EuFlags;
