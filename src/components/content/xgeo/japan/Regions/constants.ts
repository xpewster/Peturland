export const REGIONS_KANJI = [
    "四国",
    "中国",
    "九州",
    "中部",
    "北陸",
    "関西",
    "関東",
    "東北",
    "北海道",
    "沖縄",
];

export const REGION_INDEX_TO_REGION_INDEX_SIMPLE = [
    [0],
    [1],
    [2],
    [3],
    [4],
    [5],
    [6],
    [7],
    [8],
    [9],
]

export const REGION_INDEX_TO_REGION_INDEX = [
    [8],      // Hokkaido -> Hokkaido (index 8)
    [7],      // Aomori -> Tohoku (index 7)
    [7],      // Iwate -> Tohoku (index 7)
    [7],      // Miyagi -> Tohoku (index 7)
    [7],      // Akita -> Tohoku (index 7)
    [7],      // Yamagata -> Tohoku (index 7)
    [7],      // Fukushima -> Tohoku (index 7)
    [6],      // Ibaraki -> Kanto (index 6)
    [6],      // Tochigi -> Kanto (index 6)
    [6],      // Gunma -> Kanto (index 6)
    [6],      // Saitama -> Kanto (index 6)
    [6],      // Chiba -> Kanto (index 6)
    [6],      // Tokyo -> Kanto (index 6)
    [6],      // Kanagawa -> Kanto (index 6)
    [3],      // Niigata -> Hokuriku (index 4)
    [4],      // Toyama -> Hokuriku (index 4)
    [4],      // Ishikawa -> Hokuriku (index 4)
    [4],      // Fukui -> Hokuriku (index 4)
    [3],      // Yamanashi -> Chubu (index 3)
    [3],      // Nagano -> Chubu (index 3)
    [3],      // Gifu -> Chubu (index 3)
    [3],      // Shizuoka -> Chubu (index 3)
    [3],      // Aichi -> Chubu (index 3)
    [5],      // Mie -> Kansai (index 5)
    [5],      // Shiga -> Kansai (index 5)
    [5],      // Kyoto -> Kansai (index 5)
    [5],      // Osaka -> Kansai (index 5)
    [5],      // Hyogo -> Kansai (index 5)
    [5],      // Nara -> Kansai (index 5)
    [5],      // Wakayama -> Kansai (index 5)
    [1],      // Tottori -> Chugoku (index 1)
    [1],      // Shimane -> Chugoku (index 1)
    [1],      // Okayama -> Chugoku (index 1)
    [1],      // Hiroshima -> Chugoku (index 1)
    [1],      // Yamaguchi -> Chugoku (index 1)
    [0],      // Tokushima -> Shikoku (index 0)
    [0],      // Kagawa -> Shikoku (index 0)
    [0],      // Ehime -> Shikoku (index 0)
    [0],      // Kochi -> Shikoku (index 0)
    [2],      // Fukuoka -> Kyushu (index 2)
    [2],      // Saga -> Kyushu (index 2)
    [2],      // Nagasaki -> Kyushu (index 2)
    [2],      // Kumamoto -> Kyushu (index 2)
    [2],      // Oita -> Kyushu (index 2)
    [2],      // Miyazaki -> Kyushu (index 2)
    [2],      // Kagoshima -> Kyushu (index 2)
    [9]       // Okinawa -> Okinawa (index 9)
];

export const REGION_INDEX_TO_REGION_INDICES = [
    // Shikoku (index 0) -> Prefecture indices 35-38
    [35, 36, 37, 38],
    
    // Chugoku (index 1) -> Prefecture indices 30-34
    [30, 31, 32, 33, 34],
    
    // Kyushu (index 2) -> Prefecture indices 39-45
    [39, 40, 41, 42, 43, 44, 45],
    
    // Chubu (index 3) -> Prefecture indices 14, 18-22 (now including Niigata)
    [14, 18, 19, 20, 21, 22],
    
    // Hokuriku (index 4) -> Prefecture indices 15-17 (without Niigata)
    [15, 16, 17],
    
    // Kansai (index 5) -> Prefecture indices 23-29
    [23, 24, 25, 26, 27, 28, 29],
    
    // Kanto (index 6) -> Prefecture indices 7-13
    [7, 8, 9, 10, 11, 12, 13],
    
    // Tohoku (index 7) -> Prefecture indices 1-6
    [1, 2, 3, 4, 5, 6],
    
    // Hokkaido (index 8) -> Prefecture index 0
    [0],
    
    // Okinawa (index 9) -> Prefecture index 46
    [46]
];