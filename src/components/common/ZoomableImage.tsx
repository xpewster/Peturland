import React from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export interface ZoomableImageProps {
    src: string;
    imageStyleProps: any,
    divProps: any,
}

const ZoomableImage = (props: ZoomableImageProps): React.ReactElement => {
    return (
        <div className='zoomableImage' style={{...props.divProps}}>
            <div style={{position: 'relative'}}>
                <p style={{position: 'absolute', right: '30px', bottom: '10px', zIndex: 10, margin: 0, color: 'darkblue'}}>Zoom in!</p>
                <TransformWrapper>
                    <TransformComponent>
                        <img id={"zoomableContent"} alt='Zoomable content' src={props.src} style={{...props.imageStyleProps}}></img>
                    </TransformComponent>
                </TransformWrapper>
            </div>
        </div>
    );
};

export default ZoomableImage;
