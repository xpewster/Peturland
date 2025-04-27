import React, { useState } from 'react';
import './../../Xgeo.css';
import dots from '../../../../../assets/dots.png';
import GenericRegionSelectionQuiz from '../../common/GenericRegionSelectionQuiz';
import jp from '../../../../../assets/geojsons/prefectures.json';
import { getStreakKey } from '../../helpers';
import { QuizType } from '../../constants';
import { HIGHLIGHT_GROUPS, REFLECTOR_INDEX_TO_PREFECTURE_INDICES, REFLECTORS, REGION_INDEX_TO_REFLECTOR_INDEX } from './constants';
import { JAPAN_PREFECTURES_BITFLAG } from '../constants';
import GenericMultipleChoiceQuiz from '../../common/GenericMultipleChoiceQuiz';
import { PREFECTURES } from '../Prefectures/constants';
import totoro from '../../../../../assets/gifs/Totoro.gif';



const JpPoleReflectors = (): React.ReactElement => {

    const [enableRegion, setEnableRegion] = useState<boolean[]>(Array(18).fill(true));
    const [enableMC, setEnableMC] = useState<boolean>(false);

    /* ----------------- */

    function changeSetting(index: number) {
        switch (index) {
            case 0:
                setEnableMC(!enableMC);
                break;
        }
    }

    function handleCheck(index: number) {
        const newEnableRegion = enableRegion.map((val, i) => {if (i === index) { return !val; } else { return val; }}); setEnableRegion(newEnableRegion);
    }

    const getReflectorImageSrc = (index: number): string => {
        return REFLECTORS[index];
    }

    return (
        <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <p style={{paddingBottom: '10px'}}>Japanese Pole Reflectors</p>
            <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
            <div>
                <div>
                    Multiple choice<input type="checkbox" onChange={() => {changeSetting(0)}} checked={enableMC}></input>
                </div>
            </div>
            <img style={{position: 'absolute', left: '-2px', top: '136px'}} src={dots}></img>
            <div style={{paddingTop: '10px'}}>
            {enableMC ?  <GenericMultipleChoiceQuiz
                    mapJsonSrc={jp}
                    clickText={'Click on the right reflector!'}
                    regionIndexArray={PREFECTURES}
                    regionIndexToAnswerIndicesArray={REGION_INDEX_TO_REFLECTOR_INDEX}
                    answerIndexToSrc={getReflectorImageSrc}
                    streakKey={getStreakKey(QuizType.JAPAN_POLE_REFLECTORS, enableRegion)}
                    disallowRepeats={true}
                    enableRegions={enableRegion}
                    regionsBitFlag={JAPAN_PREFECTURES_BITFLAG}
                    numChoices={4}
                    numLastItems={5}
                    itemHeight={150}
                    mapParameters={{scale: 1600, center: [138, 38]}}
            />
            : <GenericRegionSelectionQuiz
                    mapJsonSrc={jp}
                    clickText={'Click on the right region!'}
                    regionIndexArray={PREFECTURES}
                    toFindIndexToAnswerIndicesArray={REGION_INDEX_TO_REFLECTOR_INDEX}
                    answerIndexToRegionIndices={REFLECTOR_INDEX_TO_PREFECTURE_INDICES}
                    answerIndexToSrc={getReflectorImageSrc}
                    streakKey={getStreakKey(QuizType.JAPAN_POLE_REFLECTORS, enableRegion)}
                    disallowRepeats={true}
                    enableRegions={enableRegion}
                    regionsBitFlag={JAPAN_PREFECTURES_BITFLAG}
                    numLastItems={5}
                    itemHeight={150}
                    mapParameters={{scale: 1600, center: [138, 38]}}
                    highlightGroups={HIGHLIGHT_GROUPS}
                    dashedBorder={true}
                />
            }
            </div>
            <p>Credit to <a href='https://www.plonkit.net/japan' target="_blank" rel="noopener noreferrer">Plonkit</a> for the images</p>
            <img style={{position: 'absolute', top: '486px', left: '-200px', zIndex: -5, pointerEvents: 'none', opacity: '0.9'}} src={totoro}></img>
        </div>
    );
};

export default JpPoleReflectors;
