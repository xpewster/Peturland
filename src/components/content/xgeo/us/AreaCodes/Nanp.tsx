import React, { useState } from 'react';
import './../Us.css';
import './../../Xgeo.css';
import dots from '../../../../../assets/dots.png';
import canada from '../../../../../assets/canadamf.gif';
import GenericRegionSelectionQuiz from '../../common/GenericRegionSelectionQuiz';
import nanp from '../../../../../assets/geojsons/nanp.json';
import uscheat from '../../../../../assets/maps/us-area-code-map.png';
import canadacheat from '../../../../../assets/maps/canada-area-code-map.png';
import { getStreakKey } from '../../helpers';
import { MAP_COLOR, MAP_HOVER_COLOR, MAP_LAST_COLOR, QuizType } from '../../constants';
import { STATE_TO_REGION_BITFLAG, STATES } from '../constants';
import { AREA_CODE_INDEX_TO_REGION_INDICES, AREA_CODES, REGION_INDEX_TO_AREA_CODE_INDEX, REGION_INDEX_TO_AREA_CODE_INDICES_2, REGION_INDEX_TO_REGION_BITFLAG } from './constants';
import Mnemonic from './Mnemonic/Mnemonic';
import ZoomableImage from '../../../../common/ZoomableImage';


const Nanp = (): React.ReactElement => {

    const [enableRegion, setEnableRegion] = useState<boolean[]>([true, true, true, true, true, true, true]);
    const [showCheat, setShowCheat] = useState<boolean>(false);
    const [showCanada, setShowCanada] = useState<boolean>(false);

    /* ----------------- */

    function handleCheck(index: number) {
        const newEnableRegion = enableRegion.map((val, i) => {if (i === index) { return !val; } else { return val; }}); setEnableRegion(newEnableRegion);
    }

    const getText = (index: number): React.ReactElement => {
        return <span style={{textDecoration: 'underline', display: "inline"}}>{AREA_CODES[index]}</span>;
    }

    const getGeometryStyle = (key: string, lastItemKeys: string[] | undefined) => {
        const HIDDEN_ELEMENTS = ["geo-334", "geo-357", "geo-386"];
        if (HIDDEN_ELEMENTS.includes(key)) {
            return {
                default: { fill: MAP_COLOR, stroke: "#000000", outline: 'none', strokeWidth: '0.7px', opacity: 0, pointerEvents: 'none' },
                hover: { fill: MAP_HOVER_COLOR, stroke: "#000000", outline: 'none', strokeWidth: '0.7px'},
                pressed: { fill: "green", outline: 'none' },
            }
        }
        return {
            default: { fill: (lastItemKeys?.includes(key)) ? MAP_LAST_COLOR : MAP_COLOR, stroke: "#000000", outline: 'none', strokeWidth: '0.3px'},
            hover: { fill: MAP_HOVER_COLOR, stroke: "#000000", outline: 'none', strokeWidth: '0.3px'},
            pressed: { fill: "green", outline: 'none' },
        };
    }

    return (
        <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <p style={{paddingBottom: '10px'}}>North American Numbering Plan (Area Codes)</p>
            <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
            <div style={{paddingBottom: '5px', paddingRight: '0px'}}>
                <div>
                    Northeast<input type="checkbox" onChange={() => {handleCheck(0)}} checked={enableRegion[0]}></input>
                    Deep South<input type="checkbox" onChange={() => {handleCheck(1)}} checked={enableRegion[1]}></input>
                    Southwest<input type="checkbox" onChange={() => {handleCheck(2)}} checked={enableRegion[2]}></input>
                    West<input type="checkbox" onChange={() => {handleCheck(3)}} checked={enableRegion[3]}></input>
                    Midwest<input type="checkbox" onChange={() => {handleCheck(4)}} checked={enableRegion[4]}></input>
                </div>
                <div style={{paddingTop: '10px'}}>
                    <img style={{height: '15px'}} src={canada}></img> Canada<img style={{height: '15px'}} src={canada}></img><input type="checkbox" onChange={() => {handleCheck(5)}} checked={enableRegion[5]}></input>
                    U.S. Territories<input type="checkbox" onChange={() => {handleCheck(6)}} checked={enableRegion[6]}></input>
                </div> 
            </div>
            <img style={{position: 'absolute', left: '-2px', top: '166px'}} src={dots}></img>
            <div style={{paddingTop: '10px', marginBottom: '10px'}}>
                <GenericRegionSelectionQuiz
                    mapJsonSrc={nanp}
                    clickText={'Click on the right state/prov.!'}
                    regionIndexArray={STATES}
                    toFindIndexToAnswerIndicesArray={REGION_INDEX_TO_AREA_CODE_INDICES_2}
                    answerIndexToText={getText}
                    answerIndexToRegionIndices={AREA_CODE_INDEX_TO_REGION_INDICES}
                    streakKey={getStreakKey(QuizType.NA_AREA_CODES, enableRegion)}
                    disallowRepeats={true}
                    enableRegions={enableRegion}
                    regionsBitFlag={REGION_INDEX_TO_REGION_BITFLAG}
                    numLastItems={0}
                    sayWrongAnswer={true}
                    showAllWrong={true}
                    styleFunction={getGeometryStyle}
                    mapParameters={{
                        center: [-95.3, 38.5],
                        scale: 400,
                        zoom: 1.8,
                    }}
                    useMapWithInsets={true}
                    insetEnableIndex={6}
                />
            </div>
            <Mnemonic />
            <div style={{paddingTop: '12px'}}>
                <div style={{display: 'inline'}}>
                    Hide cheatsheet<input type="checkbox" onChange={() => {setShowCheat(!showCheat)}} checked={!showCheat}></input>
                    Canada <input type="checkbox" onChange={() => {setShowCanada(!showCanada)}} checked={showCanada}></input>
                </div>
                <div onScroll={(event) => { event.preventDefault(); }}>
                    <ZoomableImage src={showCanada ? canadacheat : uscheat} divProps={{border: 'dashed 1px black', width: '100%'}} imageStyleProps={{display: 'block', width: '100%', filter: showCheat ? '' : 'blur(8px)'}}/>
                </div>
                From <a href='https://www.allareacodes.com/' target="_blank" rel="noopener noreferrer">Plonkit</a>
            </div>
        </div>
    );
};

export default Nanp;
