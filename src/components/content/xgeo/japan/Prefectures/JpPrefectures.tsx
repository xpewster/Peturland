import React, { useState } from 'react';
import './../../Xgeo.css';
import dots from '../../../../../assets/dots.png';
import GenericRegionSelectionQuiz from '../../common/GenericRegionSelectionQuiz';
import jp from '../../../../../assets/geojsons/prefectures.json';
import { getStreakKey } from '../../helpers';
import { QuizType } from '../../constants';
import { PREFECTURES, REGION_INDEX_TO_PREFECTURE_INDEX } from './constants';
import { JAPAN_PREFECTURES_BITFLAG } from '../constants';



const JpPrefectures = (): React.ReactElement => {

    const [enableRegion, setEnableRegion] = useState<boolean[]>(Array(18).fill(true));

    /* ----------------- */

    function handleCheck(index: number) {
        const newEnableRegion = enableRegion.map((val, i) => {if (i === index) { return !val; } else { return val; }}); setEnableRegion(newEnableRegion);
    }

    const getText = (index: number): React.ReactElement => {
        return <span style={{textDecoration: 'underline', display: "inline"}}>{PREFECTURES[index]}</span>;
    }

    return (
        <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <p style={{paddingBottom: '10px'}}>Japanese Prefectures</p>
            <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
            <div style={{marginBottom: '20px', paddingRight: '0px'}}>
                <div>
                    Hokkaido<input type="checkbox" onChange={() => {handleCheck(0)}} checked={enableRegion[0]}></input>
                    Tohoku<input type="checkbox" onChange={() => {handleCheck(1)}} checked={enableRegion[1]}></input>
                    Kanto<input type="checkbox" onChange={() => {handleCheck(2)}} checked={enableRegion[2]}></input>
                    Chubu<input type="checkbox" onChange={() => {handleCheck(3)}} checked={enableRegion[3]}></input>
                    Kansai<input type="checkbox" onChange={() => {handleCheck(4)}} checked={enableRegion[4]}></input>
                    Chugoku<input type="checkbox" onChange={() => {handleCheck(5)}} checked={enableRegion[5]}></input>
                    Shikoku<input type="checkbox" onChange={() => {handleCheck(6)}} checked={enableRegion[6]}></input>
                    Kyushu/Okinawa<input type="checkbox" onChange={() => {handleCheck(7)}} checked={enableRegion[7]}></input>
                </div>
                <img style={{position: 'absolute', left: '-2px', top: '156px'}} src={dots}></img>
            </div>
            <div style={{paddingTop: '10px'}}>
                <GenericRegionSelectionQuiz
                    mapJsonSrc={jp}
                    clickText={'Click on the right prefecture!'}
                    regionIndexArray={PREFECTURES}
                    toFindIndexToAnswerIndicesArray={REGION_INDEX_TO_PREFECTURE_INDEX}
                    answerIndexToText={getText}
                    streakKey={getStreakKey(QuizType.JAPAN_PREFECTURES, enableRegion)}
                    disallowRepeats={true}
                    enableRegions={enableRegion}
                    regionsBitFlag={JAPAN_PREFECTURES_BITFLAG}
                    numLastItems={5}
                    sayWrongAnswer={true}
                    mapParameters={{scale: 1600, center: [138, 38]}}
                    regionIsAnswer={true}
                />
            </div>
        </div>
    );
};

export default JpPrefectures;
