export const NICES = ["Nice!", "Super!", "Cool!", "Spectacular!", "Awesome!", "Well done!", "Well played!", "Sweet!", "You rock!"];
export const BADS = ["Wrong!", "Nice...try!", "Incorrect!", "Try again!", "Sad!", "Very sad!"];

export enum QuizType {
    US_LICENSE_PLATES,
    US_ADOPT_A_HIGHWAY,
    US_STATE_HIGHWAY,
    US_COUNTY_SECONDARY_HIGHWAY,
    NA_TREE_SPECIES,
    BRAZIL_AREA_CODES,
    MONG_DRIVING_DIRECTION,
    MONG_CAR_META,
}

export enum LocalStorageStreakKeys {
    US_LICENSE_PLATES = "bestStreak",
    BRAZIL_AREA_CODES = "brazil_areacodes_bestStreak",
    MONG_DRIVING_DIRECTION = "mongolia_driving_direction_bestStreak",
    MONG_CAR_META = "mongolia_car_meta_bestStreak",
}
