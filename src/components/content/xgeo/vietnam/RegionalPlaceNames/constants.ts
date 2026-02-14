// Place name elements array - indices 0-28 are ethnic minority, 29-40 are Sino-Vietnamese
export const PLACE_NAME_ELEMENTS = [
    // === Ethnic Minority Elements (0-28) ===
    // Northern Highlands (Tày/Nùng/Thái/Mường)
    'Bản',          // 0
    'Nà / Na',      // 1
    'Chiềng',       // 2
    'Nậm',          // 3
    'Mường',        // 4
    'Lũng / Lung',  // 5
    'Pắc / Pắk',   // 6

    // North-Central
    'Khe',          // 7

    // Central Vietnam — Cham
    'Trà (Cham)',   // 8
    'Đà (Cham)',    // 9

    // Central Highlands — Ede
    'Ea',           // 10
    'Buôn',         // 11
    'Krông',        // 12
    'Đrây / Dray',  // 13

    // Central Highlands — Jarai
    'Ia',           // 14
    'Plei / Plây',  // 15

    // Central Highlands — Bahnar
    'Kon',          // 16
    'Đắk',         // 17

    // Central Highlands — Shared
    'Chu / Chư',   // 18
    'Yang',         // 19

    // Southeast — Stieng
    'Bù',           // 20
    'Tà',           // 21

    // Mekong Delta — Khmer
    'Rạch',         // 22
    'Giồng',        // 23

    // New ethnic elements
    'A',            // 24
    'Đạ',          // 25
    'Ba',           // 26
    'Pa',           // 27
    'Làng',         // 28

    // === Sino-Vietnamese Elements (29-40) ===
    // Concentrated in South
    'Tân',          // 29
    'Mỹ',           // 30
    'Thạnh',        // 31
    'Long',         // 32
    'Gò',           // 33

    // Concentrated in North
    'Hải',          // 34
    'Thái',         // 35

    // Concentrated in Central
    'Quảng',        // 36
    'Đức',          // 37
    'Nghĩa',        // 38
    'Thuận',        // 39

    // New Sino-Vietnamese
    'Hương',        // 40
];

export const PLACE_NAME_DESCRIPTIONS = [
    // Ethnic (0-28)
    'Village / hamlet — Tày, Nùng, Thái',
    'Rice paddy / flatland — Tày, Nùng, Thái',
    'Sub-district / community — Thái',
    'River / stream / water — Thái',
    'Domain / territory — Mường, Thái',
    'Valley between karst — Tày, Nùng',
    'Confluence / river mouth — Tày, Nùng',
    'Stream / gully — Vietnamese',
    'Water / settlement — Cham',
    'Water / river — Cham',
    'Water / stream / river — Ede',
    'Village — Ede',
    'River / large waterway — Ede',
    'Waterfall — Ede',
    'Water / stream / river — Jarai',
    'Village — Jarai',
    'Village — Bahnar',
    'Water / stream — Bahnar, Mnong',
    'Mountain / peak — Bahnar, Jarai, Ede',
    'Spirit / god — Ede, Jarai',
    'Water / stream — Stieng',
    'Stream / place element — Stieng, Khmer',
    'Canal / small waterway — Viet-Khmer',
    'Elevated sandy ridge — Khmer-origin',
    'Place element — Cham / Katuic',
    'Water / stream — K\'Ho',
    'Place element — Cham / Hrê',
    'Field / flat area — Thái / Katuic',
    'Village — Vietnamese (regional)',
    // Sino-Vietnamese (29-40)
    '新 New — frontier settlement',
    '美 Beautiful / good — aspirational settlement',
    '盛 Prosperous (southern pronunciation)',
    '龍 Dragon — water-associated',
    'Mound / low hill — delta landmark',
    '海 Sea / ocean — coastal settlements',
    '太 Great / supreme — administrative naming',
    '廣 Wide / broad — regional convention',
    '德 Virtue / morality — Confucian',
    '義 Righteousness / loyalty — Confucian',
    '順 Favorable / smooth — Nguyễn dynasty',
    '香 Fragrance / Nguyễn dynasty / Huế association',
];

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

// For each element, which province indices are valid answers
export const ELEMENT_TO_PROVINCE_INDICES: number[][] = [
    // 0: Bản — +Nghệ An, +Hà Tĩnh, +Quảng Bình
    [3, 13, 17, 21, 24, 28, 33, 35, 36, 39, 44, 50, 53, 54, 59, 62],
    // 1: Nà / Na
    [3, 13, 17, 21, 33, 35, 50, 53, 59, 62],
    // 2: Chiềng — removed Lào Cai, Lai Châu
    [17, 28, 50, 54],
    // 3: Nậm
    [17, 33, 50],
    // 4: Mường — removed Phú Thọ, Hòa Bình, Yên Bái
    [17, 33, 39, 50, 54],
    // 5: Lũng / Lung
    [3, 13, 21, 35],
    // 6: Pắc / Pắk
    [3, 13, 21, 33, 35],
    // 7: Khe — removed Thái Nguyên, Thừa Thiên Huế, Bắc Giang
    [24, 39, 44, 48],
    // 8: Trà (Cham)
    [7, 45, 46, 55],
    // 9: Đà (Cham)
    [14, 34],
    // 10: Ea — only Đắk Lắk
    [15],
    // 11: Buôn
    [15, 16],
    // 12: Krông
    [15, 16],
    // 13: Đrây / Dray
    [15],
    // 14: Ia
    [15, 20, 32],
    // 15: Plei / Plây
    [20, 32],
    // 16: Kon
    [20, 32],
    // 17: Đắk
    [15, 16, 20, 32],
    // 18: Chu / Chư
    [15, 20],
    // 19: Yang
    [15, 20],
    // 20: Bù
    [8, 9],
    // 21: Tà — +Bình Thuận, +Ninh Thuận
    [9, 10, 18, 41],
    // 22: Rạch — -Cà Mau, -Bạc Liêu, -Sóc Trăng, +Long An, +HCM
    [12, 27, 31, 37, 57],
    // 23: Giồng
    [6, 19, 31, 56],
    // 24: A — Quảng Nam, Huế
    [45, 55],
    // 25: Đạ — Lâm Đồng
    [34],
    // 26: Ba — Quảng Ngãi, Khánh Hòa
    [30, 46],
    // 27: Pa — Lai Châu, Sơn La, Quảng Nam
    [33, 45, 50],
    // 28: Làng — Thanh Hóa, Gia Lai
    [20, 54],

    // === Sino-Vietnamese (29-40) ===
    // 29: Tân — added coastal provinces up to Ninh Thuận
    [0, 1, 4, 6, 8, 10, 11, 12, 19, 27, 31, 37, 41, 49, 51, 56, 57, 58, 60],
    // 30: Mỹ — all Mekong delta provinces
    [0, 4, 6, 11, 12, 19, 27, 31, 37, 49, 56, 58, 60],
    // 31: Thạnh — all Mekong delta provinces
    [0, 4, 6, 11, 12, 19, 27, 31, 37, 49, 56, 58, 60],
    // 32: Long — all Mekong delta provinces
    [0, 4, 6, 11, 12, 19, 27, 31, 37, 49, 56, 58, 60],
    // 33: Gò
    [31, 51, 56, 57],
    // 34: Hải
    [25, 26, 38, 48, 52],
    // 35: Thái — all Red River Delta provinces
    [5, 22, 23, 25, 26, 29, 38, 40, 52, 61],
    // 36: Quảng
    [44, 45, 46, 47, 48, 55],
    // 37: Đức — removed Bình Thuận
    [24, 39, 46],
    // 38: Nghĩa — all north-central provinces + existing outliers
    [24, 39, 44, 46, 48, 54, 55, 62],
    // 39: Thuận — all provinces between Huế and HCMC
    [1, 7, 8, 9, 10, 14, 18, 30, 34, 41, 43, 45, 46, 51, 55],
    // 40: Hương — Huế
    [55],
];

// For each province (GeoJSON region 0-62), which element indices are found there.
// Reverse mapping of ELEMENT_TO_PROVINCE_INDICES.
export const PROVINCE_INDEX_TO_ELEMENT_INDICES: number[][] = [
    /* 0  An Giang      */ [29, 30, 31, 32],
    /* 1  Bà Rịa-VT     */ [29, 39],
    /* 2  Bắc Giang     */ [],
    /* 3  Bắc Kạn       */ [0, 1, 5, 6],
    /* 4  Bạc Liêu      */ [29, 30, 31, 32],
    /* 5  Bắc Ninh      */ [35],
    /* 6  Bến Tre       */ [23, 29, 30, 31, 32],
    /* 7  Bình Định     */ [8, 39],
    /* 8  Bình Dương    */ [20, 29, 39],
    /* 9  Bình Phước    */ [20, 21, 39],
    /* 10 Bình Thuận    */ [21, 29, 39],
    /* 11 Cà Mau        */ [29, 30, 31, 32],
    /* 12 Cần Thơ       */ [22, 29, 30, 31, 32],
    /* 13 Cao Bằng      */ [0, 1, 5, 6],
    /* 14 Đà Nẵng       */ [9, 39],
    /* 15 Đắk Lắk      */ [10, 11, 12, 13, 14, 17, 18, 19],
    /* 16 Đắk Nông     */ [11, 12, 17],
    /* 17 Điện Biên     */ [0, 1, 2, 3, 4],
    /* 18 Đồng Nai      */ [21, 39],
    /* 19 Đồng Tháp    */ [23, 29, 30, 31, 32],
    /* 20 Gia Lai       */ [14, 15, 16, 17, 18, 19, 28],
    /* 21 Hà Giang      */ [0, 1, 5, 6],
    /* 22 Hà Nam        */ [35],
    /* 23 Hà Nội        */ [35],
    /* 24 Hà Tĩnh       */ [0, 7, 37, 38],
    /* 25 Hải Dương     */ [34, 35],
    /* 26 Hải Phòng     */ [34, 35],
    /* 27 Hậu Giang     */ [22, 29, 30, 31, 32],
    /* 28 Hòa Bình      */ [0, 2],
    /* 29 Hưng Yên      */ [35],
    /* 30 Khánh Hòa     */ [26, 39],
    /* 31 Kiên Giang    */ [22, 23, 29, 30, 31, 32, 33],
    /* 32 Kon Tum        */ [14, 15, 16, 17],
    /* 33 Lai Châu      */ [0, 1, 3, 4, 6, 27],
    /* 34 Lâm Đồng      */ [9, 25, 39],
    /* 35 Lạng Sơn      */ [0, 1, 5, 6],
    /* 36 Lào Cai        */ [0],
    /* 37 Long An        */ [22, 29, 30, 31, 32],
    /* 38 Nam Định       */ [34, 35],
    /* 39 Nghệ An       */ [0, 4, 7, 37, 38],
    /* 40 Ninh Bình      */ [35],
    /* 41 Ninh Thuận     */ [21, 29, 39],
    /* 42 Phú Thọ       */ [],
    /* 43 Phú Yên       */ [39],
    /* 44 Quảng Bình    */ [0, 7, 36, 38],
    /* 45 Quảng Nam     */ [8, 24, 27, 36, 39],
    /* 46 Quảng Ngãi    */ [8, 26, 36, 37, 38, 39],
    /* 47 Quảng Ninh    */ [36],
    /* 48 Quảng Trị     */ [7, 34, 36, 38],
    /* 49 Sóc Trăng     */ [29, 30, 31, 32],
    /* 50 Sơn La         */ [0, 1, 2, 3, 4, 27],
    /* 51 Tây Ninh       */ [29, 33, 39],
    /* 52 Thái Bình      */ [34, 35],
    /* 53 Thái Nguyên   */ [0, 1],
    /* 54 Thanh Hóa      */ [0, 2, 4, 28, 38],
    /* 55 Thừa Thiên-Huế*/ [8, 24, 36, 38, 39, 40],
    /* 56 Tiền Giang    */ [23, 29, 30, 31, 32, 33],
    /* 57 TP. HCM        */ [22, 29, 33],
    /* 58 Trà Vinh       */ [29, 30, 31, 32],
    /* 59 Tuyên Quang   */ [0, 1],
    /* 60 Vĩnh Long     */ [29, 30, 31, 32],
    /* 61 Vĩnh Phúc     */ [35],
    /* 62 Yên Bái        */ [0, 1, 38],
];

// The first ethnic element index and first sino-viet element index (for toggle filtering)
export const ETHNIC_ELEMENT_START = 0;
export const ETHNIC_ELEMENT_END = 28;    // inclusive
export const SINO_VIET_ELEMENT_START = 29;
export const SINO_VIET_ELEMENT_END = 40; // inclusive