import { LocalStorageStreakKeys, QuizType } from "./constants";
import { REGION_INDEX_TO_BIT } from "./us/constants";

export const randomElement = (array: any[]) => {
    return array[Math.floor(Math.random() * array.length)];
};

export const getStreakKey = (quizType: QuizType, enableRegion: boolean[]): string => {
    const enabledRegionBits = enableRegion.reduce((acc, enabled, index) => {
        return enabled ? acc | REGION_INDEX_TO_BIT[index] : acc;
    }, 0);
    switch (quizType) {
        case QuizType.US_LICENSE_PLATES:
            return LocalStorageStreakKeys.US_LICENSE_PLATES + enabledRegionBits;
        case QuizType.US_ADOPT_A_HIGHWAY:
            return LocalStorageStreakKeys.US_ADOPT_A_HIGHWAY + enabledRegionBits;
        case QuizType.US_STATE_HIGHWAY:
            return LocalStorageStreakKeys.US_STATE_HIGHWAY + enabledRegionBits;
        case QuizType.US_COUNTY_SECONDARY_HIGHWAY:
            return LocalStorageStreakKeys.US_COUNTY_SECONDARY_HIGHWAY + enabledRegionBits;
        case QuizType.US_STATE_FLAGS:
            return LocalStorageStreakKeys.US_STATE_FLAGS + enabledRegionBits;
        case QuizType.US_WINDSHIELD_STICKERS:
            return LocalStorageStreakKeys.US_WINDSHIELD_STICKERS + enabledRegionBits;
        case QuizType.NA_TREE_SPECIES:
            return LocalStorageStreakKeys.NA_TREE_SPECIES + enabledRegionBits;
        case QuizType.NA_ABBREVIATIONS:
            return LocalStorageStreakKeys.NA_ABBREVIATIONS + enabledRegionBits;
        case QuizType.BRAZIL_AREA_CODES:
            return LocalStorageStreakKeys.BRAZIL_AREA_CODES + enabledRegionBits;
        case QuizType.BRAZIL_ABBREVIATIONS:
            return LocalStorageStreakKeys.BRAZIL_ABBREVIATIONS + enabledRegionBits;
        case QuizType.BRAZIL_POSTCODES:
            return LocalStorageStreakKeys.BRAZIL_POSTCODES + enabledRegionBits;
        case QuizType.MONG_DRIVING_DIRECTION:
            return LocalStorageStreakKeys.MONG_DRIVING_DIRECTION + enabledRegionBits;
        case QuizType.MONG_CAR_META:
            return LocalStorageStreakKeys.MONG_CAR_META + enabledRegionBits;
        default:
            return "default" + enabledRegionBits;
    }
}

export function shuffle(array: any[]) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}
