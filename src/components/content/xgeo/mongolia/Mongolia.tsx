import React from 'react';
import fareast from '../../../../assets/maps/mong_fareast.png';
import farwest from '../../../../assets/maps/mong_farwest.png';
import ulaan from '../../../../assets/maps/mong_ulaan.png';
import western_ranges from '../../../../assets/maps/mong_westranges.png';
import central_west from '../../../../assets/maps/mong_centralwest.png';
import central_forests from '../../../../assets/maps/mong_centralforests.png';
import south from '../../../../assets/maps/mong_south.png';
import { AROUND_ULAAN_COORDINATE_ANSWER_PAIRS, CARS, CENTRAL_WEST_COORDINATE_ANSWER_PAIRS, FAR_EAST_COORDINATE_ANSWER_PAIRS, FAR_WEST_COORDINATE_ANSWER_PAIRS, MIDWEST_COORDINATE_ANSWER_PAIRS, NORTH_CENTRAL_COORDINATE_ANSWER_PAIRS, REGIONS, SOUTH_COORDINATE_ANSWER_PAIRS } from './constants';
import GenericMapMarkerQuiz from '../common/GenericMapMarkerQuiz';
import { CoordinateAnswerPair, SelectorType } from '../common/constants';
import { QuizType } from '../constants';
import car from '../../../../assets/fileboxicons/car.png';
import grey_tent from '../../../../assets/cars/grey_tent.png';
import blue_tent from '../../../../assets/cars/blue_tent.png';
import sticker_car from '../../../../assets/cars/sticker_car.png';
import red_mirrors from '../../../../assets/cars/red_mirrors.png';
import gen4_grey from '../../../../assets/cars/gen4_grey.png';
import west_car from '../../../../assets/cars/west_car.png';
import camo_car from '../../../../assets/cars/camo_car.png';
import depressed_car from '../../../../assets/cars/depressed_tent.png';

export interface MongoliaProps {
    quizType: QuizType;
}

const Mongolia = (props: MongoliaProps): React.ReactElement => {

    const CAR_IMAGE_DIMENSION = 75;

    const getQuizTitle = (): React.ReactElement => {
        switch(props.quizType) {
            case QuizType.MONG_DRIVING_DIRECTION:
                return <span><img src={car} style={{verticalAlign: 'middle', paddingBottom: '4px'}} /> Mongolia driving directions <img src={car} style={{verticalAlign: 'middle', paddingBottom: '4px'}} /></span>;
            default:
                return  <span>Mongolia quiz</span>;
        }
    };

    const getClickText = (): string => {
        switch(props.quizType) {
            case QuizType.MONG_DRIVING_DIRECTION:
                return "Click on the driving direction for this road!";
            default:
                return "Not yet supported";
        }
    };

    const MONGOLIA_REGION_TO_MAP_SRC_MAP = new Map<string, string>([
        ["Far east", fareast],
        ["North Central", central_forests],
        ["Around Ulaan", ulaan],
        ["Far west", farwest],
        ["South", south],
        ["Central west", central_west],
        ["Midwest", western_ranges],
    ]);

    const REGION_TO_COORDINATE_ANSWER_PAIRS_MAP = new Map<string, CoordinateAnswerPair[]>([
        ["Far east", FAR_EAST_COORDINATE_ANSWER_PAIRS],
        ["North Central", NORTH_CENTRAL_COORDINATE_ANSWER_PAIRS],
        ["Around Ulaan", AROUND_ULAAN_COORDINATE_ANSWER_PAIRS],
        ["Far west", FAR_WEST_COORDINATE_ANSWER_PAIRS],
        ["South", SOUTH_COORDINATE_ANSWER_PAIRS],
        ["Central west", CENTRAL_WEST_COORDINATE_ANSWER_PAIRS],
        ["Midwest", MIDWEST_COORDINATE_ANSWER_PAIRS],
    ]);

    const CAR_TO_IMG_MAP = new Map<string, React.ReactElement>([
        [CARS.GREY_TENT, <img src={grey_tent} alt="Grey tent" style={{width: `${CAR_IMAGE_DIMENSION}px`, height: `${CAR_IMAGE_DIMENSION}px`, display: 'block'}} />],
        [CARS.BLUE_TENT, <img src={blue_tent} alt="Blue tent" style={{width: `${CAR_IMAGE_DIMENSION}px`, height: `${CAR_IMAGE_DIMENSION}px`, display: 'block'}} />],
        [CARS.STICKER_CAR, <img src={sticker_car} alt="Sticker car" style={{width: `${CAR_IMAGE_DIMENSION}px`, height: `${CAR_IMAGE_DIMENSION}px`, display: 'block'}} />],
        [CARS.RED_MIRRORS, <img src={red_mirrors} alt="Red mirrors" style={{width: `${CAR_IMAGE_DIMENSION}px`, height: `${CAR_IMAGE_DIMENSION}px`, display: 'block'}} />],
        [CARS.GEN4_GREY, <img src={gen4_grey} alt="Gen 4 grey" style={{width: `${CAR_IMAGE_DIMENSION}px`, height: `${CAR_IMAGE_DIMENSION}px`, display: 'block'}} />],
        [CARS.WEST_CAR, <img src={west_car} alt="West car" style={{width: `${CAR_IMAGE_DIMENSION}px`, height: `${CAR_IMAGE_DIMENSION}px`, display: 'block'}} />],
        [CARS.CAMO_CAR, <img src={camo_car} alt="Camo car" style={{width: `${CAR_IMAGE_DIMENSION}px`, height: `${CAR_IMAGE_DIMENSION}px`, display: 'block'}} />],
        [CARS.DEPRESSED_CAR, <img src={depressed_car} alt="Depressed car" style={{width: `${CAR_IMAGE_DIMENSION}px`, height: `${CAR_IMAGE_DIMENSION}px`, display: 'block'}} />],
    ]);

    const getHint = (answerArray: string[]): React.ReactElement | undefined => {
        return CAR_TO_IMG_MAP.get(answerArray[1]);
    };


    return (
        <GenericMapMarkerQuiz
            quizTitle={getQuizTitle()}
            regionToMapSrcMap={MONGOLIA_REGION_TO_MAP_SRC_MAP}
            enableRegions={REGIONS} 
            enableRegionsRows={2}
            clickText={getClickText()}
            selectorType={SelectorType.COMPASS}
            regionToCoordinateAnswerPairsMap={REGION_TO_COORDINATE_ANSWER_PAIRS_MAP}
            answerIndex={0}
            getHintFromAnswerArray={getHint}
            hintText="car"
            quizType={QuizType.MONG_DRIVING_DIRECTION}
            disallowRepeats={true} 
            showGeoWarning={true}
        />
    );
};

export default Mongolia;
