
import React from 'react';

import aki_bokeh from '../../../../assets/portfolio/art/aki_bokeh.png';
import bananafish from '../../../../assets/portfolio/art/bananafish.png';
import nuke from '../../../../assets/portfolio/art/nuke.png';

import frieren from '../../../../assets/portfolio/art/frieren.png';
import diakko3 from '../../../../assets/portfolio/art/diakko3.png';
import akkofish_shrimp from '../../../../assets/portfolio/art/akkofish_shrimp.png';
import yangwenli from '../../../../assets/portfolio/art/yangwenli.png';
import michelle_lobster from '../../../../assets/portfolio/art/michelle_lobster.png';

import frame1_left from '../../../../assets/portfolio/frames/frame1_left.png';
import frame1_right from '../../../../assets/portfolio/frames/frame1_right.png';
import frame1_topSegment from '../../../../assets/portfolio/frames/frame1_topSegment.png';
import frame1_bottomSegment from '../../../../assets/portfolio/frames/frame1_bottomSegment.png';
import frame1_topRightCorner from '../../../../assets/portfolio/frames/frame1_topRightCorner.png';
import frame1_topLeftCorner from '../../../../assets/portfolio/frames/frame1_topLeftCorner.png';
import frame1_bottomRightCorner from '../../../../assets/portfolio/frames/frame1_bottomRightCorner.png';
import frame1_bottomLeftCorner from '../../../../assets/portfolio/frames/frame1_bottomLeftCorner.png';
import frame2 from '../../../../assets/portfolio/frames/frame2.png';
import t_pen from '../../../../assets/gifs/t_pen.gif';
import wink from '../../../../assets/fileboxicons/wink.gif';
import { Link } from 'react-router';
import { Path } from '../../../../constants/Path';
import DropdownList from '../../../common/DropdownList';
import Standalone from '../../../standalone/Standalone';

interface ImageWithFrame {
  src: string;
  alt: string;
  width: number;
  height: number;
  frame: number;
  index: number;
  top?: number;
  frameTop?: number;
  frameLeft?: number;
}

interface CollageDefinition {
  images: ImageWithFrame[];
  indexOffset?: number;
}

const Art = (): React.ReactElement => {

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
          <img src={frame1_topLeftCorner} style={{position: 'absolute', top: 0, left: 0, zIndex: 2}} />
          <img src={frame1_bottomLeftCorner} style={{position: 'absolute', bottom: 0, left: 0, zIndex: 2}} />
          <img src={frame1_topRightCorner} style={{position: 'absolute', top: 0, right: 0, zIndex: 2}} />
          <img src={frame1_bottomRightCorner} style={{position: 'absolute', bottom: 0, right: 0, zIndex: 2}} />
          {Array.from({ length: numTopSegments }).map((_, index) => (
            <React.Fragment key={index}>
              <img src={frame1_topSegment} style={{position: 'absolute', top: 0, left: 82 + index * 6, right: 0, zIndex: 2}} />
            </React.Fragment>
          ))}
          {Array.from({ length: numBottomSegments }).map((_, index) => (
            <React.Fragment key={index}>
              <img src={frame1_bottomSegment} style={{position: 'absolute', bottom: 0, left: 82 + index * 5, right: 0, zIndex: 2}} />
            </React.Fragment>
          ))}
          {Array.from({ length: numLeftSegments }).map((_, index) => (
            <React.Fragment key={index}>
              <img src={frame1_left} style={{position: 'absolute', top: 69 + index * 4, left: 0, zIndex: 2}} />
            </React.Fragment>
          ))}
          {Array.from({ length: numRightSegments }).map((_, index) => (
            <React.Fragment key={index}>
              <img src={frame1_right} style={{position: 'absolute', top: 69 + index * 6, right: 0, zIndex: 2}} />
            </React.Fragment>
          ))}
          <img src={src} alt={alt} style={{display: 'inline-block', padding: '27px', width: width-54, position: 'absolute', top: `${(top ?? 0) - 1}px`, zIndex: 1}} />
        </div>
        </Link>
      );
    }
  };

  const getCollage = (definition: CollageDefinition) => {
    const calculatedHeight = Math.max(...definition.images.map(image => (image.frameTop ?? 0) + image.height));
    return (
      <div style={{position: 'relative', height: `${calculatedHeight}px`}}>
        {definition.images.map((image, index) => (
          <div key={index} style={{position: 'absolute', top: `${image.frameTop}px`, left: `${image.frameLeft}px`}}>
            {getImageFramed(image.src, image.alt, image.width, image.height, image.frame, image.index + (definition.indexOffset ?? 0), image.top)}
          </div>
        ))}
      </div>
    );
  };

  const collage2025 ={
    images: [
      {
        src: aki_bokeh,
        alt: 'Aki Bokeh',
        width: 300,
        height: 312,
        frame: 1,
        index: 0,
        top: 0,
        frameTop: 0,
        frameLeft: 0
      },
      {
        src: bananafish,
        alt: 'Bananafish',
        width: 240,
        height: 240,
        frame: 1,
        index: 1,
        top: 0,
        frameTop: 330,
        frameLeft: 175
      },
      {
        src: nuke,
        alt: 'Nuke',
        width: 150,
        height: 220,
        frame: 1,
        index: 2,
        top: 35,
        frameTop: 390,
        frameLeft: 20
      }
    ]
  };

  const collage2026 = {
    images: [
      {
        src: frieren,
        alt: 'Frieren',
        width: 290,
        height: 290,
        frame: 1,
        index: 0,
        top: 0,
        frameTop: 700,
        frameLeft: 0,
      },
      {
        src: diakko3,
        alt: 'Diakko',
        width: 900,
        height: 651,
        frame: 1,
        index: 1,
        top: 0,
        frameTop: 0,
        frameLeft: 55,
      },
      {
        src: akkofish_shrimp,
        alt: 'Akko Fish Shrimp',
        width: 200,
        height: 198,
        frame: 1,
        index: 2,
        top: 0,
        frameTop: 900,
        frameLeft: 1000,
      },
      {
        src: yangwenli,
        alt: 'Yang Wenli',
        width: 450,
        height: 450,
        frame: 1,
        index: 3,
        top: 0,
        frameTop: 390,
        frameLeft: 1000,
      },
      {
        src: michelle_lobster,
        alt: 'Michelle Lobster',
        width: 350,
        height: 550,
        frame: 1,
        index: 4,
        top: 155,
        frameTop: 750,
        frameLeft: 500,
      },
    ],
    indexOffset: collage2025.images.length
  };

  return (
    <Standalone backToTopButton>
        <div style={{marginLeft: '5px'}}>
        <p>Hello! I've always liked to draw and stuff but got more into art recently when making anime jeopardy boards with my friends! Here are some preliminary works as I hone my skills. <img src={wink} alt='Wink' style={{width: '15px' as const, height: '15px' as const, paddingLeft: '0px' as const, paddingTop: '0px' as const}} /> <i>Click for full size!</i></p>
        </div>
        <div style={{position: 'relative'}}>
        {/* <div style={{position: 'absolute', top: '0px', left: '0px'}}>
            {getImageFramed(aki_bokeh, 'Aki Bokeh', 300, 312, 1, 0)}
        </div>
        <div style={{position: 'absolute', top: '330px', left: '175px'}}>
            {getImageFramed(bananafish, 'Bananafish', 240, 240, 1, 1)}
        </div>
        <div style={{position: 'absolute', top: '390px', left: '20px'}}>
            {getImageFramed(nuke, 'Nuke', 150, 220, 1, 2, 35)}
        </div>
        <div style={{position: 'absolute', top: '650px', left: '280px'}}>
            <img style={{display: 'block', margin: 'auto', height: '128px', imageRendering: 'pixelated'}} src={t_pen}></img>
        </div> */}
        <div style={{}}>
            <DropdownList titles={['2026', '2025']} components={[
                <div>{getCollage(collage2026)}</div>,
                <div>{getCollage(collage2025)}</div>
            ]} hrWidth='98%' enableFirstByDefault/>
        </div>
        <div style={{height: '182px', position: 'relative'}}>
            <div style={{position: 'absolute', top: '67px', right: '280px'}}>
                <img style={{margin: 'auto', height: '128px', imageRendering: 'pixelated'}} src={t_pen}></img>
            </div>
        </div>
        </div>
    </Standalone>
  );
}

export default Art;
