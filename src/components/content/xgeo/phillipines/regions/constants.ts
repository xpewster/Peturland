export enum FILOREGIONS {
	ILOCOS = "Region I (Ilocos Region)",
	CAGAYAN_VALLEY = "Region II (Cagayan Valley)",
	CENTRAL_LUZON = "Region III (Central Luzon)",
	CALABARZON = "Region IV-A (Calabarzon)",
	BICOL = "Region V (Bicol Region)",
	WESTERN_VISAYAS = "Region VI (Western Visayas)",
	CENTRAL_VISAYAS = "Region VII (Central Visayas)",
	EASTERN_VISAYAS = "Region VIII (Eastern Visayas)",
	ZAMBOANGA_PENINSULA = "Region IX (Zamboanga Peninsula)",
	NORTHERN_MINDANAO = "Region X (Northern Mindanao)",
	DAVAO = "Region XI (Davao Region)",
	SOCCSKSARGEN = "Region XII (Soccsksargen)",
	CARAGA = "Region XIII (Caraga)",
	NCR = "National Capital Region (NCR)",
	CAR = "Cordillera Administrative Region (CAR)",
	MIMAROPA = "Mimaropa Region", // Also known as Region IV-B
	BARMM = "Bangsamoro Autonomous Region In Muslim Mindanao (BARMM)",
	NIR = "Negros Island Region (NIR)",
}

export const REGIONS = [
	FILOREGIONS.WESTERN_VISAYAS,
	FILOREGIONS.CENTRAL_VISAYAS,
	FILOREGIONS.NIR,
	FILOREGIONS.ILOCOS,
	FILOREGIONS.CAGAYAN_VALLEY,
	FILOREGIONS.CENTRAL_LUZON,
	FILOREGIONS.CALABARZON,
	FILOREGIONS.BICOL,
	FILOREGIONS.EASTERN_VISAYAS,
	FILOREGIONS.ZAMBOANGA_PENINSULA,
	FILOREGIONS.NORTHERN_MINDANAO,
	FILOREGIONS.DAVAO,
	FILOREGIONS.SOCCSKSARGEN,
	FILOREGIONS.NCR,
	FILOREGIONS.CAR,
	FILOREGIONS.CARAGA,
	FILOREGIONS.MIMAROPA,
	FILOREGIONS.BARMM,
];

export const REGION_INDEX_TO_FILOREGION_INDEX = [
    [0], [1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15], [16], [17],
];

export const FILOREGION_BITFLAG = [
    0x2, 0x2, 0x2, 0x1, 0x1, 0x1, 0x1, 0x1, 0x2, 0x4, 0x4, 0x4, 0x4, 0x1, 0x1, 0x4, 0x2, 0x4,
]