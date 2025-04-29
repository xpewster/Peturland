import React, { useState } from 'react';
import './../../Xgeo.css';
import dots from '../../../../../assets/dots.png';
import RegionSelectionQuiz from '../../common/RegionSelectionQuiz';
import jp from '../../../../../assets/geojsons/prefectures.json';
import jp_regions from '../../../../../assets/geojsons/jp_regions.json';
import { getStreakKey } from '../../helpers';
import { QuizType } from '../../constants';
import { REGIONS_KANJI, REGION_INDEX_TO_REGION_INDEX, REGION_INDEX_TO_REGION_INDEX_SIMPLE, REGION_INDEX_TO_REGION_INDICES } from './constants';
import { JAPAN_PREFECTURES_BITFLAG, JAPAN_REGIONS, JAPAN_REGIONS_BITFLAG } from '../constants';
import totoro from '../../../../../assets/gifs/Totoro.gif';
import { PREFECTURES } from '../Prefectures/constants';



const JpRegions = (): React.ReactElement => {

    const [enableRegion, setEnableRegion] = useState<boolean[]>(Array(18).fill(true));
    const [enableKanji, setEnableKanji] = useState<boolean>(false);
    const [enableSimple, setEnableSimple] = useState<boolean>(false);

    /* ----------------- */

    function handleCheck(index: number) {
        const newEnableRegion = enableRegion.map((val, i) => {if (i === index) { return !val; } else { return val; }}); setEnableRegion(newEnableRegion);
    }

    function changeSetting(index: number) {
        switch (index) {
            case 0:
                setEnableKanji(!enableKanji);
                break;
            case 1:
                setEnableSimple(!enableSimple);
                break;
        }
    }

    const getText = (index: number): React.ReactElement => {
        if (enableKanji) {
            return <span className='p-old' style={{textDecoration: 'underline', display: "inline"}}>{REGIONS_KANJI[index]}</span>;
        }
        return <span style={{textDecoration: 'underline', display: "inline"}}>{JAPAN_REGIONS[index]}</span>;
    }


    return (
        <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <p style={{paddingBottom: '10px'}}>Regions of Japan</p>
            <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
            <div>
                <div>
                    Easy mode<input type="checkbox" onChange={() => {changeSetting(1)}} checked={enableSimple}></input>
                    Use Kanji<input type="checkbox" onChange={() => {changeSetting(0)}} checked={enableKanji}></input>
                </div>
            </div>
            <img style={{position: 'absolute', left: '-2px', top: '136px'}} src={dots}></img>
            <div style={{paddingTop: '10px'}}>
                {enableSimple ? <RegionSelectionQuiz
                    key="simple"
                    mapJsonSrc={jp_regions}
                    clickText={'Select the right region!'}
                    regionIndexArray={JAPAN_REGIONS}
                    toFindIndexToAnswerIndicesArray={REGION_INDEX_TO_REGION_INDEX_SIMPLE}
                    answerIndexToText={getText}
                    streakKey={getStreakKey(QuizType.JAPAN_REGIONS, [...enableRegion, enableKanji, true])}
                    disallowRepeats={true}
                    enableRegions={enableRegion}
                    regionsBitFlag={JAPAN_REGIONS_BITFLAG}
                    numLastItems={0}
                    mapParameters={{scale: 1600, center: [138, 38]}}
                />
                : <RegionSelectionQuiz
                    key="notsimple"
                    mapJsonSrc={jp}
                    clickText={'Select all the right prefectures for this region!'}
                    regionIndexArray={PREFECTURES}
                    toFindIndexToAnswerIndicesArray={REGION_INDEX_TO_REGION_INDEX}
                    answerIndexToRegionIndices={REGION_INDEX_TO_REGION_INDICES}
                    answerIndexToText={getText}
                    streakKey={getStreakKey(QuizType.JAPAN_REGIONS, [...enableRegion, enableKanji, false])}
                    disallowRepeats={true}
                    enableRegions={enableRegion}
                    regionsBitFlag={JAPAN_PREFECTURES_BITFLAG}
                    numLastItems={0}
                    mapParameters={{scale: 1600, center: [138, 38]}}
                    multiselect={true}
                />}
            </div>
            <p><i>Note: Hokuriku is separate from Chubu in this quiz.</i></p>
            <img alt='Totoro' style={{position: 'absolute', top: '486px', left: '-200px', zIndex: -5, pointerEvents: 'none', opacity: '0.9'}} src={totoro}></img>
        </div>
    );
};

export default JpRegions;
