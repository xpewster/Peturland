import React from 'react';
import { STATE_NAMES } from '../constants';
import glur from 'glur';

import maine_blur from '../../../../../assets/plates/maine/blur1999.png'

export interface PlateProps {
    state: STATE_NAMES;
    vanity?: number;
    blur?: number;
    showYears?: boolean;
}

const Plate = (props: PlateProps): React.ReactElement => {

    if (props.blur) {
        console.log(maine_blur)
        return <img className='plate' style={{filter: `blur(${props.blur}px)`}} src={maine_blur}></img>
    }
    
    return (
        <></>
    );
};

export default Plate;
