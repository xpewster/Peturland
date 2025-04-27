import { PLATE_TUPLE, PLATE_TYPE } from "../../us/plate/constants";

import tasmania_reg from '../../../../../assets/plates/_australia/tasmania/reg2008.png';
import tasmania_blank from '../../../../../assets/plates/_australia/tasmania/blank2008.png';
import tasmania_blur from '../../../../../assets/plates/_australia/tasmania/blur2008.png';
import tasmania_o0_reg from '../../../../../assets/plates/_australia/tasmania/reg1999.png';
import tasmania_o0_blank from '../../../../../assets/plates/_australia/tasmania/blank1999.png';
import tasmania_o0_blur from '../../../../../assets/plates/_australia/tasmania/blur1999.png';

import victoria_reg from '../../../../../assets/plates/_australia/victoria/reg2016.png';
import victoria_blank from '../../../../../assets/plates/_australia/victoria/blank2016.png';
import victoria_blur from '../../../../../assets/plates/_australia/victoria/blur2016.png';
import victoria_o0_reg from '../../../../../assets/plates/_australia/victoria/reg2000.png';
import victoria_o0_blank from '../../../../../assets/plates/_australia/victoria/blank2000.png';
import victoria_o0_blur from '../../../../../assets/plates/_australia/victoria/blur2000.png';

import act_reg from '../../../../../assets/plates/_australia/act/reg2013.png';
import act_blank from '../../../../../assets/plates/_australia/act/blank2013.png';
import act_blur from '../../../../../assets/plates/_australia/act/blur2013.png';
import act_o0_reg from '../../../../../assets/plates/_australia/act/reg2007.png';
import act_o0_blank from '../../../../../assets/plates/_australia/act/blank2007.png';
import act_o0_blur from '../../../../../assets/plates/_australia/act/blur2007.png';

import nsw_reg from '../../../../../assets/plates/_australia/nsw/reg1996.png';
import nsw_blank from '../../../../../assets/plates/_australia/nsw/blank1996.png';
import nsw_blur from '../../../../../assets/plates/_australia/nsw/blur1996.png';
import nsw_slimline_reg from '../../../../../assets/plates/_australia/nsw/slimline_reg1996.png';
import nsw_slimline_blank from '../../../../../assets/plates/_australia/nsw/slimline_blank1996.png';
import nsw_slimline_blur from '../../../../../assets/plates/_australia/nsw/slimline_blur1996.png';

import queensland_reg from '../../../../../assets/plates/_australia/queensland/reg2001.png';
import queensland_blank from '../../../../../assets/plates/_australia/queensland/blank2001.png';
import queensland_blur from '../../../../../assets/plates/_australia/queensland/blur2001.png';

import sa_reg from '../../../../../assets/plates/_australia/sa/reg2009.png';
import sa_blank from '../../../../../assets/plates/_australia/sa/blank2009.png';
import sa_blur from '../../../../../assets/plates/_australia/sa/blur2009.png';

import nt_reg from '../../../../../assets/plates/_australia/nt/reg1979.png';
import nt_blank from '../../../../../assets/plates/_australia/nt/blank1979.png';
import nt_blur from '../../../../../assets/plates/_australia/nt/blur1979.png';

import wa_reg from '../../../../../assets/plates/_australia/wa/reg1997.png';
import wa_blank from '../../../../../assets/plates/_australia/wa/blank1997.png';
import wa_blur from '../../../../../assets/plates/_australia/wa/blur1997.png';


export enum AUSTRALIA_STATES {
    NORFOLK_ISLAND = "Norfolk Island",
    COCOS_ISLANDS = "Cocos (Keeling) Islands",
    CHRISTMAS_ISLAND = "Christmas Island",
    WESTERN_AUSTRALIA = "Western Australia",
    NORTHERN_TERRITORY = "Northern Territory",
    VICTORIA = "Victoria",
    NEW_SOUTH_WALES = "New South Wales",
    SOUTH_AUSTRALIA = "South Australia",
    AUSTRALIAN_CAPITAL_TERRITORY = "Australian Capital Territory",
    TASMANIA = "Tasmania",
    QUEENSLAND = "Queensland",
}

export const STATES = [
	AUSTRALIA_STATES.NORFOLK_ISLAND,
    AUSTRALIA_STATES.COCOS_ISLANDS,
    AUSTRALIA_STATES.CHRISTMAS_ISLAND,
    AUSTRALIA_STATES.WESTERN_AUSTRALIA,
    AUSTRALIA_STATES.NORTHERN_TERRITORY,
    AUSTRALIA_STATES.VICTORIA,
    AUSTRALIA_STATES.NEW_SOUTH_WALES,
    AUSTRALIA_STATES.SOUTH_AUSTRALIA,
    AUSTRALIA_STATES.AUSTRALIAN_CAPITAL_TERRITORY,
    AUSTRALIA_STATES.TASMANIA,
    AUSTRALIA_STATES.QUEENSLAND,
];

export const STATE_TO_REGION_BITFLAG = [
    0x2, // Norfolk Island
    0x2, // Cocos (Keeling) Islands
    0x2, // Christmas Island
    0x1, // Western Australia
    0x1, // Northern Territory
    0x1, // Victoria
    0x1, // New South Wales
    0x1, // South Australia
    0x1, // Australian Capital Territory
    0x1, // Tasmania
    0x1, // Queensland
];

export const PLATES = new Map<string, Map<PLATE_TYPE, PLATE_TUPLE[]>>([
    [AUSTRALIA_STATES.TASMANIA, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[tasmania_reg, tasmania_blank, tasmania_blur, [1000,1000, 7, 7], 2008]]],
        [PLATE_TYPE.OLD, [[tasmania_o0_reg, tasmania_o0_blank, tasmania_o0_blur, [1000,1000, 7, 7], 1999, 2008]]],
    ])],
    [AUSTRALIA_STATES.VICTORIA, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[victoria_reg, victoria_blank, victoria_blur, [1000,1000, 7, 7], 2016]]],
        [PLATE_TYPE.OLD, [[victoria_o0_reg, victoria_o0_blank, victoria_o0_blur, [1000,1000, 7, 7], 2000, 2016]]],
    ])],
    [AUSTRALIA_STATES.AUSTRALIAN_CAPITAL_TERRITORY, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[act_reg, act_blank, act_blur, [1000,1000, 7, 7], 2013]]],
        [PLATE_TYPE.OLD, [[act_o0_reg, act_o0_blank, act_o0_blur, [1000,1000, 7, 7], 2007, 2013]]],
    ])],
    [AUSTRALIA_STATES.NEW_SOUTH_WALES, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[nsw_reg, nsw_blank, nsw_blur, [1000,1000, 7, 7], 1996]]],
        [PLATE_TYPE.VANITY, [[nsw_slimline_reg, nsw_slimline_blank, nsw_slimline_blur, [1000,1000, 7, 7], 1996]]],
        [PLATE_TYPE.OLD, [[nsw_reg, nsw_blank, nsw_blur, [1000,1000, 7, 7], 1996]]],
    ])],
    [AUSTRALIA_STATES.QUEENSLAND, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[queensland_reg, queensland_blank, queensland_blur, [1000,1000, 7, 7], 2001]]],
    ])],
    [AUSTRALIA_STATES.SOUTH_AUSTRALIA, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[sa_reg, sa_blank, sa_blur, [1000,1000, 7, 7], 2009]]],
    ])],
    [AUSTRALIA_STATES.NORTHERN_TERRITORY, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[nt_reg, nt_blank, nt_blur, [1000,1000, 7, 7], 1979]]],
    ])],
    [AUSTRALIA_STATES.WESTERN_AUSTRALIA, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[wa_reg, wa_blank, wa_blur, [1000,1000, 7, 7], 1997]]],
    ])],
]);
