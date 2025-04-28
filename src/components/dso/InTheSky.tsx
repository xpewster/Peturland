import React, { useEffect, useRef, useState } from 'react';
import getVisibleObjectsForDate, { getConstellationName, getObjectTypeName } from './astro';
import { getDsoImage } from './images';
import './InTheSky.css';

import media from '../../assets/dso/media.png'; 

export enum AvailableFonts {
  BASIIC = 'basiic',
  DOS = 'DOS',
}

interface InTheSkyProps {
  hemisphere: 'north' | 'south';
  date?: string;
  bgColor?: string;
  textColor?: string;
  width?: number;
  objectFont?: string;
}

const InTheSky: React.FC<InTheSkyProps> = ({
  hemisphere = 'north',
  date = new Date().toISOString().split('T')[0],
  bgColor,
  textColor = '5c5c5c',
  width = 130,
  objectFont = AvailableFonts.DOS,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const height = 195 * (width/130); // Adjust height based on width for scaling

    const [fontsLoaded, setFontsLoaded] = useState({
      basiic: false,
      dos: false
    });

    const drawObjectImage = (ctx: CanvasRenderingContext2D, dsoId: string, x: number, y: number, onComplete: Function) => {
      const imageSrc = getDsoImage(dsoId);
      const scaleSize = width;     // Base scaling size
      const targetWidth = 84 * (width/130);    // Final width
      const targetHeight = 72 * (width/130);   // Final height
      
      if (imageSrc) {
        const img = new Image();
        img.src = imageSrc;
        
        img.onload = () => {
          ctx.imageSmoothingEnabled = false;
          
          // Calculate scaling based on the SMALLER dimension to reach scaleSize
          let scaledWidth, scaledHeight;
          
          if (img.width <= img.height) {
            // Wider or square image - scale by width
            scaledWidth = scaleSize;
            scaledHeight = (img.height / img.width) * scaleSize;
          } else {
            // Taller image - scale by height
            scaledHeight = scaleSize;
            scaledWidth = (img.width / img.height) * scaleSize;
          }
          
          // Calculate the top-left position to center the scaled image for the clip
          const clipX = (scaledWidth - targetWidth) / 2;
          const clipY = (scaledHeight - targetHeight) / 2;
          
          // First draw the image scaled to a temporary canvas
          const tempCanvas = document.createElement('canvas');
          tempCanvas.width = scaledWidth;
          tempCanvas.height = scaledHeight;
          const tempCtx: CanvasRenderingContext2D | null = tempCanvas.getContext('2d');
          if (!tempCtx) return;
          tempCtx.imageSmoothingEnabled = false;
          tempCtx.drawImage(img, 0, 0, scaledWidth, scaledHeight);
          
          // Then draw the clipped portion to the main canvas
          ctx.drawImage(
            tempCanvas,
            clipX, clipY, targetWidth, targetHeight, // Source - the clipped portion
            x, y, targetWidth, targetHeight           // Destination - where to draw
          );
          onComplete();
        };
        
        img.onerror = () => {
          console.error(`Failed to load image for ${dsoId}`);
          // Draw fallback
          ctx.fillStyle = '#222';
          ctx.fillRect(x, y, targetWidth, targetHeight);
          ctx.fillStyle = '#FFF';
          ctx.font = '12px Arial';
          ctx.fillText('No image', x + 5, y + targetHeight/2);
        };
      } else {
        // No image available
        ctx.fillStyle = '#222';
        ctx.fillRect(x, y, targetWidth, targetHeight);
        ctx.fillStyle = '#FFF';
        ctx.font = '12px Arial';
        ctx.fillText('No image', x + 5, y + targetHeight/2);
      }
  };

    const getCommonName = (dsoName: string): string => {
        if (dsoName[0].toLowerCase() === 'm' && dsoName.length > 1 && !isNaN(parseInt(dsoName.slice(1)))) {
            return "Messier " + dsoName.slice(1); // e.g. M1 -> Messier 1
        }
        return dsoName;
    };

    const getObjectFont = (stringLength: number): string => {
      if (objectFont === AvailableFonts.DOS) {
        if (stringLength > 24) {
          return `${Math.floor(10 * (width/130))}px DOS, basiic, monospace`;
        } else if (stringLength > 17) {
            return `${Math.floor(12 * (width/130))}px DOS, basiic, monospace`;
        } else if (stringLength > 14) {
            return `${Math.floor(15 * (width/130))}px DOS, basiic, monospace`;
        } else if (stringLength > 12) {
            return `${Math.floor(16 * (width/130))}px DOS, basiic, monospace`;
        } else {
            return `${Math.floor(18 * (width/130))}px DOS, basiic, monospace`;
        }
      }
      if (stringLength > 17) {
          return `${Math.floor(11 * (width/130))}px basiic`;
      } else if (stringLength > 14) {
        return `${Math.floor(14 * (width/130))}px basiic`;
      }
      return `${Math.floor(16 * (width/130))}px basiic`;
    }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);

    const visibilityData = getVisibleObjectsForDate(date);
    const object = hemisphere === 'south' ? visibilityData.south : visibilityData.north;

    document.fonts.ready.then(() => {
      
        // Draw background
        if (bgColor) {
            ctx.fillStyle = `#${bgColor}`;
            ctx.fillRect(0, 0, width, height);
        }
        
        ctx.imageSmoothingEnabled = false;

        const img = new Image();
        img.src = media;
        
        img.onload = () => {
            drawObjectImage(ctx, object ? object.id : 'M2', 20 * (width/130), 34 * (width/130), () => {
                ctx.drawImage(img, 0, 20 * (width/130), width, 124 * (width/130));
            }); 
        }

        if (object) {
        // Draw text
        ctx.fillStyle = `#${textColor}`;
        ctx.font = `${Math.floor(10 * (width/130))}px basiic, monospace`;
        ctx.textAlign = 'center';
        ctx.fillText(`In the ${hemisphere.toLowerCase()}ern sky tonight`, width/2, 12 * (width/130));
        ctx.font = getObjectFont(getCommonName(object.name).length);
        ctx.fillText(getCommonName(object.name), width/2, 160 * (width/130));
        ctx.font = `${Math.floor(12 * (width/130))}px basiic, monospace`;
        ctx.fillText(`(${getObjectTypeName(object.type)})`, width/2, 175 * (width/130));
        ctx.fillText(`in ${getConstellationName(object.constellation)}`, width/2, 188 * (width/130));
        // ctx.fillText(`RA: ${object.ra_hms} | Dec: ${object.dec_dms}`, 20, 140);
        } else {
        // No object found
        ctx.fillStyle = `#${textColor}`;
        ctx.font = 'bold 20px DOS';
        ctx.fillText(`ERROR: No visible object found for ${date}`, 20, 100);
        }
    });
  }, [fontsLoaded, hemisphere, date, bgColor, textColor, width, height]);

  useEffect(() => {
    const interval = setInterval(() => {
      const basiicLoaded = document.fonts.check('12px basiic');
      const dosLoaded = document.fonts.check('12px DOS');

      setFontsLoaded(prev => {
        if (prev.basiic !== basiicLoaded || (prev.dos !== dosLoaded && objectFont === AvailableFonts.DOS)) {
          return { basiic: basiicLoaded, dos: dosLoaded };
        }
        return prev;
      });
      
      if (basiicLoaded && dosLoaded) {
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default InTheSky;