import dc_bl from '../../../../../assets/windshields/district_of_columbia/bl.png';
import dc_br from '../../../../../assets/windshields/district_of_columbia/br.png';
import idaho_b from '../../../../../assets/windshields/idaho/b.png';
import louisiana_br from '../../../../../assets/windshields/louisiana/br.png';
import maine_br from '../../../../../assets/windshields/maine/br.png';
import massachussets_bl from '../../../../../assets/windshields/massachussetts/bl.png';
import missouri_br from '../../../../../assets/windshields/missouri/br.png';
import pennsylvania_br from '../../../../../assets/windshields/pennsylvania/br.png';
import new_hampshire_br from '../../../../../assets/windshields/new_hampshire/br.png';
import new_jersey_br from '../../../../../assets/windshields/new_jersey/br.png';
import new_york_br from '../../../../../assets/windshields/new_york/br.png';
import rhode_island_bl from '../../../../../assets/windshields/rhode_island/bl.png';
import texas_br from '../../../../../assets/windshields/texas/br.png';
import vermont_tc from '../../../../../assets/windshields/vermont/tc.png';
import vermont_br from '../../../../../assets/windshields/vermont/br.png';
import virginia_br from '../../../../../assets/windshields/virginia/br.png';
import west_virginia_br from '../../../../../assets/windshields/west_virginia/br.png';

export const STICKERS = [dc_bl, dc_br, idaho_b, louisiana_br, maine_br, massachussets_bl, missouri_br, pennsylvania_br, new_hampshire_br, new_jersey_br, new_york_br, rhode_island_bl, texas_br, vermont_tc, virginia_br, west_virginia_br, vermont_br];
export const STICKER_DESCRIPTORS = ["Required", "Required", "Rare", "Required", "Required", "Required", "Common","Required", "Required", "Required", "Required", "Required", "Required", "Common", "Required", "Required", "Common"];
export const STICKER_ENABLE_RAND_COLOR = [false, false, false, true, true, true, true, true, true, true, true, true, false, true, true, true, false];

export const REGION_INDEX_TO_STICKER_INDEX = [
    [], // ARIZONA
    [], // ARKANSAS
    [], // CALIFORNIA
    [], // COLORADO
    [], // CONNECTICUT
    [], // GEORGIA
    [], // HAWAII
    [], // ILLINOIS
    [], // INDIANA
    [3], // LOUISIANA
    [], // MINNESOTA
    [], // MISSISSIPPI
    [], // MONTANA
    [], // NEW_MEXICO
    [], // NORTH_DAKOTA
    [], // OKLAHOMA
    [7], // PENNSYLVANIA
    [], // TENNESSEE
    [14], // VIRGINIA
    [], // PUERTO_RICO
    [], // DELAWARE
    [15], // WEST_VIRGINIA
    [], // WISCONSIN
    [], // WYOMING
    [], // ALABAMA
    [], // ALASKA
    [], // FLORIDA
    [2], // IDAHO
    [], // KANSAS
    [9], // NEW_JERSEY
    [], // NORTH_CAROLINA
    [], // SOUTH_CAROLINA
    [], // WASHINGTON
    [13, 16], // VERMONT
    [], // UTAH
    [], // IOWA
    [], // KENTUCKY
    [4], // MAINE
    [5], // MASSACHUSETTS
    [], // MICHIGAN
    [6], // MISSOURI
    [], // NEBRASKA
    [], // NEVADA
    [8], // NEW_HAMPSHIRE
    [10], // NEW_YORK
    [], // OHIO
    [], // OREGON
    [11], // RHODE_ISLAND
    [], // SOUTH_DAKOTA
    [12], // TEXAS
    [0, 1], // DISTRICT_OF_COLUMBIA (has two stickers: dc_bl and dc_br)
    [], // MARYLAND
    [], // SONORA (Mexico)
    [], // BAJA_CALIFORNIA
    [], // CHIHUAHUA
    [], // COAHUILA
    [], // TAMAULIPAS
    [], // NUEVO_LEON
    [], // QUINTANA_ROO
    [], // CAMPECHE
    [], // TABASCO
    [], // CHIAPAS
    [], // COLIMA
    [], // NAYARIT
    [], // BAJA_CALIFORNIA_SUR
    [], // SINALOA
    [], // YUCATAN
    [], // VERACRUZ
    [], // JALISCO
    [], // MICHOACAN
    [], // GUERRERO
    [], // OAXACA
    [], // ESTADO_DE_MEXICO
    [], // PUEBLA
    [], // MORELOS
    [], // QUERETARO
    [], // HIDALGO
    [], // GUANAJUATO
    [], // SAN_LUIS_POTOSI
    [], // ZACATECAS
    [], // AGUASCALIENTES
    [], // DURANGO
    [], // TLAXCALA
    [], // CIUDAD_DE_MEXICO
    [], // NOVA_SCOTIA
    [], // QUEBEC
    [], // MANITOBA
    [], // SASKATCHEWAN
    [], // ALBERTA
    [], // NORTHWEST_TERRITORIES
    [], // PRINCE_EDWARD_ISLAND
    [], // NEWFOUNDLAND_AND_LABRADOR
    [], // NEW_BRUNSWICK
    [], // YUKON
    [], // NUNAVUT
    [], // BRITISH_COLUMBIA
    [], // ONTARIO
    [], // AMERICAN_SAMOA
    [], // NORTHERN_MARIANA_ISLANDS
    [], // GUAM
    [], // US_VIRGIN_ISLANDS
];
