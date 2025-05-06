import React, { useEffect, useMemo, useRef, useState } from 'react';
import { PLATE_STATE, PLATE_TUPLE, PLATE_TYPE } from './constants';
import { preloadImage } from '../../../../common/preloadImage';
import { toPng } from 'html-to-image';

export interface PlateProps {
    platesLibrary: Map<string, Map<PLATE_TYPE, PLATE_TUPLE[]>>;
    defaultPlateDimensions?: [number, number];
    region?: string;
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
    lowRes?: boolean;
}

const Plate = (props: PlateProps): React.ReactElement => {
    const [plate, setPlate] = useState<PLATE_TUPLE | undefined>(undefined);
    const sepia = props.sepia ?? 0;
    const index2 = props.index2 ?? 0;

    const canvasRef = useRef<HTMLDivElement>(null);
    const lastDownsampledImageRef = useRef<HTMLImageElement | null>(null);
    const DOWNSCALE_FACTOR = 4;
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

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

        const state_plates = props.platesLibrary.get(props.region!)!;

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

    const getWidth = (): number => {
        if (plate) {
            return plate[6]?.[0] ?? props.defaultPlateDimensions?.[0] ?? 150;
        }
        return props.defaultPlateDimensions?.[0] ?? 150;
    }

    const getHeight = (): number => {
        if (plate) {
            return plate[6]?.[1] ?? props.defaultPlateDimensions?.[1] ?? 75;
        }
        return props.defaultPlateDimensions?.[1] ?? 75;
    }

    const getBlurredPlate = useMemo(() => {
        return <div style={{filter: `brightness(${props.brightness ?? 1}) saturate(${Math.max(((props.brightness ?? 1)-0.9) * 5 + 0.7, 1)})`}}>
            <svg viewBox={`0 0 ${getWidth()} ${getHeight()}`}>
                <defs>
                    <filter id={getFilterId("combinedFilter")} x="-50%" y="-50%" width="200%" height="200%">
                        {(plate && plate[3][0] !== 1000) ? <><feFlood result="rs"
                            x={`${plate ? (plate[3].length >= 6 ? (index2 % 2 === 0 ? plate[3][4] : plate[3][0]) : plate[3][0]) : 0}%`}
                            y={`${plate ? (plate[3].length >= 6 ? (index2 % 2 === 0 ? plate[3][5] : plate[3][1]) : plate[3][1]) : 0}%`}
                            width={`${plate ? (plate[3].length >= 6 ? (index2 % 2 === 0 ? plate[3][2] : plate[3][2]) : plate[3][2]) : 0}%`}
                            height={`${plate ? (plate[3].length >= 6 ? (index2 % 2 === 0 ? plate[3][3] : plate[3][3]) : plate[3][3]) : 0}%`}
                            floodColor={(props.rsc && props.rsc !== 'clear') ? props.rsc : 'red'}
                            floodOpacity={(props.rsc === 'clear' || props.rsc === undefined) ? '0' : "0.3"}
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
                                    floodOpacity={(props.rsc2 === 'clear' || props.rsc2 === undefined) ? '0' : "0.3"}
                                />
                                <feBlend in="rs2" in2="blendedRs1" mode="normal" result="blendedRs2" />
                            </>
                        )}</> : <></>}
                        <feColorMatrix type="matrix"
                            values={`${(0.393 + 0.607 * (1 - sepia))} ${(0.769 - 0.769 * (1 - sepia))} ${(0.189 - 0.189 * (1 - sepia))} 0 0
                                    ${(0.349 - 0.349 * (1 - sepia))} ${(0.686 + 0.314 * (1 - sepia))} ${(0.168 - 0.168 * (1 - sepia))} 0 0
                                    ${(0.272 - 0.272 * (1 - sepia))} ${(0.534 - 0.534 * (1 - sepia))} ${(0.131 + 0.869 * (1 - sepia))} 0 0
                                    0 0 0 1 0`}
                            in={(plate && plate[3][0] !== 1000) ? (plate && plate[3].length === 8 ? "blendedRs2" : "blendedRs1") : "SourceGraphic"}
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
                        {/* Begin pixelation filter */}
                        {/* <feFlood x="1" y="1" height="2" width="2"/>
                        <feComposite width="4" height="4"/>
                        <feTile result="tile"/>
                        <feComposite in="blendedHc2" in2="tile" operator="in"/>
                        <feMorphology operator="dilate" radius="1" result="pixelated"/> */}
                        {/* End pixelation filter */}
                        <feGaussianBlur in="blendedHc2" stdDeviation={(props.blur ?? 0) * (props.skew ? (1.0/1.414) : 1) / 1.5} edgeMode="duplicate" /> {/* (Math.abs(props.skew?.[1] ?? 0)/90 + 1)*/}
                    </filter>
                </defs>
                <image href={getSrc()} xlinkHref={getSrc()} x="0" y="0" width={`${getWidth()}px`} height={`${getHeight()}px`} preserveAspectRatio='none'
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

    function createDownsampledImage(element: any, scaleFactor: number) {
        const rect = element.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        return toPng(element, {
            skipFonts: true, // Can help with performance
          })
          .then((dataUrl: any) => {

            // console.log("Data URL hash:", dataUrl.length, dataUrl.substring(0, 100));
            const img = new Image();
            return new Promise(resolve => {
              img.onload = () => resolve(img);
              img.src = dataUrl;
            });
          })
          .then((img: any) => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = width;
            canvas.height = height;

            const tempCanvas = document.createElement('canvas');
            const tempCtx = tempCanvas.getContext('2d');

            const smallWidth = Math.max(1, Math.floor(width / scaleFactor));
            const smallHeight = Math.max(1, Math.floor(height / scaleFactor));
            tempCanvas.width = smallWidth;
            tempCanvas.height = smallHeight;

            tempCtx?.drawImage(img, 0, 0, width, height, 0, 0, smallWidth, smallHeight);

            if (ctx) { 
                ctx.imageSmoothingEnabled = false; // Disable image smoothing
                ctx.drawImage(tempCanvas, 0, 0, smallWidth, smallHeight, 0, 0, width, height);
            }

            const resultImg = new Image();
            resultImg.src = canvas.toDataURL();
            resultImg.width = width;
            resultImg.height = height;
            resultImg.style.width = width + 'px';
            resultImg.style.height = height + 'px';
            
            resultImg.className = 'downsampled-image';

            if (element.parentNode) {
                element.parentNode.insertBefore(resultImg, element);

                if (lastDownsampledImageRef.current && lastDownsampledImageRef.current.parentNode) {
                    lastDownsampledImageRef.current.parentNode.removeChild(lastDownsampledImageRef.current);
                }

                lastDownsampledImageRef.current = resultImg;
            }
            
            return resultImg;
          })
          .catch((error: any) => {
            console.error('Error creating downsampled image:', error);
            setErrorMessage('Error creating downsampled image: ' + error.message);
            return element; // Return original element if there's an error
          });
      }

    useEffect(() => {
        const processCanvas = async () => {
            if (canvasRef.current) {
                const canvas = canvasRef.current;
                const result = createDownsampledImage(canvas, DOWNSCALE_FACTOR);
            }
        };
        if (props.lowRes) {
            processCanvas();
        }
    }, [plate, props.blur, props.rsc, props.rsc2, props.hc, sepia, index2, props.skew, props.scale, props.show, props.lowRes]);

    useEffect(() => {
        if (!props.lowRes) {
            if (lastDownsampledImageRef.current && lastDownsampledImageRef.current.parentNode) {
                lastDownsampledImageRef.current.parentNode.removeChild(lastDownsampledImageRef.current);
            }
        }
    }, [props.lowRes]);

    return (
        <div className='plate' style={{position: 'relative'}}>
            {(props.blur || props.skew) && !props.show ?
                <div style={{
                    perspective: '800px',
                    width: `${getWidth()}px`,
                    height: `${getHeight()}px`,
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
                        <svg viewBox={`0 0 ${getWidth()} ${getHeight()}`}>
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
                    <div ref={canvasRef} style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 4,
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            zIndex: 2,
                            filter: props.skew ? `blur(${(props.blur ?? 0) / (1.414 * 1.5)}px)` : 'none',
                        }}>
                            {getBlurredPlate}
                        </div>
                        {(props.skew && props.blur) ? <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            zIndex: 1,
                            opacity: 0.4,
                        }}>
                            {getBlurredPlate}
                        </div> : <></>}
                    </div>
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
                        <svg viewBox={`0 0 ${getWidth()} ${getHeight()}`} style={{
                            width: '100%',
                            height: '100%',
                            overflow: 'visible',
                        }}>
                        <line 
                            x1="-50" y1="0" 
                            x2={`${getWidth() + 50}`} y2="0"
                            stroke="gray" 
                            strokeWidth="1" 
                            strokeDasharray="5,5"
                            style={{
                                transformOrigin: 'center center',
                                transform: `rotateX(${props.skew?.[0] ?? 0}deg) rotateY(${props.skew?.[1] ?? 0}deg) scale(${props.scale ?? 1})`,
                            }}
                        />
                        <line 
                            x1="-50" y1={`${getHeight()}` }
                            x2={`${getWidth() + 50}`} y2={`${getHeight()}` }
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
                            x2="0" y2={`${getHeight() + 25}` }
                            stroke="gray" 
                            strokeWidth="3" 
                            strokeDasharray="5,5"
                            style={{
                                transformOrigin: 'center center',
                                transform: `rotateX(${props.skew?.[0] ?? 0}deg) rotateY(${props.skew?.[1] ?? 0}deg) scale(${props.scale ?? 1})`,
                            }}
                        />
                        <line 
                            x1={`${getWidth()}`} y1="-25" 
                            x2={`${getWidth()}`} y2={`${getHeight() + 25}` }
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
                : <img className='plate' style={{paddingBottom: 0, width: `${getWidth()}px`, height:  `${getHeight()}px`}} src={getSrc()}></img>
            }
            {(props.showYears && plate) ?
                <>
                    <p className='p-old' style={{margin: 'auto', textAlign: 'center'}}>{props.region?.toString() + (props.type === PLATE_TYPE.VANITY ? " (Special)" : "")}</p>
                    {(plate.length >= 8 && props.type === PLATE_TYPE.VANITY) ? <p style={{margin: 'auto', textAlign: 'center', fontFamily: 'Comic Sans MS', fontSize: '14px'}}>{plate[7]}</p> : <></>}
                    {((plate.length === 5 || !plate[5]) ?
                        <p className='p-old' style={{margin: 'auto', textAlign: 'center'}}>{`(${plate[4]}-Present)`}</p>
                        : <p className='p-old' style={{margin: 'auto', textAlign: 'center'}}>{`(${plate[4]}-${plate[5]})`}</p>)
                    }
                </> : <></>
            }
            {(props.lowRes && errorMessage) && <p style={{color: 'red', position: 'absolute', top: '40px', left: '155px'}}>{errorMessage}</p>}
        </div>
        
    )
};
/* {props.blur ? <div className='noise' style={{width: '150px', height: '75px', zIndex: 5, position: 'absolute'}}></div> : <></>}
<img className='plate' style={{filter: `blur(${props.blur}px)`}} src={getSrc()}></img> */

export default Plate;
