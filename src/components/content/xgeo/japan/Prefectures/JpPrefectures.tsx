import React, { useState } from 'react';
import './../../Xgeo.css';
import dots from '../../../../../assets/dots.png';
import GenericRegionSelectionQuiz from '../../common/GenericRegionSelectionQuiz';
import jp from '../../../../../assets/geojsons/prefectures.json';
import { getStreakKey } from '../../helpers';
import { QuizType } from '../../constants';
import { PREFECTURES, PREFECTURES_KANJI, REGION_INDEX_TO_PREFECTURE_INDEX } from './constants';
import { JAPAN_PREFECTURES_BITFLAG } from '../constants';
import totoro from '../../../../../assets/gifs/Totoro.gif';



const JpPrefectures = (): React.ReactElement => {

    const [enableRegion, setEnableRegion] = useState<boolean[]>(Array(18).fill(true));
    const [enableKanji, setEnableKanji] = useState<boolean>(false);

    /* ----------------- */

    function handleCheck(index: number) {
        const newEnableRegion = enableRegion.map((val, i) => {if (i === index) { return !val; } else { return val; }}); setEnableRegion(newEnableRegion);
    }

    function changeSetting(index: number) {
        switch (index) {
            case 0:
                setEnableKanji(!enableKanji);
                break;
        }
    }

    const getText = (index: number): React.ReactElement => {
        if (enableKanji) {
            return <span className='p-old' style={{textDecoration: 'underline', display: "inline"}}>{PREFECTURES_KANJI[index]}</span>;
        }
        return <span style={{textDecoration: 'underline', display: "inline"}}>{PREFECTURES[index]}</span>;
    }

    const getRegionText = (index: number): string => {
        switch (index) {
            case 0:
                return enableKanji ? PREFECTURES_KANJI[0] : 'Hokkaido';
            case 1:
                return enableKanji ? PREFECTURES_KANJI[1] : 'Tohoku';
            case 2:
                return enableKanji ? PREFECTURES_KANJI[2] : 'Kanto';
            case 3:
                return enableKanji ? PREFECTURES_KANJI[3] : 'Chubu';
            case 4:
                return enableKanji ? PREFECTURES_KANJI[5] : 'Kansai';
            case 5:
                return enableKanji ? PREFECTURES_KANJI[6] : 'Chugoku';
            case 6:
                return enableKanji ? PREFECTURES_KANJI[7] : 'Shikoku';
            case 7:
                return enableKanji ? PREFECTURES_KANJI[8] : 'Kyushu/Okinawa';
            default:
                return 'Unknown';
        }
    }

    return (
        <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <p style={{paddingBottom: '10px'}}>Japanese Prefectures</p>
            <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
            <div>
                <div>
                    Use Kanji<input type="checkbox" onChange={() => {changeSetting(0)}} checked={enableKanji}></input>
                </div>
            </div>
            <img style={{position: 'absolute', left: '-2px', top: '136px'}} src={dots}></img>
            <div style={{marginTop: '10px', marginBottom: '20px', paddingRight: '0px'}}>
                <div className={enableKanji ? 'p-old' : undefined}>
                    {getRegionText(0)}<input type="checkbox" onChange={() => {handleCheck(0)}} checked={enableRegion[0]}></input>
                    {getRegionText(1)}<input type="checkbox" onChange={() => {handleCheck(1)}} checked={enableRegion[1]}></input>
                    {getRegionText(2)}<input type="checkbox" onChange={() => {handleCheck(2)}} checked={enableRegion[2]}></input>
                    {getRegionText(3)}<input type="checkbox" onChange={() => {handleCheck(3)}} checked={enableRegion[3]}></input>
                    {getRegionText(4)}<input type="checkbox" onChange={() => {handleCheck(4)}} checked={enableRegion[4]}></input>
                    {getRegionText(5)}<input type="checkbox" onChange={() => {handleCheck(5)}} checked={enableRegion[5]}></input>
                    {getRegionText(6)}<input type="checkbox" onChange={() => {handleCheck(6)}} checked={enableRegion[6]}></input>
                    {getRegionText(7)}<input type="checkbox" onChange={() => {handleCheck(7)}} checked={enableRegion[7]}></input>
                </div>
                <img style={{position: 'absolute', left: '-2px', top: '186px'}} src={dots}></img>
            </div>
            <div style={{paddingTop: '10px'}}>
                <GenericRegionSelectionQuiz
                    mapJsonSrc={jp}
                    clickText={'Click on the right prefecture!'}
                    regionIndexArray={PREFECTURES}
                    toFindIndexToAnswerIndicesArray={REGION_INDEX_TO_PREFECTURE_INDEX}
                    answerIndexToText={getText}
                    streakKey={getStreakKey(QuizType.JAPAN_PREFECTURES, [...enableRegion, enableKanji])}
                    disallowRepeats={true}
                    enableRegions={enableRegion}
                    regionsBitFlag={JAPAN_PREFECTURES_BITFLAG}
                    numLastItems={5}
                    sayWrongAnswer={true}
                    mapParameters={{scale: 1600, center: [138, 38]}}
                    regionIsAnswer={true}
                />
            </div>
            <img style={{position: 'absolute', top: '486px', left: '-200px', zIndex: -5, pointerEvents: 'none', opacity: '0.9'}} src={totoro}></img>
        </div>
    );
};

export default JpPrefectures;
