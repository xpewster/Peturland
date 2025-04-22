import React, { useState } from 'react';
import GenericMapMarkerQuiz from '../../common/GenericMapMarkerQuiz';
import { CoordinateAnswerPair, SelectorType } from '../../common/constants';
import { QuizType } from '../../constants';
import { CAR_LABELS, CAR_SRCS, GEN3_CAR_INDICES, MONGOLIA_REGION_TO_441_HEIGHT_MAP, MONGOLIA_REGION_TO_MAP_SRC_MAP, REGION_TO_COORDINATE_ANSWER_PAIRS_MAP } from './constants';
import car from '../../../../../assets/fileboxicons/car.png';
import dots from '../../../../../assets/dots.png';
import { set } from 'lodash';
import { e } from 'react-router/dist/development/route-data-BmvbmBej';

const MongoliaCarMeta = (): React.ReactElement => {

    const CAR_IMAGE_DIMENSION = 150;

    const REGIONS = ["Around Ulaan", "Everything else"];

    const [currentRegion, setCurrentRegion] = useState<number>(1);
    const [enableGen3, setEnableGen3] = useState<boolean>(true);
    const [enableGen4, setEnableGen4] = useState<boolean>(true);
    
    /* ----------------- */

    function handleCheck(index: number) {
        setCurrentRegion(index);
        if (index === 0) {
            setEnableGen3(true);
            setEnableGen4(true);
        }
    }

    function changeSetting(index: number) {
        switch (index) {
            case 0:
                setEnableGen3(!enableGen3);
                break;
            case 1:
                setEnableGen4(!enableGen4);
                break;
        }
    }

    const getClickText = (): string => {
        return "Click on the right car for this road!";
    };

    const getMapSrc = (): string => {
        return MONGOLIA_REGION_TO_MAP_SRC_MAP.get(REGIONS[currentRegion])!;
    }

    const getCoordinateAnswerPairs = (): CoordinateAnswerPair[] => {
        let pairs: CoordinateAnswerPair[] = REGION_TO_COORDINATE_ANSWER_PAIRS_MAP.get(REGIONS[currentRegion])!;
        if (!enableGen3) {
            pairs = pairs.map((pair) => {
                if (Array.isArray(pair[1][0])) {
                    return [pair[0], [pair[1][0].filter((val: any) => !GEN3_CAR_INDICES.includes(val))]];
                } else {
                    return [pair[0], [!GEN3_CAR_INDICES.includes(pair[1][0]) ? pair[1][0] : undefined]];
                }
            });
        }
        if (!enableGen4) {
            pairs = pairs.map((pair) => {
                if (Array.isArray(pair[1][0])) {
                    return [pair[0], [pair[1][0].filter((val: any) => GEN3_CAR_INDICES.includes(val))]];
                } else {
                    return [pair[0], [GEN3_CAR_INDICES.includes(pair[1][0]) ? pair[1][0] : undefined]];
                }
            });
        }
        return pairs.filter(
            (pair) => {
                if (Array.isArray(pair[1][0])) {
                    return pair[1][0].length > 0;
                } else {
                    return pair[1][0] !== undefined;
                }
            }
        );
    }

    const getHeight = (): number => {
        return MONGOLIA_REGION_TO_441_HEIGHT_MAP.get(REGIONS[currentRegion])!;
    }

    return (
        <div>
            <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
                <p style={{paddingBottom: '12px'}}><span><img src={car} style={{verticalAlign: 'middle', paddingBottom: '4px'}} /> Mongolia Car Meta <img src={car} style={{verticalAlign: 'middle', paddingBottom: '4px'}} /> WIP!!</span></p>
                <img style={{position: 'absolute', left: '-2px', top: '111px'}} src={dots}></img>
                <div>
                    <p style={{marginBottom: '8px'}}>This particular quiz is only applicable for Geoguessr/Google Streetview!</p>
                </div>
                <img style={{position: 'absolute', left: '-2px', top: '153px'}} src={dots}></img>
                <div style={{marginBottom: '10px'}}>
                    Gen3<input type="checkbox" disabled={currentRegion === 0} onChange={() => {changeSetting(0)}} checked={enableGen3}></input>
                    Gen4<input type="checkbox" disabled={currentRegion === 0} onChange={() => {changeSetting(1)}} checked={enableGen4}></input>
                </div>
                {/* <img style={{position: 'absolute', left: '-2px', top: '181px'}} src={dots}></img> */}
                <div style={{marginBottom: '10px', paddingRight: '0px'}}>
                    {REGIONS[0]}<input type="checkbox" disabled={currentRegion === 0} onChange={() => {handleCheck(0)}} checked={currentRegion === 0}></input>
                    {REGIONS[1]}<input type="checkbox" disabled={currentRegion === 1} onChange={() => {handleCheck(1)}} checked={currentRegion === 1}></input>
                </div>
                <img style={{position: 'absolute', left: '-2px', top: '211px'}} src={dots}></img>
            </div>
            <GenericMapMarkerQuiz
                mapSrc={getMapSrc()}
                clickText={getClickText()}
                selectorType={SelectorType.MULTIPLE_CHOICE}
                coordinateAnswerPairs={getCoordinateAnswerPairs()}
                answerIndex={0}
                quizType={QuizType.MONG_CAR_META}
                disallowRepeats={true} 
                streakSuffix={`_${REGIONS[currentRegion]}`}
                multipleChoiceConfig={{
                    numChoices: 4,
                    itemHeight: CAR_IMAGE_DIMENSION,
                    srcs: CAR_SRCS,
                    choiceLabels: CAR_LABELS,
                    choicesZoomable: true,
                }}
                zoomable={currentRegion === 1}
                map441Height={getHeight()}
            />
        </div>
    );
};

export default MongoliaCarMeta;
