import { CoordinateAnswerPair } from "../../common/constants";
import mongolia from '../../../../../assets/maps/mongolia.png';
import ulaan from '../../../../../assets/maps/mong_ulaan2.png';

import grey_tent from '../../../../../assets/cars/grey_tent.png';
import blue_tent from '../../../../../assets/cars/blue_tent.png';
import sticker_car from '../../../../../assets/cars/sticker_car.png';
import red_mirrors from '../../../../../assets/cars/red_mirrors.png';
import gen4_grey from '../../../../../assets/cars/gen4_grey.png';
import west_car from '../../../../../assets/cars/west_car.png';
import camo_car from '../../../../../assets/cars/camo_car.png';
import depressed_car from '../../../../../assets/cars/depressed_tent.png';
import camo_empty from '../../../../../assets/cars/meta/camo_empty.png';
import left_bunch from '../../../../../assets/cars/meta/left_bunch.png';
import left_inflated from '../../../../../assets/cars/meta/left_inflated.png';
import left_strap from '../../../../../assets/cars/meta/left_strap.png';
import orange_straps from '../../../../../assets/cars/meta/orange_straps.png';
import red_mirrors_no from '../../../../../assets/cars/meta/red_mirrors_no.png';
import racks_0 from '../../../../../assets/cars/meta/racks/0.png';
import racks_1 from '../../../../../assets/cars/meta/racks/1.png';
import racks_2_1 from '../../../../../assets/cars/meta/racks/2_1.png';
import racks_2_0 from '../../../../../assets/cars/meta/racks/2_0.png';
import racks_3 from '../../../../../assets/cars/meta/racks/3.png';
import racks_4 from '../../../../../assets/cars/meta/racks/4.png';
import g4g_4_2right from '../../../../../assets/cars/meta/gen4g/4_2right.jpg';
import double_knot from '../../../../../assets/cars/meta/gen4g/double_knot.png';
import four_straps from '../../../../../assets/cars/meta/gen4g/four_straps.png';
import gremlin from '../../../../../assets/cars/meta/gen4g/gremlin.png';
import messy_left from '../../../../../assets/cars/meta/gen4g/messy_left.png';
import messy_right from '../../../../../assets/cars/meta/gen4g/messy_right.png';
import open_tent from '../../../../../assets/cars/meta/gen4g/open_tent.jpg';
import perfectly_packed from '../../../../../assets/cars/meta/gen4g/perfectfully_packed.png';
import single_knot from '../../../../../assets/cars/meta/gen4g/single_knot.png';
import slight_mess_right from '../../../../../assets/cars/meta/gen4g/slight_mess_right.jpg';
import double_knot_left from '../../../../../assets/cars/meta/gen4g/double_knot_left.png';
import flat_tent from '../../../../../assets/cars/meta/gen4g/flat_tent.png';
import mess_of_straps from '../../../../../assets/cars/meta/mess_of_straps.png';
import racks_blur from '../../../../../assets/cars/meta/racks/blur.png';
import racks_1_2 from '../../../../../assets/cars/meta/racks/1_2.png';
import inverted_tent from '../../../../../assets/cars/meta/inverted_tent.png';
import curved_straps from '../../../../../assets/cars/meta/curved_straps.png';
import multicolored_tent from '../../../../../assets/cars/meta/multicolored_tent.png';
import left_no_straps from '../../../../../assets/cars/meta/left_no_strap.png';
import depressed_snow from '../../../../../assets/cars/meta/camo_snow.png';

export const CAR_LABELS = [
    "Grey tent (Gen 3)", // 0
    "Blue tent (Gen 3)", // 1
    "Blue sticker car (Gen 4)", // 2
    "Red mirrors with snorkel (Gen 3)", // 3
    "Grey (Gen 4)", // 4
    "Hooks (Gen 3)", // 5
    "Camo car (filled) (Gen 3)", // 6
    "Depressed tent (Gen 3)", // 7
    "Camo car (empty) (Gen 3)", // 8
    "Left forward hook bunch (Gen 3)", // 9
    "Left blown (Gen 3)", // 10
    "Left straight hook (Gen 3)", // 11
    "Orange straps (Gen 3)", // 12
    "Red mirrors no snorkel (Gen 3)", // 13
    "Rack no straps (Gen 3)", // 14
    "Rack 1 strap (Gen 3)", // 15
    "Rack 3 straps, 2 left close (Gen 3)", // 16
    "Rack 2 straps (Gen 3)", // 17
    "Rack 3 straps, 2 left (Gen 3)", // 18
    "Rack with mess of straps (Gen 3)", // 19
    "Four straps with clump right (Gen 4)", // 20
    "Double knot (Gen 4)", // 21
    "Four straps neat (Gen 4)", // 22
    "Gremlin (Gen 4)", // 23
    "Messy, zipper left (Gen 4)", // 24
    "Messy, zipper right (Gen 4)", // 25
    "Open tent (Gen 4)", // 26
    "Perfectly packed (Gen 4)", // 27 
    "Single knot (Gen 4)", // 28
    "Two straps, slight mess right (Gen 4)", // 29
    "Double knot left (Gen 4)", // 30
    "Deflated tent (Gen 4)", // 31
    "Mess of straps (Gen 3)", // 32
    "Rack blurred (Gen 3)", // 33
    "Rack 3 straps, 2 right (Gen 3)", // 34
    "Inverted tent (Gen 3)", // 35
    "Curved straps (Gen 3)", // 36
    "Multicolored tent (Gen 3)", // 37
    "Hooks car with no left straight hook (Gen 3)", // 38
    "Snowy car (Gen 3)", // 39
]

export const GEN3_CAR_INDICES = [
    0, 1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    32, 33, 34, 35, 36, 37, 38, 39,
];

export const CAR_SRCS = [
    grey_tent, // 0
    blue_tent, // 1
    sticker_car, // 2
    red_mirrors, // 3
    gen4_grey, // 4
    west_car, // 5
    camo_car, // 6
    depressed_car, // 7
    camo_empty, // 8
    left_bunch, // 9
    left_inflated, // 10
    left_strap, // 11
    orange_straps, // 12
    red_mirrors_no, // 13
    racks_0, // 14
    racks_1, // 15
    racks_2_1, // 16
    racks_2_0, // 17
    racks_3, // 18
    racks_4, // 19
    g4g_4_2right, // 20
    double_knot, // 21
    four_straps, // 22
    gremlin, // 23
    messy_left, // 24
    messy_right, // 25
    open_tent, // 26
    perfectly_packed, // 27
    single_knot, // 28
    slight_mess_right, // 29
    double_knot_left, // 30
    flat_tent, // 31
    mess_of_straps, // 32
    racks_blur, // 33
    racks_1_2, // 34
    inverted_tent, // 35
    curved_straps, // 36
    multicolored_tent, // 37
    left_no_straps, // 38
    depressed_snow, // 39
];

export const EAST_WEST_DIVIDE_X = 250;

export const COORDINATE_ANSWER_PAIRS: CoordinateAnswerPair[] = [
    [[56, 63], [28]],
    [[62, 54], [28]],
    [[63, 63], [[28, 11]]],
    [[68, 70], [28]],
    [[82, 79], [[28, 38]]],
    [[108, 85], [28]],
    [[129, 87], [28]],
    [[137, 88], [28]],
    [[136, 93], [[28, 11]]],
    [[51, 79], [[28, 11]]],
    [[58, 82], [28]],
    [[33, 75], [28]],
    [[38, 81], [28]],
    [[40, 93], [[28, 10]]],
    [[47, 95], [[28, 10]]],
    [[55, 97], [[28, 10]]],
    [[59, 100], [28]],
    [[58, 102], [10]],
    [[44, 84], [28]],
    [[45, 87], [28]],
    [[59, 95], [28]],
    [[123, 104], [28]],

    [[118, 135], [27]],
    [[112, 136], [27]],

    [[128, 143], [22]],
    [[123, 130], [22]],

    [[132, 136], [24]],
    [[157, 138], [24]],
    [[173, 143], [24]],

    [[184, 137], [25]],
    [[184, 144], [25]],
    [[199, 143], [25]],

    [[208, 132], [23]],
    [[216, 122], [23]],
    [[225, 117], [23]],
    [[232, 112], [23]],
    [[248, 106], [23]],
    [[218, 116], [23]],

    [[249, 106], [[23, 0, 17]]],

    [[144, 88], [30]],
    [[131, 105], [[30, 11]]],

    [[115, 109], [29]],
    [[105, 111], [29]],
    [[126, 110], [[29, 11]]],

    [[129, 110], [[31, 11]]],

    [[155, 95], [[26, 11]]],
    [[164, 102], [[26, 11]]],
    [[151, 90], [[26, 11]]],

    [[181, 109], [[20, 0, 17]]],
    [[192, 116], [[20, 0, 17]]],
    [[212, 117], [[20, 0, 17]]],
    [[228, 115], [[20, 6]]],
    [[235, 109], [[20, 6]]],

    [[67, 112], [21]],
    [[79, 123], [21]],
    [[100, 129], [21]],
    [[71, 124], [21]],
    [[70, 129], [21]],
    [[73, 136], [[21, 9]]],
    [[61, 140], [21]],
    [[67, 144], [[21, 9]]],

    [[414, 117], [[17, 1]]],
    [[416, 114], [[17, 1]]],
    [[404, 113], [[17, 1]]],
    [[289, 113], [[17, 1]]],
    [[304, 116], [[17, 1]]],

    [[407, 112], [[15, 1]]],
    [[402, 107], [[15, 1]]],
    [[386, 110], [[15, 1]]],

    [[365, 107], [[33, 1]]],
    [[408, 107], [[33, 1]]],
    [[418, 122], [[33, 1]]],
    [[383, 123], [[33, 1]]],
    [[367, 118], [[33, 1]]],
    [[368, 80], [[33, 1]]],
    [[307, 93], [[33, 1]]],

    [[396, 116], [[18, 1]]],
    [[363, 145], [[18, 1]]],
    [[344, 145], [[18, 1]]],
    [[391, 122], [[18, 1]]],
    [[325, 123], [[18, 1]]],

    [[357, 105], [[14, 1]]],
    [[352, 97], [[14, 1]]],
    [[352, 75], [[14, 1]]],

    [[322, 89], [[12, 33]]],
    [[321, 95], [[12, 33]]],
    [[320, 85], [[12, 33]]],

    [[279, 111], [[12, 17]]],
    [[298, 116], [[12, 17]]],

    [[318, 104], [[12, 34]]],
    [[312, 113], [[12, 34]]],

    [[311, 96], [[34, 1]]],
    [[300, 99], [[34, 1]]],

    [[285, 106], [[19, 1]]],

    [[275, 111], [[13, 2]]],
    [[269, 109], [[13, 2]]],

    [[278, 106], [13]],
    [[245, 109], [13]],

    [[260, 117], [8]],

    [[264, 115], [[2, 3]]],

    [[274, 129], [3]],
    [[296, 155], [3]],
    [[318, 180], [3]],
    [[300, 168], [3]],

    [[249, 122], [[1, 14]]],
    [[253, 130], [[1, 14]]],
    [[249, 157], [[1, 14]]],
    [[258, 147], [[1, 14]]],
    [[241, 158], [[1, 14]]],

    [[226, 187], [35]],
    [[221, 188], [35]],
    [[217, 177], [35]],
    [[197, 183], [35]],
    [[167, 190], [35]],

    [[170, 186], [36]],

    [[250, 99], [[1, 14, 13]]],
    [[247, 84], [[1, 14, 13]]],
    [[238, 83], [[1, 14, 13]]],

    [[234, 76], [[1, 14]]],

    [[248, 95], [8]],

    [[248, 96], [7]],

    [[250, 65], [[1, 33]]],

    [[251, 90], [[1, 14]]],
    [[262, 77], [[1, 14]]],
    [[257, 70], [[1, 14]]],
    [[250, 60], [[1, 14]]],

    [[218, 119], [37]],

    [[225, 107], [[0, 17], [33]]],
    [[200, 98], [[0, 17], [33]]],
    [[186, 76], [[0, 17], [33]]],
    [[196, 74], [[0, 17], [33]]],
    [[211, 86], [[0, 17], [33]]],
    [[169, 63], [[0, 17], [33]]],
    [[161, 44], [[0, 17], [33]]],
    [[170, 79], [[0, 17], [33]]],

    [[165, 100], [[0, 17]]],

    [[207, 125], [6]],

    [[138, 113], [32]],
    [[205, 137], [[32, 23, 25]]],
    [[178, 139], [[32, 24, 25]]],

    [[90, 65], [11]],
    [[103, 75], [11]],
    [[106, 99], [11]],
    [[62, 66], [11]],
    [[85, 84], [38]],
    [[14, 82], [11]],
    [[24, 91], [11]],
    [[46, 79], [11]],
    [[142, 92], [11]],
    [[56, 78], [11]],

    [[68, 63], [[11, 28]]],

    [[93, 132], [9]],
    [[87, 134], [9]],
    [[83, 134], [9]],
    [[75, 146], [9]],
    [[60, 124], [9]],
    [[65, 126], [9]],
    [[65, 122], [9]],
    [[66, 117], [9]],

    [[120, 135], [[9, 27]]],

    [[288, 103], [[1, 16]]],
];

export const ULAAN_COORDINATE_ANSWER_PAIRS: CoordinateAnswerPair[] = [
    [[170, 423], [[2, 8]]],
    [[138, 412], [2]],
    [[115, 383], [2]],
    [[184, 407], [[2, 1, 8]]],
    [[196, 411], [2]],
    [[206, 410], [8]],
    [[239, 407], [[7, 2]]],
    [[260, 418], [2]],
    [[264, 414], [2]],
    [[295, 403], [7]],
    [[308, 383], [2]],
    [[331, 377], [2]],
    [[220, 378], [7]],
    [[216, 372], [7]],
    [[224, 366], [7]],
    [[190, 378], [2]],
    [[174, 372], [[7, 2, 1]]],
    [[161, 357], [2]],
    [[139, 363], [[7, 2, 1]]],
    [[121, 356], [2]],
    [[108, 351], [13]],
    [[101, 348], [2]],
    [[135, 338], [[13, 2, 7]]],
    [[82, 335], [[0, 13, 2]]],
    [[51, 370], [2]],
    [[85, 336], [2]],
    [[159, 335], [[7, 2]]],
    [[149, 321], [[13, 2]]],
    [[97, 332], [[13, 2, 7]]],
    [[119, 320], [2]],
    [[131, 313], [2]],
    [[53, 247], [2]],
    [[56, 267], [2]],
    [[81, 182], [[8, 2]]],
    [[128, 100], [[8, 2]]],
    [[176, 47], [8]],
    [[147, 181], [2]],
    [[186, 151], [2]],
    [[190, 170], [[13, 2]]],
    [[113, 270], [2]],
    [[123, 257], [[2, 39]]],
    [[127, 223], [39]],
    [[151, 228], [2]],
    [[162, 229], [2]],
    [[227, 200], [[13, 2]]],
    [[213, 215], [[13, 2]]],
    [[236, 204], [2]],
    [[310, 211], [7]],
    [[277, 249], [13]],
    [[283, 301], [7]],
    [[290, 310], [7]],
    [[275, 311], [[13, 2, 7]]],
    [[300, 338], [[13, 2, 7]]],
    [[277, 338], [13]],
    [[248, 300], [[8, 13, 2]]],
    [[256, 306], [2]],
    [[247, 304], [[8, 13]]],
    [[245, 338], [[7, 13]]],
    [[374, 328], [[13, 2, 7]]],
    [[393, 259], [[13, 2]]],
    [[383, 240], [13]],
    [[394, 371], [8]],
    [[412, 399], [8]],
];

export const REGION_TO_COORDINATE_ANSWER_PAIRS_MAP = new Map<string, CoordinateAnswerPair[]>([
    ["Around Ulaan", ULAAN_COORDINATE_ANSWER_PAIRS],
    ["Everything else", COORDINATE_ANSWER_PAIRS],
]);

export const MONGOLIA_REGION_TO_MAP_SRC_MAP = new Map<string, string>([
    ["Around Ulaan", ulaan],
    ["Everything else", mongolia],
]);

export const MONGOLIA_REGION_TO_441_HEIGHT_MAP = new Map<string, number>([
    ["Around Ulaan", 440],
    ["Everything else", 242],
]);
