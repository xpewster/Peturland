import { CoordinateAnswerPair } from "../common/constants";

export enum CARS {
    GREY_TENT = "grey_tent",
    BLUE_TENT = "blue_tent",
    STICKER_CAR = "sticker_car",
    RED_MIRRORS = "red_mirrors",
    GEN4_GREY = "gen4_grey",
    WEST_CAR = "west_car",
    CAMO_CAR = "camo_car",
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
    [[251, 208], ["east", CARS.BLUE_TENT]],
    [[141, 187], ["east", CARS.BLUE_TENT]],
    [[354, 213], ["east", CARS.BLUE_TENT]],
    [[346, 266], ["south", CARS.BLUE_TENT]],
    [[310, 330], ["southwest", CARS.BLUE_TENT]],
    [[302, 370], ["southeast", CARS.BLUE_TENT]],
    [[283, 400], ["south", CARS.BLUE_TENT]],
    [[295, 461], ["northeast", CARS.BLUE_TENT]],
    [[322, 428], ["southwest", CARS.BLUE_TENT]],
    [[328, 426], ["northeast", CARS.BLUE_TENT]],
    [[284, 464], ["east", CARS.BLUE_TENT]],
    [[276, 463], ["west", CARS.BLUE_TENT]],
    [[266, 459], ["southeast", CARS.BLUE_TENT]],
    [[249, 454], ["west", CARS.BLUE_TENT]],
    [[197, 479], ["southwest", CARS.BLUE_TENT]],
    [[161, 523], ["south", CARS.BLUE_TENT]],
    [[137, 543], ["west", CARS.BLUE_TENT]],
    [[363, 199], ["northwest", CARS.BLUE_TENT]],
    [[353, 168], ["west", CARS.BLUE_TENT]],
    [[386, 207], ["east", CARS.BLUE_TENT]]
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