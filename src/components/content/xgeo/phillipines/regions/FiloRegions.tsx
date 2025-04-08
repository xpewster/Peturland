import React, { useState } from 'react';
import './../../Xgeo.css';
import dots from '../../../../../assets/dots.png';
import GenericRegionSelectionQuiz from '../../common/GenericRegionSelectionQuiz';
import regs from '../../../../../assets/geojsons/phl_regs.json';
import { getStreakKey } from '../../helpers';
import { QuizType } from '../../constants';
import { FILOREGION_BITFLAG, REGION_INDEX_TO_FILOREGION_INDEX, REGIONS } from './constants';


const FiloRegions = (): React.ReactElement => {

    const [enableRegion, setEnableRegion] = useState<boolean[]>(Array(18).fill(true));

    /* ----------------- */

    function handleCheck(index: number) {
        const newEnableRegion = enableRegion.map((val, i) => {if (i === index) { return !val; } else { return val; }}); setEnableRegion(newEnableRegion);
    }

    const getText = (index: number): React.ReactElement => {
        return <span style={{textDecoration: 'underline', display: "inline"}}>{REGIONS[index]}</span>;
    }

    return (
        <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <p style={{paddingBottom: '10px'}}>Filo Regions</p>
            <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
            <div style={{marginBottom: '20px', paddingRight: '0px'}}>
                <div>
                    Luzon<input type="checkbox" onChange={() => {handleCheck(0)}} checked={enableRegion[0]}></input>
                    Central<input type="checkbox" onChange={() => {handleCheck(1)}} checked={enableRegion[1]}></input>
                    Mindanao<input type="checkbox" onChange={() => {handleCheck(2)}} checked={enableRegion[2]}></input>
                </div>
                <img style={{position: 'absolute', left: '-2px', top: '136px'}} src={dots}></img>
            </div>
            <div style={{paddingTop: '10px'}}>
                <GenericRegionSelectionQuiz
                    mapJsonSrc={regs}
                    clickText={'Click on the right region!'}
                    regionIndexArray={REGIONS}
                    toFindIndexToAnswerIndicesArray={REGION_INDEX_TO_FILOREGION_INDEX}
                    answerIndexToText={getText}
                    streakKey={getStreakKey(QuizType.PHILLIPINES_REGIONS, enableRegion)}
                    disallowRepeats={true}
                    enableRegions={enableRegion}
                    regionsBitFlag={FILOREGION_BITFLAG}
                    numLastItems={0}
                    sayWrongAnswer={true}
                    mapParameters={{scale: 2000, center: [122, 11]}}
                />
            </div>
            <p style={{paddingTop: '60px'}}><i>Note: The Negros Island Region was reestablished in 2024.</i></p>
        </div>
    );
};

export default FiloRegions;
