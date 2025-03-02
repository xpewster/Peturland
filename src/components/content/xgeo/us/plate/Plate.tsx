import React, { useState } from 'react';
import { STATE_NAMES, TERRITORY_NAMES } from '../constants';
import { PLATE_STATE, PLATE_TUPLE, PLATE_TYPE, PLATES } from './constants';
import { preloadImage } from '../../../../common/preloadImage';

export interface PlateProps {
    state?: STATE_NAMES | TERRITORY_NAMES;
    type?: PLATE_TYPE;
    vanityOrOldIndex?: number;
    show?: boolean;
    blur?: number;
    showYears?: boolean;
    tuple?: PLATE_TUPLE;
}

const Plate = (props: PlateProps): React.ReactElement => {
    const [plate, setPlate] = useState<PLATE_TUPLE | undefined>(undefined);

    const preloadPlate = (tuple: PLATE_TUPLE) => {
        preloadImage(tuple[0]);
        preloadImage(tuple[1]);
        preloadImage(tuple[2]);
    }

    const choosePlate = (tuple: PLATE_TUPLE, state: PLATE_STATE): string => {
        if (tuple !== plate) {
            setPlate(tuple);
            preloadPlate(tuple);
            return tuple[state];
        }
        return plate[state];
    }

    const getSrc = (): string => {
        let state;
        if (props.blur) {
            state = PLATE_STATE.BLUR;
        } else if (props.show) {
            state = PLATE_STATE.SHOW;
        } else {
            state = PLATE_STATE.BLANK;
        }
        if (props.tuple) {
            return choosePlate(props.tuple, state);
        }

        const state_plates = PLATES.get(props.state!)!;

        switch(props.type) {
            default:
            case PLATE_TYPE.REGULAR:
                if (props.state === STATE_NAMES.INDIANA) {
                    const reg_plates = state_plates.get(PLATE_TYPE.REGULAR)!;
                    return choosePlate(reg_plates[(props.vanityOrOldIndex ?? 0) % reg_plates.length], state);
                }
                return choosePlate(state_plates.get(PLATE_TYPE.REGULAR)![0], state);
            case PLATE_TYPE.OLD:
                const old_plates = state_plates.get(PLATE_TYPE.OLD) ?? [];
                if (!old_plates.length) {
                    return choosePlate(state_plates.get(PLATE_TYPE.REGULAR)![0], state);
                }
                return choosePlate(old_plates![(props.vanityOrOldIndex ?? 0) % old_plates.length], state);
            case PLATE_TYPE.VANITY:
                return choosePlate(state_plates.get(PLATE_TYPE.REGULAR)![0], state); // Todo: impl
        }
    }

    return (
        <div className='plate'>
            <img className='plate' style={{filter: `blur(${props.blur}px)`}} src={getSrc()}></img>
            {(props.showYears && plate) ? (plate.length === 4 ?
                <p className='p-old' style={{margin: 'auto', textAlign: 'center'}}>{`(${plate[3]}-Present)`}</p>
                : <p className='p-old' style={{margin: 'auto', textAlign: 'center'}}>{`(${plate[3]}-${plate[4]})`}</p>) : <></>}
        </div>
        
    )
};

export default Plate;
