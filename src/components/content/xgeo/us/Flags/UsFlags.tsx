import React, { useEffect, useState } from 'react';
import './../Us.css';
import './../../Xgeo.css';
import dots from '../../../../../assets/dots.png';
import canada from '../../../../../assets/canadamf.gif';
import mexico from '../../../../../assets/mexico.gif';
import GenericRegionSelectionQuiz from '../../common/GenericRegionSelectionQuiz';
import usa from '../../../../../assets/geojsons/mergedfile2_goodcopy.json';
import { getStreakKey } from '../../helpers';
import { QuizType } from '../../constants';
import { STATE_TO_REGION_BITFLAG, STATES } from '../constants';
import { REGION_TO_US_FLAGS, US_FLAGS, US_FLAGS_TO_YEARS } from './constants';


const UsFlags = (): React.ReactElement => {

    const [enableRegion, setEnableRegion] = useState<boolean[]>([true, true, true, true, true, false, false, false]);
    const [enableDistort, setEnableDistort] = useState<boolean>(false);
    const [enableOld, setEnableOld] = useState<boolean>(true);

    /* ----------------- */

    function changeSetting(index: number) {
            switch (index) {
                case 0:
                    setEnableDistort(!enableDistort);
                    break;
                case 1:
                    setEnableOld(!enableOld);
                    break;
            }
        }

    function handleCheck(index: number) {
        const newEnableRegion = enableRegion.map((val, i) => {if (i === index) { return !val; } else { return val; }}); setEnableRegion(newEnableRegion);
    }

    const getFlagImage = (index: number): any => {
        return US_FLAGS[index];
        // return <img style={{height: '100px', display: 'block'}} src={SIGN_IMAGES[index]}></img>;
    }

    const getToFindIndexToAnswerIndicesArray = (): number[][] => {
        return REGION_TO_US_FLAGS.map((val, i) => {
            if (enableOld) {
                return val;
            } else {
                return [val[0]];
            }
        });
    }

    return (
        <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <p style={{paddingBottom: '10px'}}>Flags</p>
            <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
            <div>
                Random angle<input type="checkbox" onChange={() => {changeSetting(0)}} checked={enableDistort}></input>
                Old flags<input type="checkbox" onChange={() => {changeSetting(1)}} checked={enableOld}></input>
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
                    <img style={{height: '15px'}} src={mexico}></img> Mexico <img style={{height: '15px'}} src={mexico}></img><input type="checkbox" onChange={() => {handleCheck(6)}} checked={enableRegion[6]}></input>
                    U.S. Territories<input type="checkbox" onChange={() => {handleCheck(7)}} checked={enableRegion[7]}></input>
                </div> 
            </div>
            <img style={{position: 'absolute', left: '-2px', top: '196px'}} src={dots}></img>
            <div style={{paddingTop: '10px'}}>
                <GenericRegionSelectionQuiz
                    mapJsonSrc={usa}
                    clickText={'Click on the right state!'}
                    regionIndexArray={STATES}
                    toFindIndexToAnswerIndicesArray={getToFindIndexToAnswerIndicesArray()}
                    answerIndexToSrc={getFlagImage}
                    streakKey={getStreakKey(QuizType.US_STATE_FLAGS, enableRegion)}
                    disallowRepeats={true}
                    enableSkew={enableDistort}
                    enableRegions={enableRegion}
                    showYears={true}
                    answerIndexToYears={US_FLAGS_TO_YEARS}
                    regionsBitFlag={STATE_TO_REGION_BITFLAG}
                    numLastItems={5}
                    itemHeight={150}
                />
            </div>
        </div>
    );
};

export default UsFlags;
