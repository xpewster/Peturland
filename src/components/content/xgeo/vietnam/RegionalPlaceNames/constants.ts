import { ConsistencyRating } from "../../../../common/ConsistencyRating";

// Place name elements array - indices 0-30 are ethnic minority, 31-49 are Sino-Vietnamese
export const PLACE_NAME_ELEMENTS = [
    // === Ethnic Minority Elements (0-30) ===
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
    'Trà',   // 8
    'Đà',    // 9

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
    'Cư',           // 29

    // Mekong Delta — Khmer
    'Khóm',         // 30

    // === Sino-Vietnamese Elements (31-49) ===
    // Administrative Vietnamese
    'Ấp',           // 31
    'Thôn',         // 32

    // Concentrated in South
    'Tân',          // 33
    'Mỹ',           // 34
    'Thạnh',        // 35
    'Long',         // 36
    'Gò',           // 37

    // Concentrated in North
    'Hải',          // 38
    'Thái',         // 39

    // Concentrated in Central
    'Quảng',        // 40
    'Đức',          // 41
    'Nghĩa',        // 42
    'Thuận',        // 43

    // New Sino-Vietnamese
    'Hương',        // 44
    'Thịnh',        // 45
    'Phúc',         // 46
    'Phước',        // 47
    'Nhân',         // 48
    'Nhơn',         // 49
];

export const PLACE_NAME_DESCRIPTIONS = [
    // Ethnic (0-30)
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
    'Hamlet / village — Ede',
    'Neighborhood / block — Khmer',
    // Sino-Vietnamese (31-49)
    'Hamlet — Vietnamese (southern)',
    'Village — Vietnamese (northern)',
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
    '盛 Prosperous (northern pronunciation)',
    '福 Fortune / blessing (northern pronunciation)',
    '福 Fortune / blessing (southern pronunciation)',
    '仁 Benevolence / humanity (northern pronunciation)',
    '仁 Benevolence / humanity (southern pronunciation)',
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
    [3, 13, 17, 21, 33, 35, 36, 39, 50, 53, 54, 59, 62],
    // 2: Chiềng — removed Lào Cai, Lai Châu
    [17, 28, 50, 54],
    // 3: Nậm
    [17, 21, 33, 36, 39, 50, 62],
    // 4: Mường
    [17, 28, 33, 39, 42, 50, 54],
    // 5: Lũng / Lung
    [3, 13, 21, 35, 36],
    // 6: Pắc / Pắk
    [3, 13, 21, 33, 35, 36],
    // 7: Khe — removed Thái Nguyên, Thừa Thiên Huế, Bắc Giang
    [24, 39, 44, 48],
    // 8: Trà (Cham)
    [7, 14, 45, 46, 55],
    // 9: Đà (Cham)
    [34],
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
    [20],
    // 19: Yang
    [15, 20],
    // 20: Bù
    [8, 9],
    // 21: Tà
    [9, 10, 18, 30, 34, 41, 45],
    // 22: Rạch — all Mekong delta + HCMC
    [0, 4, 6, 11, 12, 19, 27, 31, 37, 49, 56, 57, 58, 60],
    // 23: Giồng
    [6, 19, 31, 56],
    // 24: A — Quảng Nam, Quảng Trị, Huế
    [45, 48, 55],
    // 25: Đạ — Lâm Đồng
    [34],
    // 26: Ba — Quảng Ngãi
    [46],
    // 27: Pa — Điện Biên, Lai Châu, Sơn La, Quảng Nam
    [17, 33, 45, 50],
    // 28: Làng — Thanh Hóa, Gia Lai
    [20, 54],
    // 29: Cư — Đắk Lắk
    [15],
    // 30: Khóm — Đồng Tháp, Vĩnh Long, Trà Vinh, and everything southwest
    [0, 4, 11, 12, 19, 27, 31, 49, 58, 60],

    // === Sino-Vietnamese (31-49) ===
    // 31: Ấp — Bình Phước, Đồng Nai, Bà Rịa-VT and everything southwest
    [0, 1, 4, 6, 8, 9, 11, 12, 18, 19, 27, 31, 37, 49, 51, 56, 57, 58, 60],
    // 32: Thôn — everything not covered by Ấp
    [2, 3, 5, 7, 10, 13, 14, 15, 16, 17, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30, 32, 33, 34, 35, 36, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 50, 52, 53, 54, 55, 59, 61, 62],

    // 33: Tân
    [0, 1, 4, 6, 8, 10, 11, 12, 19, 27, 31, 37, 41, 49, 51, 56, 57, 58, 60],
    // 34: Mỹ — all Mekong delta + HCMC, Bà Rịa, coastal to Bình Định
    [0, 1, 4, 6, 7, 10, 11, 12, 19, 27, 30, 31, 37, 41, 43, 49, 56, 57, 58, 60],
    // 35: Thạnh — all Mekong delta provinces
    [0, 4, 6, 11, 12, 19, 27, 31, 37, 49, 56, 58, 60],
    // 36: Long — all Mekong delta + HCMC region
    [0, 1, 4, 6, 8, 9, 11, 12, 18, 19, 27, 31, 37, 49, 51, 56, 57, 58, 60],
    // 37: Gò — all Mekong delta, southeast, coastal to Đà Nẵng
    [0, 1, 4, 6, 7, 10, 11, 12, 14, 19, 27, 30, 31, 37, 41, 43, 45, 46, 49, 51, 56, 57, 58, 60],
    // 38: Hải — all coastal provinces except Kiên Giang
    [1, 4, 6, 7, 10, 11, 14, 24, 26, 30, 38, 39, 40, 41, 43, 44, 45, 46, 47, 48, 49, 52, 54, 55, 56, 57, 58],
    // 39: Thái — Red River Delta + Thái Nguyên
    [5, 22, 23, 25, 26, 29, 38, 40, 52, 53, 61],
    // 40: Quảng — removed Quảng Ninh
    [14, 44, 45, 46, 48, 55],
    // 41: Đức
    [24, 39, 46],
    // 42: Nghĩa — north-central, central + outliers
    [14, 24, 39, 44, 45, 46, 48, 54, 55, 62],
    // 43: Thuận — all provinces between Huế and HCMC
    [1, 7, 8, 9, 10, 14, 18, 30, 34, 41, 43, 45, 46, 51, 55],
    // 44: Hương — Huế
    [24, 55],
    // 45: Thịnh — RRD + surrounding hinterland
    [2, 5, 22, 23, 25, 26, 28, 29, 38, 40, 42, 52, 53, 61],
    // 46: Phúc — RRD + hinterland, not south of Thanh Hóa
    [5, 22, 23, 25, 26, 29, 38, 40, 42, 52, 53, 54, 59, 61],
    // 47: Phước — Mekong delta + SE + Lâm Đồng + coast to Bình Định
    [0, 1, 4, 6, 7, 8, 9, 10, 11, 12, 18, 19, 27, 30, 31, 34, 37, 41, 43, 49, 51, 56, 57, 58, 60],
    // 48: Nhân — same as Phúc
    [5, 22, 23, 25, 26, 29, 38, 40, 42, 52, 53, 54, 59, 61],
    // 49: Nhơn — same as Phước + Quảng Ngãi
    [0, 1, 4, 6, 7, 8, 9, 10, 11, 12, 18, 19, 27, 30, 31, 34, 37, 41, 43, 46, 49, 51, 56, 57, 58, 60],
];

// For each province (GeoJSON region 0-62), which element indices are found there.
// Reverse mapping of ELEMENT_TO_PROVINCE_INDICES.
export const PROVINCE_INDEX_TO_ELEMENT_INDICES: number[][] = [
    /* 0  An Giang      */ [22, 30, 31, 33, 34, 35, 36, 37, 47, 49],
    /* 1  Bà Rịa-VT     */ [31, 33, 34, 36, 37, 38, 43, 47, 49],
    /* 2  Bắc Giang     */ [32, 45],
    /* 3  Bắc Kạn       */ [0, 1, 5, 6, 32],
    /* 4  Bạc Liêu      */ [22, 30, 31, 33, 34, 35, 36, 37, 38, 47, 49],
    /* 5  Bắc Ninh      */ [32, 39, 45, 46, 48],
    /* 6  Bến Tre       */ [22, 23, 31, 33, 34, 35, 36, 37, 38, 47, 49],
    /* 7  Bình Định     */ [8, 32, 34, 37, 38, 43, 47, 49],
    /* 8  Bình Dương    */ [20, 31, 33, 36, 43, 47, 49],
    /* 9  Bình Phước    */ [20, 21, 31, 36, 43, 47, 49],
    /* 10 Bình Thuận    */ [21, 32, 33, 34, 37, 38, 43, 47, 49],
    /* 11 Cà Mau        */ [22, 30, 31, 33, 34, 35, 36, 37, 38, 47, 49],
    /* 12 Cần Thơ       */ [22, 30, 31, 33, 34, 35, 36, 37, 47, 49],
    /* 13 Cao Bằng      */ [0, 1, 5, 6, 32],
    /* 14 Đà Nẵng       */ [8, 32, 37, 38, 40, 42, 43],
    /* 15 Đắk Lắk      */ [10, 11, 12, 13, 14, 17, 19, 29, 32],
    /* 16 Đắk Nông     */ [11, 12, 17, 32],
    /* 17 Điện Biên     */ [0, 1, 2, 3, 4, 27, 32],
    /* 18 Đồng Nai      */ [21, 31, 36, 43, 47, 49],
    /* 19 Đồng Tháp    */ [22, 23, 30, 31, 33, 34, 35, 36, 37, 47, 49],
    /* 20 Gia Lai       */ [14, 15, 16, 17, 18, 19, 28, 32],
    /* 21 Hà Giang      */ [0, 1, 3, 5, 6, 32],
    /* 22 Hà Nam        */ [32, 39, 45, 46, 48],
    /* 23 Hà Nội        */ [32, 39, 45, 46, 48],
    /* 24 Hà Tĩnh       */ [0, 7, 32, 38, 41, 42, 44],
    /* 25 Hải Dương     */ [32, 39, 45, 46, 48],
    /* 26 Hải Phòng     */ [32, 38, 39, 45, 46, 48],
    /* 27 Hậu Giang     */ [22, 30, 31, 33, 34, 35, 36, 37, 47, 49],
    /* 28 Hòa Bình      */ [0, 2, 4, 32, 45],
    /* 29 Hưng Yên      */ [32, 39, 45, 46, 48],
    /* 30 Khánh Hòa     */ [21, 32, 34, 37, 38, 43, 47, 49],
    /* 31 Kiên Giang    */ [22, 23, 30, 31, 33, 34, 35, 36, 37, 47, 49],
    /* 32 Kon Tum        */ [14, 15, 16, 17, 32],
    /* 33 Lai Châu      */ [0, 1, 3, 4, 6, 27, 32],
    /* 34 Lâm Đồng      */ [9, 21, 25, 32, 43, 47, 49],
    /* 35 Lạng Sơn      */ [0, 1, 5, 6, 32],
    /* 36 Lào Cai        */ [0, 1, 3, 5, 6, 32],
    /* 37 Long An        */ [22, 31, 33, 34, 35, 36, 37, 47, 49],
    /* 38 Nam Định       */ [32, 38, 39, 45, 46, 48],
    /* 39 Nghệ An       */ [0, 1, 3, 4, 7, 32, 38, 41, 42],
    /* 40 Ninh Bình      */ [32, 38, 39, 45, 46, 48],
    /* 41 Ninh Thuận     */ [21, 32, 33, 34, 37, 38, 43, 47, 49],
    /* 42 Phú Thọ       */ [4, 32, 45, 46, 48],
    /* 43 Phú Yên       */ [32, 34, 37, 38, 43, 47, 49],
    /* 44 Quảng Bình    */ [0, 7, 32, 38, 40, 42],
    /* 45 Quảng Nam     */ [8, 21, 24, 27, 32, 37, 38, 40, 42, 43],
    /* 46 Quảng Ngãi    */ [8, 26, 32, 37, 38, 40, 41, 42, 43, 49],
    /* 47 Quảng Ninh    */ [32, 38],
    /* 48 Quảng Trị     */ [7, 24, 32, 38, 40, 42],
    /* 49 Sóc Trăng     */ [22, 30, 31, 33, 34, 35, 36, 37, 38, 47, 49],
    /* 50 Sơn La         */ [0, 1, 2, 3, 4, 27, 32],
    /* 51 Tây Ninh       */ [31, 33, 36, 37, 43, 47, 49],
    /* 52 Thái Bình      */ [32, 38, 39, 45, 46, 48],
    /* 53 Thái Nguyên   */ [0, 1, 32, 39, 45, 46, 48],
    /* 54 Thanh Hóa      */ [0, 1, 2, 4, 28, 32, 38, 42, 46, 48],
    /* 55 Thừa Thiên-Huế*/ [8, 24, 32, 38, 40, 42, 43, 44],
    /* 56 Tiền Giang    */ [22, 23, 31, 33, 34, 35, 36, 37, 38, 47, 49],
    /* 57 TP. HCM        */ [22, 31, 33, 34, 36, 37, 38, 47, 49],
    /* 58 Trà Vinh       */ [22, 30, 31, 33, 34, 35, 36, 37, 38, 47, 49],
    /* 59 Tuyên Quang   */ [0, 1, 32, 46, 48],
    /* 60 Vĩnh Long     */ [22, 30, 31, 33, 34, 35, 36, 37, 47, 49],
    /* 61 Vĩnh Phúc     */ [32, 39, 45, 46, 48],
    /* 62 Yên Bái        */ [0, 1, 3, 32, 42],
];

export const PLACE_NAME_CONSISTENCY_RATINGS: ReadonlyArray<[ConsistencyRating, string | null]> = [

    // ── Ethnic Minority Elements (0–30) ──────────────────────────────────────

    // 0: Bản — covers the full northern highlands Tày/Nùng/Thái/Mường zone
    // No disconnected outliers. Minor bleed into Phú Thọ (42) edges is fine.
    [ConsistencyRating.VeryConsistent, null],

    // 1: Nà / Na — well-contained Tày/Nùng/Thái paddy word
    // Hòa Bình bleed is adjacent to listed cluster. No disconnected outliers.
    [ConsistencyRating.VeryConsistent, null],

    // 2: Chiềng — strict Thái administrative term; essentially no bleed
    [ConsistencyRating.VeryConsistent, null],

    // 3: Nậm — tight northwest Thái river word; no disconnected outliers
    [ConsistencyRating.VeryConsistent, null],

    // 4: Mường — tight Mường heartland zone including Hòa Bình (Bi, Vang, Thàng)
    // and Phú Thọ (Thanh Sơn/Tân Sơn). No disconnected outliers.
    [ConsistencyRating.VeryConsistent, null],

    // 5: Lũng / Lung — northeast karst zone; Tuyên Quang and Thái Nguyên are adjacent bleed
    // No disconnected outliers.
    [ConsistencyRating.VeryConsistent, null],

    // 6: Pắc / Pắk — tight northeast confluence marker; no disconnected outliers
    [ConsistencyRating.VeryConsistent, null],

    // 7: Khe — plain Vietnamese stream word; genuinely appears across many provinces
    // Bắc Giang and Thái Nguyên (both removed from valid set) are disconnected from the
    // north-central core, forming a separate northern cluster. Not fixable by province additions.
    [ConsistencyRating.Consistent, 'Means "stream"'],

    // 8: Trà (Cham) — well-concentrated along the central Cham coast
    // Phú Yên bleed is adjacent to listed Bình Định. No disconnected outliers.
    [ConsistencyRating.Consistent, null],

    // 9: Đà (Cham)
    // NOTE: Đà Nẵng (14) should be added — it is a primary Cham Đà toponym ("Da Nak")
    // and is not adjacent to Lâm Đồng, so this is a missing center rather than bleed.
    // Even with Đà Nẵng added, Sông Đà in the north remains a genuine disconnected
    // outlier (different Tai origin), so some inconsistency remains.
    [ConsistencyRating.SomewhatConsistent, 'Don\'t forget about Da Nang!'],

    // 10: Ea — essentially exclusive to Đắk Lắk; minor edge bleed into Đắk Nông/Gia Lai
    [ConsistencyRating.VeryConsistent, null],

    // 11: Buôn — Đắk Nông borders Đắk Lắk directly; minor bleed only
    [ConsistencyRating.VeryConsistent, null],

    // 12: Krông — tight Ede river word; Đắk Nông is adjacent bleed
    [ConsistencyRating.VeryConsistent, null],

    // 13: Đrây / Dray — essentially exclusive to Đắk Lắk
    [ConsistencyRating.VeryConsistent, null],

    // 14: Ia — well-contained Jarai water word across listed highland provinces
    [ConsistencyRating.VeryConsistent, null],

    // 15: Plei / Plây — essentially exclusive to Gia Lai and Kon Tum
    [ConsistencyRating.VeryConsistent, null],

    // 16: Kon — essentially exclusive to Kon Tum and northern Gia Lai
    [ConsistencyRating.VeryConsistent, null],

    // 17: Đắk — well-contained across the four contiguous highland provinces
    [ConsistencyRating.VeryConsistent, null],

    // 18: Chu / Chư
    // NOTE: Đắk Lắk (15) and Kon Tum (32) should be added — Chu Yang Sin (Đắk Lắk)
    // is one of the most prominent peaks in the Central Highlands; Chư Mom Ray is a
    // national park in Kon Tum. Both provinces directly border Gia Lai.
    // With all three provinces included, no disconnected outliers remain.
    [ConsistencyRating.VeryConsistent, 'Also some isolated peaks in Đắk Lắk and Kon Tum'],
    // 19: Yang — Kon Tum bleed is adjacent to both listed provinces; no disconnected outliers
    [ConsistencyRating.VeryConsistent, null],

    // 20: Bù — highly diagnostic of Bình Phước; Bình Dương is adjacent bleed
    [ConsistencyRating.VeryConsistent, null],

    // 21: Tà — northern Tà names (Tà Xùa in Sơn La, Tà Phìn in Lào Cai, Tà Si Láng
    // in Yên Bái) are Hmong/Dao names in the far northwest — completely disconnected
    // linguistically and geographically from the listed southern/central cluster.
    [ConsistencyRating.SomewhatConsistent, 'Also some occasional northern occurences of Hmong/Dao origin'],

    // 22: Rạch — well-contained in delta + HCMC; Tây Ninh / Đồng Nai are adjacent bleed
    [ConsistencyRating.VeryConsistent, null],

    // 23: Giồng — tight Khmer delta ridge term; no disconnected outliers
    [ConsistencyRating.VeryConsistent, null],

    // 24: A — tight contiguous Katuic zone (Quảng Nam, Quảng Trị, Huế);
    // no disconnected outliers.
    [ConsistencyRating.VeryConsistent, null],

    // 25: Đạ — essentially exclusive to southern Lâm Đồng; no disconnected outliers
    [ConsistencyRating.VeryConsistent, null],

    // 26: Ba — the Hrê place element (Quảng Ngãi) is confounded by the Vietnamese numeral
    // ba (三), generating Ba Vì (Hà Nội), Ba Tri (Bến Tre), Ba Ngòi (Khánh Hòa) etc.
    // These are nationwide and disconnected. No province addition resolves a homograph.
    [ConsistencyRating.SomewhatConsistent, 'Ba also means three!'],

    // 27: Pa
    // NOTE: Lào Cai (36) and Hà Giang (21) should be added to the northwest cluster —
    // Pa Cheo (Bát Xát, Lào Cai) and Pa Vị (Hà Giang) border listed Lai Châu/Điện Biên.
    // Even with these added, Pa spans two disconnected linguistic origins: Tai "forest"
    // (northwest) and Cơ Tu place element (Quảng Nam, 45). That split is a genuine
    // disconnected inconsistency that no province addition resolves.
    [ConsistencyRating.SomewhatConsistent, 'Also occurences of Cơ Tu origin in the Quảng Nam area'],

    // 28: Làng — the everyday Vietnamese word for village; appears in all 63 provinces.
    // The regional signals (Mường noble title in Thanh Hóa; administrative overlay on
    // Jarai villages in Gia Lai) are invisible in the spelling. Not fixable.
    [ConsistencyRating.WeakCorrelation, null],

    // 29: Cư — essentially exclusive to Đắk Lắk (Ede mountain word); minor edge bleed
    // into adjacent Đắk Nông / Gia Lai border areas only
    [ConsistencyRating.VeryConsistent, null],

    // 30: Khóm — tight Mekong delta neighborhood/block term; Khmer origin
    [ConsistencyRating.VeryConsistent, null],


    // ── Sino-Vietnamese Elements (31–49) ─────────────────────────────────────

    // 31: Ấp — southern Vietnamese administrative hamlet term; clean north/south split
    [ConsistencyRating.VeryConsistent, null],

    // 32: Thôn — northern/central Vietnamese administrative village term; complement of Ấp
    [ConsistencyRating.VeryConsistent, null],

    // 33: Tân — southern frontier concentration is real but Tân appears disconnectedly
    // across northern provinces as a generic "new settlement" prefix:
    // Tân Kỳ (Nghệ An), Tân Lạc (Hòa Bình), Tân Yên (Bắc Giang), Tân Sơn (Phú Thọ)
    [ConsistencyRating.SomewhatConsistent, null],

    // 34: Mỹ — southern concentration is real but disconnected northern outliers exist:
    // Mỹ Đức (Hà Nội), Mỹ Hào (Hưng Yên), Mỹ Lộc (Nam Định)
    [ConsistencyRating.WeakCorrelation, 'Found everywhere but more common in the south'],

    // 35: Thạnh — southern dialect phonological variant (thịnh → thạnh); essentially
    // exclusive to the southern dialect zone. No disconnected outliers.
    [ConsistencyRating.Consistent, 'Dialectal variant of "Thịnh" in the south!'],

    // 36: Long — strong southern concentration; Long Biên (Hà Nội) and Thăng Long are
    // disconnected northern outliers, though isolated rather than a northern pattern
    [ConsistencyRating.Consistent, null],

    // 37: Gò — strong southern + coastal concentration; Gò Đống Đa (Hà Nội) is a
    // disconnected northern outlier, though an isolated case
    [ConsistencyRating.Consistent, null],

    // 38: Hải — all coastal provinces; extremely broad coverage but geographically
    // coherent as a coastal marker. No inland outliers.
    [ConsistencyRating.Consistent, null],

    // 39: Thái — Red River Delta + Thái Nguyên; tight cluster.
    // Thái Hòa (Nghệ An) remains a disconnected southern outlier.
    [ConsistencyRating.Consistent, 'There is a province Quang Ninh and city Quang Yen in the north'],

    // 40: Quảng — tight central coast clustering; no disconnected outliers
    [ConsistencyRating.Consistent, null],

    // 41: Đức — north-central Confucian concentration; Đức Huệ and Đức Hòa (Long An)
    // are disconnected southern outliers
    [ConsistencyRating.SomewhatConsistent, null],

    // 42: Nghĩa — north-central to central concentration; Nghĩa Hưng (Nam Định) is
    // a disconnected outlier north of the listed range
    [ConsistencyRating.SomewhatConsistent, null],

    // 43: Thuận — Huế-to-HCMC corridor is well-defined; Thuận Thành (Bắc Ninh) and
    // Thuận Châu (Sơn La) are disconnected northern outliers
    [ConsistencyRating.SomewhatConsistent, null],

    // 44: Hương — Nguyễn court naming centered tightly on Huế; Hương An (Quảng Nam)
    // is adjacent bleed one province south. No disconnected outliers.
    [ConsistencyRating.VeryConsistent, null],

    // 45: Thịnh — northern dialectal variant of Thạnh (盛); well-contained in
    // Red River Delta and immediate hinterland. No disconnected outliers.
    [ConsistencyRating.Consistent, 'Dialectal variant of "Thạnh" in the north!'],

    // 46: Phúc — 福 fortune/blessing (northern pronunciation);
    // well-concentrated in RRD + hinterland. No disconnected outliers.
    [ConsistencyRating.Consistent, 'Dialectal variant of "Phước" in the north!'],

    // 47: Phước — 福 fortune/blessing (southern pronunciation);
    // well-concentrated in Mekong delta + SE + southern coast. No disconnected outliers.
    [ConsistencyRating.Consistent, 'Dialectal variant of "Phúc" in the south!'],

    // 48: Nhân — 仁 benevolence/humanity (northern pronunciation);
    // well-concentrated in RRD + hinterland. No disconnected outliers.
    [ConsistencyRating.Consistent, 'Dialectal variant of "Nhơn" in the north!'],

    // 49: Nhơn — 仁 benevolence/humanity (southern pronunciation);
    // well-concentrated in Mekong delta + SE + southern coast to Quảng Ngãi.
    [ConsistencyRating.Consistent, 'Dialectal variant of "Nhân" in the south!'],
];



// The first ethnic element index and first sino-viet element index (for toggle filtering)
export const ETHNIC_ELEMENT_START = 0;
export const ETHNIC_ELEMENT_END = 30;    // inclusive
export const SINO_VIET_ELEMENT_START = 31;
export const SINO_VIET_ELEMENT_END = 49; // inclusive

// Elements gated behind the "Obscure" toggle
export const OBSCURE_ELEMENT_INDICES: ReadonlySet<number> = new Set([
    // Ethnic
    5,  // Lũng / Lung
    6,  // Pắc / Pắk
    7,  // Khe
    9,  // Đà (Cham)
    12, // Krông
    13, // Đrây / Dray
    19, // Yang
    21, // Tà
    22, // Rạch
    23, // Giồng
    24, // A
    25, // Đạ
    26, // Ba
    27, // Pa
    28, // Làng
    // Sino-Vietnamese
    35, // Thạnh
    36, // Long
    37, // Gò
    41, // Đức
    42, // Nghĩa
    43, // Thuận
    44, // Hương
]);