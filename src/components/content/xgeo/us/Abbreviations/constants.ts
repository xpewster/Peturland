export const ABBREVIATIONS = [
    "AZ", "AR", "CA", "CO", "CT", "GA", "HI", "IL", "IN", "LA", 
    "MN", "MS", "MT", "NM", "ND", "OK", "PA", "TN", "VA", "PR", 
    "DE", "WV", "WI", "WY", "AL", "AK", "FL", "ID", "KS", "NJ", 
    "NC", "SC", "WA", "VT", "UT", "IA", "KY", "ME", "MA", "MI", 
    "MO", "NE", "NV", "NH", "NY", "OH", "OR", "RI", "SD", "TX", 
    "DC", "MD",
    "SON", "BCN", "CHH", "COA", "TAM", "NLE", "ROO", "CAM", 
    "TAB", "CHP", "COL", "NAY", "BCS", "SIN", "YUC", "VER", "JAL", "MIC", 
    "GRO", "OAX", "MEX", "PUE", "MOR", "QUE", "HID", "GUA", "SLP", "ZAC", 
    "AGU", "DUR", "TLA", "CMX",
    "NS", "QC", "MB", "SK", "AB", "NT", 
    "PE", "NL", "NB", "YT", "NU", "BC", "ON",
    "Ags.",     // Aguascalientes
    "B.C.",     // Baja California
    "B.C.S.",   // Baja California Sur
    "Camp.",    // Campeche
    "Chis.",    // Chiapas
    "Chih.",    // Chihuahua
    "Coah.",    // Coahuila
    "Col.",     // Colima
    "CDMX",     // Mexico City (Ciudad de México)
    "Dgo.",     // Durango
    "Gto.",     // Guanajuato
    "Gro.",     // Guerrero
    "Hgo.",     // Hidalgo
    "Jal.",     // Jalisco
    "Edomex.",  // México (Estado de México) - can also be "Méx."
    "Mich.",    // Michoacán
    "Mor.",     // Morelos
    "Nay.",     // Nayarit
    "N.L.",     // Nuevo León
    "Oax.",     // Oaxaca
    "Pue.",     // Puebla
    "Qro.",     // Querétaro
    "Q.R.",     // Quintana Roo (can also be "Q. Roo.")
    "S.L.P.",   // San Luis Potosí
    "Sin.",     // Sinaloa
    "Son.",     // Sonora
    "Tab.",     // Tabasco
    "Tamps.",   // Tamaulipas
    "Tlax.",    // Tlaxcala
    "Ver.",     // Veracruz
    "Yuc.",     // Yucatán
    "Zac."      // Zacatecas
];

export const REGION_TO_ABBREVIATIONS = [
    [0],   // ARIZONA (index 0)
    [1],   // ARKANSAS (index 1)
    [2],   // CALIFORNIA (index 2)
    [3],   // COLORADO (index 3)
    [4],   // CONNECTICUT (index 4)
    [5],   // GEORGIA (index 5)
    [6],   // HAWAII (index 6)
    [7],   // ILLINOIS (index 7)
    [8],   // INDIANA (index 8)
    [9],   // LOUISIANA (index 9)
    [10],  // MINNESOTA (index 10)
    [11],  // MISSISSIPPI (index 11)
    [12],  // MONTANA (index 12)
    [13],  // NEW_MEXICO (index 13)
    [14],  // NORTH_DAKOTA (index 14)
    [15],  // OKLAHOMA (index 15)
    [16],  // PENNSYLVANIA (index 16)
    [17],  // TENNESSEE (index 17)
    [18],  // VIRGINIA (index 18)
    [19],  // PUERTO_RICO (index 19)
    [20],  // DELAWARE (index 20)
    [21],  // WEST_VIRGINIA (index 21)
    [22],  // WISCONSIN (index 22)
    [23],  // WYOMING (index 23)
    [24],  // ALABAMA (index 24)
    [25],  // ALASKA (index 25)
    [26],  // FLORIDA (index 26)
    [27],  // IDAHO (index 27)
    [28],  // KANSAS (index 28)
    [29],  // NEW_JERSEY (index 29)
    [30],  // NORTH_CAROLINA (index 30)
    [31],  // SOUTH_CAROLINA (index 31)
    [32],  // WASHINGTON (index 32)
    [33],  // VERMONT (index 33)
    [34],  // UTAH (index 34)
    [35],  // IOWA (index 35)
    [36],  // KENTUCKY (index 36)
    [37],  // MAINE (index 37)
    [38],  // MASSACHUSETTS (index 38)
    [39],  // MICHIGAN (index 39)
    [40],  // MISSOURI (index 40)
    [41],  // NEBRASKA (index 41)
    [42],  // NEVADA (index 42)
    [43],  // NEW_HAMPSHIRE (index 43)
    [44],  // NEW_YORK (index 44)
    [45],  // OHIO (index 45)
    [46],  // OREGON (index 46)
    [47],  // RHODE_ISLAND (index 47)
    [48],  // SOUTH_DAKOTA (index 48)
    [49],  // TEXAS (index 49)
    [50],  // DISTRICT_OF_COLUMBIA (index 50)
    [51],  // MARYLAND (index 51)
    [52, 94],  // MEXICO_STATE_NAMES.SONORA (index 52)
    [53, 97],  // MEXICO_STATE_NAMES.BAJA_CALIFORNIA (index 53)
    [54, 100],  // MEXICO_STATE_NAMES.CHIHUAHUA (index 54)
    [55, 101],  // MEXICO_STATE_NAMES.COAHUILA (index 55)
    [56, 108],  // MEXICO_STATE_NAMES.TAMAULIPAS (index 56)
    [57, 107],  // MEXICO_STATE_NAMES.NUEVO_LEON (index 57)
    [58, 111],  // MEXICO_STATE_NAMES.QUINTANA_ROO (index 58)
    [59, 98],  // MEXICO_STATE_NAMES.CAMPECHE (index 59)
    [60, 106],  // MEXICO_STATE_NAMES.TABASCO (index 60)
    [61, 99],  // MEXICO_STATE_NAMES.CHIAPAS (index 61)
    [62, 102],  // MEXICO_STATE_NAMES.COLIMA (index 62)
    [63, 105],  // MEXICO_STATE_NAMES.NAYARIT (index 63)
    [64, 96],  // MEXICO_STATE_NAMES.BAJA_CALIFORNIA_SUR (index 64)
    [65, 113],  // MEXICO_STATE_NAMES.SINALOA (index 65)
    [66, 119],  // MEXICO_STATE_NAMES.YUCATAN (index 66)
    [67, 118],  // MEXICO_STATE_NAMES.VERACRUZ (index 67)
    [68, 103],  // MEXICO_STATE_NAMES.JALISCO (index 68)
    [69, 104],  // MEXICO_STATE_NAMES.MICHOACAN (index 69)
    [70, 101],  // MEXICO_STATE_NAMES.GUERRERO (index 70)
    [71, 109],  // MEXICO_STATE_NAMES.OAXACA (index 71)
    [72, 114],  // MEXICO_STATE_NAMES.ESTADO_DE_MEXICO (index 72)
    [73, 110],  // MEXICO_STATE_NAMES.PUEBLA (index 73)
    [74, 115],  // MEXICO_STATE_NAMES.MORELOS (index 74)
    [75, 112],  // MEXICO_STATE_NAMES.QUERETARO (index 75)
    [76, 102],  // MEXICO_STATE_NAMES.HIDALGO (index 76)
    [77, 101],  // MEXICO_STATE_NAMES.GUANAJUATO (index 77)
    [78, 112],  // MEXICO_STATE_NAMES.SAN_LUIS_POTOSI (index 78)
    [79, 120],  // MEXICO_STATE_NAMES.ZACATECAS (index 79)
    [80, 95],  // MEXICO_STATE_NAMES.AGUASCALIENTES (index 80)
    [81, 101],  // MEXICO_STATE_NAMES.DURANGO (index 81)
    [82, 117],  // MEXICO_STATE_NAMES.TLAXCALA (index 82)
    [83, 103],  // MEXICO_STATE_NAMES.CIUDAD_DE_MEXICO (index 83)
    [84],  // CANADA_PROVINCE_NAMES.NOVA_SCOTIA (index 84)
    [85],  // CANADA_PROVINCE_NAMES.QUEBEC (index 85)
    [86],  // CANADA_PROVINCE_NAMES.MANITOBA (index 86)
    [87],  // CANADA_PROVINCE_NAMES.SASKATCHEWAN (index 87)
    [88],  // CANADA_PROVINCE_NAMES.ALBERTA (index 88)
    [89],  // CANADA_PROVINCE_NAMES.NORTHWEST_TERRITORIES (index 89)
    [90],  // CANADA_PROVINCE_NAMES.PRINCE_EDWARD_ISLAND (index 90)
    [91],  // CANADA_PROVINCE_NAMES.NEWFOUNDLAND_AND_LABRADOR (index 91)
    [92],  // CANADA_PROVINCE_NAMES.NEW_BRUNSWICK (index 92)
    [93],  // CANADA_PROVINCE_NAMES.YUKON (index 93)
    [94],  // CANADA_PROVINCE_NAMES.NUNAVUT (index 94)
    [95],  // CANADA_PROVINCE_NAMES.BRITISH_COLUMBIA (index 95)
    [96],  // CANADA_PROVINCE_NAMES.ONTARIO (index 96)
    [],  // TERRITORY_NAMES.AMERICAN_SAMOA (index 97)
    [],  // TERRITORY_NAMES.NORTHERN_MARIANA_ISLANDS (index 98)
    [],  // TERRITORY_NAMES.GUAM (index 99)
    []  // TERRITORY_NAMES.US_VIRGIN_ISLANDS (index 100)
];
