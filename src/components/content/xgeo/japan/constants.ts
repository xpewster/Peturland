
// 0x1: Hokkaido 0
// 0x2: Tohoku 1
// 0x4: Kanto 2
// 0x8: Chubu 3
// 0x10: Kansai 4
// 0x20: Chugoku 5
// 0x40: Shikoku 6
// 0x80: Kyushu 7
// 0x100: Okinawa 8

export const JAPAN_PREFECTURES_BITFLAG = [
    0x1,    // Hokkaido - Hokkaido region
    0x2,    // Aomori - Tohoku region
    0x2,    // Iwate - Tohoku region
    0x2,    // Miyagi - Tohoku region
    0x2,    // Akita - Tohoku region
    0x2,    // Yamagata - Tohoku region
    0x2,    // Fukushima - Tohoku region
    0x4,    // Ibaraki - Kanto region
    0x4,    // Tochigi - Kanto region
    0x4,    // Gunma - Kanto region
    0x4,    // Saitama - Kanto region
    0x4,    // Chiba - Kanto region
    0x4,    // Tokyo - Kanto region
    0x4,    // Kanagawa - Kanto region
    0x8,    // Niigata - Chubu region
    0x8,    // Toyama - Chubu region
    0x8,    // Ishikawa - Chubu region
    0x8,    // Fukui - Chubu region
    0x8,    // Yamanashi - Chubu region
    0x8,    // Nagano - Chubu region
    0x8,    // Gifu - Chubu region
    0x8,    // Shizuoka - Chubu region
    0x8,    // Aichi - Chubu region
    0x10,   // Mie - Kansai region
    0x10,   // Shiga - Kansai region
    0x10,   // Kyoto - Kansai region
    0x10,   // Osaka - Kansai region
    0x10,   // Hyogo - Kansai region
    0x10,   // Nara - Kansai region
    0x10,   // Wakayama - Kansai region
    0x20,   // Tottori - Chugoku region
    0x20,   // Shimane - Chugoku region
    0x20,   // Okayama - Chugoku region
    0x20,   // Hiroshima - Chugoku region
    0x20,   // Yamaguchi - Chugoku region
    0x40,   // Tokushima - Shikoku region
    0x40,   // Kagawa - Shikoku region
    0x40,   // Ehime - Shikoku region
    0x40,   // Kochi - Shikoku region
    0x80,   // Fukuoka - Kyushu region
    0x80,   // Saga - Kyushu region
    0x80,   // Nagasaki - Kyushu region
    0x80,   // Kumamoto - Kyushu region
    0x80,   // Oita - Kyushu region
    0x80,   // Miyazaki - Kyushu region
    0x80,   // Kagoshima - Kyushu region
    0x80,   // Okinawa - Okinawa region
];

export const JAPAN_REGIONS = [
    "Shikoku",
    "Chugoku",
    "Kyushu",
    "Chubu",
    "Hokuriku",
    "Kansai",
    "Kanto",
    "Tohoku",
    "Hokkaido",
    "Okinawa",
];

export const JAPAN_REGIONS_BITFLAG = [
    0x1,    // Shikoku - Shikoku region
    0x2,    // Chugoku - Chugoku region
    0x4,    // Kyushu - Kyushu region
    0x8,    // Chubu - Chubu region
    0x10,   // Hokuriku - Hokuriku region
    0x20,   // Kansai - Kansai region
    0x40,   // Kanto - Kanto region
    0x80,   // Tohoku - Tohoku region
    0x100,  // Hokkaido - Hokkaido region
    0x200,  // Okinawa - Okinawa region
];
    