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
    OBSCURE_ELEMENT_INDICES,
    PLACE_NAME_CONSISTENCY_RATINGS,
} from './constants';
import { PROVINCES } from '../constants';
import { QuizType } from '../../constants';
import pho from '../../../../../assets/gifs/pho.gif';
import Consistency from '../../../../common/ConsistencyRating';


const VnRegionalPlaceNames = (): React.ReactElement => {

    const [enableEthnic, setEnableEthnic] = useState<boolean>(true);
    const [enableSinoViet, setEnableSinoViet] = useState<boolean>(true);
    const [enableObscure, setEnableObscure] = useState<boolean>(true);

    const filteredList = useMemo(() => {
        return PROVINCE_INDEX_TO_ELEMENT_INDICES.map((elementIndices: number[]) => {
            return elementIndices.filter((index: number) => {
                if (!enableObscure && OBSCURE_ELEMENT_INDICES.has(index)) {
                    return false;
                }
                if (enableEthnic && index >= ETHNIC_ELEMENT_START && index <= ETHNIC_ELEMENT_END) {
                    return true;
                }
                if (enableSinoViet && index >= SINO_VIET_ELEMENT_START && index <= SINO_VIET_ELEMENT_END) {
                    return true;
                }
                return false;
            });
        });
    }, [enableEthnic, enableSinoViet, enableObscure]);

    const getText = (index: number): React.ReactElement => {
        return (
            <span style={{ fontWeight: 'bold' }}>{PLACE_NAME_ELEMENTS[index]}<br /><br /></span>
        );
    };

    const getConsistencyElement = (index: number): React.ReactElement => {
        const rating = PLACE_NAME_CONSISTENCY_RATINGS[index];
        return <Consistency rating={rating[0]} bonusText={rating[1]} />; // Placeholder, replace with actual logic to determine consistency
    };

    const getAnswerBoxText = (index: number): React.ReactElement => {
        return (
            <span>
                <span style={{ fontWeight: 'bold' }}>{PLACE_NAME_ELEMENTS[index]}</span>
                <br />
                <span style={{ fontSize: '14px', color: '#555' }}>{PLACE_NAME_DESCRIPTIONS[index]} {getConsistencyElement(index)}</span>
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
                    &nbsp;&nbsp;
                    Rare
                    <input type="checkbox" onChange={() => { setEnableObscure(!enableObscure); }} checked={enableObscure}></input>
                </div>
            </div>
            <img style={{ position: 'absolute', left: '-2px', top: '136px' }} src={dots}></img>
            <div style={{ paddingTop: '14px' }}>
                <RegionSelectionQuiz
                    mapJsonSrc={vn}
                    clickText={'Click on a province where this regional place name can be found!'}
                    regionIndexArray={PROVINCES}
                    toFindIndexToAnswerIndicesArray={filteredList}
                    answerIndexToRegionIndices={ELEMENT_TO_PROVINCE_INDICES}
                    answerIndexToText={getText}
                    correctAnswerBoxIndexToElement={getAnswerBoxText}
                    streakKey={getStreakKey(QuizType.VIETNAM_REGIONAL_PLACE_NAMES, [enableEthnic, enableSinoViet, enableObscure])}
                    disallowRepeats={true}
                    numLastItems={5}
                    sayWrongAnswer={false}
                    regionIsAnswer={true} // Hide province since RegionSelectionQuiz only shows one which may be confusing
                    mapParameters={{ scale: 1600, center: [105.5, 14.5] }}
                    answerBoxWidthPadding={145}
                />
            </div>
            <p style={{ position: 'absolute', bottom: '20px', right: '150px', fontFamily: 'Comic Sans MS' }}>It's pronounced pho, not pho!</p>
            <img alt='Pho' style={{ position: 'absolute', bottom: '20px', right: '20px', pointerEvents: 'none', opacity: '0.9' }} src={pho}></img>
        </div>
    );
};

export default VnRegionalPlaceNames;
