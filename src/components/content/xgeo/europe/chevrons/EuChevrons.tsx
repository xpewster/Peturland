import React, { useState } from 'react';
import dots from '../../../../../assets/dots.png';
import europe from '../../../../../assets/geojsons/europe2.json';
import { getStreakKey } from '../../helpers';
import { QuizType } from '../../constants';
import MultipleChoiceQuiz from '../../common/MultipleChoiceQuiz';
import { COUNTRIES, COUNTRY_TO_REGION_BITFLAG } from '../constants';
import { CHEVRONS, COUNTRY_TO_CHEVRONS, COUNTRY_TO_COMMON_CHEVRONS } from './constants';


const EuChevrons = (): React.ReactElement => {

    const [enableRegion, setEnableRegion] = useState<boolean[]>([true, true, true, true, true, false, false, false]);
    const [enableDistort, setEnableDistort] = useState<boolean>(false);
    const [enableCommonOnly, setEnableCommonOnly] = useState<boolean>(false);

    /* ----------------- */

    function changeSetting(index: number) {
            switch (index) {
                case 0:
                    setEnableDistort(!enableDistort);
                    break;
                case 1:
                    setEnableCommonOnly(!enableCommonOnly);
                    break;
            }
        }

    function handleCheck(index: number) {
        const newEnableRegion = enableRegion.map((val, i) => {if (i === index) { return !val; } else { return val; }}); setEnableRegion(newEnableRegion);
    }

    const getSignImage = (index: number): any => {
        return CHEVRONS[index];
    }

    const getToFindIndexToAnswerIndicesArray = (): number[][] => {
        if (enableCommonOnly) {
            return COUNTRY_TO_COMMON_CHEVRONS;
        } else {
            return COUNTRY_TO_CHEVRONS;
        }
    }

    return (
        <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <p style={{paddingBottom: '10px'}}>EU Chevrons</p>
            <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
            <div>
                Random angle<input type="checkbox" onChange={() => {changeSetting(0)}} checked={enableDistort}></input>
                Common only<input type="checkbox" onChange={() => {changeSetting(1)}} checked={enableCommonOnly}></input>
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
                <MultipleChoiceQuiz
                    mapJsonSrc={europe}
                    clickText={'Click on the right chevron!'}
                    regionIndexArray={COUNTRIES}
                    regionIndexToAnswerIndicesArray={getToFindIndexToAnswerIndicesArray()}
                    answerIndexToSrc={getSignImage}
                    streakKey={getStreakKey(QuizType.EU_CHEVRONS, [...enableRegion, enableCommonOnly, enableDistort])}
                    disallowRepeats={true}
                    enableSkew={enableDistort}
                    enableRegions={enableRegion}
                    regionsBitFlag={COUNTRY_TO_REGION_BITFLAG}
                    numLastItems={5}
                    itemHeight={75}
                    numChoices={4}
                    mapParameters={{scale: 600, center: [10, 55]}}
                />
            </div>
        </div>
    );
};

export default EuChevrons;
