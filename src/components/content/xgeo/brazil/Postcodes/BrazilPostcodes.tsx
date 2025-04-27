import React, { useEffect, useState } from 'react';
import brazil_cep from '../../../../../assets/geojsons/bcep.json';
import {  MAP_COLOR, MAP_HOVER_COLOR, MAP_LAST_COLOR, QuizType } from '../../constants';
import { getStreakKey } from '../../helpers';
import { REGION_INDEX_TO_POSTCODE_PREFIX_BITFLAG, POSTCODES, REGION_INDEX_TO_POSTCODE_INDEX, POSTCODE_TO_REGION_INDICES, STATE_COLORS } from './constants';
import dots from '../../../../../assets/dots.png';
import brazilcheat from '../../../../../assets/maps/cepcodes.png';
import ZoomableImage from '../../../../common/ZoomableImage';
import ScrollingDisabler from '../../../../common/ScrollingDisabler';
import RegionSelectionQuiz from '../../common/RegionSelectionQuiz';

const BrazilPostcodes = (): React.ReactElement => {
    const [enablePrefix, setEnablePrefix] = useState<boolean[]>(Array(10).fill(true));
    const [enableStates, setEnableStates] = useState<boolean>(true);
    const [enableBorders, setEnableBorders] = useState<boolean>(true);
    const [showCheat, setShowCheat] = useState<boolean>(false);

    function handleCheck(index: number) {
        const newEnablePrefix = enablePrefix.map((val, i) => {if (i === index) { return !val; } else { return val; }}); setEnablePrefix(newEnablePrefix);
    }

    function changeSetting(index: number) {
        switch (index) {
            case 0:
                setEnableStates(!enableStates);
                break;
            case 1:
                setEnableBorders(!enableBorders);
                break;
            case 2:
                setShowCheat(!showCheat);
                break;
        }
    }

    function getCellColor(key: string): string {
        if (enableStates) {
            const index = Number(key.split("-")[1]);
            return STATE_COLORS[index];
        }
        return MAP_COLOR;
    }

    function getStrokeWidth(key: string): string {
        const num = Number(key.split("-")[1])
        if (num < 10) {
            if (num > 8) {
                return "0.7px"
            }
            return "0.8px";
        } else if (num >= 80 && num < 83) {
            return "0.6px";
        }
        return "1px";
    }

    function getStrokeWidthBEnabled(key: string): string {
        const num = Number(key.split("-")[1])
        const pc = Number(POSTCODES[REGION_INDEX_TO_POSTCODE_INDEX[num][0]]);
        if (pc < 10) {
            if (pc > 8) {
                return "0.7px"
            }
            return "0.8px";
        } else if ((pc >= 80 && pc < 83) || (pc >= 50 && pc < 55)) {
            return "0.6px";
        }
        return "1px";
    }

    const getGeometryStyle = (key: string, lastItemKeys: string[] | undefined) => {
        return {
            default: { fill: (lastItemKeys?.includes(key)) ? MAP_LAST_COLOR : getCellColor(key), stroke: enableBorders ? "#000000" : getCellColor(key), strokeWidth: enableBorders ? getStrokeWidthBEnabled(key) : getStrokeWidth(key), outline: 'none' },
            hover: { fill:  enableBorders ? MAP_HOVER_COLOR : getCellColor(key), stroke: enableBorders ? "#000000" : getCellColor(key), strokeWidth: enableBorders ? getStrokeWidthBEnabled(key) : getStrokeWidth(key), outline: 'none' },
            pressed: { fill: "green", outline: 'none' },
        };
    };

    return (
        <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <p style={{paddingBottom: '10px'}}>Bra71l post code prefixes (CEP)</p>
            <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
            <div>
                Show states (Minus Amazonian states and D.F.)<input type="checkbox" onChange={() => {changeSetting(0)}} checked={enableStates}></input>&nbsp;&nbsp;&nbsp;&nbsp;
                Show area borders<input type="checkbox" onChange={() => {changeSetting(1)}} checked={enableBorders}></input>
            </div>
            <div style={{paddingBottom: '12px'}}>
                0<input type="checkbox" onChange={() => {handleCheck(0)}} checked={enablePrefix[0]}></input>
                1<input type="checkbox" onChange={() => {handleCheck(1)}} checked={enablePrefix[1]}></input>
                2<input type="checkbox" onChange={() => {handleCheck(2)}} checked={enablePrefix[2]}></input>
                3<input type="checkbox" onChange={() => {handleCheck(3)}} checked={enablePrefix[3]}></input>
                4<input type="checkbox" onChange={() => {handleCheck(4)}} checked={enablePrefix[4]}></input>
                5<input type="checkbox" onChange={() => {handleCheck(5)}} checked={enablePrefix[5]}></input>
                6<input type="checkbox" onChange={() => {handleCheck(6)}} checked={enablePrefix[6]}></input>
                7<input type="checkbox" onChange={() => {handleCheck(7)}} checked={enablePrefix[7]}></input>
                8<input type="checkbox" onChange={() => {handleCheck(8)}} checked={enablePrefix[8]}></input>
                9<input type="checkbox" onChange={() => {handleCheck(9)}} checked={enablePrefix[9]}></input>
            </div>
            <img style={{position: 'absolute', left: '-2px', top: '175px'}} src={dots}></img>
            <RegionSelectionQuiz
                mapJsonSrc={brazil_cep}
                clickText={'Click on the right postcode region!'}
                regionIndexArray={POSTCODES}
                toFindIndexToAnswerIndicesArray={REGION_INDEX_TO_POSTCODE_INDEX}
                answerIndexToRegionIndices={POSTCODE_TO_REGION_INDICES}
                answerIndexToText={(index: number) => {return <span style={{textDecoration: 'underline', display: "inline"}}>{POSTCODES[index]}</span>}}
                streakKey={getStreakKey(QuizType.BRAZIL_POSTCODES, enablePrefix)}
                disallowRepeats={true}
                numLastItems={0}
                sayWrongAnswer={true}
                mapParameters={{scale: 800, center: [-55, -15]}}
                enableRegions={enablePrefix}
                regionsBitFlag={REGION_INDEX_TO_POSTCODE_PREFIX_BITFLAG}
                styleFunction={getGeometryStyle}
            />
            <div style={{paddingTop: '12px'}}>
                <div style={{paddingTop: '40px'}}>
                    <div style={{display: 'inline'}}>
                        Hide cheatsheet<input type="checkbox" onChange={() => {changeSetting(2)}} checked={!showCheat}></input> Note the image doesn't show certain CEP's that are bunched up in big cities. You can find these as they in the biggest city nearby other regions with the same prefix!
                    </div>
                </div>
                <div onScroll={(event) => { event.preventDefault(); }}>
                    <ZoomableImage src={brazilcheat} divProps={{border: 'dashed 1px black', width: '80%'}} imageStyleProps={{display: 'block', width: '100%', filter: showCheat ? '' : 'blur(8px)'}}/>
                </div>
                From <a href='https://www.plonkit.net/brazil' target="_blank" rel="noopener noreferrer">Plonkit</a>
            </div>
        </div>
    );
};

export default BrazilPostcodes;
