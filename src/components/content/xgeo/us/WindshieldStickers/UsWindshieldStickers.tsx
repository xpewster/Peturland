import React, { useEffect, useState } from 'react';
import dots from '../../../../../assets/dots.png';
import GenericRegionSelectionQuiz from '../../common/GenericRegionSelectionQuiz';
import usa from '../../../../../assets/geojsons/mergedfile2_goodcopy.json';
import { getStreakKey } from '../../helpers';
import { QuizType } from '../../constants';
import { STATE_TO_REGION_BITFLAG, STATES } from '../constants';
import { REGION_INDEX_TO_STICKER_INDEX, STICKER_ENABLE_RAND_COLOR, STICKERS } from './constants';


const UsWindshieldStickers = (): React.ReactElement => {

    const [enableRandColor, setEnableRandColor] = useState<boolean>(true);
    const [enableDistort, setEnableDistort] = useState<boolean>(false);
    const [enableRegion, setEnableRegion] = useState<boolean[]>([true, true, true, true, true, false, false, false]);

    function changeSetting(index: number) {
        switch (index) {
            case 0:
                setEnableRandColor(!enableRandColor);
                break;
            case 1:
                setEnableDistort(!enableDistort);
                break;
        }
    }

    const getStickerImage = (index: number): any => {
        return STICKERS[index];
    }

    return (
        <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <p style={{paddingBottom: '10px'}}>Registration/Inspection Windshield Stickers</p>
            <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
            <div>
                <div>
                    Random color<input type="checkbox" onChange={() => {changeSetting(0)}} checked={enableRandColor}></input>
                    Random angle<input type="checkbox" onChange={() => {changeSetting(1)}} checked={enableDistort}></input>
                </div>
            </div>
            <img style={{position: 'absolute', left: '-2px', top: '136px'}} src={dots}></img>
            <div style={{paddingTop: '10px'}}>
                <GenericRegionSelectionQuiz
                    mapJsonSrc={usa}
                    clickText={'Click on the right state!'}
                    regionIndexArray={STATES}
                    toFindIndexToAnswerIndicesArray={REGION_INDEX_TO_STICKER_INDEX}
                    answerIndexToSrc={getStickerImage}
                    streakKey={getStreakKey(QuizType.US_WINDSHIELD_STICKERS, [])}
                    disallowRepeats={true}
                    enableSkew={enableDistort}
                    enableRandColor={enableRandColor}
                    randColorEnabledIndices={STICKER_ENABLE_RAND_COLOR}
                    enableRegions={enableRegion}
                    regionsBitFlag={STATE_TO_REGION_BITFLAG}
                    itemHeight={75}
                    numLastItems={10}
                />
            </div>
        </div>
    );
};

export default UsWindshieldStickers;
