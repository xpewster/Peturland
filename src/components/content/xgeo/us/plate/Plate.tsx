import React from 'react';
import { STATE_NAMES } from '../constants';
import { PLATE_STATE, PLATE_TYPE, PLATES } from './constants';

export interface PlateProps {
    state: STATE_NAMES;
    type: PLATE_TYPE;
    vanityOrOldIndex?: number;
    show?: boolean;
    blur?: number;
    showYears?: boolean;
}

const Plate = (props: PlateProps): React.ReactElement => {

    const getSrc = (): string => {
        let state;
        if (props.blur) {
            state = PLATE_STATE.BLUR;
        } else if (props.show) {
            state = PLATE_STATE.SHOW;
        } else {
            state = PLATE_STATE.BLANK;
        }
        return PLATES.get(props.state)!.get(props.type)![state];
    }

    return <img className='plate' style={{filter: `blur(${props.blur}px)`}} src={getSrc()}></img>
};

export default Plate;
