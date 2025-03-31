import Standalone from "./Standalone"
import DatedComponentList, { DatedComponent } from "../common/DatedComponentList";
import globe from '../../assets/gifs/globe.gif';

import m03202025 from '../../assets/travellog/03202025.png';
import world03202025 from '../../assets/travellog/03202025_world.png';

import ZoomableImage from "../common/ZoomableImage";
import ScrollingDisabler from "../common/ScrollingDisabler";

export const TravelLog = (): React.ReactElement => {

    const dateMapDescriptionPairs: DatedComponent[] = [
        [
            '03-20-2025',
            <div style={{display: 'block', height: '400px'}}><div style={{float: 'left'}}><ScrollingDisabler><ZoomableImage src={m03202025} imageStyleProps={{height: '400px'}} divProps={undefined}></ZoomableImage></ScrollingDisabler></div><div style={{float: 'left'}}><ScrollingDisabler><ZoomableImage src={world03202025} imageStyleProps={{height: '400px'}} divProps={undefined}></ZoomableImage></ScrollingDisabler></div></div>,
            "Hoping to add some eastern and great plains states soon :). Also going back to Japan in May!"
        ],
        [
            'Best cities',
            <></>,
            "Da Nang\nOsaka\nSan Diego\nSeattle\nNYC"
        ],
        [
            'Favorite places so far',
            <></>,
            "\nMt. Fitz Roy montane forests. Minus the caterpillars and leg cramps\nHomestead overlook over Capitol Reef NP\nSteens Mountain\nZumwalt Prairie\nColumbia Plateau\nHa Long Bay"
        ],
    ];

    return <Standalone>
        <div style={{paddingLeft: '10px', paddingRight: '10px', position: 'relative'}}>
            <DatedComponentList datedComponents={dateMapDescriptionPairs.reverse()}/>
            <img src={globe} style={{position: 'absolute', top: '50px', left: '500px'}}></img>
        </div>
    </Standalone>;
}

export default TravelLog;
