import React from 'react';
import GenericMapMarkerQuiz from '../../common/GenericMapMarkerQuiz';
import { CoordinateAnswerPair, SelectorType } from '../../common/constants';
import { QuizType } from '../../constants';
import { CAR_LABELS, CAR_SRCS, MONGOLIA_REGION_TO_MAP_SRC_MAP, REGION_TO_COORDINATE_ANSWER_PAIRS_MAP } from './constants';
import car from '../../../../../assets/fileboxicons/car.png';

const MongoliaCarMeta = (): React.ReactElement => {

    const CAR_IMAGE_DIMENSION = 150;

    const REGIONS = ["Around Ulaan", "Everything else"];

    const getClickText = (): string => {
        return "Click on the right car for this road!";
    };

    return (
        <GenericMapMarkerQuiz
            quizTitle={<span><img src={car} style={{verticalAlign: 'middle', paddingBottom: '4px'}} /> Mongolia Car Meta <img src={car} style={{verticalAlign: 'middle', paddingBottom: '4px'}} /> WIP!!</span>}
            enableRegions={REGIONS}
            defaultRegionIndex={1}
            disableRegions={[true, false]}
            regionToMapSrcMap={MONGOLIA_REGION_TO_MAP_SRC_MAP}
            clickText={getClickText()}
            selectorType={SelectorType.MULTIPLE_CHOICE}
            regionToCoordinateAnswerPairsMap={REGION_TO_COORDINATE_ANSWER_PAIRS_MAP}
            answerIndex={0}
            quizType={QuizType.MONG_CAR_META}
            disallowRepeats={true} 
            showGeoWarning={true}
            multipleChoiceConfig={{
                numChoices: 4,
                itemHeight: CAR_IMAGE_DIMENSION,
                srcs: CAR_SRCS,
                choiceLabels: CAR_LABELS,
                choicesZoomable: true,
            }}
            zoomable={true}
            map441Height={242}
        />
    );
};

export default MongoliaCarMeta;
