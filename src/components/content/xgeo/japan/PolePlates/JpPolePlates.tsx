import React, { useState } from 'react';
import './../../Xgeo.css';
import dots from '../../../../../assets/dots.png';
import RegionSelectionQuiz from '../../common/RegionSelectionQuiz';
import jp from '../../../../../assets/geojsons/prefectures.json';
import { getStreakKey } from '../../helpers';
import { QuizType } from '../../constants';
import { HIGHLIGHT_GROUPS, PLATE_INDEX_TO_REGION_INDICES, PLATES, REGION_INDEX_TO_PLATE_INDEX } from './constants';
import { JAPAN_PREFECTURES_BITFLAG } from '../constants';
import MultipleChoiceQuiz from '../../common/MultipleChoiceQuiz';
import { PREFECTURES } from '../Prefectures/constants';
import totoro from '../../../../../assets/gifs/Totoro.gif';



const JpPolePlates = (): React.ReactElement => {

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

    const getPlateImageSrc = (index: number): string => {
        return PLATES[index];
    }

    return (
        <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <p style={{paddingBottom: '10px'}}>Japanese Pole Plates</p>
            <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
            <div>
                <div>
                    Multiple choice<input type="checkbox" onChange={() => {changeSetting(0)}} checked={enableMC}></input>
                </div>
            </div>
            <img style={{position: 'absolute', left: '-2px', top: '136px'}} src={dots}></img>
            <div style={{paddingTop: '10px'}}>
            {enableMC ?  <MultipleChoiceQuiz
                    mapJsonSrc={jp}
                    clickText={'Click on the right plate!'}
                    regionIndexArray={PREFECTURES}
                    regionIndexToAnswerIndicesArray={REGION_INDEX_TO_PLATE_INDEX}
                    answerIndexToSrc={getPlateImageSrc}
                    streakKey={getStreakKey(QuizType.JAPAN_POLE_PLATES, enableRegion)}
                    disallowRepeats={true}
                    enableRegions={enableRegion}
                    regionsBitFlag={JAPAN_PREFECTURES_BITFLAG}
                    numChoices={4}
                    numLastItems={5}
                    itemHeight={150}
                    mapParameters={{scale: 1600, center: [138, 38]}}
            />
            : <RegionSelectionQuiz
                    mapJsonSrc={jp}
                    clickText={'Click on the right region!'}
                    regionIndexArray={PREFECTURES}
                    toFindIndexToAnswerIndicesArray={REGION_INDEX_TO_PLATE_INDEX}
                    answerIndexToRegionIndices={PLATE_INDEX_TO_REGION_INDICES}
                    answerIndexToSrc={getPlateImageSrc}
                    streakKey={getStreakKey(QuizType.JAPAN_POLE_PLATES, enableRegion)}
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
            <img alt='Totoro' style={{position: 'absolute', top: '486px', left: '-200px', zIndex: -5, pointerEvents: 'none', opacity: '0.9'}} src={totoro}></img>
        </div>
    );
};

export default JpPolePlates;
