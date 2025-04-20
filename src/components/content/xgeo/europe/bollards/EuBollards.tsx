import React, { useState } from 'react';
import dots from '../../../../../assets/dots.png';
import europe from '../../../../../assets/geojsons/europe2.json';
import { getStreakKey } from '../../helpers';
import { QuizType } from '../../constants';
import { COUNTRIES, COUNTRY_TO_REGION_BITFLAG } from '../constants';
import { COUNTRY_INDEX_TO_BOLLARDS_INDEX, BOLLARD_INDEX_TO_COUNTRY_INDICES, BOLLARDS, COUNTRY_INDEX_TO_COMMON_BOLLARDS_INDEX, BOLLARD_INDEX_TO_COMMON_COUNTRY_INDICES } from './constants';
import GenericRegionSelectionQuiz from '../../common/GenericRegionSelectionQuiz';
import GenericMultipleChoiceQuiz from '../../common/GenericMultipleChoiceQuiz';


const EuBollards = (): React.ReactElement => {

    const [enableRegion, setEnableRegion] = useState<boolean[]>([true, true, true, true, true, false, false, false]);
    const [enableCommonOnly, setEnableCommonOnly] = useState<boolean>(false);
    const [enableMC, setEnableMC] = useState<boolean>(false);

    /* ----------------- */

    function changeSetting(index: number) {
        switch (index) {
            case 0:
                setEnableCommonOnly(!enableCommonOnly);
                break;
        }
    }

    function handleCheck(index: number) {
        const newEnableRegion = enableRegion.map((val, i) => {if (i === index) { return !val; } else { return val; }}); setEnableRegion(newEnableRegion);
    }

    const getSignImage = (index: number): any => {
        return BOLLARDS[index];
    }

    const getToFindIndexToAnswerIndicesArray = (): number[][] => {
        if (!enableCommonOnly) {
            return COUNTRY_INDEX_TO_BOLLARDS_INDEX;
        } else {
            return COUNTRY_INDEX_TO_COMMON_BOLLARDS_INDEX;
        }
    }

    const getReverseMapping = (): number[][] => {
        if (!enableCommonOnly) {
            return BOLLARD_INDEX_TO_COUNTRY_INDICES;
        }
        return BOLLARD_INDEX_TO_COMMON_COUNTRY_INDICES;
    }

    return (
        <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <p style={{paddingBottom: '10px'}}>EU Bollards</p>
            <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
            <div>
                <div>
                    Multiple choice<input type="checkbox" onChange={() => {setEnableMC(!enableMC)}} checked={enableMC}></input>
                    Common only<input type="checkbox" onChange={() => {changeSetting(0)}} checked={enableCommonOnly}></input>
                </div>
            </div>
            <img style={{position: 'absolute', left: '-2px', top: '136px'}} src={dots}></img>
            <div style={{paddingTop: '10px', paddingBottom: '5px', paddingRight: '0px'}}>
                <div>
                    Western<input type="checkbox" onChange={() => {handleCheck(0)}} checked={enableRegion[0]}></input>
                    Scandinavia<input type="checkbox" onChange={() => {handleCheck(1)}} checked={enableRegion[1]}></input>
                    Central<input type="checkbox" onChange={() => {handleCheck(2)}} checked={enableRegion[2]}></input>
                    Baltics<input type="checkbox" onChange={() => {handleCheck(3)}} checked={enableRegion[3]}></input>
                    Eastern<input type="checkbox" onChange={() => {handleCheck(4)}} checked={enableRegion[4]}></input>
                </div>
            </div>
            <img style={{position: 'absolute', left: '-2px', top: '166px'}} src={dots}></img>
            <div style={{paddingTop: '10px'}}>
                {enableMC ? <GenericMultipleChoiceQuiz
                    mapJsonSrc={europe}
                    clickText={'Click on the right bollard!'}
                    regionIndexArray={COUNTRIES}
                    answerIndexToSrc={getSignImage}
                    regionIndexToAnswerIndicesArray={getToFindIndexToAnswerIndicesArray()}
                    streakKey={getStreakKey(QuizType.EU_BOLLARDS, [...enableRegion])}
                    disallowRepeats={true}
                    enableRegions={enableRegion}
                    regionsBitFlag={COUNTRY_TO_REGION_BITFLAG}
                    numLastItems={5}
                    itemHeight={150}
                    numChoices={4}
                    mapParameters={{scale: 600, center: [10, 55]}}
                /> : <GenericRegionSelectionQuiz
                    mapJsonSrc={europe}
                    clickText={'Click on the right country!'}
                    regionIndexArray={COUNTRIES}
                    toFindIndexToAnswerIndicesArray={getToFindIndexToAnswerIndicesArray()}
                    answerIndexToSrc={getSignImage}
                    answerIndexToRegionIndices={getReverseMapping()}
                    streakKey={getStreakKey(QuizType.EU_BOLLARDS, [...enableRegion])}
                    disallowRepeats={true}
                    enableRegions={enableRegion}
                    regionsBitFlag={COUNTRY_TO_REGION_BITFLAG}
                    numLastItems={5}
                    itemHeight={150}
                    minRandScale={0.2}
                    mapParameters={{scale: 600, center: [10, 55]}}
                />
}
            </div>
        </div>
    );
};

export default EuBollards;
