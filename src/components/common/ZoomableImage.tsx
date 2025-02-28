import React, { Component } from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export interface ZoomableImageProps {
    src: string;
    imageStyleProps: any,
    divProps: any,
}

const ZoomableImage = (props: ZoomableImageProps): React.ReactElement => {
    return (
        <div className='zoomableImage' style={{...props.divProps}}>
            <TransformWrapper>
                <TransformComponent>
                    <img id={"zoomableContent"} src={props.src} style={{...props.imageStyleProps}}></img>
                </TransformComponent>
            </TransformWrapper>
        </div>
    );
};

export default ZoomableImage;
