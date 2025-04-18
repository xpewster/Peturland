import React, { useState } from 'react';
import './../../Xgeo.css';
import dots from '../../../../../assets/dots.png';
import GenericRegionSelectionQuiz from '../../common/GenericRegionSelectionQuiz';
import brazil from '../../../../../assets/geojsons/brazil-states2.json';
import { getStreakKey } from '../../helpers';
import { QuizType } from '../../constants';
import { BRAZIL_STATES } from '../constants';
import { ABBREVIATIONS, REGION_TO_ABBREVIATION_INDEX } from './constants';


const BrazilAbbreviations = (): React.ReactElement => {

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
            <div style={{paddingTop: '10px'}}>
                <GenericRegionSelectionQuiz
                    mapJsonSrc={brazil}
                    clickText={'Click on the right state!'}
                    regionIndexArray={BRAZIL_STATES}
                    toFindIndexToAnswerIndicesArray={REGION_TO_ABBREVIATION_INDEX}
                    answerIndexToText={getText}
                    streakKey={getStreakKey(QuizType.BRAZIL_ABBREVIATIONS, enableRegion)}
                    disallowRepeats={true}
                    numLastItems={10}
                    sayWrongAnswer={true}
                    mapParameters={{scale: 800, center: [-55, -15]}}
                />
            </div>
        </div>
    );
};

export default BrazilAbbreviations;
