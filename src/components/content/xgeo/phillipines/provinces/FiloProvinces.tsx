import React, { useState } from 'react';
import './../../Xgeo.css';
import dots from '../../../../../assets/dots.png';
import GenericRegionSelectionQuiz from '../../common/GenericRegionSelectionQuiz';
import prov from '../../../../../assets/geojsons/phl_provs2.json';
import { getStreakKey } from '../../helpers';
import { MAP_COLOR, MAP_HOVER_COLOR, MAP_LAST_COLOR, QuizType } from '../../constants';
import { PROVINCE_BITFLAG, PROVINCES, REGION_INDEX_TO_PROVINCE_INDEX } from './constants';


const FiloProvinces = (): React.ReactElement => {

    const [enableRegion, setEnableRegion] = useState<boolean[]>(Array(18).fill(true));
    const [allEnable, setAllEnable] = useState<boolean>(true);

    /* ----------------- */

    function handleCheck(index: number) {
        const newEnableRegion = enableRegion.map((val, i) => {if (i === index) { return !val; } else { return val; }}); setEnableRegion(newEnableRegion);
    }

    const getText = (index: number): React.ReactElement => {
        return <span style={{textDecoration: 'underline', display: "inline"}}>{PROVINCES[index]}</span>;
    }

    const getGeometryStyle = (key: string, lastItemKeys: string[] | undefined) => {
        const SMALL_REGIONS = ['geo-61', 'geo-62', 'geo-63', 'geo-64'];
        return {
            default: { fill: (lastItemKeys?.includes(key)) ? MAP_LAST_COLOR : MAP_COLOR, stroke: "#000000", outline: 'none', strokeWidth: SMALL_REGIONS.includes(key) ? '0.5px' : undefined },
            hover: { fill: MAP_HOVER_COLOR, stroke: "#000000", outline: 'none', strokeWidth: SMALL_REGIONS.includes(key) ? '0.5px' : undefined },
            pressed: { fill: "green", outline: 'none' },
        };
    }

    return (
        <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <p style={{paddingBottom: '10px'}}>Filo primary-level subdivisions</p>
            <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
            <div style={{marginBottom: '20px', paddingRight: '0px'}}>
                <div>
                    Illocos<input type="checkbox" onChange={() => {handleCheck(0)}} checked={enableRegion[0]}></input>
                    Cordillera A.R.<input type="checkbox" onChange={() => {handleCheck(13)}} checked={enableRegion[13]}></input>
                    Cagayan Valley<input type="checkbox" onChange={() => {handleCheck(1)}} checked={enableRegion[1]}></input>
                    Central Luzon<input type="checkbox" onChange={() => {handleCheck(2)}} checked={enableRegion[2]}></input>
                    Calabarzon<input type="checkbox" onChange={() => {handleCheck(3)}} checked={enableRegion[3]}></input>
                    Bicol Region<input type="checkbox" onChange={() => {handleCheck(4)}} checked={enableRegion[4]}></input>
                    National Capital Region<input type="checkbox" onChange={() => {handleCheck(12)}} checked={enableRegion[12]}></input>
                </div>
                <img style={{position: 'absolute', left: '-2px', top: '156px'}} src={dots}></img>
                <div style={{paddingTop: '10px'}}>
                    Mimaropa<input type="checkbox" onChange={() => {handleCheck(15)}} checked={enableRegion[15]}></input>
                    Western Visayas<input type="checkbox" onChange={() => {handleCheck(5)}} checked={enableRegion[5]}></input>
                    Central Visayas<input type="checkbox" onChange={() => {handleCheck(6)}} checked={enableRegion[6]}></input>
                    Eastern Visayas<input type="checkbox" onChange={() => {handleCheck(7)}} checked={enableRegion[7]}></input>
                </div>
                <img style={{position: 'absolute', left: '-2px', top: '206px'}} src={dots}></img>
                <div style={{paddingTop: '10px'}}>
                    Zamboanga Peninsula<input type="checkbox" onChange={() => {handleCheck(8)}} checked={enableRegion[8]}></input>
                    Northern Mindanao<input type="checkbox" onChange={() => {handleCheck(9)}} checked={enableRegion[9]}></input>
                    Caraga<input type="checkbox" onChange={() => {handleCheck(14)}} checked={enableRegion[14]}></input>
                    BARMM<input type="checkbox" onChange={() => {handleCheck(16)}} checked={enableRegion[16]}></input>
                    Soccsksargen<input type="checkbox" onChange={() => {handleCheck(11)}} checked={enableRegion[11]}></input>
                    Davao Region<input type="checkbox" onChange={() => {handleCheck(10)}} checked={enableRegion[10]}></input>
                </div>
                <img style={{position: 'absolute', left: '-2px', top: '256px'}} src={dots}></img>
                <div style={{paddingTop: '12px'}}>
                    <button onClick={() => {setAllEnable(!allEnable); setEnableRegion(Array(34).fill(!allEnable));}}>{allEnable ? 'Unselect All' : 'Select All'}</button>
                </div>
            </div>
            <div style={{paddingTop: '10px'}}>
                <GenericRegionSelectionQuiz
                    mapJsonSrc={prov}
                    clickText={'Click on the right province!'}
                    regionIndexArray={PROVINCES}
                    toFindIndexToAnswerIndicesArray={REGION_INDEX_TO_PROVINCE_INDEX}
                    answerIndexToText={getText}
                    streakKey={getStreakKey(QuizType.PHILLIPINES_PROVINCES, enableRegion)}
                    disallowRepeats={true}
                    enableRegions={enableRegion}
                    regionsBitFlag={PROVINCE_BITFLAG}
                    numLastItems={0}
                    sayWrongAnswer={true}
                    mapParameters={{scale: 2000, center: [122, 11]}}
                    styleFunction={getGeometryStyle}
                />
            </div>
        </div>
    );
};

export default FiloProvinces;
