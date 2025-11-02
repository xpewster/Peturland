import Standalone from "./Standalone"
import DatedComponentList, { DatedComponent } from "../common/DatedComponentList";
import globe from '../../assets/gifs/globe.gif';

import m03202025 from '../../assets/travellog/03202025.png';
import world03202025 from '../../assets/travellog/03202025_world.png';
import world06282025 from '../../assets/travellog/06282025_world.png';
import m11012025 from '../../assets/travellog/11012025.png';
import world11012025 from '../../assets/travellog/11012025_world.png';

import ZoomableImage from "../common/ZoomableImage";
import ScrollingDisabler from "../common/ScrollingDisabler";
import Spoiler from "../common/Spoiler";

export const TravelLog = (): React.ReactElement => {

    const getImageBlock = (src1: string, src2: string, latest?: boolean): React.ReactElement => {
        if (latest) {
            return <div style={{display: 'inline-block'}}>
                <div style={{float: 'left'}}>
                    <ScrollingDisabler>
                        <ZoomableImage src={src1} imageStyleProps={{height: '400px'}} divProps={undefined}></ZoomableImage>
                    </ScrollingDisabler>
                </div>
                <div style={{float: 'left'}}>
                    <ScrollingDisabler>
                        <ZoomableImage src={src2} imageStyleProps={{height: '400px'}} divProps={undefined}></ZoomableImage>
                    </ScrollingDisabler>
                </div>
            </div>;
        } else {
            return <Spoiler hiddenText="Load maps" oneAndDone>
                <div style={{display: 'inline-block'}}>
                    <div style={{float: 'left'}}>
                        <ScrollingDisabler>
                            <ZoomableImage src={src1} imageStyleProps={{height: '400px'}} divProps={undefined}></ZoomableImage>
                        </ScrollingDisabler>
                    </div>
                    <div style={{float: 'left'}}>
                        <ScrollingDisabler>
                            <ZoomableImage src={src2} imageStyleProps={{height: '400px'}} divProps={undefined}></ZoomableImage>
                        </ScrollingDisabler>
                    </div>
                </div>
            </Spoiler>;
        }
    }

    const dateMapDescriptionPairs: DatedComponent[] = [
        [
            '03-20-2025',
            getImageBlock(m03202025, world03202025),
            "Hoping to add some eastern and great plains states soon :). Also going back to Japan in May!"
        ],
        [
            '06-28-2025',
            getImageBlock(m03202025, world06282025),
            "Back from Japan. It was MID. For one, I got sick, but honestly there are just way too many people there nowadays. Best part is still the food. My hot take is that if you're white and don't have a deep interest in some facet of japanese culture...why are you there?? I also included a few provinces in Vietnam that I forgot to include before. Apparently I did a road trip from Saigon to Nha Trang when I was a kid but forgot.."
        ],
        [
            '11-01-2025',
            getImageBlock(m11012025, world11012025, true),
            "Did a road trip with the fam to Canada recently! We drove up to Squamish which was so incredibly beautiful."
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
