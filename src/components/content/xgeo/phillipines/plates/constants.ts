import _1_ from '../../../../../assets/plates/philippines/1.png';
import _2_ from '../../../../../assets/plates/philippines/2.png';
import _3_ from '../../../../../assets/plates/philippines/3.png';
import _4A_ from '../../../../../assets/plates/philippines/4A.png';
import _4B_ from '../../../../../assets/plates/philippines/4B.png';
import _5_ from '../../../../../assets/plates/philippines/5.png';
import _6_nir_ from '../../../../../assets/plates/philippines/6_nir.png';
import _7_nir_ from '../../../../../assets/plates/philippines/7_nir.png';
import _8_ from '../../../../../assets/plates/philippines/8.png';
import _9_ from '../../../../../assets/plates/philippines/9.png';
import _10_ from '../../../../../assets/plates/philippines/10.png';
import _11_ from '../../../../../assets/plates/philippines/11.png';
import _12_ from '../../../../../assets/plates/philippines/12.png';
import _13_ from '../../../../../assets/plates/philippines/13.png';
import _car_ from '../../../../../assets/plates/philippines/car.png';
import _ncr_ from '../../../../../assets/plates/philippines/ncr.png';
import { PLATE_TUPLE, PLATE_TYPE } from '../../us/plate/constants';
import { FILOREGIONS } from '../regions/constants';

export const PLATES = new Map<string, Map<PLATE_TYPE, PLATE_TUPLE[]>>([
    [FILOREGIONS.ILOCOS, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[_1_, _1_, _1_, [1000,1000, 7, 7], 2020]]],
    ])],
    [FILOREGIONS.CAGAYAN_VALLEY, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[_2_, _2_, _2_, [1000,1000, 7, 7], 2020]]],
    ])],
    [FILOREGIONS.CENTRAL_LUZON, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[_3_, _3_, _3_, [1000,1000, 7, 7], 2020]]],
    ])],
    [FILOREGIONS.CALABARZON, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[_4A_, _4A_, _4A_, [1000,1000, 7, 7], 2020]]],
    ])],
    [FILOREGIONS.MIMAROPA, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[_4B_, _4B_, _4B_, [1000,1000, 7, 7], 2020]]],
    ])],
    [FILOREGIONS.BICOL, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[_5_, _5_, _5_, [1000,1000, 7, 7], 2020]]],
    ])],
    [FILOREGIONS.NIR, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[_6_nir_, _6_nir_, _6_nir_, [1000,1000, 7, 7], 2020]]],
        [PLATE_TYPE.REGULAR, [[_7_nir_, _7_nir_, _7_nir_, [1000,1000, 7, 7], 2020]]],
    ])],
    [FILOREGIONS.WESTERN_VISAYAS, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[_6_nir_, _6_nir_, _6_nir_, [1000,1000, 7, 7], 2020]]],
    ])],
    [FILOREGIONS.CENTRAL_VISAYAS, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[_7_nir_, _7_nir_, _7_nir_, [1000,1000, 7, 7], 2020]]],
    ])],
    [FILOREGIONS.EASTERN_VISAYAS, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[_8_, _8_, _8_, [1000,1000, 7, 7], 2020]]],
    ])],
    [FILOREGIONS.ZAMBOANGA_PENINSULA, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[_9_, _9_, _9_, [1000,1000, 7, 7], 2020]]],
    ])],
    [FILOREGIONS.NORTHERN_MINDANAO, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[_10_, _10_, _10_, [1000,1000, 7, 7], 2020]]],
    ])],
    [FILOREGIONS.DAVAO, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[_11_, _11_, _11_, [1000,1000, 7, 7], 2020]]],
    ])],
    [FILOREGIONS.SOCCSKSARGEN, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[_12_, _12_, _12_, [1000,1000, 7, 7], 2020]]],
    ])],
    [FILOREGIONS.CARAGA, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[_13_, _13_, _13_, [1000,1000, 7, 7], 2020]]],
    ])],
    [FILOREGIONS.NCR, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[_ncr_, _ncr_, _ncr_, [1000,1000, 7, 7], 2020]]],
    ])],
    [FILOREGIONS.CAR, new Map<PLATE_TYPE, PLATE_TUPLE[]>([
        [PLATE_TYPE.REGULAR, [[_car_, _car_, _car_, [1000,1000, 7, 7], 2020]]],
    ])],
]);
