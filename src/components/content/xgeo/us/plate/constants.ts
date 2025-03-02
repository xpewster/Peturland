import maine_reg from '../../../../../assets/plates/maine/reg1999.png';
import maine_blank from '../../../../../assets/plates/maine/blank1999.png';
import maine_blur from '../../../../../assets/plates/maine/blur1999.png';
import new_hampshire_reg from '../../../../../assets/plates/new_hampshire/reg1999.png';
import new_hampshire_blank from '../../../../../assets/plates/new_hampshire/blank1999.png';
import new_hampshire_blur from '../../../../../assets/plates/new_hampshire/blur1999.png';
import vermont_reg from '../../../../../assets/plates/vermont/reg1990.png';
import vermont_blank from '../../../../../assets/plates/vermont/blank1990.png';
import vermont_blur from '../../../../../assets/plates/vermont/blur1990.png';
import new_york_reg from '../../../../../assets/plates/new_york/reg2020.png';
import new_york_blank from '../../../../../assets/plates/new_york/blank2020.png';
import new_york_blur from '../../../../../assets/plates/new_york/blur2020.png';
import new_york_o0_reg from '../../../../../assets/plates/new_york/reg2010.png';
import new_york_o0_blank from '../../../../../assets/plates/new_york/blank2010.png';
import new_york_o0_blur from '../../../../../assets/plates/new_york/blur2010.png';
import new_york_o1_reg from '../../../../../assets/plates/new_york/reg2001.png';
import new_york_o1_blank from '../../../../../assets/plates/new_york/blank2001.png';
import new_york_o1_blur from '../../../../../assets/plates/new_york/blur2001.png';
import pennsylvania_reg from '../../../../../assets/plates/pennsylvania/reg2004.png';
import pennsylvania_blank from '../../../../../assets/plates/pennsylvania/blank2004.png';
import pennsylvania_blur from '../../../../../assets/plates/pennsylvania/blur2004.png';
import pennsylvania_o0_reg from '../../../../../assets/plates/pennsylvania/reg1999.png';
import pennsylvania_o0_blank from '../../../../../assets/plates/pennsylvania/blank1999.png';
import pennsylvania_o0_blur from '../../../../../assets/plates/pennsylvania/blur1999.png';
import ohio_reg from '../../../../../assets/plates/ohio/reg2021.png';
import ohio_blank from '../../../../../assets/plates/ohio/blank2021.png';
import ohio_blur from '../../../../../assets/plates/ohio/blur2021.png';
import ohio_o0_reg from '../../../../../assets/plates/ohio/reg2013.png';
import ohio_o0_blank from '../../../../../assets/plates/ohio/blank2013.png';
import ohio_o0_blur from '../../../../../assets/plates/ohio/blur2013.png';
import ohio_o1_reg from '../../../../../assets/plates/ohio/reg2009.png';
import ohio_o1_blank from '../../../../../assets/plates/ohio/blank2009.png';
import ohio_o1_blur from '../../../../../assets/plates/ohio/blur2009.png';
import ohio_o2_reg from '../../../../../assets/plates/ohio/reg2004.png';
import ohio_o2_blank from '../../../../../assets/plates/ohio/blank2004.png';
import ohio_o2_blur from '../../../../../assets/plates/ohio/blur2004.png';
import ohio_o3_reg from '../../../../../assets/plates/ohio/reg2001.png';
import ohio_o3_blank from '../../../../../assets/plates/ohio/blank2001.png';
import ohio_o3_blur from '../../../../../assets/plates/ohio/blur2001.png';
import ohio_o4_reg from '../../../../../assets/plates/ohio/reg1997.png';
import ohio_o4_blank from '../../../../../assets/plates/ohio/blank1997.png';
import ohio_o4_blur from '../../../../../assets/plates/ohio/blur1997.png';
import michigan_reg from '../../../../../assets/plates/michigan/reg2013.png';
import michigan_blank from '../../../../../assets/plates/michigan/blank2013.png';
import michigan_blur from '../../../../../assets/plates/michigan/blur2013.png';
import michigan_o0_reg from '../../../../../assets/plates/michigan/reg2007.png';
import michigan_o0_blank from '../../../../../assets/plates/michigan/blank2007.png';
import michigan_o0_blur from '../../../../../assets/plates/michigan/blur2007.png';
import michigan_o1_reg from '../../../../../assets/plates/michigan/reg1983.png';
import michigan_o1_blank from '../../../../../assets/plates/michigan/blank1983.png';
import michigan_o1_blur from '../../../../../assets/plates/michigan/blur1983.png';
import indiana_reg from '../../../../../assets/plates/indiana/reg2017.png';
import indiana_blank from '../../../../../assets/plates/indiana/blank2017.png';
import indiana_blur from '../../../../../assets/plates/indiana/blur2017.png';
import indiana2_reg from '../../../../../assets/plates/indiana/reg2011.png';
import indiana2_blank from '../../../../../assets/plates/indiana/blank2011.png';
import indiana2_blur from '../../../../../assets/plates/indiana/blur2011.png';
import indiana_o0_reg from '../../../../../assets/plates/indiana/reg2013.png';
import indiana_o0_blank from '../../../../../assets/plates/indiana/blank2013.png';
import indiana_o0_blur from '../../../../../assets/plates/indiana/blur2013.png';
import indiana_o1_reg from '../../../../../assets/plates/indiana/reg2008.png';
import indiana_o1_blank from '../../../../../assets/plates/indiana/blank2008.png';
import indiana_o1_blur from '../../../../../assets/plates/indiana/blur2008.png';
import indiana_o2_reg from '../../../../../assets/plates/indiana/reg2007.png';
import indiana_o2_blank from '../../../../../assets/plates/indiana/blank2007.png';
import indiana_o2_blur from '../../../../../assets/plates/indiana/blur2007.png';
import { STATE_NAMES, TERRITORY_NAMES } from '../constants';


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

export const PLATES = new Map<STATE_NAMES | TERRITORY_NAMES, Map<PLATE_TYPE, PLATE_TUPLE[]>>([
    [STATE_NAMES.MAINE, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[maine_reg, maine_blank, maine_blur, 1999]]]
    ])],
    [STATE_NAMES.NEW_HAMPSHIRE, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[new_hampshire_reg, new_hampshire_blank, new_hampshire_blur, 1999]]]
    ])],
    [STATE_NAMES.VERMONT, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[vermont_reg, vermont_blank, vermont_blur, 1990]]]
    ])],
    [STATE_NAMES.NEW_YORK, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[new_york_reg, new_york_blank, new_york_blur, 2020]]],
        [PLATE_TYPE.OLD, [
            [new_york_o0_reg, new_york_o0_blank, new_york_o0_blur, 2010, 2020],
            [new_york_o1_reg, new_york_o1_blank, new_york_o1_blur, 2001, 2010]
        ]]
    ])],
    [STATE_NAMES.PENNSYLVANIA, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[pennsylvania_reg, pennsylvania_blank, pennsylvania_blur, 2004]]],
        [PLATE_TYPE.OLD, [
            [pennsylvania_o0_reg, pennsylvania_o0_blank, pennsylvania_o0_blur, 1999, 2004]
        ]]
    ])],
    [STATE_NAMES.OHIO, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[ohio_reg, ohio_blank, ohio_blur, 2021]]],
        [PLATE_TYPE.OLD, [
            [ohio_o0_reg, ohio_o0_blank, ohio_o0_blur, 2013, 2021],
            [ohio_o1_reg, ohio_o1_blank, ohio_o1_blur, 2009, 2013],
            [ohio_o2_reg, ohio_o2_blank, ohio_o2_blur, 2004, 2009],
            [ohio_o3_reg, ohio_o3_blank, ohio_o3_blur, 2001, 2004],
            [ohio_o4_reg, ohio_o4_blank, ohio_o4_blur, 1997, 2001]
        ]]
    ])],
    [STATE_NAMES.MICHIGAN, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[michigan_reg, michigan_blank, michigan_blur, 2013]]],
        [PLATE_TYPE.OLD, [
            [michigan_o0_reg, michigan_o0_blank, michigan_o0_blur, 2007, 2013],
            [michigan_o1_reg, michigan_o1_blank, michigan_o1_blur, 1983, 2007]
        ]]
    ])],
    [STATE_NAMES.INDIANA, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [
            [indiana_reg, indiana_blank, indiana_blur, 2017],
            [indiana2_reg, indiana2_blank, indiana2_blur, 2011],
        ]],
        [PLATE_TYPE.OLD, [
            [indiana_o0_reg, indiana_o0_blank, indiana_o0_blur, 2013, 2016],
            [indiana_o1_reg, indiana_o1_blank, indiana_o1_blur, 2008, 2013],
            [indiana_o2_reg, indiana_o2_blank, indiana_o2_blur, 2007, 2011],
        ]]
    ])],
]);