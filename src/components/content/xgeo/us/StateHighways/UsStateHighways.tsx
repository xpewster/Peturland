import React, { useEffect, useState } from 'react';
import './../Us.css';
import './../../Xgeo.css';
import dots from '../../../../../assets/dots.png';
import canada from '../../../../../assets/canadamf.gif';
import RegionSelectionQuiz from '../../common/RegionSelectionQuiz';
import usa from '../../../../../assets/geojsons/mergedfile2_goodcopy.json';
import { getStreakKey } from '../../helpers';
import { QuizType } from '../../constants';
import { STATE_TO_REGION_BITFLAG, STATES } from '../constants';
import { REGION_TO_SHIELD_IMAGES, SHIELD_IMAGES, SHIELD_SHOW_IMAGES, SHIELD_TO_ANSWER_REGION_INDICES, SHIELD_TO_SHOW_INDICES } from './constants';


const UsStateHighways = (): React.ReactElement => {

    const [enableRegion, setEnableRegion] = useState<boolean[]>([true, true, true, true, true, false, false, false]);
    const [enableDistort, setEnableDistort] = useState<boolean>(false);

    /* ----------------- */

    function changeSetting(index: number) {
            switch (index) {
                case 0:
                    setEnableDistort(!enableDistort);
                    break;
            }
        }

    function handleCheck(index: number) {
        const newEnableRegion = enableRegion.map((val, i) => {if (i === index) { return !val; } else { return val; }}); setEnableRegion(newEnableRegion);
    }

    const getSignImage = (index: number): any => {
        return SHIELD_IMAGES[index];
        // return <img style={{height: '100px', display: 'block'}} src={SIGN_IMAGES[index]}></img>;
    }

    return (
        <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <p style={{paddingBottom: '10px'}}>State Highway Shields</p>
            <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
            <div>
                <div>
                    Random angle<input type="checkbox" onChange={() => {changeSetting(0)}} checked={enableDistort}></input>
                </div>
            </div>
            <img style={{position: 'absolute', left: '-2px', top: '136px'}} src={dots}></img>
            <div style={{paddingTop: '10px', paddingBottom: '5px', paddingRight: '0px'}}>
                <div>
                    Northeast<input type="checkbox" onChange={() => {handleCheck(0)}} checked={enableRegion[0]}></input>
                    Deep South<input type="checkbox" onChange={() => {handleCheck(1)}} checked={enableRegion[1]}></input>
                    Southwest<input type="checkbox" onChange={() => {handleCheck(2)}} checked={enableRegion[2]}></input>
                    West<input type="checkbox" onChange={() => {handleCheck(3)}} checked={enableRegion[3]}></input>
                    Midwest<input type="checkbox" onChange={() => {handleCheck(4)}} checked={enableRegion[4]}></input>
                </div>
                <div style={{paddingTop: '10px'}}>
                    <img style={{height: '15px'}} src={canada}></img> Canada<img style={{height: '15px'}} src={canada}></img><input type="checkbox" onChange={() => {handleCheck(5)}} checked={enableRegion[5]}></input>
                </div> 
            </div>
            <img style={{position: 'absolute', left: '-2px', top: '196px'}} src={dots}></img>
            <div style={{paddingTop: '10px'}}>
                <RegionSelectionQuiz
                    mapJsonSrc={usa}
                    clickText={'Click on the right state! (Lowest numbered highway shield shown)'}
                    regionIndexArray={STATES}
                    toFindIndexToAnswerIndicesArray={REGION_TO_SHIELD_IMAGES}
                    answerIndexToSrc={getSignImage}
                    answerIndexToRegionIndices={SHIELD_TO_ANSWER_REGION_INDICES}
                    streakKey={getStreakKey(QuizType.US_STATE_HIGHWAY, [...enableRegion, enableDistort])}
                    disallowRepeats={true}
                    enableSkew={enableDistort}
                    enableRegions={enableRegion}
                    regionsBitFlag={STATE_TO_REGION_BITFLAG}
                    itemHeight={75}
                    dashedBorder={true}
                    minRandScale={0.2}
                    showImages={SHIELD_SHOW_IMAGES}
                    answerIndexToShowIndex={SHIELD_TO_SHOW_INDICES}
                    numLastItems={10}
                    sayWrongAnswer={true}
                />
            </div>
        </div>
    );
};

export default UsStateHighways;
