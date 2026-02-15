import blacksticker from '../../../../../assets/vn/poles/blacksticker.png';
import blacksticker_map from '../../../../../assets/vn/poles/blacksticker-map.png';
import centralA from '../../../../../assets/vn/poles/centralA.png';
import centralA_map from '../../../../../assets/vn/poles/centralA-map.png';
import conesnakeguard from '../../../../../assets/vn/poles/conesnakeguard.png';
import conesnakeguard_map from '../../../../../assets/vn/poles/conesnakeguard-map.png';
import doubleholey from '../../../../../assets/vn/poles/doubleholey.png';
import doubleholey_map from '../../../../../assets/vn/poles/doubleholey-map.png';
import extendedtop from '../../../../../assets/vn/poles/extendedtop.png';
import extendedtop_map from '../../../../../assets/vn/poles/extendedtop-map.png';
import highholey from '../../../../../assets/vn/poles/highholey.png';
import highholey_map from '../../../../../assets/vn/poles/highholey-map.png';
import minibar from '../../../../../assets/vn/poles/minibar.png';
import minibar_map from '../../../../../assets/vn/poles/minibar-map.png';
import mountedspool from '../../../../../assets/vn/poles/mountedspool.png';
import mountedspool_map from '../../../../../assets/vn/poles/mountedspool-map.png';
import normalholey from '../../../../../assets/vn/poles/normalholey.png';
import normalholey_map from '../../../../../assets/vn/poles/normalholey-map.png';
import onesidedtop from '../../../../../assets/vn/poles/onesidedtop.png';
import onesidedtop_map from '../../../../../assets/vn/poles/onesidedtop-map.png';
import pinhole from '../../../../../assets/vn/poles/pinhole.png';
import pinhole_map from '../../../../../assets/vn/poles/pinhole-map.png';
import sidemountedoffsetlamp from '../../../../../assets/vn/poles/sidemountedoffsetlamp.png';
import sidemountedoffsetlamp_map from '../../../../../assets/vn/poles/sidemountedoffsetlamp-map.png';
import silversnakeguard from '../../../../../assets/vn/poles/silversnakeguard.png';
import silversnakeguard_map from '../../../../../assets/vn/poles/silversnakeguard-map.png';
import smooth from '../../../../../assets/vn/poles/smooth.png';
import smooth_map from '../../../../../assets/vn/poles/smooth-map.png';
import southtriangle from '../../../../../assets/vn/poles/southtriangle.png';
import southtriangle_map from '../../../../../assets/vn/poles/southtriangle-map.png';
import straightonoffsetlamp from '../../../../../assets/vn/poles/straightonoffsetlamp.png';
import straightonoffsetlamp_map from '../../../../../assets/vn/poles/straightonoffsetlamp-map.png';
import topmountedlamp from '../../../../../assets/vn/poles/topmountedlamp.png';
import topmountedlamp_map from '../../../../../assets/vn/poles/topmountedlamp-map.png';
import trapezoid from '../../../../../assets/vn/poles/trapezoid.png';
import trapezoid_map from '../../../../../assets/vn/poles/trapezoid-map.png';
import tripletrapezoid from '../../../../../assets/vn/poles/tripletrapezoid.png';
import tripletrapezoid_map from '../../../../../assets/vn/poles/tripletrapezoid-map.png';
import ultratall from '../../../../../assets/vn/poles/ultratall.png';
import ultratall_map from '../../../../../assets/vn/poles/ultratall-map.png';

// === Pole image arrays ===

export const POLES = [
    blacksticker,           // 0
    centralA,               // 1
    conesnakeguard,         // 2
    doubleholey,            // 3
    extendedtop,            // 4
    highholey,              // 5
    minibar,                // 6
    mountedspool,           // 7
    normalholey,            // 8
    onesidedtop,            // 9
    pinhole,                // 10
    sidemountedoffsetlamp,  // 11
    silversnakeguard,       // 12
    smooth,                 // 13
    southtriangle,          // 14
    straightonoffsetlamp,   // 15
    topmountedlamp,         // 16
    trapezoid,              // 17
    tripletrapezoid,        // 18
    ultratall,              // 19
];

export const POLES_MAP = [
    blacksticker_map,           // 0
    centralA_map,               // 1
    conesnakeguard_map,         // 2
    doubleholey_map,            // 3
    extendedtop_map,            // 4
    highholey_map,              // 5
    minibar_map,                // 6
    mountedspool_map,           // 7
    normalholey_map,            // 8
    onesidedtop_map,            // 9
    pinhole_map,                // 10
    sidemountedoffsetlamp_map,  // 11
    silversnakeguard_map,       // 12
    smooth_map,                 // 13
    southtriangle_map,          // 14
    straightonoffsetlamp_map,   // 15
    topmountedlamp_map,         // 16
    trapezoid_map,              // 17
    tripletrapezoid_map,        // 18
    ultratall_map,              // 19
];

export const POLE_NAMES = [
    'Black Sticker',
    'Central A',
    'Cone Snake Guard',
    'Double Holey Pole',
    'Extended Top',
    'High Holey Pole',
    'Minibar',
    'Mounted Spool',
    'Half Holey Pole',
    'One-Sided Top',
    'Pinhole  Pole',
    'Side-Mounted Offset Lamp',
    'Silver Snake Guard',
    'Smooth Pole',
    'South Triangle',
    'Straight-On Offset Lamp',
    'Top-Mounted Lamp',
    'Trapezoid Pole',
    'Triple Trapezoid',
    'Ultratall Pole',
];

// Show-index mapping (each pole maps to its own map variant)
export const POLE_SHOW_INDEX: number[][] = Array.from({ length: 20 }, (_, i) => [i]);

// === Region definitions ===

// Province indices reference (matching PROVINCES array & vietnam.json GeoJSON):
//  0: An Giang        1: Bà Rịa-Vũng Tàu  2: Bắc Giang       3: Bắc Kạn
//  4: Bạc Liêu        5: Bắc Ninh          6: Bến Tre          7: Bình Định
//  8: Bình Dương       9: Bình Phước       10: Bình Thuận       11: Cà Mau
// 12: Cần Thơ         13: Cao Bằng         14: Đà Nẵng         15: Đắk Lắk
// 16: Đắk Nông        17: Điện Biên        18: Đồng Nai        19: Đồng Tháp
// 20: Gia Lai         21: Hà Giang         22: Hà Nam           23: Hà Nội
// 24: Hà Tĩnh         25: Hải Dương        26: Hải Phòng        27: Hậu Giang
// 28: Hòa Bình        29: Hưng Yên         30: Khánh Hòa        31: Kiên Giang
// 32: Kon Tum          33: Lai Châu         34: Lâm Đồng         35: Lạng Sơn
// 36: Lào Cai          37: Long An           38: Nam Định          39: Nghệ An
// 40: Ninh Bình        41: Ninh Thuận       42: Phú Thọ          43: Phú Yên
// 44: Quảng Bình       45: Quảng Nam        46: Quảng Ngãi       47: Quảng Ninh
// 48: Quảng Trị        49: Sóc Trăng        50: Sơn La           51: Tây Ninh
// 52: Thái Bình        53: Thái Nguyên      54: Thanh Hóa        55: Thừa Thiên-Huế
// 56: Tiền Giang       57: TP. HCM          58: Trà Vinh         59: Tuyên Quang
// 60: Vĩnh Long        61: Vĩnh Phúc        62: Yên Bái

export const VN_REGION_NAMES = [
    'Northeast',
    'Northwest',
    'Red River Delta',
    'North Central Coast',
    'South Central Coast',
    'Central Highlands',
    'Southeast',
    'Mekong River Delta',
];

const REGION_PROVINCES: readonly number[][] = [
    /* 0 Northeast       */ [2, 3, 13, 21, 35, 36, 42, 47, 53, 59, 62],
    /* 1 Northwest       */ [17, 28, 33, 50],
    /* 2 Red River Delta */ [5, 22, 23, 25, 26, 29, 38, 40, 52, 61],
    /* 3 N Central Coast */ [24, 39, 44, 48, 54, 55],
    /* 4 S Central Coast */ [7, 10, 14, 30, 41, 43, 45, 46],
    /* 5 C Highlands     */ [15, 16, 20, 32, 34],
    /* 6 Southeast       */ [1, 8, 9, 18, 51, 57],
    /* 7 Mekong Delta    */ [0, 4, 6, 11, 12, 19, 27, 31, 37, 49, 56, 58, 60],
];

// Region bitflag constants
const NE = 1, NW = 2, RRD = 4, NC = 8, SC = 16, CH = 32, SE = 64, MK = 128;

// === Pole-to-region mapping (bitflags) ===

const POLE_REGION_FLAGS: number[] = [
    /*  0 blacksticker          */ NE | NW | RRD,
    /*  1 centralA              */ NC | SC | CH,
    /*  2 conesnakeguard        */ CH,
    /*  3 doubleholey           */ NE | NW | RRD | NC,
    /*  4 extendedtop           */ NC | SC | CH | SE | MK,
    /*  5 highholey             */ NE | NW | RRD | NC,
    /*  6 minibar               */ NE | NW | RRD | NC | SC | CH,
    /*  7 mountedspool          */ SC | SE | MK,
    /*  8 normalholey           */ NE | NW | RRD | NC | SC | CH | SE | MK,
    /*  9 onesidedtop           */ SC | SE | MK,
    /* 10 pinhole               */ NC | SC | CH | SE | MK,
    /* 11 sidemountedoffsetlamp */ SC,
    /* 12 silversnakeguard      */ SC | CH | SE | MK,
    /* 13 smooth                */ NE | NW | RRD | NC,
    /* 14 southtriangle         */ SE | MK,
    /* 15 straightonoffsetlamp  */ SC | SE | MK,
    /* 16 topmountedlamp        */ NE | NW | RRD,
    /* 17 trapezoid             */ NE | NW | RRD | NC | SC | CH,
    /* 18 tripletrapezoid       */ NE | NW | RRD | NC,
    /* 19 ultratall             */ NE | NW | RRD | NC,
];

// === Computed mappings ===

// Province → region lookup
const provinceToRegion: number[] = new Array(63).fill(-1);
REGION_PROVINCES.forEach((provinces, regionIdx) => {
    provinces.forEach(p => { provinceToRegion[p] = regionIdx; });
});

// For each pole, which province indices are valid (expanded from region flags)
export const POLE_TO_PROVINCE_INDICES: number[][] = POLE_REGION_FLAGS.map(flags => {
    const provinces: number[] = [];
    for (let r = 0; r < 8; r++) {
        if (flags & (1 << r)) provinces.push(...REGION_PROVINCES[r]);
    }
    return provinces.sort((a, b) => a - b);
});

// For each province (0-62), which pole indices are found there
export const PROVINCE_INDEX_TO_POLE_INDICES: number[][] = Array.from({ length: 63 }, (_, pIdx) => {
    const region = provinceToRegion[pIdx];
    if (region < 0) return [];
    return POLE_REGION_FLAGS
        .map((flags, poleIdx) => (flags & (1 << region)) ? poleIdx : -1)
        .filter(idx => idx >= 0);
});

// Highlight groups: for each province, all provinces in its region (for hover highlighting)
export const HIGHLIGHT_GROUPS: number[][] = Array.from({ length: 63 }, (_, pIdx) => {
    const region = provinceToRegion[pIdx];
    return region >= 0 ? [...REGION_PROVINCES[region]] : [];
});

// Per-province region bitflag (for enableRegions filtering)
export const VIETNAM_REGIONS_BITFLAG: number[] = Array.from({ length: 63 }, (_, pIdx) => {
    const region = provinceToRegion[pIdx];
    return region >= 0 ? (1 << region) : 0;
});