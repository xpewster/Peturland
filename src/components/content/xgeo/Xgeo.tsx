import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps"
import brazil_phone_codes from '../../../assets/geojsons/brazil_phone_codes.json';
import './Xgeo.css';

const Xgeo = (): React.ReactElement => {
    const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

    function handleZoomIn() {
      if (position.zoom >= 4) return;
      setPosition((pos: any) => ({ ...pos, zoom: pos.zoom * 2 }));
    }
  
    function handleZoomOut() {
      if (position.zoom <= 1) return;
      setPosition((pos: any) => ({ ...pos, zoom: pos.zoom / 2 }));
    }
  
    function handleMoveEnd(position: any) {
      setPosition(position);
    }

    return (
        <div style={{height: '100%'}}>
            Bra71l
            <ComposableMap 
            projectionConfig={{
                scale: 800,
                center: [-55, -15],
            }} style={{
                width: "100%",
                height: "auto",
            }}>
                <ZoomableGroup 
                    zoom={position.zoom}
                    center={position.coordinates as any}
                    onMoveEnd={handleMoveEnd}
                >
                    <Geographies geography={brazil_phone_codes}>
                        {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography key={geo.rsmKey} geography={geo} />
                        ))
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </div>
    );
};

export default Xgeo;
