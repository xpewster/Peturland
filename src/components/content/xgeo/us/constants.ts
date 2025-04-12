export enum US_STATE_NAMES {
    ALABAMA = "Alabama",
    ALASKA = "Alaska",
    ARIZONA = "Arizona",
    ARKANSAS = "Arkansas",
    CALIFORNIA = "California",
    COLORADO = "Colorado",
    CONNECTICUT = "Connecticut",
    DELAWARE = "Delaware",
    DISTRICT_OF_COLUMBIA = "District of Columbia",
    FLORIDA = "Florida",
    GEORGIA = "Georgia",
    HAWAII = "Hawaii",
    IDAHO = "Idaho",
    ILLINOIS = "Illinois",
    INDIANA = "Indiana",
    IOWA = "Iowa",
    KANSAS = "Kansas",
    KENTUCKY = "Kentucky",
    LOUISIANA = "Louisiana",
    MAINE = "Maine",
    MARYLAND = "Maryland",
    MASSACHUSETTS = "Massachusetts",
    MICHIGAN = "Michigan",
    MINNESOTA = "Minnesota",
    MISSISSIPPI = "Mississippi",
    MISSOURI = "Missouri",
    MONTANA = "Montana",
    NEBRASKA = "Nebraska",
    NEVADA = "Nevada",
    NEW_HAMPSHIRE = "New Hampshire",
    NEW_JERSEY = "New Jersey",
    NEW_MEXICO = "New Mexico",
    NEW_YORK = "New York",
    NORTH_CAROLINA = "North Carolina",
    NORTH_DAKOTA = "North Dakota",
    OHIO = "Ohio",
    OKLAHOMA = "Oklahoma",
    OREGON = "Oregon",
    PENNSYLVANIA = "Pennsylvania",
    RHODE_ISLAND = "Rhode Island",
    SOUTH_CAROLINA = "South Carolina",
    SOUTH_DAKOTA = "South Dakota",
    TENNESSEE = "Tennessee",
    TEXAS = "Texas",
    UTAH = "Utah",
    VERMONT = "Vermont",
    VIRGINIA = "Virginia",
    WASHINGTON = "Washington",
    WEST_VIRGINIA = "West Virginia",
    WISCONSIN = "Wisconsin",
    WYOMING = "Wyoming",
}

export enum MEXICO_STATE_NAMES {
    AGUASCALIENTES = "Aguascalientes",
    BAJA_CALIFORNIA = "Baja California",
    BAJA_CALIFORNIA_SUR = "Baja California Sur",
    CAMPECHE = "Campeche",
    CHIAPAS = "Chiapas",
    CHIHUAHUA = "Chihuahua",
    COAHUILA = "Coahuila",
    COLIMA = "Colima",
    DURANGO = "Durango",
    DISTRITO_FEDERAL = "Distrito Federal",
    GUANAJUATO = "Guanajuato",
    GUERRERO = "Guerrero",
    HIDALGO = "Hidalgo",
    JALISCO = "Jalisco",
    ESTADO_DE_MEXICO = "Estado de Mexico",
    MICHOACAN = "Michoacan",
    MORELOS = "Morelos",
    NAYARIT = "Nayarit",
    NUEVO_LEON = "Nuevo Leon",
    OAXACA = "Oaxaca",
    PUEBLA = "Puebla",
    QUERETARO = "Queretaro",
    QUINTANA_ROO = "Quintana Roo",
    SAN_LUIS_POTOSI = "San Luis Potosi",
    SINALOA = "Sinaloa",
    SONORA = "Sonora",
    TABASCO = "Tabasco",
    TAMAULIPAS = "Tamaulipas",
    TLAXCALA = "Tlaxcala",
    VERACRUZ = "Veracruz",
    YUCATAN = "Yucatan",
    ZACATECAS = "Zacatecas",
    CIUDAD_DE_MEXICO = "Ciudad de Mexico",
}

export enum CANADA_PROVINCE_NAMES {
    ALBERTA = "Alberta",
    BRITISH_COLUMBIA = "British Columbia",
    MANITOBA = "Manitoba",
    NEW_BRUNSWICK = "New Brunswick",
    NEWFOUNDLAND_AND_LABRADOR = "Newfoundland and Labrador",
    NOVA_SCOTIA = "Nova Scotia",
    ONTARIO = "Ontario",
    PRINCE_EDWARD_ISLAND = "Prince Edward Island",
    QUEBEC = "Quebec",
    SASKATCHEWAN = "Saskatchewan",
    NORTHWEST_TERRITORIES = "Northwest Territories",
    NUNAVUT = "Nunavut",
    YUKON = "Yukon",
}

export enum TERRITORY_NAMES {
    PUERTO_RICO = "Puerto Rico",
    US_VIRGIN_ISLANDS = "U.S. Virgin Islands",
    GUAM = "Guam",
    AMERICAN_SAMOA = "American Samoa",
    NORTHERN_MARIANA_ISLANDS = "Northern Mariana Islands",
}

export type STATE_NAMES = US_STATE_NAMES | MEXICO_STATE_NAMES | CANADA_PROVINCE_NAMES | TERRITORY_NAMES;

export const STATES = [
    US_STATE_NAMES.ARIZONA,
    US_STATE_NAMES.ARKANSAS,
    US_STATE_NAMES.CALIFORNIA,
    US_STATE_NAMES.COLORADO,
    US_STATE_NAMES.CONNECTICUT,
    US_STATE_NAMES.GEORGIA,
    US_STATE_NAMES.HAWAII,
    US_STATE_NAMES.ILLINOIS,
    US_STATE_NAMES.INDIANA,
    US_STATE_NAMES.LOUISIANA,
    US_STATE_NAMES.MINNESOTA,
    US_STATE_NAMES.MISSISSIPPI,
    US_STATE_NAMES.MONTANA,
    US_STATE_NAMES.NEW_MEXICO,
    US_STATE_NAMES.NORTH_DAKOTA,
    US_STATE_NAMES.OKLAHOMA,
    US_STATE_NAMES.PENNSYLVANIA,
    US_STATE_NAMES.TENNESSEE,
    US_STATE_NAMES.VIRGINIA,
    TERRITORY_NAMES.PUERTO_RICO,
    US_STATE_NAMES.DELAWARE,
    US_STATE_NAMES.WEST_VIRGINIA,
    US_STATE_NAMES.WISCONSIN,
    US_STATE_NAMES.WYOMING,
    US_STATE_NAMES.ALABAMA,
    US_STATE_NAMES.ALASKA,
    US_STATE_NAMES.FLORIDA,
    US_STATE_NAMES.IDAHO,
    US_STATE_NAMES.KANSAS,
    US_STATE_NAMES.NEW_JERSEY,
    US_STATE_NAMES.NORTH_CAROLINA,
    US_STATE_NAMES.SOUTH_CAROLINA,
    US_STATE_NAMES.WASHINGTON,
    US_STATE_NAMES.VERMONT,
    US_STATE_NAMES.UTAH,
    US_STATE_NAMES.IOWA,
    US_STATE_NAMES.KENTUCKY,
    US_STATE_NAMES.MAINE,
    US_STATE_NAMES.MASSACHUSETTS,
    US_STATE_NAMES.MICHIGAN,
    US_STATE_NAMES.MISSOURI,
    US_STATE_NAMES.NEBRASKA,
    US_STATE_NAMES.NEVADA,
    US_STATE_NAMES.NEW_HAMPSHIRE,
    US_STATE_NAMES.NEW_YORK,
    US_STATE_NAMES.OHIO,
    US_STATE_NAMES.OREGON,
    US_STATE_NAMES.RHODE_ISLAND,
    US_STATE_NAMES.SOUTH_DAKOTA,
    US_STATE_NAMES.TEXAS,
    US_STATE_NAMES.DISTRICT_OF_COLUMBIA,
    US_STATE_NAMES.MARYLAND,
    MEXICO_STATE_NAMES.SONORA,
    MEXICO_STATE_NAMES.BAJA_CALIFORNIA,
    MEXICO_STATE_NAMES.CHIHUAHUA,
    MEXICO_STATE_NAMES.COAHUILA,
    MEXICO_STATE_NAMES.TAMAULIPAS,
    MEXICO_STATE_NAMES.NUEVO_LEON,
    MEXICO_STATE_NAMES.QUINTANA_ROO,
    MEXICO_STATE_NAMES.CAMPECHE,
    MEXICO_STATE_NAMES.TABASCO,
    MEXICO_STATE_NAMES.CHIAPAS,
    MEXICO_STATE_NAMES.COLIMA,
    MEXICO_STATE_NAMES.NAYARIT,
    MEXICO_STATE_NAMES.BAJA_CALIFORNIA_SUR,
    MEXICO_STATE_NAMES.SINALOA,
    MEXICO_STATE_NAMES.YUCATAN,
    MEXICO_STATE_NAMES.VERACRUZ,
    MEXICO_STATE_NAMES.JALISCO,
    MEXICO_STATE_NAMES.MICHOACAN,
    MEXICO_STATE_NAMES.GUERRERO,
    MEXICO_STATE_NAMES.OAXACA,
    MEXICO_STATE_NAMES.ESTADO_DE_MEXICO,
    MEXICO_STATE_NAMES.PUEBLA,
    MEXICO_STATE_NAMES.MORELOS,
    MEXICO_STATE_NAMES.QUERETARO,
    MEXICO_STATE_NAMES.HIDALGO,
    MEXICO_STATE_NAMES.GUANAJUATO,
    MEXICO_STATE_NAMES.SAN_LUIS_POTOSI,
    MEXICO_STATE_NAMES.ZACATECAS,
    MEXICO_STATE_NAMES.AGUASCALIENTES,
    MEXICO_STATE_NAMES.DURANGO,
    MEXICO_STATE_NAMES.TLAXCALA,
    MEXICO_STATE_NAMES.CIUDAD_DE_MEXICO,
    CANADA_PROVINCE_NAMES.NOVA_SCOTIA,
    CANADA_PROVINCE_NAMES.QUEBEC,
    CANADA_PROVINCE_NAMES.MANITOBA,
    CANADA_PROVINCE_NAMES.SASKATCHEWAN,
    CANADA_PROVINCE_NAMES.ALBERTA,
    CANADA_PROVINCE_NAMES.NORTHWEST_TERRITORIES,
    CANADA_PROVINCE_NAMES.PRINCE_EDWARD_ISLAND,
    CANADA_PROVINCE_NAMES.NEWFOUNDLAND_AND_LABRADOR,
    CANADA_PROVINCE_NAMES.NEW_BRUNSWICK,
    CANADA_PROVINCE_NAMES.YUKON,
    CANADA_PROVINCE_NAMES.NUNAVUT,
    CANADA_PROVINCE_NAMES.BRITISH_COLUMBIA,
    CANADA_PROVINCE_NAMES.ONTARIO,
    TERRITORY_NAMES.AMERICAN_SAMOA,
    TERRITORY_NAMES.NORTHERN_MARIANA_ISLANDS,
    TERRITORY_NAMES.GUAM,
    TERRITORY_NAMES.US_VIRGIN_ISLANDS,
];

export const STATE_TO_REGION_BITFLAG = [
  0x04, 0x02, 0x08, 0x08, 0x01, 0x02, 0x08, 0x10, 
  0x10, 0x02, 0x10, 0x02, 0x08, 0x04, 0x10, 0x04, 
  0x01, 0x02, 0x02, 0x80, 0x01, 0x02, 0x10, 0x08, 
  0x02, 0x08, 0x02, 0x08, 0x10, 0x01, 0x02, 0x02, 
  0x08, 0x01, 0x08, 0x10, 0x02, 0x01, 0x01, 0x10, 
  0x10, 0x10, 0x08, 0x01, 0x01, 0x10, 0x08, 0x01,
  0x10, 0x04, 0x01, 0x01, 0x40, 0x40, 0x40, 0x40, 
  0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 
  0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 
  0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 
  0x40, 0x40, 0x40, 0x40, 0x20, 0x20, 0x20, 0x20, 
  0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 
  0x20, 0x80, 0x80, 0x80, 0x80
];
  
// This array maps region indices to their bit flags
export const REGION_INDEX_TO_BIT = [0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x100, 0x200, 0x400];
  
export const getRandomEnabledStateIndexFast = (enableRegion: boolean[]): number | null => {
    // Convert enableRegion array to a bit flag
    const enabledRegionBitFlag = enableRegion.reduce((acc, enabled, index) => {
      return enabled ? acc | REGION_INDEX_TO_BIT[index] : acc;
    }, 0);
    
    // If no regions enabled, return null
    if (enabledRegionBitFlag === 0) return null;
  
    // Find all states that match the enabled regions
    const candidateIndices = [];
    for (let i = 0; i < STATE_TO_REGION_BITFLAG.length; i++) {
      if (STATE_TO_REGION_BITFLAG[i] & enabledRegionBitFlag) {
        candidateIndices.push(i);
      }
    }
    
    // Return a random state from the candidate indices
    return candidateIndices[Math.floor(Math.random() * candidateIndices.length)];
};

export const isStateEnabled = (enableRegion: boolean[], index: number): boolean => {
  const enabledRegionBitFlag = enableRegion.reduce((acc, enabled, index) => {
    return enabled ? acc | REGION_INDEX_TO_BIT[index] : acc;
  }, 0);
  
  if (enabledRegionBitFlag === 0) return false;

  return !!(STATE_TO_REGION_BITFLAG[index] & enabledRegionBitFlag);
};

export const isStateEnabledCustomBitflag = (enableRegion: boolean[], index: number, bitflag: number[]): boolean => {
  const enabledRegionBitFlag = enableRegion.reduce((acc, enabled, index) => {
    return enabled ? acc | REGION_INDEX_TO_BIT[index] : acc;
  }, 0);
  
  if (enabledRegionBitFlag === 0) return false;

  return !!(bitflag[index] & enabledRegionBitFlag);
};

export const REGISTRATION_STICKER_COLORS = ['red', '#00e383', 'blue', 'orange', 'yellow', 'white', 'clear'];
export const HOLDER_COLORS = ['black', 'silver', 'pink', '#001538', '#380e00', 'clear', 'clear', 'clear', 'clear', 'clear', 'clear', 'clear', 'clear'];
