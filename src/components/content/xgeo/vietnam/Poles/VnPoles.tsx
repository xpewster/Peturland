import React, { use, useMemo } from 'react';
import './../../Xgeo.css';
import dots from '../../../../../assets/dots.png';
import RegionSelectionQuiz from '../../common/RegionSelectionQuiz';
import vn from '../../../../../assets/geojsons/vietnam.json';
import { getStreakKey } from '../../helpers';
import { QuizType } from '../../constants';
import {
    POLES,
    POLES_MAP,
    POLE_SHOW_INDEX,
    PROVINCE_INDEX_TO_POLE_INDICES,
    POLE_TO_PROVINCE_INDICES,
    HIGHLIGHT_GROUPS,
    POLE_NAMES,
} from './constants';
import { PROVINCES } from '../constants';
import pho from '../../../../../assets/gifs/pho.gif';
import ZoomableImage from '../../../../common/ZoomableImage';


const VnPoles = (): React.ReactElement => {

    const getPoleImageSrc = (index: number): string => {
        return POLES[index];
    };

    // Pole and map side by side
    const getAnswerBoxElement = (index: number): React.ReactElement => {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <img src={POLES[index]} style={{ height: '200px', marginRight: '10px', maxWidth: '250px' }}></img>
                <ZoomableImage src={POLES_MAP[index]} imageStyleProps={{ height: '200px' }} zoomTextRight={30} divProps={{border: 'dashed 1px black'}}/>
            </div>
        );
    };

    const getAnswerBoxLabel = (index: number): React.ReactElement => {
        return (
            <span style={{ fontWeight: 'bold' }}>{POLE_NAMES[index]}</span>
        );
    }

    return (
        <div style={{ height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px' }}>
            <p style={{ paddingBottom: '10px' }}>Vietnamese Utility Poles</p>
            <img style={{ position: 'absolute', left: '-2px', top: '106px' }} src={dots}></img>
            <div style={{ paddingTop: '10px' }}>
                <RegionSelectionQuiz
                    mapJsonSrc={vn}
                    clickText={'Click on all the regions where this pole type can be found!'}
                    regionIndexArray={PROVINCES}
                    toFindIndexToAnswerIndicesArray={PROVINCE_INDEX_TO_POLE_INDICES}
                    answerIndexToRegionIndices={POLE_TO_PROVINCE_INDICES}
                    answerIndexToSrc={getPoleImageSrc}
                    correctAnswerBoxIndexToElement={getAnswerBoxElement}
                    answerIndexToShowIndex={POLE_SHOW_INDEX}
                    streakKey={getStreakKey(QuizType.VIETNAM_POLES, [])}
                    disallowRepeats={true}
                    numLastItems={5}
                    itemHeight={165}
                    highlightGroups={HIGHLIGHT_GROUPS}
                    sayWrongAnswer={false}
                    regionIsAnswer={true}
                    mapParameters={{ scale: 1600, center: [105.5, 14.5] }}
                    multiselect={true}
                    answerIndexToLabelExtra={getAnswerBoxLabel}
                    answerBoxWidthPadding={100}
                    answerBoxHeightPadding={250}
                />
            </div>
            <p style={{ position: 'relative', zIndex: 1 }}>Credit to <a href='https://docs.google.com/document/d/1J94drStCOxt9MZ9YB0MS6feWoFL9zsvM8fh3uN29bGQ/edit?tab=t.0#heading=h.k4i4ck6x7lu' target="_blank" rel="noopener noreferrer">Nebaj's document</a> for the data and images</p>
            <p style={{ position: 'absolute', bottom: '20px', right: '150px', fontFamily: 'Comic Sans MS' }}>It's pronounced pho, not pho!</p>
            <img alt='Pho' style={{ position: 'absolute', bottom: '20px', right: '20px', pointerEvents: 'none', opacity: '0.9' }} src={pho}></img>
        </div>
    );
};

export default VnPoles;
