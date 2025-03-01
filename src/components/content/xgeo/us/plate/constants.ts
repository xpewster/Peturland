import maine_reg from '../../../../../assets/plates/maine/reg1999.png';
import maine_blank from '../../../../../assets/plates/maine/blank1999.png';
import maine_blur from '../../../../../assets/plates/maine/blur1999.png';
import { STATE_NAMES } from '../constants';


export enum PLATE_TYPE {
    REGULAR,
    VANITY,
    OLD,
}

export enum PLATE_STATE {
    SHOW = 0,
    BLANK = 1,
    BLUR = 2,
}

export type PLATE_TUPLE = [string, string, string, number, number?]; // reg, blank, blur, startYear, endYear?

export const PLATES = new Map<STATE_NAMES, Map<PLATE_TYPE, PLATE_TUPLE>>([
    [STATE_NAMES.MAINE, new Map<PLATE_TYPE, PLATE_TUPLE>([
        [PLATE_TYPE.REGULAR, [maine_reg, maine_blank, maine_blur, 1999]],
    ])],
])
