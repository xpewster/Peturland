import React, { useState } from 'react';
import './../Us.css';
import './../../Xgeo.css';
import dots from '../../../../../assets/dots.png';
import canada from '../../../../../assets/canadamf.gif';
import mexico from '../../../../../assets/mexico.gif';
import RegionSelectionQuiz from '../../common/RegionSelectionQuiz';
import usa from '../../../../../assets/geojsons/mergedfile2_goodcopy.json';
import { getStreakKey } from '../../helpers';
import { QuizType } from '../../constants';
import { STATE_TO_REGION_BITFLAG, STATES } from '../constants';
import { ABBREVIATIONS, REGION_TO_ABBREVIATIONS } from './constants';


const UsAbbreviations = (): React.ReactElement => {

    const [enableRegion, setEnableRegion] = useState<boolean[]>([true, true, true, true, true, false, false, false]);

    /* ----------------- */

    function handleCheck(index: number) {
        const newEnableRegion = enableRegion.map((val, i) => {if (i === index) { return !val; } else { return val; }}); setEnableRegion(newEnableRegion);
    }

    const getText = (index: number): React.ReactElement => {
        return <span style={{textDecoration: 'underline', display: "inline"}}>{ABBREVIATIONS[index]}</span>;
    }

    return (
        <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <p style={{paddingBottom: '10px'}}>2-Letter Abbreviations</p>
            <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
            <div style={{paddingBottom: '5px', paddingRight: '0px'}}>
                <div>
                    Northeast<input type="checkbox" onChange={() => {handleCheck(0)}} checked={enableRegion[0]}></input>
                    Deep South<input type="checkbox" onChange={() => {handleCheck(1)}} checked={enableRegion[1]}></input>
                    Southwest<input type="checkbox" onChange={() => {handleCheck(2)}} checked={enableRegion[2]}></input>
                    West<input type="checkbox" onChange={() => {handleCheck(3)}} checked={enableRegion[3]}></input>
                    Midwest<input type="checkbox" onChange={() => {handleCheck(4)}} checked={enableRegion[4]}></input>
                </div>
                <div style={{paddingTop: '10px'}}>
                    <img style={{height: '15px'}} src={canada}></img> Canada<img style={{height: '15px'}} src={canada}></img><input type="checkbox" onChange={() => {handleCheck(5)}} checked={enableRegion[5]}></input>
                    <img style={{height: '15px'}} src={mexico}></img> Mexico <img style={{height: '15px'}} src={mexico}></img><input type="checkbox" onChange={() => {handleCheck(6)}} checked={enableRegion[6]}></input>
                </div> 
            </div>
            <img style={{position: 'absolute', left: '-2px', top: '166px'}} src={dots}></img>
            <div style={{paddingTop: '10px'}}>
                <RegionSelectionQuiz
                    mapJsonSrc={usa}
                    clickText={'Click on the right state/prov.!'}
                    regionIndexArray={STATES}
                    toFindIndexToAnswerIndicesArray={REGION_TO_ABBREVIATIONS}
                    answerIndexToText={getText}
                    streakKey={getStreakKey(QuizType.NA_ABBREVIATIONS, enableRegion)}
                    disallowRepeats={true}
                    enableRegions={enableRegion}
                    regionsBitFlag={STATE_TO_REGION_BITFLAG}
                    numLastItems={10}
                    sayWrongAnswer={true}
                />
            </div>
        </div>
    );
};

export default UsAbbreviations;
