import React from 'react';
import frame1_left from '../../assets/portfolio/frames/frame1_left.png';
import frame1_right from '../../assets/portfolio/frames/frame1_right.png';
import frame1_topSegment from '../../assets/portfolio/frames/frame1_topSegment.png';
import frame1_bottomSegment from '../../assets/portfolio/frames/frame1_bottomSegment.png';
import frame1_topRightCorner from '../../assets/portfolio/frames/frame1_topRightCorner.png';
import frame1_topLeftCorner from '../../assets/portfolio/frames/frame1_topLeftCorner.png';
import frame1_bottomRightCorner from '../../assets/portfolio/frames/frame1_bottomRightCorner.png';
import frame1_bottomLeftCorner from '../../assets/portfolio/frames/frame1_bottomLeftCorner.png';
import frame2 from '../../assets/portfolio/frames/frame2.png';
import { Link } from 'react-router';
import { Path } from '../../constants/Path';

export const frame = (children: React.ReactNode, frameType: number, width: number, height: number, top?: number): React.ReactElement => {
    if (frameType === 2) {
        return (
            <div style={{position: 'relative', display: 'inline-block', margin: '10px', width: 157, height: height}}>
                {children}
            </div>
        );
    }
    const numLeftSegments = Math.ceil((height-(74+69)) / 4);
    const numRightSegments = Math.ceil((height-(74+69)) / 6);
    const numTopSegments = Math.ceil((width-(82+93)) / 6);
    const numBottomSegments = Math.ceil((width-(82+93)) / 5);
    return (
        <div style={{position: 'relative', display: 'inline-block', margin: '10px', width: width, height: height}}>
          <img src={frame1_topLeftCorner} style={{position: 'absolute', pointerEvents: 'none', top: 0, left: 0, zIndex: 2}} />
          <img src={frame1_bottomLeftCorner} style={{position: 'absolute', pointerEvents: 'none', bottom: 0, left: 0, zIndex: 2}} />
          <img src={frame1_topRightCorner} style={{position: 'absolute', pointerEvents: 'none', top: 0, right: 0, zIndex: 2}} />
          <img src={frame1_bottomRightCorner} style={{position: 'absolute', pointerEvents: 'none', bottom: 0, right: 0, zIndex: 2}} />
          {Array.from({ length: numTopSegments }).map((_, index) => (
            <React.Fragment key={index}>
              <img src={frame1_topSegment} style={{position: 'absolute', pointerEvents: 'none', top: 0, left: 82 + index * 6, right: 0, zIndex: 2}} />
            </React.Fragment>
          ))}
          {Array.from({ length: numBottomSegments }).map((_, index) => (
            <React.Fragment key={index}>
              <img src={frame1_bottomSegment} style={{position: 'absolute', pointerEvents: 'none', bottom: 0, left: 82 + index * 5, right: 0, zIndex: 2}} />
            </React.Fragment>
          ))}
          {Array.from({ length: numLeftSegments }).map((_, index) => (
            <React.Fragment key={index}>
              <img src={frame1_left} style={{position: 'absolute', pointerEvents: 'none', top: 69 + index * 4, left: 0, zIndex: 2}} />
            </React.Fragment>
          ))}
          {Array.from({ length: numRightSegments }).map((_, index) => (
            <React.Fragment key={index}>
              <img src={frame1_right} style={{position: 'absolute', pointerEvents: 'none', top: 69 + index * 6, right: 0, zIndex: 2}} />
            </React.Fragment>
          ))}
          <div style={{display: 'inline-block', padding: '27px', width: width-54, height: height-52, position: 'absolute', top: `${(top ?? 0) - 1}px`, zIndex: 1}}>
            {children}
          </div>
        </div>
    );
};

const getImageFramed = (src: string, alt: string, width: number, height: number, frame: number, index: number, top?: number): React.ReactElement => {
    if (frame === 2) {
      return (
        <div style={{position: 'relative', display: 'inline-block', margin: '10px', width: 157, height: height}}>
          <img src={frame2} alt={`Frame 2 - ${alt}`} style={{position: 'absolute', top: 0, left: 0, zIndex: 2, maxWidth: '100%', height: 'auto'}} />
          <img src={src} alt={alt} style={{position: 'absolute', padding: '4px', display: 'inline-block', margin: '10px', width: 157 - 40, bottom: 0, zIndex: 1}} />
        </div>
      );
    } else {
      const numLeftSegments = Math.ceil((height-(74+69)) / 4);
      const numRightSegments = Math.ceil((height-(74+69)) / 6);
      const numTopSegments = Math.ceil((width-(82+93)) / 6);
      const numBottomSegments = Math.ceil((width-(82+93)) / 5);
      return (
        <Link to={Path.ART_FULL_SIZE.replace(':index', index.toString())}>
        <div style={{position: 'relative', display: 'inline-block', margin: '10px', width: width, height: height}}>
          <img src={frame1_topLeftCorner} style={{position: 'absolute', pointerEvents: 'none', top: 0, left: 0, zIndex: 2}} />
          <img src={frame1_bottomLeftCorner} style={{position: 'absolute', pointerEvents: 'none', bottom: 0, left: 0, zIndex: 2}} />
          <img src={frame1_topRightCorner} style={{position: 'absolute', pointerEvents: 'none', top: 0, right: 0, zIndex: 2}} />
          <img src={frame1_bottomRightCorner} style={{position: 'absolute', pointerEvents: 'none', bottom: 0, right: 0, zIndex: 2}} />
          {Array.from({ length: numTopSegments }).map((_, index) => (
            <React.Fragment key={index}>
              <img src={frame1_topSegment} style={{position: 'absolute', pointerEvents: 'none', top: 0, left: 82 + index * 6, right: 0, zIndex: 2}} />
            </React.Fragment>
          ))}
          {Array.from({ length: numBottomSegments }).map((_, index) => (
            <React.Fragment key={index}>
              <img src={frame1_bottomSegment} style={{position: 'absolute', pointerEvents: 'none', bottom: 0, left: 82 + index * 5, right: 0, zIndex: 2}} />
            </React.Fragment>
          ))}
          {Array.from({ length: numLeftSegments }).map((_, index) => (
            <React.Fragment key={index}>
              <img src={frame1_left} style={{position: 'absolute', pointerEvents: 'none', top: 69 + index * 4, left: 0, zIndex: 2}} />
            </React.Fragment>
          ))}
          {Array.from({ length: numRightSegments }).map((_, index) => (
            <React.Fragment key={index}>
              <img src={frame1_right} style={{position: 'absolute', pointerEvents: 'none', top: 69 + index * 6, right: 0, zIndex: 2}} />
            </React.Fragment>
          ))}
          <img src={src} alt={alt} style={{display: 'inline-block', padding: '27px', width: width-54, position: 'absolute', top: `${(top ?? 0) - 1}px`, zIndex: 1}} />
        </div>
        </Link>
      );
    }
  };

export default getImageFramed;
