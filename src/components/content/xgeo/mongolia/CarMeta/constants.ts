import { CoordinateAnswerPair } from "../../common/constants";
import mongolia from '../../../../../assets/maps/mongolia.png';

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
import racks_2 from '../../../../../assets/cars/meta/racks/2.png';
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
    "Left inflated (Gen 3)", // 10
    "Left straight hook (Gen 3)", // 11
    "Orange straps (Gen 3)", // 12
    "Red mirrors no snorkel (Gen 3)", // 13
    "Rack no straps (Gen 3)", // 14
    "Rack 1 strap (Gen 3)", // 15
    "Rack 3 straps, 2 right (Gen 3)", // 16
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
]

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
    racks_2, // 16
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
];

export const COORDINATE_ANSWER_PAIRS: CoordinateAnswerPair[] = [
    [[50, 50], [0]],
    [[350, 200], [5]],

    [[55, 62], [28]],
    [[62, 54], [28]],
    [[63, 63], [28]],
    [[67, 70], [28]],
    [[82, 79], [28]],
    [[108, 85], [28]],
    [[129, 87], [28]],
    [[137, 88], [28]],
    [[136, 93], [28]],
    [[51, 79], [28]],
    [[58, 82], [28]],
    [[33, 75], [28]],
    [[37, 81], [28]],
    [[40, 94], [28]],
    [[55, 97], [28]],
    [[59, 100], [28]],
    [[44, 84], [28]],
    [[45, 87], [28]],
    [[58, 95], [28]],
    [[122, 104], [28]],

    [[118, 135], [27]],
    [[112, 136], [27]],

    [[124, 142], [22]],
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
    [[298, 106], [23]],

    [[144, 88], [30]],
    [[131, 105], [30]],

    [[115, 109], [29]],
    [[105, 111], [29]],

    [[127, 110], [31]],

    [[154, 95], [26]],
    [[164, 102], [26]],

    [[117, 106], [20]],
    [[192, 116], [20]],
    [[212, 117], [20]],
    [[228, 115], [20]],
    [[235, 109], [20]],

    [[66, 112], [21]],
    [[79, 123], [21]],
    [[100, 129], [21]],
    [[70, 124], [21]],
    [[70, 129], [21]],
    [[72, 136], [21]],
    [[61, 140], [21]],
    [[67, 144], [21]],

    [[414, 117], [17]],
    [[416, 114], [17]],
    [[404, 113], [17]],
    [[289, 113], [17]],
    [[304, 116], [17]],

    [[409, 112], [15]],
    [[403, 107], [15]],
    [[386, 110], [15]],
    [[365, 107], [15]],

    [[408, 107], [33]],
    [[419, 122], [33]],
    [[383, 123], [33]],
    [[368, 118], [33]],
    [[368, 80], [33]],
    [[307, 93], [33]],

    [[396, 116], [18]],
    [[363, 145], [18]],
    [[346, 145], [18]],
    [[391, 123], [18]],
    [[325, 123], [18]],

    [[357, 105], [14]],
    [[352, 96], [14]],
    [[352, 75], [14]],

    [[322, 89], [[12, 33]]],
    [[321, 95], [[12, 33]]],
    [[320, 85], [[12, 33]]],

    [[279, 111], [[12, 17]]],
    [[298, 116], [[12, 17]]],

    [[318, 104], [[12, 34]]],
    [[312, 113], [[12, 34]]],

    [[311, 96], [34]],
    [[300, 99], [34]],

    [[285, 106], [19]],

    [[275, 111], [13, 2]],
    [[269, 109], [13, 2]],

    [[278, 106], [13]],

    [[260, 117], [8]],

    [[264, 115], [2, 3]],

    [[274, 129], [3]],
    [[296, 155], [3]],
    [[318, 180], [3]],
    [[300, 168], [3]],

    [[249, 122], [1, 14]],
    [[253, 130], [1, 14]],
    [[249, 157], [1, 14]],
    [[258, 147], [1, 14]],
    [[241, 158], [1, 14]],

    [[226, 187], [35]],
    [[221, 188], [35]],
    [[217, 177], [35]],
    [[197, 183], [35]],
    [[167, 190], [35]],

    [[170, 186], [36]],

    [[250, 99], [1, 14, 13]],
    [[247, 84], [1, 14, 13]],
    [[238, 82], [1, 14, 13]],

    [[234, 76], [1, 14]],

    [[247, 95], [8]],

    [[248, 96], [7]],

    [[250, 65], [1, 33]],

    [[251, 90], [1, 14]],
    [[262, 77], [1, 14]],
    [[257, 70], [1, 14]],
    [[250, 60], [1, 14]],
];

export const REGION_TO_COORDINATE_ANSWER_PAIRS_MAP = new Map<string, CoordinateAnswerPair[]>([
    ["Around Ulaan", COORDINATE_ANSWER_PAIRS],
    ["Everything else", COORDINATE_ANSWER_PAIRS],
]);

export const MONGOLIA_REGION_TO_MAP_SRC_MAP = new Map<string, string>([
    ["Around Ulaan", mongolia],
    ["Everything else", mongolia],
]);