import React from "react";
import very from '../../assets/consistency/very.png';
import pretty from '../../assets/consistency/consistent.gif';
import somewhat from '../../assets/consistency/somewhat.gif';
import weak from '../../assets/consistency/weak.gif';

export enum ConsistencyRating {
    VeryConsistent = 'Very consistent',
    Consistent = 'Pretty consistent',
    SomewhatConsistent = 'Somewhat consistent',
    WeakCorrelation = 'Weak correlation',
}

export interface ConsistencyProps {
  rating: ConsistencyRating;
  bonusText?: string | null;
}

export const Consistency = (props: ConsistencyProps): React.ReactElement => {
    const { rating, bonusText } = props;
    let color: string;
    let imgSrc: string;
    let imgWidth: number = 15;
    let imgHeight: number = imgWidth;
    switch (rating) {
        case ConsistencyRating.VeryConsistent:
            color = '#1d4ad1';
            imgSrc = very;
            break;
        case ConsistencyRating.Consistent:
            color = '#54ad1c';
            imgSrc = pretty;
            imgWidth = 23;
            imgHeight = 18;
            break;
        case ConsistencyRating.SomewhatConsistent:
            color = '#d1d11d';
            imgSrc = somewhat;
            break;
        case ConsistencyRating.WeakCorrelation:
            color = '#d1b31d';
            imgSrc = weak;
            break;
    }
    return (
        <div style={{ display: 'flex', alignItems: 'center', border: `1px solid ${color}`, padding: '4px', borderRadius: '4px', marginRight: '14px' }}>
            <img src={imgSrc} alt={rating} style={{ width: `${imgWidth}px`, height: `${imgHeight}px`, marginRight: '8px', imageRendering: 'pixelated' }} />
            <span style={{maxWidth: '100px', fontSize: '14px', color: '#555' }}>{rating}</span>
            {bonusText && <span style={{ marginLeft: '8px', fontSize: '12px', color: '#555' }}>{bonusText}</span>}
        </div>
    );
};

export default Consistency;
