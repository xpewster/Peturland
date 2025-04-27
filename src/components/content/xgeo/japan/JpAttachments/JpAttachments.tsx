import React, { useMemo, useState } from 'react';
import './../../Xgeo.css';
import dots from '../../../../../assets/dots.png';
import RegionSelectionQuiz from '../../common/RegionSelectionQuiz';
import jp from '../../../../../assets/geojsons/prefectures.json';
import { getStreakKey } from '../../helpers';
import { QuizType } from '../../constants';
import { ATTACHMENT_INDEX_TO_PREFECTURE_INDEX, ATTACHMENTS, HIGHLIGHT_GROUPS, PREFECTURE_INDEX_TO_ATTACHMENT_INDEX } from './constants';
import { JAPAN_PREFECTURES_BITFLAG } from '../constants';
import MultipleChoiceQuiz from '../../common/MultipleChoiceQuiz';
import { PREFECTURE_REGIONS, PREFECTURES } from '../Prefectures/constants';
import totoro from '../../../../../assets/gifs/Totoro.gif';



const JpPoleAttachments = (): React.ReactElement => {

    const [enableRegion, setEnableRegion] = useState<boolean[]>(Array(18).fill(true));
    const [enablePoletops, setEnablePoletops] = useState<boolean>(true);
    const [enableTransformers, setEnableTransformers] = useState<boolean>(true);
    const [enableMiscellaneousAttachments, setEnableMiscellaneousAttachments] = useState<boolean>(true);

    /* ----------------- */

    function changeSetting(index: number) {
        switch (index) {
            case 0:
                setEnablePoletops(!enablePoletops);
                break;
            case 1:
                setEnableTransformers(!enableTransformers);
                break;
            case 2:
                setEnableMiscellaneousAttachments(!enableMiscellaneousAttachments);
                break;
        }
    }

    const filteredList = useMemo(() => {
        return PREFECTURE_INDEX_TO_ATTACHMENT_INDEX.map((attachmentIndices: number[]) => {
            return attachmentIndices.filter((index: number) => {
                if (enableMiscellaneousAttachments && index >= 0 && index <= 4) {
                    return true;
                }
                if (enablePoletops && index >= 5 && index <= 15) {
                    return true;
                }
                if (enableTransformers && index >= 16) {
                    return true;
                }
            });
        });
    }, [enablePoletops, enableTransformers, enableMiscellaneousAttachments]);

    const getAttachmentImageSrc = (index: number): string => {
        return ATTACHMENTS[index];
    }

    return (
        <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <p style={{paddingBottom: '10px'}}>Japanese Pole Attachments</p>
            <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
            <div>
                <div>
                    Poletops<input type="checkbox" onChange={() => {changeSetting(0)}} checked={enablePoletops}></input>
                    Transformers<input type="checkbox" onChange={() => {changeSetting(1)}} checked={enableTransformers}></input>
                    Miscellaneous attachments<input type="checkbox" onChange={() => {changeSetting(2)}} checked={enableMiscellaneousAttachments}></input>
                </div>
            </div>
            <img style={{position: 'absolute', left: '-2px', top: '136px'}} src={dots}></img>
            <div style={{paddingTop: '10px'}}>
                <RegionSelectionQuiz
                    mapJsonSrc={jp}
                    clickText={'Click on the right region!'}
                    regionIndexArray={PREFECTURE_REGIONS}
                    toFindIndexToAnswerIndicesArray={filteredList}
                    answerIndexToRegionIndices={ATTACHMENT_INDEX_TO_PREFECTURE_INDEX}
                    answerIndexToSrc={getAttachmentImageSrc}
                    streakKey={getStreakKey(QuizType.JAPAN_POLE_ATTACHMENTS, [enableMiscellaneousAttachments, enableTransformers, enablePoletops])}
                    disallowRepeats={true}
                    enableRegions={enableRegion}
                    regionsBitFlag={JAPAN_PREFECTURES_BITFLAG}
                    numLastItems={5}
                    itemHeight={150}
                    mapParameters={{scale: 1600, center: [138, 38]}}
                    highlightGroups={HIGHLIGHT_GROUPS}
                    dashedBorder={true}
                />
            </div>
            <p>Credit to <a href='https://www.plonkit.net/japan' target="_blank" rel="noopener noreferrer">Plonkit</a> and <a href='https://docs.google.com/document/d/14rmfw7gU5L_4S43ED1ixEamZ1acZ0P0DWnYntVIc2F8/edit?tab=t.0' target="_blank" rel="noopener noreferrer">@dazainlh</a> for the images</p>
            <img alt='Totoro' style={{position: 'absolute', top: '486px', left: '-200px', zIndex: -5, pointerEvents: 'none', opacity: '0.9'}} src={totoro}></img>
        </div>
    );
};

export default JpPoleAttachments;
