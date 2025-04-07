import React, { useMemo, useState } from 'react';
import { STATE_NAMES, TERRITORY_NAMES } from '../constants';
import { PLATE_STATE, PLATE_TUPLE, PLATE_TYPE, PLATES } from './constants';
import { preloadImage } from '../../../../common/preloadImage';

export interface PlateProps {
    state?: STATE_NAMES;
    type?: PLATE_TYPE;
    vanityOrOldIndex?: number;
    index2?: number;
    show?: boolean;
    blur?: number;
    showYears?: boolean;
    tuple?: PLATE_TUPLE;
    rsc?: string;
    rsc2?: string;
    hc?: string;
    sepia?: number;
    brightness?: number;
    svgFilterIndex?: number;
    skew?: number[];
    scale?: number;
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
                const vanity_plates = state_plates.get(PLATE_TYPE.VANITY) ?? [];
                return choosePlate(vanity_plates![(props.vanityOrOldIndex ?? 0) % vanity_plates.length], state);
        }
    }

    const getBlurredPlate = useMemo(() => {
        return <div style={{filter: `brightness(${props.brightness ?? 1})`}}>
            <svg viewBox='0 0 150 75'>
                <defs>
                    <filter id={getFilterId("combinedFilter")} x="-50%" y="-50%" width="200%" height="200%">
                        <feFlood result="rs"
                            x={`${plate ? (plate[3].length >= 6 ? (index2 % 2 === 0 ? plate[3][4] : plate[3][0]) : plate[3][0]) : 0}%`}
                            y={`${plate ? (plate[3].length >= 6 ? (index2 % 2 === 0 ? plate[3][5] : plate[3][1]) : plate[3][1]) : 0}%`}
                            width={`${plate ? (plate[3].length >= 6 ? (index2 % 2 === 0 ? plate[3][2] : plate[3][2]) : plate[3][2]) : 0}%`}
                            height={`${plate ? (plate[3].length >= 6 ? (index2 % 2 === 0 ? plate[3][3] : plate[3][3]) : plate[3][3]) : 0}%`}
                            floodColor={(props.rsc && props.rsc !== 'clear') ? props.rsc : 'red'}
                            floodOpacity={props.rsc === 'clear' ? '0' : "0.5"}
                        />
                        <feBlend in="rs" in2="SourceGraphic" mode="normal" result="blendedRs1" />
                        {plate && plate[3].length === 8 && (
                            <>
                                <feFlood result="rs2"
                                    x={`${plate ? (plate[3][6] ?? 100) : 0}%`}
                                    y={`${plate ? (plate[3][7] ?? 100) : 0}%`}
                                    width={`${plate ? plate[3][2] : 0}%`}
                                    height={`${plate ? plate[3][3] : 0}%`}
                                    floodColor={(props.rsc2 && props.rsc2 !== 'clear') ? props.rsc2 : 'white'}
                                    floodOpacity={props.rsc2 === 'clear' ? '0' : "0.5"}
                                />
                                <feBlend in="rs2" in2="blendedRs1" mode="normal" result="blendedRs2" />
                            </>
                        )}
                        <feColorMatrix type="matrix"
                            values={`${(0.393 + 0.607 * (1 - sepia))} ${(0.769 - 0.769 * (1 - sepia))} ${(0.189 - 0.189 * (1 - sepia))} 0 0
                                    ${(0.349 - 0.349 * (1 - sepia))} ${(0.686 + 0.314 * (1 - sepia))} ${(0.168 - 0.168 * (1 - sepia))} 0 0
                                    ${(0.272 - 0.272 * (1 - sepia))} ${(0.534 - 0.534 * (1 - sepia))} ${(0.131 + 0.869 * (1 - sepia))} 0 0
                                    0 0 0 1 0`}
                            in={plate && plate[3].length === 8 ? "blendedRs2" : "blendedRs1"}
                            result="sepia" />
                        <feFlood result="hc"
                            x={'20%'}
                            y={'0%'}
                            width={'60%'}
                            height={'10%'}
                            floodColor={props.hc ? props.hc : 'black'}
                            floodOpacity={(props.hc && props.hc !== 'clear') ? '1' : "0"}
                        />
                        <feBlend in="hc" in2="sepia" mode="normal" result="blendedHc1" />
                        <feFlood result="hc2"
                            x={'0%'}
                            y={'90%'}
                            width={'100%'}
                            height={'10%'}
                            floodColor={props.hc ? props.hc : 'black'}
                            floodOpacity={(props.hc && props.hc !== 'clear') ? '1' : "0"}
                        />
                        <feBlend in="hc2" in2="blendedHc1" mode="normal" result="blendedHc2" />
                        <feGaussianBlur in="blendedHc2" stdDeviation={(props.blur ?? 0) * (props.skew ? (1.0/1.414) : 1) / 1.5} edgeMode="duplicate" /> {/* (Math.abs(props.skew?.[1] ?? 0)/90 + 1)*/}
                    </filter>
                </defs>
                <image href={getSrc()} xlinkHref={getSrc()} x="0" y="0" width="150px" height="75px"
                    style={{
                        transformStyle: 'preserve-3d',
                        transform: `rotateX(${props.skew?.[0] ?? 0}deg) rotateY(${props.skew?.[1] ?? 0}deg) scale(${props.scale ?? 1})`,
                        transformOrigin: 'center center',
                    }}
                    filter={`url(#${getFilterId("combinedFilter")})`}
                /> 
            </svg>
        </div>
    }, [plate, props.blur, props.rsc, props.rsc2, props.hc, sepia, index2, props.skew, props.scale]);

    return (
        <div className='plate'>
            {props.blur && !props.show ?
                <div style={{
                    perspective: '800px',
                    width: '150px',
                    height: '75px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 5,
                    }}>
                        <svg viewBox='0 0 150 75'>
                            <defs>
                                <filter id={getFilterId("turb")}>
                                    <feTurbulence
                                        type='fractalNoise'
                                        baseFrequency={0.4}
                                        numOctaves={1}
                                    >
                                    </feTurbulence>
                                </filter>
                            </defs>
                            <image href={getSrc()} xlinkHref={getSrc()} x="0" y="0" width="100%" height="100%" 
                                style={{opacity: 0.2}} filter={`url(#${getFilterId("turb")})`} 
                                />
                        </svg>
                    </div>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 2,
                        filter: props.skew ? `blur(${props.blur / (1.414 * 1.5)}px)` : 'none',
                    }}>
                        {getBlurredPlate}
                    </div>
                    {props.skew && <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 1,
                        opacity: 0.4,
                    }}>
                        {getBlurredPlate}
                    </div>}
                    {/* Skew indicator lines */}
                    {props.skew && <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 3,
                        pointerEvents: 'none', 
                    }}>
                        <svg viewBox='0 0 150 75' style={{
                            width: '100%',
                            height: '100%',
                            overflow: 'visible',
                        }}>
                        <line 
                            x1="-50" y1="0" 
                            x2="200" y2="0"
                            stroke="gray" 
                            strokeWidth="1" 
                            strokeDasharray="5,5"
                            style={{
                                transformOrigin: 'center center',
                                transform: `rotateX(${props.skew?.[0] ?? 0}deg) rotateY(${props.skew?.[1] ?? 0}deg) scale(${props.scale ?? 1})`,
                            }}
                        />
                        <line 
                            x1="-50" y1="75" 
                            x2="200" y2="75"
                            stroke="gray" 
                            strokeWidth="1" 
                            strokeDasharray="5,5"
                            style={{
                                transformOrigin: 'center center',
                                transform: `rotateX(${props.skew?.[0] ?? 0}deg) rotateY(${props.skew?.[1] ?? 0}deg) scale(${props.scale ?? 1})`,
                            }}
                        />
                        <line 
                            x1="0" y1="-25" 
                            x2="0" y2="100"
                            stroke="gray" 
                            strokeWidth="3" 
                            strokeDasharray="5,5"
                            style={{
                                transformOrigin: 'center center',
                                transform: `rotateX(${props.skew?.[0] ?? 0}deg) rotateY(${props.skew?.[1] ?? 0}deg) scale(${props.scale ?? 1})`,
                            }}
                        />
                        <line 
                            x1="150" y1="-25" 
                            x2="150" y2="100"
                            stroke="gray" 
                            strokeWidth="3" 
                            strokeDasharray="5,5"
                            style={{
                                transformOrigin: 'center center',
                                transform: `rotateX(${props.skew?.[0] ?? 0}deg) rotateY(${props.skew?.[1] ?? 0}deg) scale(${props.scale ?? 1})`,
                            }}
                        />
                        </svg>
                    </div>}
                </div>
                : <img className='plate' style={{paddingBottom: 0}} src={getSrc()}></img>
            }
            {(props.showYears && plate) ?
                <>
                    <p className='p-old' style={{margin: 'auto', textAlign: 'center'}}>{props.state?.toString() + (props.type === PLATE_TYPE.VANITY ? " (Special)" : "")}</p>
                    {(plate.length === 5 ?
                        <p className='p-old' style={{margin: 'auto', textAlign: 'center'}}>{`(${plate[4]}-Present)`}</p>
                        : <p className='p-old' style={{margin: 'auto', textAlign: 'center'}}>{`(${plate[4]}-${plate[5]})`}</p>)
                    }
                </> : <></>
            }
        </div>
        
    )
};
/* {props.blur ? <div className='noise' style={{width: '150px', height: '75px', zIndex: 5, position: 'absolute'}}></div> : <></>}
<img className='plate' style={{filter: `blur(${props.blur}px)`}} src={getSrc()}></img> */

export default Plate;
