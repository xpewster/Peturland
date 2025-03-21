import Standalone from "./Standalone"
import underconstruction from '../../assets/88x31/construction.gif';
import DatedComponentList, { DatedComponent } from "../common/DatedComponentList";

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
    ];

    return <Standalone>
        <div style={{paddingLeft: '10px', paddingRight: '10px'}}>
            <DatedComponentList datedComponents={dateMapDescriptionPairs.reverse()}/>
        </div>
    </Standalone>;
}

export default TravelLog;
