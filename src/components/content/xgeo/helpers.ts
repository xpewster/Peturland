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
            return "default" + enabledRegionBits;
        case QuizType.US_STATE_HIGHWAY:
            return "default" + enabledRegionBits;
        case QuizType.US_COUNTY_SECONDARY_HIGHWAY:
            return "default" + enabledRegionBits;
        case QuizType.NA_TREE_SPECIES:
            return "default" + enabledRegionBits;
        case QuizType.BRAZIL_AREA_CODES:
            return LocalStorageStreakKeys.BRAZIL_AREA_CODES + enabledRegionBits;
        default:
            return "default" + enabledRegionBits;
    }
}
