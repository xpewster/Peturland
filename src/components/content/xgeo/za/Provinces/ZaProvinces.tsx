import React, { useState } from 'react';
import './../../Xgeo.css';
import dots from '../../../../../assets/dots.png';
import RegionSelectionQuiz from '../../common/RegionSelectionQuiz';
import za from '../../../../../assets/geojsons/za.json';
import { getStreakKey } from '../../helpers';
import { QuizType } from '../../constants';
import { REGION_INDEX_TO_PROVINCE_INDEX } from './constants';
import { PROVINCES } from '../constants';



const ZaProvinces = (): React.ReactElement => {

    const [enableRegion, setEnableRegion] = useState<boolean[]>(Array(18).fill(true));

    /* ----------------- */

    const getText = (index: number): React.ReactElement => {
        return <span style={{textDecoration: 'underline', display: "inline"}}>{PROVINCES[index]}</span>;
    }

    return (
        <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <p style={{paddingBottom: '10px'}}>ZA Provinces</p>
            <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
            <div style={{paddingTop: '10px'}}>
                <RegionSelectionQuiz
                    mapJsonSrc={za}
                    clickText={'Click on the right province!'}
                    regionIndexArray={PROVINCES}
                    toFindIndexToAnswerIndicesArray={REGION_INDEX_TO_PROVINCE_INDEX}
                    answerIndexToText={getText}
                    streakKey={getStreakKey(QuizType.SOUTH_AFRICA_PROVINCES, enableRegion)}
                    disallowRepeats={true}
                    numLastItems={0}
                    sayWrongAnswer={true}
                    mapParameters={{scale: 2000, center: [24, -29]}}
                />
            </div>
        </div>
    );
};

export default ZaProvinces;
