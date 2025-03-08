import React, { useState } from 'react';
import { STATE_NAMES, TERRITORY_NAMES } from '../constants';
import { PLATE_STATE, PLATE_TUPLE, PLATE_TYPE, PLATES } from './constants';
import { preloadImage } from '../../../../common/preloadImage';

export interface PlateProps {
    state?: STATE_NAMES | TERRITORY_NAMES;
    type?: PLATE_TYPE;
    vanityOrOldIndex?: number;
    index2?: number;
    show?: boolean;
    blur?: number;
    showYears?: boolean;
    tuple?: PLATE_TUPLE;
    rsc?: string;
    rsc2?: string;
    sepia?: number;
    svgFilterIndex?: number;
}

const Plate = (props: PlateProps): React.ReactElement => {
    const [plate, setPlate] = useState<PLATE_TUPLE | undefined>(undefined);
    const sepia = props.sepia ?? 0;
    const index2 = props.index2 ?? 0;

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

    const getFilterId = (baseId: string): string => {
        if (!props.svgFilterIndex) {
            return baseId;
        }
        return `${baseId}${props.svgFilterIndex}`;
    };

    const getFilterUrls = (): string => {
        return props.rsc ? ((plate && plate[3].length === 8) ? `url(#${getFilterId('rs')}) url(#${getFilterId('rs2')}) url(#${getFilterId('matrix-sepia')}) url(#${getFilterId('gblur')})`
            : `url(#${getFilterId('rs')}) url(#${getFilterId('matrix-sepia')}) url(#${getFilterId('gblur')}`)
            : `url(#${getFilterId('matrix-sepia')}) url(#${getFilterId('gblur')})`;
    };

    const getSrc = (): string => {
        let state;
        if (props.blur && !props.show) {
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
            {props.blur && !props.show ?
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
                        <filter id={getFilterId("rs")} x="0" y="0" width="100%" height="100%">
                            <feFlood
                                result="floodFill"
                                x={`${plate ? (plate[3].length >= 6 ? (index2 % 2 === 0 ? plate[3][4] : plate[3][0]) : plate[3][0]) : 0}%`}
                                y={`${plate ? (plate[3].length >= 6 ? (index2 % 2 === 0 ? plate[3][5] : plate[3][1]) : plate[3][1]) : 0}%`}
                                width={`${plate ? (plate[3].length >= 6 ? (index2 % 2 === 0 ? plate[3][2] : plate[3][2]) : plate[3][2]) : 0}%`}
                                height={`${plate ? (plate[3].length >= 6 ? (index2 % 2 === 0 ? plate[3][3] : plate[3][3]) : plate[3][3]) : 0}%`}
                                floodColor={(props.rsc && props.rsc !== 'clear') ? props.rsc : 'red'}
                                floodOpacity={props.rsc === 'clear' ? '0' : "0.3"}
                            />
                            <feBlend in2="SourceGraphic" in="floodFill" mode="normal" />
                        </filter>
                        <filter id={getFilterId("rs2")} x="0" y="0" width="100%" height="100%">
                            <feFlood
                                result="floodFill"
                                x={`${plate ? plate[3][6] : 0}%`}
                                y={`${plate ? plate[3][7] : 0}%`}
                                width={`${plate ? plate[3][2] : 0}%`}
                                height={`${plate ? plate[3][3] : 0}%`}
                                floodColor={(props.rsc2 && props.rsc2 !== 'clear') ? props.rsc2 : 'white'}
                                floodOpacity={props.rsc2 === 'clear' ? '0' : "0.3"}
                            />
                            <feBlend in2="SourceGraphic" in="floodFill" mode="normal" />
                        </filter>
                        <filter id={getFilterId("matrix-sepia")} x="0" y="0" width="100%" height="100%"
                                colorInterpolationFilters="sRGB"> // does it work still?
                            <feColorMatrix type="matrix"
                                values={`${(0.393 + 0.607 * (1 - sepia))} ${(0.769 - 0.769 * (1 - sepia))} ${(0.189 - 0.189 * (1 - sepia))} 0 0
                                        ${(0.349 - 0.349 * (1 - sepia))} ${(0.686 + 0.314 * (1 - sepia))} ${(0.168 - 0.168 * (1 - sepia))} 0 0
                                        ${(0.272 - 0.272 * (1 - sepia))} ${(0.534 - 0.534 * (1 - sepia))} ${(0.131 + 0.869 * (1 - sepia))} 0 0
                                        0 0 0 1 0`}/>
                        </filter>
                        <filter x="0%" y="0%" width="100%" height="100%" id={getFilterId("gblur")}>
                            <feGaussianBlur
                                stdDeviation={(props.blur ?? 0) / 1.5}
                            >

                            </feGaussianBlur>
                        </filter>
                        {/* {props.blur ? <div className='noise' style={{width: '150px', height: '75px', zIndex: 5, position: 'absolute'}}></div> : <></>}
                        <img className='plate' style={{filter: `blur(${props.blur}px)`}} src={getSrc()}></img> */}
                        <image href={getSrc()} xlinkHref={getSrc()} x="0" y="0" width="100%" height="100%"
                            filter={getFilterUrls()}></image>
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
