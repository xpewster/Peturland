import tohoku from '../../../../../assets/jp/reflectors/tohoku.png';
import tohoku_2 from '../../../../../assets/jp/reflectors/tohoku_2.png';
import hokuriku from '../../../../../assets/jp/reflectors/hokuriku.png';
import chubu from '../../../../../assets/jp/reflectors/chubu.png';
import kansai from '../../../../../assets/jp/reflectors/kansai.png';
import chugoku from '../../../../../assets/jp/reflectors/chugoku.png';
import shikoku from '../../../../../assets/jp/reflectors/shikoku.png';
import kyushu from '../../../../../assets/jp/reflectors/kyushu.png';

export const REFLECTORS = [
    tohoku,
    tohoku_2,
    hokuriku,
    chubu,
    kansai,
    chugoku,
    shikoku,
    kyushu,
];

export const REGION_INDEX_TO_REFLECTOR_INDEX_2 = [
    [6],         // Shikoku - shikoku reflector
    [5],         // Chugoku - chugoku reflector
    [7],         // Kyushu - kyushu reflector
    [3],         // Chubu - chubu reflector
    [2],         // Hokuriku - hokuriku reflector
    [4],         // Kansai - kansai reflector
    [],         // Kanto - no special reflector
    [0, 1],      // Tohoku - tohoku and tohoku_2 reflector
    [],         // Hokkaido - no reflector
    [7],         // Okinawa - kyushu reflector
];


export const REGION_INDEX_TO_REFLECTOR_INDEX = [
    [],          // Hokkaido - no reflector
    [0, 1],      // Aomori - tohoku and tohoku_2
    [0, 1],      // Iwate - tohoku and tohoku_2
    [0, 1],      // Miyagi - tohoku and tohoku_2
    [0, 1],      // Akita - tohoku and tohoku_2
    [0, 1],      // Yamagata - tohoku and tohoku_2
    [0, 1],      // Fukushima - tohoku and tohoku_2
    [],          // Ibaraki - Kanto, no reflector
    [],          // Tochigi - Kanto, no reflector
    [],          // Gunma - Kanto, no reflector
    [],          // Saitama - Kanto, no reflector
    [],          // Chiba - Kanto, no reflector
    [],          // Tokyo - Kanto, no reflector
    [],          // Kanagawa - Kanto, no reflector
    [0, 1],         // Niigata - hokuriku reflector
    [2],         // Toyama - hokuriku reflector
    [2],         // Ishikawa - hokuriku reflector
    [2],         // Fukui - hokuriku reflector
    [],         // Yamanashi - chubu reflector
    [3],         // Nagano - chubu reflector
    [3],         // Gifu - chubu reflector
    [3],         // Shizuoka - chubu reflector
    [3],         // Aichi - chubu reflector
    [4, 3],         // Mie - kansai reflector
    [4],         // Shiga - kansai reflector
    [4],         // Kyoto - kansai reflector
    [4],         // Osaka - kansai reflector
    [4],         // Hyogo - kansai reflector
    [4],         // Nara - kansai reflector
    [4],         // Wakayama - kansai reflector
    [5],         // Tottori - chugoku reflector
    [5],         // Shimane - chugoku reflector
    [5],         // Okayama - chugoku reflector
    [5],         // Hiroshima - chugoku reflector
    [5],         // Yamaguchi - chugoku reflector
    [6],         // Tokushima - shikoku reflector
    [6],         // Kagawa - shikoku reflector
    [6],         // Ehime - shikoku reflector
    [6],         // Kochi - shikoku reflector
    [7],         // Fukuoka - kyushu reflector
    [7],         // Saga - kyushu reflector
    [7],         // Nagasaki - kyushu reflector
    [7],         // Kumamoto - kyushu reflector
    [7],         // Oita - kyushu reflector
    [7],         // Miyazaki - kyushu reflector
    [7],         // Kagoshima - kyushu reflector
    [7]           // Okinawa - no reflector
];

export const REFLECTOR_INDEX_TO_PREFECTURE_INDICES = [
    [1, 2, 3, 4, 5, 6, 14],           // tohoku reflector -> Aomori, Iwate, Miyagi, Akita, Yamagata, Fukushima, Niigata
    [1, 2, 3, 4, 5, 6, 14],           // tohoku_2 reflector -> Aomori, Iwate, Miyagi, Akita, Yamagata, Fukushima, Niigata
    [15, 16, 17],                     // hokuriku reflector -> Toyama, Ishikawa, Fukui
    [19, 20, 21, 22, 23],                 // chubu reflector -> Nagano, Gifu, Shizuoka, Aichi
    [23, 24, 25, 26, 27, 28, 29],     // kansai reflector -> Mie, Shiga, Kyoto, Osaka, Hyogo, Nara, Wakayama
    [30, 31, 32, 33, 34],             // chugoku reflector -> Tottori, Shimane, Okayama, Hiroshima, Yamaguchi
    [35, 36, 37, 38],                 // shikoku reflector -> Tokushima, Kagawa, Ehime, Kochi
    [39, 40, 41, 42, 43, 44, 45, 46]      // kyushu reflector -> Fukuoka, Saga, Nagasaki, Kumamoto, Oita, Miyazaki, Kagoshima
];

export const HIGHLIGHT_GROUPS = [
    [0],                                      // Hokkaido
    [1, 2, 3, 4, 5, 6, 14],                   // Aomori - Tohoku region + Niigata
    [1, 2, 3, 4, 5, 6, 14],                   // Iwate - Tohoku region + Niigata
    [1, 2, 3, 4, 5, 6, 14],                   // Miyagi - Tohoku region + Niigata
    [1, 2, 3, 4, 5, 6, 14],                   // Akita - Tohoku region + Niigata
    [1, 2, 3, 4, 5, 6, 14],                   // Yamagata - Tohoku region + Niigata
    [1, 2, 3, 4, 5, 6, 14],                   // Fukushima - Tohoku region + Niigata
    [7, 8, 9, 10, 11, 12, 13],                // Ibaraki - Kanto region
    [7, 8, 9, 10, 11, 12, 13],                // Tochigi - Kanto region
    [7, 8, 9, 10, 11, 12, 13],                // Gunma - Kanto region
    [7, 8, 9, 10, 11, 12, 13],                // Saitama - Kanto region
    [7, 8, 9, 10, 11, 12, 13],                // Chiba - Kanto region
    [7, 8, 9, 10, 11, 12, 13],                // Tokyo - Kanto region
    [7, 8, 9, 10, 11, 12, 13],                // Kanagawa - Kanto region
    [1, 2, 3, 4, 5, 6, 14],                                      // Niigata (isolated)
    [15, 16, 17],                             // Toyama - Hokuriku region
    [15, 16, 17],                             // Ishikawa - Hokuriku region
    [15, 16, 17],                             // Fukui - Hokuriku region
    [18],                 // Yamanashi - Extended Chubu region + Nagano and Mie
    [20, 21, 22, 19, 23],                                      // Nagano (isolated)
    [20, 21, 22, 19, 23],                 // Gifu - Extended Chubu region + Nagano and Mie
    [20, 21, 22, 19, 23],                 // Shizuoka - Extended Chubu region + Nagano and Mie
    [20, 21, 22, 19, 23],                 // Aichi - Extended Chubu region + Nagano and Mie
    [23],                                      // Mie (isolated)
    [24, 25, 26, 27, 28, 29, 23],             // Shiga - Kansai region + Mie
    [24, 25, 26, 27, 28, 29, 23],             // Kyoto - Kansai region + Mie
    [24, 25, 26, 27, 28, 29, 23],             // Osaka - Kansai region + Mie
    [24, 25, 26, 27, 28, 29, 23],             // Hyogo - Kansai region + Mie
    [24, 25, 26, 27, 28, 29, 23],             // Nara - Kansai region + Mie
    [24, 25, 26, 27, 28, 29, 23],             // Wakayama - Kansai region + Mie
    [30, 31, 32, 33, 34],                     // Tottori - Chugoku region
    [30, 31, 32, 33, 34],                     // Shimane - Chugoku region
    [30, 31, 32, 33, 34],                     // Okayama - Chugoku region
    [30, 31, 32, 33, 34],                     // Hiroshima - Chugoku region
    [30, 31, 32, 33, 34],                     // Yamaguchi - Chugoku region
    [35, 36, 37, 38],                         // Tokushima - Shikoku region
    [35, 36, 37, 38],                         // Kagawa - Shikoku region
    [35, 36, 37, 38],                         // Ehime - Shikoku region
    [35, 36, 37, 38],                         // Kochi - Shikoku region
    [39, 40, 41, 42, 43, 44, 45, 46],             // Fukuoka - Kyushu region
    [39, 40, 41, 42, 43, 44, 45, 46],             // Saga - Kyushu region
    [39, 40, 41, 42, 43, 44, 45, 46],             // Nagasaki - Kyushu region
    [39, 40, 41, 42, 43, 44, 45, 46],             // Kumamoto - Kyushu region
    [39, 40, 41, 42, 43, 44, 45, 46],             // Oita - Kyushu region
    [39, 40, 41, 42, 43, 44, 45, 46],             // Miyazaki - Kyushu region
    [39, 40, 41, 42, 43, 44, 45, 46],             // Kagoshima - Kyushu region
    [39, 40, 41, 42, 43, 44, 45, 46],                                     // Okinawa
];