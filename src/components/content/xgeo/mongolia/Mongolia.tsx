import React, { useState } from 'react';
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
import dots from '../../../../assets/dots.png';

export interface MongoliaProps {
    quizType: QuizType;
}

const Mongolia = (props: MongoliaProps): React.ReactElement => {

    const CAR_IMAGE_DIMENSION = 75;
    
    const [currentRegion, setCurrentRegion] = useState<number>(0);
    
    /* ----------------- */

    function handleCheck(index: number) {
        setCurrentRegion(index);
    }

    const getClickText = (): string => {
        return "Click on the driving direction for this road!";
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

    const getMapSrc = (): string => {
        return MONGOLIA_REGION_TO_MAP_SRC_MAP.get(REGIONS[currentRegion])!;
    };

    const getCoordinateAnswerPairs = (): CoordinateAnswerPair[] => {
        return REGION_TO_COORDINATE_ANSWER_PAIRS_MAP.get(REGIONS[currentRegion])!;
    };


    return (
        <div>
            <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
                <p style={{paddingBottom: '12px'}}><span><img src={car} style={{verticalAlign: 'middle', paddingBottom: '4px'}} /> Mongolia driving directions <img src={car} style={{verticalAlign: 'middle', paddingBottom: '4px'}} /></span></p>
                <img style={{position: 'absolute', left: '-2px', top: '111px'}} src={dots}></img>
                <div>
                    <p style={{marginBottom: '8px'}}>This particular quiz is only applicable for Geoguessr/Google Streetview!</p>
                </div>
                <img style={{position: 'absolute', left: '-2px', top: '153px'}} src={dots}></img>
                <div style={{marginBottom: '10px', paddingRight: '0px'}}>
                    {REGIONS[0]}<input type="checkbox" disabled={currentRegion === 0} onChange={() => {handleCheck(0)}} checked={currentRegion === 0}></input>
                    {REGIONS[1]}<input type="checkbox" disabled={currentRegion === 1} onChange={() => {handleCheck(1)}} checked={currentRegion === 1}></input>
                    {REGIONS[2]}<input type="checkbox" disabled={currentRegion === 2} onChange={() => {handleCheck(2)}} checked={currentRegion === 2}></input>
                    {REGIONS[3]}<input type="checkbox" disabled={currentRegion === 3} onChange={() => {handleCheck(3)}} checked={currentRegion === 3}></input>
                    {REGIONS[4]}<input type="checkbox" disabled={currentRegion === 4} onChange={() => {handleCheck(4)}} checked={currentRegion === 4}></input>
                    {REGIONS[5]}<input type="checkbox" disabled={currentRegion === 5} onChange={() => {handleCheck(5)}} checked={currentRegion === 5}></input>
                    {REGIONS[6]}<input type="checkbox" disabled={currentRegion === 6} onChange={() => {handleCheck(6)}} checked={currentRegion === 6}></input>
                </div>
                <img style={{position: 'absolute', left: '-2px', top: '201px'}} src={dots}></img>
            </div>
            <GenericMapMarkerQuiz
                mapSrc={getMapSrc()}
                clickText={getClickText()}
                selectorType={SelectorType.COMPASS}
                coordinateAnswerPairs={getCoordinateAnswerPairs()}
                answerIndex={0}
                getHintFromAnswerArray={getHint}
                hintText="car"
                quizType={QuizType.MONG_DRIVING_DIRECTION}
                disallowRepeats={true} 
                streakSuffix={`_${REGIONS[currentRegion]}`}
            />
        </div>
    );
};

export default Mongolia;
