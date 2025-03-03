import React, { useState } from 'react';
import { STATE_NAMES, TERRITORY_NAMES } from '../constants';
import { PLATE_STATE, PLATE_TUPLE, PLATE_TYPE, PLATES } from './constants';
import { preloadImage } from '../../../../common/preloadImage';

export interface PlateProps {
    state?: STATE_NAMES | TERRITORY_NAMES;
    type?: PLATE_TYPE;
    vanityOrOldIndex?: number;
    show?: boolean;
    blur?: number;
    showYears?: boolean;
    tuple?: PLATE_TUPLE;
    rsc?: string;
    rsc2?: string;
}

const Plate = (props: PlateProps): React.ReactElement => {
    const [plate, setPlate] = useState<PLATE_TUPLE | undefined>(undefined);
    const index2 = Math.floor(Math.random() * 1000);

    const preloadPlate = (tuple: PLATE_TUPLE) => {
        preloadImage(tuple[0]);
        preloadImage(tuple[1]);
        preloadImage(tuple[2]);
    }

    const choosePlate = (tuple: PLATE_TUPLE, state: PLATE_STATE): string => {
        if (tuple !== plate) {
            setPlate(tuple);
            preloadPlate(tuple);
            return tuple[state];
        }
        return plate[state];
    }

    const getSrc = (): string => {
        let state;
        if (props.blur) {
            state = PLATE_STATE.BLUR;
        } else if (props.show) {
            state = PLATE_STATE.SHOW;
        } else {
            state = PLATE_STATE.BLANK;
        }
        if (props.tuple) {
            return choosePlate(props.tuple, state);
        }

        const state_plates = PLATES.get(props.state!)!;

        switch(props.type) {
            default:
            case PLATE_TYPE.REGULAR:
                const reg_plates = state_plates.get(PLATE_TYPE.REGULAR)!;
                return choosePlate(reg_plates[(props.vanityOrOldIndex ?? 0) % reg_plates.length], state);
            case PLATE_TYPE.OLD:
                const old_plates = state_plates.get(PLATE_TYPE.OLD) ?? [];
                if (!old_plates.length) {
                    return choosePlate(state_plates.get(PLATE_TYPE.REGULAR)![0], state);
                }
                return choosePlate(old_plates![(props.vanityOrOldIndex ?? 0) % old_plates.length], state);
            case PLATE_TYPE.VANITY:
                return choosePlate(state_plates.get(PLATE_TYPE.REGULAR)![0], state); // Todo: impl
        }
    }

    return (
        <div className='plate'>
            {props.blur ?
                <>
                    <svg style={{position: 'absolute', width: '150px', height: '75px', opacity: '0.2'}} viewBox='0 0 150 75'>
                        <filter x="0%" y="0%" width="100%" height="100%" id="turb">
                            <feTurbulence
                                type='fractalNoise'
                                baseFrequency={0.4}
                                numOctaves={1}
                            >
                            </feTurbulence>
                        </filter>
                        <image href={getSrc()} xlinkHref={getSrc()} x="0" y="0" width="100%" height="100%" filter='url(#turb)'></image>
                    </svg>
                    <svg viewBox='0 0 150 75'>
                        <filter id="rs" x="0" y="0" width="100%" height="100%">
                            <feFlood
                                result="floodFill"
                                x={`${plate ? (plate[3].length >= 6 ? (index2 % 2 === 0 ? plate[3][4] : plate[3][0]) : plate[3][0]) : 0}%`}
                                y={`${plate ? (plate[3].length >= 6 ? (index2 % 2 === 0 ? plate[3][5] : plate[3][1]) : plate[3][1]) : 0}%`}
                                width={`${plate ? (plate[3].length >= 6 ? (index2 % 2 === 0 ? plate[3][2] : plate[3][2]) : plate[3][2]) : 0}%`}
                                height={`${plate ? (plate[3].length >= 6 ? (index2 % 2 === 0 ? plate[3][3] : plate[3][3]) : plate[3][3]) : 0}%`}
                                floodColor={props.rsc ?? 'red'}
                                floodOpacity="0.3"
                            />
                            <feBlend in2="SourceGraphic" in="floodFill" mode="normal" />
                        </filter>
                        {(plate && plate[3].length === 8) ? <filter id="rs2" x="0" y="0" width="100%" height="100%">
                            <feFlood
                                result="floodFill"
                                x={`${plate ? plate[3][6] : 0}%`}
                                y={`${plate ? plate[3][7] : 0}%`}
                                width={`${plate ? plate[3][2] : 0}%`}
                                height={`${plate ? plate[3][3] : 0}%`}
                                floodColor={props.rsc2 ?? 'white'}
                                floodOpacity="0.3"
                            />
                            <feBlend in2="SourceGraphic" in="floodFill" mode="normal" />
                        </filter> : <></>}
                        <filter x="0%" y="0%" width="100%" height="100%" id="noise">
                            <feGaussianBlur
                                stdDeviation={(props.blur ?? 0) / 1.5}
                            >

                            </feGaussianBlur>
                        </filter>
                        {/* {props.blur ? <div className='noise' style={{width: '150px', height: '75px', zIndex: 5, position: 'absolute'}}></div> : <></>}
                        <img className='plate' style={{filter: `blur(${props.blur}px)`}} src={getSrc()}></img> */}
                        <image href={getSrc()} xlinkHref={getSrc()} x="0" y="0" width="100%" height="100%" filter={props.rsc ? ((plate && plate[3].length === 8) ? 'url(#rs) url(#rs2) url(#noise)' : 'url(#rs) url(#noise)') : 'url(#noise)'}></image>
                    </svg>
                </>
                : <img className='plate' src={getSrc()}></img>
            }
            {(props.showYears && plate) ? (plate.length === 5 ?
                <p className='p-old' style={{margin: 'auto', textAlign: 'center'}}>{`(${plate[4]}-Present)`}</p>
                : <p className='p-old' style={{margin: 'auto', textAlign: 'center'}}>{`(${plate[4]}-${plate[5]})`}</p>) : <></>}
        </div>
        
    )
};

export default Plate;
