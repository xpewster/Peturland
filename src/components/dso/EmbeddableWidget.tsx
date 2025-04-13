// EmbeddableWidget.tsx
import React, { useEffect } from 'react';
import InTheSky, { AvailableFonts } from './InTheSky';

const EmbeddableWidget: React.FC = () => {
  // Parse URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const hemisphere = urlParams.get('hemisphere') === 'south' ? 'south' : 'north';
  const date = urlParams.get('date') || undefined;
  const bgColor = urlParams.get('bgColor') || undefined;
  const textColor = urlParams.get('textColor') || undefined;
  const width = urlParams.get('width') ? parseInt(urlParams.get('width')!) : 130;
  const objectFont = urlParams.get('objectFont') || AvailableFonts.BASIIC;

  // Send size to parent for iframe resizing
  useEffect(() => {
    const sendSize = () => {
      if (window.parent) {
        window.parent.postMessage({
          type: 'resize',
          height: document.body.scrollHeight,
          width: document.body.scrollWidth
        }, '*');
      }
    };
    
    // Send after rendering and window resize
    sendSize();
    window.addEventListener('resize', sendSize);
    return () => window.removeEventListener('resize', sendSize);
  }, []);

  return (
    <div style={{ margin: 0, padding: 0, overflow: 'hidden', width: `${width}px`, height: `${195 * (width/130)}px`}}>
      <InTheSky 
        hemisphere={hemisphere as 'north' | 'south'} 
        date={date}
        bgColor={bgColor}
        textColor={textColor}
        width={width}
        objectFont={objectFont}
      />
    </div>
  );
};

export default EmbeddableWidget;
