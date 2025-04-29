import hokkaido from '../../../../../assets/jp/plates/hokkaido.png';
import tohoku from '../../../../../assets/jp/plates/tohoku.png';
import kanto from '../../../../../assets/jp/plates/kanto.png';
import chubu from '../../../../../assets/jp/plates/chubu.png';
import hokuriku from '../../../../../assets/jp/plates/hokuriku.png';
import kansai from '../../../../../assets/jp/plates/kansai.png';
import chugoku from '../../../../../assets/jp/plates/chuugoku.png';
import shikoku from '../../../../../assets/jp/plates/shikoku.png';
import kyushu from '../../../../../assets/jp/plates/kyushu.png';
import okinawa from '../../../../../assets/jp/plates/okinawa.png';
import kanto_2 from '../../../../../assets/jp/plates/kanto_2.png';

export const PLATES = [
    hokkaido,
    tohoku,
    kanto,
    chubu,
    hokuriku,
    kansai,
    chugoku,
    shikoku,
    kyushu,
    okinawa,
    kanto_2,
];

export const REGION_INDEX_TO_PLATE_INDEX_2 = [
    [7], // Shikoku - shikoku plate
    [6], // Chugoku - chugoku plate
    [8], // Kyushu - kyushu plate
    [3], // Chubu - chubu plate
    [4], // Hokuriku - hokuriku plate
    [5], // Kansai - kansai plate
    [2, 10], // Kanto - kanto and kanto_2 plate
    [1], // Tohoku - tohoku plate
    [0], // Hokkaido - hokkaido plate
    [9], // Okinawa - okinawa plate
];

export const REGION_INDEX_TO_PLATE_INDEX = [
    [0],  // Hokkaido -> hokkaido
    [1],  // Aomori -> tohoku
    [1],  // Iwate -> tohoku
    [1],  // Miyagi -> tohoku
    [1],  // Akita -> tohoku
    [1],  // Yamagata -> tohoku
    [1],  // Fukushima -> tohoku
    [2, 10],  // Ibaraki -> kanto
    [2, 10],  // Tochigi -> kanto
    [2, 10],  // Gunma -> kanto
    [2, 10],  // Saitama -> kanto
    [2, 10],  // Chiba -> kanto
    [2, 10],  // Tokyo -> kanto
    [2, 10],  // Kanagawa -> kanto
    [1],  // Niigata -> hokuriku
    [4],  // Toyama -> hokuriku
    [4],  // Ishikawa -> hokuriku
    [4],  // Fukui -> hokuriku
    [3],  // Yamanashi -> chubu
    [3],  // Nagano -> chubu
    [3],  // Gifu -> chubu
    [3, 2, 10],  // Shizuoka -> chubu
    [3],  // Aichi -> chubu
    [5, 3],  // Mie -> kansai
    [5],  // Shiga -> kansai
    [5],  // Kyoto -> kansai
    [5],  // Osaka -> kansai
    [5],  // Hyogo -> kansai
    [5],  // Nara -> kansai
    [5],  // Wakayama -> kansai
    [6],  // Tottori -> chugoku
    [6],  // Shimane -> chugoku
    [6],  // Okayama -> chugoku
    [6],  // Hiroshima -> chugoku
    [6],  // Yamaguchi -> chugoku
    [7],  // Tokushima -> shikoku
    [7],  // Kagawa -> shikoku
    [7],  // Ehime -> shikoku
    [7],  // Kochi -> shikoku
    [8],  // Fukuoka -> kyushu
    [8],  // Saga -> kyushu
    [8],  // Nagasaki -> kyushu
    [8],  // Kumamoto -> kyushu
    [8],  // Oita -> kyushu
    [8],  // Miyazaki -> kyushu
    [8],  // Kagoshima -> kyushu
    [9]   // Okinawa -> okinawa
];

export const PLATE_INDEX_TO_REGION_INDICES = [
    [0],                           // Hokkaido -> only Hokkaido prefecture
    [1, 2, 3, 4, 5, 6, 14],            // Tohoku -> Aomori, Iwate, Miyagi, Akita, Yamagata, Fukushima
    [7, 8, 9, 10, 11, 12, 13, 21],     // Kanto -> Ibaraki, Tochigi, Gunma, Saitama, Chiba, Tokyo, Kanagawa
    [23, 18, 19, 20, 21, 22],          // Chubu -> Yamanashi, Nagano, Gifu, Shizuoka, Aichi
    [15, 16, 17],              // Hokuriku -> Niigata, Toyama, Ishikawa, Fukui
    [23, 24, 25, 26, 27, 28, 29],  // Kansai -> Mie, Shiga, Kyoto, Osaka, Hyogo, Nara, Wakayama
    [30, 31, 32, 33, 34],          // Chugoku -> Tottori, Shimane, Okayama, Hiroshima, Yamaguchi
    [35, 36, 37, 38],              // Shikoku -> Tokushima, Kagawa, Ehime, Kochi
    [39, 40, 41, 42, 43, 44, 45],  // Kyushu -> Fukuoka, Saga, Nagasaki, Kumamoto, Oita, Miyazaki, Kagoshima
    [46],                          // Okinawa -> only Okinawa prefecture
    [7, 8, 9, 10, 11, 12, 13, 21],     // Kanto -> Ibaraki, Tochigi, Gunma, Saitama, Chiba, Tokyo, Kanagawa
];

export const HIGHLIGHT_GROUPS = [
    [0],                                      // Hokkaido
    [1, 2, 3, 4, 5, 6, 14],                       // Aomori, Iwate, Miyagi, Akita, Yamagata, Fukushima (Tohoku)
    [1, 2, 3, 4, 5, 6, 14],                       // Iwate (Tohoku)
    [1, 2, 3, 4, 5, 6, 14],                       // Miyagi (Tohoku)
    [1, 2, 3, 4, 5, 6, 14],                       // Akita (Tohoku)
    [1, 2, 3, 4, 5, 6, 14],                       // Yamagata (Tohoku)
    [1, 2, 3, 4, 5, 6, 14],                       // Fukushima (Tohoku)
    [7, 8, 9, 10, 11, 12, 13,],                // Ibaraki, Tochigi, Gunma, Saitama, Chiba, Tokyo, Kanagawa (Kanto)
    [7, 8, 9, 10, 11, 12, 13],                // Tochigi (Kanto)
    [7, 8, 9, 10, 11, 12, 13],                // Gunma (Kanto)
    [7, 8, 9, 10, 11, 12, 13],                // Saitama (Kanto)
    [7, 8, 9, 10, 11, 12, 13],                // Chiba (Kanto)
    [7, 8, 9, 10, 11, 12, 13],                // Tokyo (Kanto)
    [7, 8, 9, 10, 11, 12, 13],                // Kanagawa (Kanto)
    [14],                                      // Niigata (isolated)
    [15, 16, 17],                             // Toyama, Ishikawa, Fukui (Hokuriku)
    [15, 16, 17],                             // Ishikawa (Hokuriku)
    [15, 16, 17],                             // Fukui (Hokuriku)
    [18, 20, 21, 22, 19, 23],                         // Yamanashi, Gifu, Shizuoka, Aichi (Chubu)
    [19],                                      // Nagano (isolated)
    [18, 20, 21, 22, 19, 23],                         // Gifu (Chubu)
    [18, 20, 21, 22, 19, 23],                         // Shizuoka (Chubu)
    [18, 20, 21, 22, 19, 23],                         // Aichi (Chubu)
    [23],                                     // Mie
    [24, 25, 26, 27, 28, 29, 23],             // Shiga (Kansai)
    [24, 25, 26, 27, 28, 29, 23],             // Kyoto (Kansai)
    [24, 25, 26, 27, 28, 29, 23],             // Osaka (Kansai)
    [24, 25, 26, 27, 28, 29, 23],             // Hyogo (Kansai)
    [24, 25, 26, 27, 28, 29, 23],             // Nara (Kansai)
    [24, 25, 26, 27, 28, 29, 23],             // Wakayama (Kansai)
    [30, 31, 32, 33, 34],                     // Tottori, Shimane, Okayama, Hiroshima, Yamaguchi (Chugoku)
    [30, 31, 32, 33, 34],                     // Shimane (Chugoku)
    [30, 31, 32, 33, 34],                     // Okayama (Chugoku)
    [30, 31, 32, 33, 34],                     // Hiroshima (Chugoku)
    [30, 31, 32, 33, 34],                     // Yamaguchi (Chugoku)
    [35, 36, 37, 38],                         // Tokushima, Kagawa, Ehime, Kochi (Shikoku)
    [35, 36, 37, 38],                         // Kagawa (Shikoku)
    [35, 36, 37, 38],                         // Ehime (Shikoku)
    [35, 36, 37, 38],                         // Kochi (Shikoku)
    [39, 40, 41, 42, 43, 44, 45],             // Fukuoka, Saga, Nagasaki, Kumamoto, Oita, Miyazaki, Kagoshima (Kyushu)
    [39, 40, 41, 42, 43, 44, 45],             // Saga (Kyushu)
    [39, 40, 41, 42, 43, 44, 45],             // Nagasaki (Kyushu)
    [39, 40, 41, 42, 43, 44, 45],             // Kumamoto (Kyushu)
    [39, 40, 41, 42, 43, 44, 45],             // Oita (Kyushu)
    [39, 40, 41, 42, 43, 44, 45],             // Miyazaki (Kyushu)
    [39, 40, 41, 42, 43, 44, 45],             // Kagoshima (Kyushu)
    [46]                                      // Okinawa
];
