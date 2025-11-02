import { r } from "react-router/dist/development/fog-of-war-Cm1iXIp7";
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
        case QuizType.NA_AREA_CODES:
            return LocalStorageStreakKeys.NA_AREA_CODES + enabledRegionBits;
        case QuizType.NA_ABBREVIATIONS:
            return LocalStorageStreakKeys.NA_ABBREVIATIONS + enabledRegionBits;
        case QuizType.EU_BOLLARDS:
            return LocalStorageStreakKeys.EU_BOLLARDS + enabledRegionBits;
        case QuizType.EU_PEDESTRIAN_CROSSINGS:
            return LocalStorageStreakKeys.EU_PEDESTRIAN_CROSSINGS + enabledRegionBits;
        case QuizType.EU_CHEVRONS:
            return LocalStorageStreakKeys.EU_CHEVRONS + enabledRegionBits;
        case QuizType.EU_DOMAINS:
            return LocalStorageStreakKeys.EU_DOMAINS + enabledRegionBits;
        case QuizType.EU_FLAGS:
            return LocalStorageStreakKeys.EU_FLAGS + enabledRegionBits;
        case QuizType.EU_GUARDRAILS:
            return LocalStorageStreakKeys.EU_GUARDRAILS + enabledRegionBits;
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
        case QuizType.INDONESIA_KABUPATEN:
            return LocalStorageStreakKeys.INDONESIA_KABUPATEN + enabledRegionBits;
        case QuizType.PHILLIPINES_PROVINCES:
            return LocalStorageStreakKeys.PHILLIPINES_PROVINCES + enabledRegionBits;
        case QuizType.PHILLIPINES_REGIONS:
            return LocalStorageStreakKeys.PHILLIPINES_REGIONS + enabledRegionBits;
        case QuizType.PHILLIPINES_PLATES:
            return LocalStorageStreakKeys.PHILLIPINES_PLATES + enabledRegionBits;
        case QuizType.VIETNAM_PROVINCES:
            return LocalStorageStreakKeys.VIETNAM_PROVINCES + enabledRegionBits;
        case QuizType.NIGERIA_STATES:
            return LocalStorageStreakKeys.NIGERIA_STATES + enabledRegionBits;
        case QuizType.KENYA_COUNTIES:
            return LocalStorageStreakKeys.KENYA_COUNTIES + enabledRegionBits;
        case QuizType.AUSTRALIA_PLATES:
            return LocalStorageStreakKeys.AUSTRALIA_PLATES + enabledRegionBits;
        case QuizType.SOUTH_AFRICA_PLATES:
            return LocalStorageStreakKeys.SOUTH_AFRICA_PLATES + enabledRegionBits;
        case QuizType.JAPAN_AREACODES:
            return LocalStorageStreakKeys.JAPAN_AREACODES + enabledRegionBits;
        case QuizType.JAPAN_PREFECTURES:
            return LocalStorageStreakKeys.JAPAN_PREFECTURES + enabledRegionBits;
        case QuizType.JAPAN_POLE_PLATES:
            return LocalStorageStreakKeys.JAPAN_POLE_PLATES + enabledRegionBits;
        case QuizType.JAPAN_POLE_REFLECTORS:
            return LocalStorageStreakKeys.JAPAN_POLE_REFLECTORS + enabledRegionBits;
        case QuizType.JAPAN_POLE_ATTACHMENTS:
            return LocalStorageStreakKeys.JAPAN_POLE_ATTACHMENTS + enabledRegionBits;
        case QuizType.JAPAN_KANJI:
            return LocalStorageStreakKeys.JAPAN_KANJI + enabledRegionBits;
        case QuizType.JAPAN_REGIONS:
            return LocalStorageStreakKeys.JAPAN_REGIONS + enabledRegionBits;
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
