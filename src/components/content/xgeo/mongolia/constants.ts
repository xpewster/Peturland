import { CoordinateAnswerPair } from "../common/constants";

export const REGIONS = ["Far east", "North Central", "Around Ulaan", "Far west", "South", "Central west", "Midwest"];

export enum CARS {
    GREY_TENT = "grey_tent",
    BLUE_TENT = "blue_tent",
    STICKER_CAR = "sticker_car",
    RED_MIRRORS = "red_mirrors",
    GEN4_GREY = "gen4_grey",
    WEST_CAR = "west_car",
    CAMO_CAR = "camo_car",
    DEPRESSED_CAR = "depressed_car",
}

export const FAR_EAST_COORDINATE_ANSWER_PAIRS: CoordinateAnswerPair[] = [
    [[387, 309], ["northwest"]], // Original: [551, 440], ["northwest"]
    [[359, 273], ["southeast"]], // Original: [511, 389], ["southeast"]
    [[382, 280], ["northeast"]], // Original: [543, 399], ["ne"]
    [[381, 270], ["northwest"]], // Original: [542, 384], ["northwest"]
    [[350, 250], ["north"]], // Original: [498, 355], ["north"]
    [[333, 227], ["southeast"]], // Original: [473, 323], ["southeast"]
    [[345, 250], ["south"]], // Original: [491, 356], ["s"]
    [[340, 257], ["east"]], // Original: [483, 365], ["e"]
    [[325, 251], ["southeast"]], // Original: [462, 357], ["southeast"]
    [[326, 256], ["southwest"]], // Original: [463, 365], ["southwest"]
    [[313, 259], ["west"]], // Original: [445, 368], ["w"]
    [[321, 216], ["northeast"]], // Original: [457, 307], ["ne"]
    [[312, 227], ["northeast"]], // Original: [444, 323], ["ne"]
    [[311, 231], ["west"]], // Original: [447, 329], ["w"]
    [[314, 238], ["north"]], // Original: [447, 339], ["north"]
    [[303, 250], ["northeast"]], // Original: [431, 356], ["ne"]
    [[303, 234], ["south"]], // Original: [431, 333], ["s"]
    [[297, 245], ["southwest"]], // Original: [423, 348], ["southwest"]
    [[257, 254], ["east"]], // Original: [366, 361], ["e"]
    [[191, 252], ["east"]], // Original: [271, 359], ["e"]
    [[120, 229], ["southeast"]], // Original: [170, 326], ["southeast"]
    [[281, 275], ["southwest"]], // Original: [400, 391], ["southwest"]
    [[204, 304], ["northwest"]], // Original: [290, 433], ["northwest"]
    [[179, 298], ["west"]], // Original: [254, 424], ["w"]
    [[83, 213], ["west"]], // Original: [117, 305], ["w"]
    [[86, 221], ["southeast"]], // Original: [123, 314], ["southeast"]
    [[64, 183], ["northwest"]], // Original: [91, 260], ["northwest"]
    [[29, 126], ["north"]], // Original: [41, 179], ["north"]
    [[41, 84], ["east"]], // Original: [59, 119], ["e"]
    [[116, 60], ["east"]], // Original: [165, 85], ["e"]
    [[86, 68], ["west"]], // Original: [136, 98], ["w"]
    [[86, 72], ["east"]], // Original: [136, 98], ["e"]
    [[155, 415], ["east"]], // Original: [220, 590], ["e"]
    [[130, 415], ["west"]], // Original: [185, 590], ["w"]
    [[86, 444], ["south"]], // Original: [122, 631], ["s"]
    [[72, 471], ["west"]], // Original: [103, 670], ["w"]
    [[54, 475], ["east"]], // Original: [76, 676], ["e"]
    [[54, 470], ["west"]], // Original: [76, 669], ["w"]
    [[30, 421], ["northwest"]], // Original: [42, 599], ["northwest"]
    [[10, 378], ["northwest"]], // Original: [14, 537], ["northwest"]
    [[135, 136], ["southwest"]], // Original: [192, 194], ["southwest"]
    [[150, 79], ["south"]] // Original: [213, 112], ["s"]
]

export const MIDWEST_COORDINATE_ANSWER_PAIRS: CoordinateAnswerPair[] = [
    [[358, 284], ["northwest", CARS.GREY_TENT]],
    [[385, 322], ["west", CARS.GREY_TENT]],
    [[424, 322], ["west", CARS.GREY_TENT]],
    [[304, 212], ["northwest", CARS.GREY_TENT]],
    [[332, 186], ["west", CARS.GREY_TENT]],
    [[368, 193], ["northwest", CARS.GREY_TENT]],
    [[380, 228], ["north", CARS.GREY_TENT]],
    [[414, 239], ["northwest", CARS.GREY_TENT]],
    [[315, 191], ["east", CARS.GREY_TENT]],
    [[328, 188], ["southwest", CARS.GREY_TENT]],
    [[271, 186], ["southeast", CARS.GREY_TENT]],
    [[244, 176], ["east", CARS.GREY_TENT]],
    [[234, 167], ["north", CARS.GREY_TENT]],
    [[232, 157], ["north", CARS.GREY_TENT]],
    [[229, 146], ["south", CARS.GREY_TENT]],//
    [[234, 126], ["southwest", CARS.GREY_TENT]],
    [[241, 94], ["north", CARS.GREY_TENT]],
    [[184, 37], ["northwest", CARS.GREY_TENT]],
    [[191, 37], ["southwest", CARS.GREY_TENT]],
    [[207, 48], ["southeast", CARS.GREY_TENT]],
    [[197, 57], ["southwest", CARS.GREY_TENT]],
    [[193, 71], ["sothh", CARS.GREY_TENT]],
    [[198, 75], ["northeast", CARS.GREY_TENT]],
    [[184, 97], ["northeast", CARS.GREY_TENT]],
    [[173, 126], ["north", CARS.GREY_TENT]],
    [[193, 154], ["west", CARS.GREY_TENT]],
    [[192, 113], ["southeast", CARS.GREY_TENT]],
    [[208, 134], ["southeast", CARS.GREY_TENT]],
    [[229, 171], ["southeast", CARS.GREY_TENT]],
    [[233, 192], ["east", CARS.GREY_TENT]],
    [[240, 207], ["west", CARS.GREY_TENT]],
    [[409, 369], ["northeast", CARS.GEN4_GREY]],
    [[409, 369], ["southwest", CARS.GREY_TENT]],
    [[370, 366], ["east", CARS.GEN4_GREY]],
    [[370, 366], ["west", CARS.GREY_TENT]],
    [[357, 361], ["east", CARS.GREY_TENT]],
    [[357, 361], ["east", CARS.GEN4_GREY]],
    [[288, 342], ["east", CARS.GREY_TENT]],
    [[288, 342], ["east", CARS.GEN4_GREY]],
    [[260, 314], ["northwest", CARS.GREY_TENT]],
    [[260, 314], ["southeast", CARS.GEN4_GREY]],
    [[230, 300], ["west", CARS.GREY_TENT]],
    [[230, 300], ["east", CARS.GEN4_GREY]],
    [[230, 300], ["east", CARS.WEST_CAR]],
    [[243, 300], ["east", CARS.WEST_CAR]],
    [[243, 300], ["east", CARS.GEN4_GREY]],
    [[211, 298], ["east", CARS.GREY_TENT]],
    [[191, 307], ["east", CARS.WEST_CAR]],
    [[191, 307], ["east", CARS.GEN4_GREY]],
    [[170, 273], ["south", CARS.WEST_CAR]],
    [[170, 273], ["south", CARS.GEN4_GREY]],
    [[125, 246], ["east", CARS.GEN4_GREY]],
    [[129, 253], ["east", CARS.WEST_CAR]],
    [[110, 251], ["southwest", CARS.GEN4_GREY]],
    [[83, 284], ["northeast", CARS.WEST_CAR]],
    [[83, 284], ["southwest", CARS.GEN4_GREY]],
    [[35, 335], ["east", CARS.WEST_CAR]],
    [[11, 333], ["east", CARS.GEN4_GREY]],
    [[51, 245], ["east", CARS.GEN4_GREY]],
    [[51, 304], ["west", CARS.GEN4_GREY]],
    [[24, 324], ["southeast", CARS.WEST_CAR]],
    [[396, 427], ["southwest", CARS.GEN4_GREY]],
    [[310, 476], ["west", CARS.GEN4_GREY]],
    [[294, 448], ["southwest", CARS.GEN4_GREY]],
    [[127, 467], ["west", CARS.GEN4_GREY]],
    [[36, 430], ["northeast", CARS.GEN4_GREY]],
    [[45, 465], ["southeast", CARS.GEN4_GREY]],
];

export const NORTH_CENTRAL_COORDINATE_ANSWER_PAIRS: CoordinateAnswerPair[] = [
    [[251, 208], ["east"]],
    [[141, 187], ["east"]],
    [[354, 213], ["east"]],
    [[346, 266], ["south"]],
    [[310, 330], ["southwest"]],
    [[302, 370], ["southeast"]],
    [[283, 400], ["south"]],
    [[295, 461], ["northeast"]],
    [[322, 428], ["southwest"]],
    [[328, 426], ["northeast"]],
    [[284, 464], ["east"]],
    [[276, 463], ["west"]],
    [[266, 459], ["southeast"]],
    [[249, 454], ["west"]],
    [[197, 479], ["southwest"]],
    [[161, 523], ["south"]],
    [[137, 543], ["west"]],
    [[363, 199], ["northwest"]],
    [[353, 168], ["west"]],
    [[386, 207], ["east"]]
];

export const CENTRAL_WEST_COORDINATE_ANSWER_PAIRS: CoordinateAnswerPair[] = [
    [[386, 169], ["north", CARS.RED_MIRRORS]],
    [[386, 169], ["north", CARS.BLUE_TENT]],
    [[410, 294], ["north", CARS.RED_MIRRORS]],
    [[410, 294], ["north", CARS.BLUE_TENT]],
    [[394, 268], ["west", CARS.CAMO_CAR]],
    [[402, 277], ["northwest"]],
    [[380, 108], ["northwest", CARS.BLUE_TENT]],
    [[374, 78], ["north", CARS.RED_MIRRORS]],
    [[394, 55], ["east", CARS.RED_MIRRORS]],
    [[346, 116], ["southwest", CARS.RED_MIRRORS]],
    [[346, 116], ["southwest", CARS.BLUE_TENT]],
    [[286, 134], ["west", CARS.RED_MIRRORS]],
    [[286, 134], ["west", CARS.BLUE_TENT]],
    [[256, 85], ["north", CARS.BLUE_TENT]],
    [[397, 381], ["west", CARS.GEN4_GREY]],
    [[397, 381], ["west", CARS.RED_MIRRORS]], 
    [[365, 409], ["south", CARS.RED_MIRRORS]],
    [[318, 384], ["west", CARS.GEN4_GREY]],
    [[318, 384], ["west", CARS.CAMO_CAR]],
    [[146, 394], ["west", CARS.GREY_TENT]],
    [[261, 414], ["northeast", CARS.GEN4_GREY]],
    [[231, 439], ["southwest", CARS.GEN4_GREY]],
    [[185, 484], ["northeast", CARS.GEN4_GREY]],
    [[101, 489], ["west", CARS.GEN4_GREY]],
    [[231, 439], ["southwest", CARS.CAMO_CAR]],
];

export const FAR_WEST_COORDINATE_ANSWER_PAIRS: CoordinateAnswerPair[] = [
    [[412, 102], ["northeast", CARS.WEST_CAR]],
    [[267, 61], ["north", CARS.GEN4_GREY]],
    [[280, 107], ["northeast", CARS.WEST_CAR]],
    [[301, 103], ["northeast", CARS.WEST_CAR]],
    [[301, 103], ["southwest", CARS.GEN4_GREY]],
    [[286, 102], ["southeast", CARS.WEST_CAR]],
    [[286, 102], ["northwest", CARS.GEN4_GREY]],
    [[339, 167], ["east", CARS.GEN4_GREY]],
    [[377, 177], ["southeast", CARS.WEST_CAR]],
    [[387, 204], ["west", CARS.WEST_CAR]],
    [[285, 173], ["north", CARS.GEN4_GREY]],
    [[251, 190], ["east", CARS.GEN4_GREY]],
    [[219, 179], ["southeast", CARS.WEST_CAR]],
    [[219, 179], ["southeast", CARS.GEN4_GREY]],
    [[238, 173], ["north", CARS.WEST_CAR]],
    [[185, 182], ["northeast", CARS.WEST_CAR]],
    [[186, 212], ["southeast", CARS.GEN4_GREY]],
    [[184, 199], ["southwest", CARS.GEN4_GREY]],
    [[148, 186], ["north", CARS.GEN4_GREY]],
    [[153, 225], ["north", CARS.GEN4_GREY]],
    [[153, 225], ["north", CARS.WEST_CAR]],
    [[235, 264], ["west", CARS.GEN4_GREY]],
    [[235, 264], ["west", CARS.WEST_CAR]],
    [[259, 291], ["northwest", CARS.WEST_CAR]],
    [[254, 278], ["northwest", CARS.GEN4_GREY]],
    [[82, 231], ["west", CARS.WEST_CAR]],
    [[289, 330], ["northwest", CARS.GEN4_GREY]],
    [[286, 359], ["southwest", CARS.WEST_CAR]],
    [[298, 364], ["north", CARS.WEST_CAR]],
    [[298, 364], ["south", CARS.GEN4_GREY]],
    [[294, 381], ["north", CARS.WEST_CAR]],
    [[291, 415], ["north", CARS.WEST_CAR]],
    [[320, 409], ["southeast", CARS.GEN4_GREY]],
    [[318, 420], ["west", CARS.GEN4_GREY]],
    [[325, 466], ["north", CARS.WEST_CAR]],
    [[325, 466], ["south", CARS.GEN4_GREY]],
    [[264, 478], ["west", CARS.GEN4_GREY]],
    [[264, 478], ["west", CARS.WEST_CAR]],
    [[302, 498], ["west", CARS.WEST_CAR]],
    [[380, 454], ["south", CARS.WEST_CAR]],
    [[308, 355], ["southeast", CARS.GEN4_GREY]],
    [[319, 369], ["northwest", CARS.GEN4_GREY]],
    [[283, 399], ["west", CARS.GEN4_GREY]],
    [[400, 452], ["northwest", CARS.WEST_CAR]],
    [[425, 441], ["southwest", CARS.WEST_CAR]],
    [[31, 187], ["northeast", CARS.WEST_CAR]],
    [[269, 396], ["southwest", CARS.WEST_CAR]],
    [[256, 391], ["west", CARS.WEST_CAR]],
    [[315, 495], ["northeast", CARS.WEST_CAR]],
];

export const SOUTH_COORDINATE_ANSWER_PAIRS: CoordinateAnswerPair[] = [
    [[88, 31], ["southwest", CARS.BLUE_TENT]],
    [[83, 73], ["south", CARS.BLUE_TENT]],
    [[76, 117], ["south", CARS.BLUE_TENT]],
    [[53, 62], ["southwest", CARS.CAMO_CAR]],
    [[71, 130], ["north", CARS.BLUE_TENT]],
    [[71, 133], ["south", CARS.BLUE_TENT]],
    [[71, 138], ["north", CARS.BLUE_TENT]],
    [[49, 139], ["southwest", CARS.BLUE_TENT]],
    [[64, 168], ["south", CARS.BLUE_TENT]],
    [[54, 235], ["south", CARS.BLUE_TENT]],
    [[12, 289], ["northwest", CARS.BLUE_TENT]],
    [[12, 260], ["north", CARS.BLUE_TENT]],
    [[37, 197], ["northeast", CARS.BLUE_TENT]],
    [[115, 182], ["east", CARS.BLUE_TENT]],
    [[184, 100], ["southeast", CARS.RED_MIRRORS]],
    [[299, 236], ["southeast", CARS.RED_MIRRORS]],
    [[314, 279], ["south", CARS.RED_MIRRORS]],
    [[314, 295], ["north", CARS.RED_MIRRORS]],
    [[309, 286], ["south", CARS.RED_MIRRORS]],
    [[319, 293], ["southeast", CARS.RED_MIRRORS]],
    [[349, 298], ["southeast", CARS.RED_MIRRORS]],
    [[365, 325], ["northeast", CARS.RED_MIRRORS]],
    [[368, 317], ["southwest", CARS.RED_MIRRORS]],
    [[374, 312], ["northeast", CARS.RED_MIRRORS]],
    [[379, 312], ["north", CARS.RED_MIRRORS]],
    [[406, 353], ["southeast", CARS.RED_MIRRORS]],
];

export const AROUND_ULAAN_COORDINATE_ANSWER_PAIRS: CoordinateAnswerPair[] = [
    [[266, 82], ["southeast", CARS.RED_MIRRORS]],
    [[299, 117], ["southeast", CARS.STICKER_CAR]],
    [[265, 122], ["southwest", CARS.RED_MIRRORS]],
    [[312, 151], ["south", CARS.STICKER_CAR]],
    [[306, 172], ["north", CARS.STICKER_CAR]],
    [[330, 161], ["east", CARS.STICKER_CAR]],
    [[364, 132], ["west", CARS.STICKER_CAR]],
    [[364, 132], ["east", CARS.RED_MIRRORS]],
    [[420, 124], ["east", CARS.STICKER_CAR]],
    [[420, 124], ["east", CARS.RED_MIRRORS]],
    [[415, 171], ["south", CARS.CAMO_CAR]],
    [[376, 103], ["northeast", CARS.STICKER_CAR]],
    [[376, 103], ["northeast", CARS.RED_MIRRORS]],
    [[376, 103], ["northeast", CARS.CAMO_CAR]],
    [[288, 193], ["east", CARS.DEPRESSED_CAR]],
    [[251, 212], ["east", CARS.STICKER_CAR]],
    [[217, 193], ["southeast", CARS.STICKER_CAR]],
    [[217, 193], ["southeast", CARS.DEPRESSED_CAR]],
    [[199, 178], ["northeast", CARS.DEPRESSED_CAR]],
    [[207, 150], ["north", CARS.DEPRESSED_CAR]],
    [[196, 167], ["southwest", CARS.DEPRESSED_CAR]],
    [[174, 172], ["southeast", CARS.DEPRESSED_CAR]],
    [[174, 172], ["southeast", CARS.STICKER_CAR]],
    [[164, 186], ["south", CARS.BLUE_TENT]],
    [[164, 186], ["north", CARS.STICKER_CAR]],
    [[176, 201], ["northeast", CARS.STICKER_CAR]],
    [[142, 215], ["west", CARS.CAMO_CAR]],
    [[142, 215], ["east", CARS.STICKER_CAR]],
    [[78, 177], ["south", CARS.STICKER_CAR]],
    [[93, 198], ["southeast", CARS.STICKER_CAR]],
    [[133, 160], ["east", CARS.DEPRESSED_CAR]],
    [[133, 160], ["east", CARS.STICKER_CAR]],
    [[133, 160], ["east", CARS.BLUE_TENT]],
    [[134, 137], ["northeast", CARS.STICKER_CAR]],
    [[105, 145], ["southeast", CARS.BLUE_TENT]],
    [[105, 145], ["southeast", CARS.STICKER_CAR]],
    [[129, 111], ["east", CARS.DEPRESSED_CAR]],
    [[129, 111], ["east", CARS.STICKER_CAR]],
    [[118, 98], ["north", CARS.STICKER_CAR]],
    [[107, 106], ["southwest", CARS.STICKER_CAR]],
    [[105, 145], ["southeast", CARS.DEPRESSED_CAR]],
    [[102, 129], ["south", CARS.DEPRESSED_CAR]],
    [[70, 128], ["east", CARS.STICKER_CAR]],
    [[97, 87], ["southwest", CARS.STICKER_CAR]],
    [[56, 110], ["southwest", CARS.RED_MIRRORS]],
    [[56, 110], ["southwest", CARS.STICKER_CAR]],
    [[47, 118], ["west", CARS.STICKER_CAR]],
    [[42, 134], ["southwest", CARS.STICKER_CAR]],
    [[42, 134], ["southwest", CARS.RED_MIRRORS]],
    [[284, 83], ["southwest", CARS.DEPRESSED_CAR]],
    [[273, 72], ["east", CARS.DEPRESSED_CAR]],
    [[282, 28], ["south", CARS.RED_MIRRORS]],
    [[282, 28], ["north", CARS.STICKER_CAR]],
    [[273, 20], ["north", CARS.RED_MIRRORS]],
];
