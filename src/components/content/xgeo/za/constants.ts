export enum SOUTH_AFRICA_PROVINCES {
    EASTERN_CAPE = "Eastern Cape",
    FREE_STATE = "Free State",
    GAUTENG = "Gauteng",
    KWAZULU_NATAL = "KwaZulu-Natal",
    LIMPOPO = "Limpopo",
    MPUMALANGA = "Mpumalanga",
    NORTH_WEST = "North West",
    NORTHERN_CAPE = "Northern Cape",
    WESTERN_CAPE = "Western Cape",
}

export const PROVINCES = [
    SOUTH_AFRICA_PROVINCES.NORTHERN_CAPE,
    SOUTH_AFRICA_PROVINCES.KWAZULU_NATAL,
    SOUTH_AFRICA_PROVINCES.FREE_STATE,
    SOUTH_AFRICA_PROVINCES.EASTERN_CAPE,
    SOUTH_AFRICA_PROVINCES.LIMPOPO,
    SOUTH_AFRICA_PROVINCES.NORTH_WEST,
    SOUTH_AFRICA_PROVINCES.MPUMALANGA,
    SOUTH_AFRICA_PROVINCES.WESTERN_CAPE,
    SOUTH_AFRICA_PROVINCES.GAUTENG,
];

export const PROVINCE_TO_REGION_BITFLAG = [
    0x1, // Eastern Cape
    0x1, // Free State
    0x1, // Gauteng
    0x1, // KwaZulu-Natal
    0x1, // Limpopo
    0x1, // Mpumalanga
    0x1, // North West
    0x1, // Northern Cape
    0x1, // Western Cape
];
