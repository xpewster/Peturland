import React, { useState } from 'react';
import './../../Xgeo.css';
import dots from '../../../../../assets/dots.png';
import GenericRegionSelectionQuiz from '../../common/GenericRegionSelectionQuiz';
import kabu from '../../../../../assets/geojsons/indo_kabu5.json';
import { getStreakKey } from '../../helpers';
import { MAP_COLOR, MAP_HOVER_COLOR, QuizType } from '../../constants';
import { KABUPATEN, KABUPATEN_INDEX_TO_BITFLAG, REGION_INDEX_TO_KABUPATEN_INDEX } from './constants';


const Kabupaten = (): React.ReactElement => {

    const [enableRegion, setEnableRegion] = useState<boolean[]>(Array(34).fill(true));

    /* ----------------- */

    function handleCheck(index: number) {
        const newEnableRegion = enableRegion.map((val, i) => {if (i === index) { return !val; } else { return val; }}); setEnableRegion(newEnableRegion);
    }

    const getText = (index: number): React.ReactElement => {
        return <span style={{textDecoration: 'underline', display: "inline"}}>{KABUPATEN[index]}</span>;
    }

    const getGeometryStyle = (key: string) => {
        return {
            default: { fill: MAP_COLOR, stroke: "#000000", outline: 'none', strokeWidth: '0.3px' },
            hover: { fill: MAP_HOVER_COLOR, stroke: "#000000", outline: 'none', strokeWidth: '0.3px' },
            pressed: { fill: "green", outline: 'none' },
        };
    }

    return (
        <div style={{height: '100%', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
            <p style={{paddingBottom: '10px'}}>Kabupaten (Regencies)</p>
            <img style={{position: 'absolute', left: '-2px', top: '106px'}} src={dots}></img>
            <div style={{marginBottom: '20px', paddingRight: '0px'}}>
                <div>
                    Aceh<input type="checkbox" onChange={() => {handleCheck(0)}} checked={enableRegion[0]}></input>
                    North Sumatra<input type="checkbox" onChange={() => {handleCheck(1)}} checked={enableRegion[1]}></input>
                    West Sumatra<input type="checkbox" onChange={() => {handleCheck(2)}} checked={enableRegion[2]}></input>
                    Riau<input type="checkbox" onChange={() => {handleCheck(3)}} checked={enableRegion[3]}></input>
                    Riau Islands<input type="checkbox" onChange={() => {handleCheck(4)}} checked={enableRegion[4]}></input>
                    Jambi<input type="checkbox" onChange={() => {handleCheck(5)}} checked={enableRegion[5]}></input>
                    Bengkulu<input type="checkbox" onChange={() => {handleCheck(6)}} checked={enableRegion[6]}></input>
                    South Sumatra<input type="checkbox" onChange={() => {handleCheck(7)}} checked={enableRegion[7]}></input>
                    Bangka Belitung Islands<input type="checkbox" onChange={() => {handleCheck(8)}} checked={enableRegion[8]}></input>
                    Lampung<input type="checkbox" onChange={() => {handleCheck(9)}} checked={enableRegion[9]}></input>
                </div>
                <img style={{position: 'absolute', left: '-2px', top: '176px'}} src={dots}></img>
                <div style={{paddingTop: '10px'}}>
                    Banten<input type="checkbox" onChange={() => {handleCheck(10)}} checked={enableRegion[10]}></input>
                    Jakarta<input type="checkbox" onChange={() => {handleCheck(11)}} checked={enableRegion[11]}></input>
                    West Java<input type="checkbox" onChange={() => {handleCheck(12)}} checked={enableRegion[12]}></input>
                    Central Java<input type="checkbox" onChange={() => {handleCheck(13)}} checked={enableRegion[13]}></input>
                    Yogyakarta<input type="checkbox" onChange={() => {handleCheck(14)}} checked={enableRegion[14]}></input>
                    East Java<input type="checkbox" onChange={() => {handleCheck(15)}} checked={enableRegion[15]}></input>
                </div>
                <img style={{position: 'absolute', left: '-2px', top: '226px'}} src={dots}></img>
                <div style={{paddingTop: '10px'}}>
                    Bali<input type="checkbox" onChange={() => {handleCheck(16)}} checked={enableRegion[16]}></input>
                    West Nusa Tenggara<input type="checkbox" onChange={() => {handleCheck(17)}} checked={enableRegion[17]}></input>
                    East Nusa Tenggara<input type="checkbox" onChange={() => {handleCheck(18)}} checked={enableRegion[18]}></input>
                </div>
                <img style={{position: 'absolute', left: '-2px', top: '256px'}} src={dots}></img>
                <div style={{paddingTop: '10px'}}>
                    West Kalimantan<input type="checkbox" onChange={() => {handleCheck(19)}} checked={enableRegion[19]}></input>
                    Central Kalimantan<input type="checkbox" onChange={() => {handleCheck(20)}} checked={enableRegion[20]}></input>
                    South Kalimantan<input type="checkbox" onChange={() => {handleCheck(21)}} checked={enableRegion[21]}></input>
                    East Kalimantan<input type="checkbox" onChange={() => {handleCheck(22)}} checked={enableRegion[22]}></input>
                    North Kalimantan<input type="checkbox" onChange={() => {handleCheck(23)}} checked={enableRegion[23]}></input>
                </div>
                <img style={{position: 'absolute', left: '-2px', top: '306px'}} src={dots}></img>
                <div style={{paddingTop: '10px'}}>
                    West Sulawesi<input type="checkbox" onChange={() => {handleCheck(24)}} checked={enableRegion[24]}></input>
                    South Sulawesi<input type="checkbox" onChange={() => {handleCheck(25)}} checked={enableRegion[25]}></input>
                    Central Sulawesi<input type="checkbox" onChange={() => {handleCheck(26)}} checked={enableRegion[26]}></input>
                    Southeast Sulawesi<input type="checkbox" onChange={() => {handleCheck(27)}} checked={enableRegion[27]}></input>
                    Gorontalo<input type="checkbox" onChange={() => {handleCheck(28)}} checked={enableRegion[28]}></input>
                    North Sulawesi<input type="checkbox" onChange={() => {handleCheck(29)}} checked={enableRegion[29]}></input>
                </div>
                <img style={{position: 'absolute', left: '-2px', top: '356px'}} src={dots}></img>
                <div style={{paddingTop: '10px'}}>
                    Maluku<input type="checkbox" onChange={() => {handleCheck(30)}} checked={enableRegion[30]}></input>
                    Papua<input type="checkbox" onChange={() => {handleCheck(31)}} checked={enableRegion[31]}></input>
                </div>
                <img style={{position: 'absolute', left: '-2px', top: '386px'}} src={dots}></img>
            </div>
            <div style={{paddingTop: '10px'}}>
                <GenericRegionSelectionQuiz
                    mapJsonSrc={kabu}
                    clickText={'Click on the right kabupaten!'}
                    regionIndexArray={KABUPATEN}
                    toFindIndexToAnswerIndicesArray={REGION_INDEX_TO_KABUPATEN_INDEX}
                    answerIndexToText={getText}
                    streakKey={getStreakKey(QuizType.INDONESIA_KABUPATEN, enableRegion)}
                    disallowRepeats={true}
                    enableRegions={enableRegion}
                    regionsBitFlag={KABUPATEN_INDEX_TO_BITFLAG}
                    numLastItems={0}
                    mapParameters={{scale: 800, center: [117, -3]}}
                    styleFunction={getGeometryStyle}
                />
            </div>
        </div>
    );
};

export default Kabupaten;
