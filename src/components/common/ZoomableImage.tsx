import React from "react";

import { TransformWrapper, TransformComponent, useTransformEffect } from "react-zoom-pan-pinch";

export interface ZoomableImageProps {
    src: string | undefined;
    imageStyleProps: any,
    divProps?: any,
    setPos?: React.Dispatch<React.SetStateAction<[number, number]>>,
    setScale?: React.Dispatch<React.SetStateAction<number>>,
    initialScale?: number,
    minScale?: number,
    maxScale?: number,
    zoomTextOpacity?: number,
    zoomTextRight?: number,
    disablePanning?: boolean,
}

const ZoomableImage = (props: ZoomableImageProps): React.ReactElement => {

    if (!props.src) {
        return <></>;
    }

    const onStop = (e: any) => {
        // console.log("ZoomableImage onStop", e.state.positionX, e.state.positionY, e.state.scale);
        if (props.setPos) {
            props.setPos([e.state.positionX, e.state.positionY]);
        }
        if (props.setScale) {
            props.setScale(e.state.scale);
        }
    }

    const delayedStop = (e: any) => {
        onStop(e);
        setTimeout(() => {
            onStop(e);
        }, 250);
    }

    return (
        <div className='zoomableImage' style={{...props.divProps}}>
            <div style={{position: 'relative'}}>
                <p style={{position: 'absolute', right: `${props.zoomTextRight ?? 30}px`, bottom: '10px', zIndex: 10, margin: 0, color: 'darkblue', opacity: props.zoomTextOpacity ?? 1}}>Zoom in!</p>
                <TransformWrapper onZoomStop={delayedStop} onPanningStop={delayedStop} limitToBounds={true} velocityAnimation={{ disabled: true }} panning={{disabled: props.disablePanning, velocityDisabled: !!props.setPos}} wheel={{step: 0.35, smoothStep: 0.0035}} initialScale={props.initialScale ?? 1} minScale={props.minScale ?? 1} maxScale={props.maxScale ?? 5}>
                    <TransformComponent>
                        {<img id={"zoomableContent"} alt='Zoomable content' src={props.src} style={{...props.imageStyleProps}}></img>}
                    </TransformComponent>
                </TransformWrapper>
            </div>
        </div>
    );
};

export default ZoomableImage;
