import React, { useEffect, useState } from 'react';
import './../Xgeo.css';
import fareast from '../../../../assets/maps/mong_fareast.png';
import farwest from '../../../../assets/maps/mong_farwest.png';
import { FAR_EAST_COORDINATE_ANSWER_PAIRS } from './constants';
import GenericMapMarkerQuiz from '../common/GenericMapMarkerQuiz';
import { CoordinateAnswerPair, SelectorType } from '../common/constants';
import { QuizType } from '../constants';

export interface MongoliaProps {
    quizType: QuizType;
}

const Mongolia = (props: MongoliaProps): React.ReactElement => {

    const getQuizTitle = (): string => {
        switch(props.quizType) {
            case QuizType.MONG_DRIVING_DIRECTION:
                return "Mongolia driving directions";
            default:
                return "Mongolia quiz";
        }
    };

    const getClickText = (): string => {
        switch(props.quizType) {
            case QuizType.MONG_DRIVING_DIRECTION:
                return "Click on the driving direction for this road and car ";
            default:
                return "Not yet supported";
        }
    };

    const REGIONS = ["Far east", "Central forests", "Ulaan-Erdenet", "Far west", "South", "Central west"];

    const MONGOLIA_REGION_TO_MAP_SRC_MAP = new Map<string, string>([
        ["Far east", fareast],
        ["Central forests", fareast],
        ["Ulaan-Erdenet", fareast],
        ["Far west", farwest],
        ["South", fareast],
        ["Central west", fareast],
    ]);

    const REGION_TO_COORDINATE_ANSWER_PAIRS_MAP = new Map<string, CoordinateAnswerPair[]>([
        ["Far east", FAR_EAST_COORDINATE_ANSWER_PAIRS],
        ["Central forests", FAR_EAST_COORDINATE_ANSWER_PAIRS],
        ["Ulaan-Erdenet", FAR_EAST_COORDINATE_ANSWER_PAIRS],
        ["Far west", FAR_EAST_COORDINATE_ANSWER_PAIRS],
        ["South", FAR_EAST_COORDINATE_ANSWER_PAIRS],
        ["Central west", FAR_EAST_COORDINATE_ANSWER_PAIRS],
    ])


    return (
        <GenericMapMarkerQuiz
            quizTitle={getQuizTitle()}
            regionToMapSrcMap={MONGOLIA_REGION_TO_MAP_SRC_MAP}
            enableRegions={REGIONS} 
            clickText={getClickText()}
            selectorType={SelectorType.COMPASS}
            regionToCoordinateAnswerPairsMap={REGION_TO_COORDINATE_ANSWER_PAIRS_MAP}
            answerIndex={0}
            quizType={QuizType.MONG_DRIVING_DIRECTION}
            disallowRepeats={true} 
            showGeoWarning={false}
        />
    );
};

export default Mongolia;
