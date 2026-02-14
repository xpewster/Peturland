import React, { useMemo, useState } from 'react';
import './../../Xgeo.css';
import dots from '../../../../../assets/dots.png';
import RegionSelectionQuiz from '../../common/RegionSelectionQuiz';
import vn from '../../../../../assets/geojsons/vietnam.json';
import { getStreakKey } from '../../helpers';
import {
    PLACE_NAME_ELEMENTS,
    PLACE_NAME_DESCRIPTIONS,
    PROVINCE_INDEX_TO_ELEMENT_INDICES,
    ELEMENT_TO_PROVINCE_INDICES,
    ETHNIC_ELEMENT_START,
    ETHNIC_ELEMENT_END,
    SINO_VIET_ELEMENT_START,
    SINO_VIET_ELEMENT_END,
} from './constants';
import { PROVINCES } from '../constants';
import { QuizType } from '../../constants';
import pho from '../../../../../assets/gifs/pho.gif';


const VnRegionalPlaceNames = (): React.ReactElement => {

    const [enableEthnic, setEnableEthnic] = useState<boolean>(true);
    const [enableSinoViet, setEnableSinoViet] = useState<boolean>(false);

    const filteredList = useMemo(() => {
        return PROVINCE_INDEX_TO_ELEMENT_INDICES.map((elementIndices: number[]) => {
            return elementIndices.filter((index: number) => {
                if (enableEthnic && index >= ETHNIC_ELEMENT_START && index <= ETHNIC_ELEMENT_END) {
                    return true;
                }
                if (enableSinoViet && index >= SINO_VIET_ELEMENT_START && index <= SINO_VIET_ELEMENT_END) {
                    return true;
                }
                return false;
            });
        });
    }, [enableEthnic, enableSinoViet]);

    const getText = (index: number): React.ReactElement => {
        return (
            <span style={{ textDecoration: 'underline', fontWeight: 'bold' }}>{PLACE_NAME_ELEMENTS[index]}<br /></span>
        );
    };

    const getAnswerBoxText = (index: number): React.ReactElement => {
        return (
            <span>
                <span style={{ textDecoration: 'underline', fontWeight: 'bold' }}>{PLACE_NAME_ELEMENTS[index]}</span>
                <br />
                <span style={{ fontSize: '0.85em', color: '#555' }}>{PLACE_NAME_DESCRIPTIONS[index]}</span>
            </span>
        );
    };

    return (
        <div style={{ height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px' }}>
            <p style={{ paddingBottom: '10px' }}>Vietnamese Regional Place Names</p>
            <img style={{ position: 'absolute', left: '-2px', top: '106px' }} src={dots}></img>
            <div>
                <div>
                    Ethnic minority
                    <input type="checkbox" onChange={() => { setEnableEthnic(!enableEthnic); }} checked={enableEthnic}></input>
                    &nbsp;&nbsp;
                    Sino-Vietnamese
                    <input type="checkbox" onChange={() => { setEnableSinoViet(!enableSinoViet); }} checked={enableSinoViet}></input>
                </div>
            </div>
            <img style={{ position: 'absolute', left: '-2px', top: '136px' }} src={dots}></img>
            <div style={{ paddingTop: '10px' }}>
                <RegionSelectionQuiz
                    mapJsonSrc={vn}
                    clickText={'Click on a province where this regional place name can be found!'}
                    regionIndexArray={PROVINCES}
                    toFindIndexToAnswerIndicesArray={filteredList}
                    answerIndexToRegionIndices={ELEMENT_TO_PROVINCE_INDICES}
                    answerIndexToText={getText}
                    correctAnswerBoxIndexToText={getAnswerBoxText}
                    streakKey={getStreakKey(QuizType.VIETNAM_REGIONAL_PLACE_NAMES, [enableEthnic, enableSinoViet])}
                    disallowRepeats={true}
                    numLastItems={5}
                    sayWrongAnswer={false}
                    mapParameters={{ scale: 1600, center: [105.5, 14.5] }}
                />
            </div>
            <p style={{ position: 'absolute', bottom: '20px', right: '150px', fontFamily: 'Comic Sans MS' }}>It's pronounced pho, not pho!</p>
            <img alt='Pho' style={{ position: 'absolute', bottom: '20px', right: '20px', pointerEvents: 'none', opacity: '0.9' }} src={pho}></img>
        </div>
    );
};

export default VnRegionalPlaceNames;
