import React, { useState } from 'react';
import './../../Xgeo.css';
import dots from '../../../../../assets/dots.png';
import RegionSelectionQuiz from '../../common/RegionSelectionQuiz';
import jpa from '../../../../../assets/geojsons/jp_areacodes.json';
import { getStreakKey } from '../../helpers';
import { AREA_CODES, JAPAN_REGIONS_BITFLAG, REGION_INDEX_TO_PREFECTURE_INDEX } from './constants';
import { QuizType } from '../../constants';
import totoro from '../../../../../assets/gifs/Totoro.gif';



const JpAreaCodes = (): React.ReactElement => {

    const [enableRegion, setEnableRegion] = useState<boolean[]>(Array(18).fill(true));

    /* ----------------- */

    function handleCheck(index: number) {
        const newEnableRegion = enableRegion.map((val, i) => {if (i === index) { return !val; } else { return val; }}); setEnableRegion(newEnableRegion);
    }

    const getText = (index: number): React.ReactElement => {
        return <span style={{textDecoration: 'underline', display: "inline"}}>{AREA_CODES[index]}</span>;
    }

    return (
        <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <p style={{paddingBottom: '10px'}}>Japanese Phone Codes</p>
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
                <RegionSelectionQuiz
                    mapJsonSrc={jpa}
                    clickText={'Click on the right area!'}
                    regionIndexArray={AREA_CODES}
                    toFindIndexToAnswerIndicesArray={REGION_INDEX_TO_PREFECTURE_INDEX}
                    answerIndexToText={getText}
                    streakKey={getStreakKey(QuizType.JAPAN_AREACODES, enableRegion)}
                    disallowRepeats={true}
                    enableRegions={enableRegion}
                    regionsBitFlag={JAPAN_REGIONS_BITFLAG}
                    numLastItems={0}
                    sayWrongAnswer={true}
                    mapParameters={{scale: 1600, center: [138, 38]}}
                />
            </div>
            <p>Thanks to <a href='https://super-duper.fr/' target='_blank' rel='noreferrer'>super-duper.fr</a> for the map json!</p>
            <img alt='Totoro' style={{position: 'absolute', top: '486px', left: '-200px', zIndex: -5, pointerEvents: 'none', opacity: '0.9'}} src={totoro}></img>
        </div>
    );
};

export default JpAreaCodes;
