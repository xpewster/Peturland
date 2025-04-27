import eastern_cape_reg from '../../../../../assets/plates/_za/eastern_cape/reg1998.png';
import eastern_cape_blank from '../../../../../assets/plates/_za/eastern_cape/blank1998.png';
import eastern_cape_blur from '../../../../../assets/plates/_za/eastern_cape/blur1998.png';

import free_state_reg from '../../../../../assets/plates/_za/free_state/reg2002.png';
import free_state_blank from '../../../../../assets/plates/_za/free_state/blank2002.png';
import free_state_blur from '../../../../../assets/plates/_za/free_state/blur2002.png';

import gauteng_reg from '../../../../../assets/plates/_za/gauteng/reg1997.png';
import gauteng_blank from '../../../../../assets/plates/_za/gauteng/blank1997.png';
import gauteng_blur from '../../../../../assets/plates/_za/gauteng/blur1997.png';

import kwazulu_natal_reg from '../../../../../assets/plates/_za/kwazulu-natal/reg2024.png';
import kwazulu_natal_blank from '../../../../../assets/plates/_za/kwazulu-natal/blank2024.png';
import kwazulu_natal_blur from '../../../../../assets/plates/_za/kwazulu-natal/blur2024.png';
import kwazulu_natal_o0_reg from '../../../../../assets/plates/_za/kwazulu-natal/reg1997.png';
import kwazulu_natal_o0_blank from '../../../../../assets/plates/_za/kwazulu-natal/blank1997.png';
import kwazulu_natal_o0_blur from '../../../../../assets/plates/_za/kwazulu-natal/blur1997.png';

import limpopo_reg from '../../../../../assets/plates/_za/limpopo/reg2007.png';
import limpopo_blank from '../../../../../assets/plates/_za/limpopo/blank2007.png';
import limpopo_blur from '../../../../../assets/plates/_za/limpopo/blur2007.png';

import mpumalanga_reg from '../../../../../assets/plates/_za/mpumalanga/reg1998.png';
import mpumalanga_blank from '../../../../../assets/plates/_za/mpumalanga/blank1998.png';
import mpumalanga_blur from '../../../../../assets/plates/_za/mpumalanga/blur1998.png';

import north_west_reg from '../../../../../assets/plates/_za/north_west/reg1998.png';
import north_west_blank from '../../../../../assets/plates/_za/north_west/blank1998.png';
import north_west_blur from '../../../../../assets/plates/_za/north_west/blur1998.png';

import northern_cape_reg from '../../../../../assets/plates/_za/northern_cape/reg1998.png';
import northern_cape_blank from '../../../../../assets/plates/_za/northern_cape/blank1998.png';
import northern_cape_blur from '../../../../../assets/plates/_za/northern_cape/blur1998.png';

import western_cape_reg from '../../../../../assets/plates/_za/western_cape/reg2000.png';
import western_cape_blank from '../../../../../assets/plates/_za/western_cape/blank2000.png';
import western_cape_blur from '../../../../../assets/plates/_za/western_cape/blur2000.png';
import { SOUTH_AFRICA_PROVINCES } from '../constants';
import { PLATE_TUPLE, PLATE_TYPE } from '../../us/plate/constants';

export const PLATES = new Map<string, Map<PLATE_TYPE, PLATE_TUPLE[]>>([
    [SOUTH_AFRICA_PROVINCES.EASTERN_CAPE, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[eastern_cape_reg, eastern_cape_blank, eastern_cape_blur, [1000,1000, 7, 7], 1998]]],
    ])],
    [SOUTH_AFRICA_PROVINCES.FREE_STATE, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[free_state_reg, free_state_blank, free_state_blur, [1000,1000, 7, 7], 2002]]],
    ])],
    [SOUTH_AFRICA_PROVINCES.GAUTENG, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[gauteng_reg, gauteng_blank, gauteng_blur, [1000,1000, 7, 7], 1997]]],
    ])],
    [SOUTH_AFRICA_PROVINCES.KWAZULU_NATAL, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[kwazulu_natal_reg, kwazulu_natal_blank, kwazulu_natal_blur, [1000,1000, 7, 7], 2024]]],
        [PLATE_TYPE.OLD, [[kwazulu_natal_o0_reg, kwazulu_natal_o0_blank, kwazulu_natal_o0_blur, [1000,1000, 7, 7], 1997, 2023]]],
    ])],
    [SOUTH_AFRICA_PROVINCES.LIMPOPO, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[limpopo_reg, limpopo_blank, limpopo_blur, [1000,1000, 7, 7], 2007]]],
    ])],
    [SOUTH_AFRICA_PROVINCES.MPUMALANGA, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[mpumalanga_reg, mpumalanga_blank, mpumalanga_blur, [1000,1000, 7, 7], 1998]]],
    ])],
    [SOUTH_AFRICA_PROVINCES.NORTH_WEST, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[north_west_reg, north_west_blank, north_west_blur, [1000,1000, 7, 7], 1998]]],
    ])],
    [SOUTH_AFRICA_PROVINCES.NORTHERN_CAPE, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[northern_cape_reg, northern_cape_blank, northern_cape_blur, [1000,1000, 7, 7], 1998]]],
    ])],
    [SOUTH_AFRICA_PROVINCES.WESTERN_CAPE, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[western_cape_reg, western_cape_blank, western_cape_blur, [1000,1000, 7, 7], 2000]]],
    ])],
]);
