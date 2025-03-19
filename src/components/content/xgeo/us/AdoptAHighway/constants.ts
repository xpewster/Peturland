import al from '../../../../../assets/adopt-a-highway/al.png';
import az from '../../../../../assets/adopt-a-highway/az.png';
import ar from '../../../../../assets/adopt-a-highway/ar.png';
import ca from '../../../../../assets/adopt-a-highway/ca.png';
import co from '../../../../../assets/adopt-a-highway/co.png';
import ct from '../../../../../assets/adopt-a-highway/ct.png';
import de from '../../../../../assets/adopt-a-highway/de.png';
import fl from '../../../../../assets/adopt-a-highway/fl.png';
import ga from '../../../../../assets/adopt-a-highway/ga.png';
import hi from '../../../../../assets/adopt-a-highway/hi.png';
import id from '../../../../../assets/adopt-a-highway/id.png';
import il from '../../../../../assets/adopt-a-highway/il.png';
import indiana from '../../../../../assets/adopt-a-highway/in.png';
import ia from '../../../../../assets/adopt-a-highway/ia.png';
import ks from '../../../../../assets/adopt-a-highway/ks.png';
import ky from '../../../../../assets/adopt-a-highway/ky.png';
import la from '../../../../../assets/adopt-a-highway/la.png';
import md from '../../../../../assets/adopt-a-highway/md.png';
import mi from '../../../../../assets/adopt-a-highway/mi.png';
import mn from '../../../../../assets/adopt-a-highway/mn.png';
import ms from '../../../../../assets/adopt-a-highway/ms.png';
import mo from '../../../../../assets/adopt-a-highway/mo.png';
import mt from '../../../../../assets/adopt-a-highway/mt.png';
import mt2 from '../../../../../assets/adopt-a-highway/mt2.png';
import ne from '../../../../../assets/adopt-a-highway/ne.png';
import nh from '../../../../../assets/adopt-a-highway/nh.png';
import nj from '../../../../../assets/adopt-a-highway/nj.png';
import ny from '../../../../../assets/adopt-a-highway/ny.png';
import ny2 from '../../../../../assets/adopt-a-highway/ny2.png';
import nd from '../../../../../assets/adopt-a-highway/nd.jpg';
import oh from '../../../../../assets/adopt-a-highway/oh.png';
import ok from '../../../../../assets/adopt-a-highway/ok.png';
import or from '../../../../../assets/adopt-a-highway/or.png';
import ri from '../../../../../assets/adopt-a-highway/ri.png';
import sc from '../../../../../assets/adopt-a-highway/sc.png';
import sd from '../../../../../assets/adopt-a-highway/sd.png';
import tn from '../../../../../assets/adopt-a-highway/tn.png';
import tx from '../../../../../assets/adopt-a-highway/tx.png';
import ut from '../../../../../assets/adopt-a-highway/ut.png';
import va from '../../../../../assets/adopt-a-highway/va.png';
import wa from '../../../../../assets/adopt-a-highway/wa.png';
import wv from '../../../../../assets/adopt-a-highway/wv.png';
import wi from '../../../../../assets/adopt-a-highway/wi.png';
import wy from '../../../../../assets/adopt-a-highway/wy.png';

/* Canada */
import bc from '../../../../../assets/adopt-a-highway/bc.jpg';
import ab from '../../../../../assets/adopt-a-highway/ab.png';
import sk from '../../../../../assets/adopt-a-highway/sk.jpg';
import on from '../../../../../assets/adopt-a-highway/on.jpg';
import nb from '../../../../../assets/adopt-a-highway/nb.png';
import ns from '../../../../../assets/adopt-a-highway/ns.png';
import pe from '../../../../../assets/adopt-a-highway/pe.png';

export const SIGN_IMAGES = [
    al, ar, az, ca, co, ct, de, fl, ga, hi, ia, id, il, indiana, ks, ky, la, md, mi, mn, mo, ms, mt, nd, ne, nh, nj, ny, ny2, oh, ok, or, ri, sc, sd, tn, tx, ut, va, wa, wv, wi, wy,
    bc, ab, sk, on, nb, ns, pe, mt2,
];
export const REGION_TO_SIGN_IMAGES = [
    [2],   // ARIZONA (index 0)
    [1],   // ARKANSAS (index 1)
    [3],   // CALIFORNIA (index 2)
    [4],   // COLORADO (index 3)
    [5],   // CONNECTICUT (index 4)
    [8],   // GEORGIA (index 5)
    [9],   // HAWAII (index 6)
    [12],  // ILLINOIS (index 7)
    [13],  // INDIANA (index 8)
    [16],  // LOUISIANA (index 9)
    [19],  // MINNESOTA (index 10)
    [21],  // MISSISSIPPI (index 11)
    [22, 50],  // MONTANA (index 12)
    [],    // NEW_MEXICO (index 13)
    [23],  // NORTH_DAKOTA (index 14)
    [30],  // OKLAHOMA (index 15)
    [],    // PENNSYLVANIA (index 16)
    [35],  // TENNESSEE (index 17)
    [38],  // VIRGINIA (index 18)
    [],    // PUERTO_RICO (index 19)
    [6],   // DELAWARE (index 20)
    [40],  // WEST_VIRGINIA (index 21)
    [41],  // WISCONSIN (index 22)
    [42],  // WYOMING (index 23)
    [0],   // ALABAMA (index 24)
    [],    // ALASKA (index 25)
    [7],   // FLORIDA (index 26)
    [11],  // IDAHO (index 27)
    [14],  // KANSAS (index 28)
    [26],  // NEW_JERSEY (index 29)
    [],    // NORTH_CAROLINA (index 30)
    [33],  // SOUTH_CAROLINA (index 31)
    [39],  // WASHINGTON (index 32)
    [],    // VERMONT (index 33)
    [37],  // UTAH (index 34)
    [10],  // IOWA (index 35)
    [15],  // KENTUCKY (index 36)
    [],    // MAINE (index 37)
    [],    // MASSACHUSETTS (index 38)
    [18],  // MICHIGAN (index 39)
    [20],  // MISSOURI (index 40)
    [24],  // NEBRASKA (index 41)
    [],    // NEVADA (index 42)
    [25],  // NEW_HAMPSHIRE (index 43)
    [27, 28], // NEW_YORK (index 44)
    [29],  // OHIO (index 45)
    [31],  // OREGON (index 46)
    [32],  // RHODE_ISLAND (index 47)
    [34],  // SOUTH_DAKOTA (index 48)
    [36],  // TEXAS (index 49)
    [],    // DISTRICT_OF_COLUMBIA (index 50)
    [17],  // MARYLAND (index 51)
    [],    // MEXICO_STATE_NAMES.SONORA (index 52)
    [],    // MEXICO_STATE_NAMES.BAJA_CALIFORNIA (index 53)
    [],    // MEXICO_STATE_NAMES.CHIHUAHUA (index 54)
    [],    // MEXICO_STATE_NAMES.COAHUILA (index 55)
    [],    // MEXICO_STATE_NAMES.TAMAULIPAS (index 56)
    [],    // MEXICO_STATE_NAMES.NUEVO_LEON (index 57)
    [],    // MEXICO_STATE_NAMES.QUINTANA_ROO (index 58)
    [],    // MEXICO_STATE_NAMES.CAMPECHE (index 59)
    [],    // MEXICO_STATE_NAMES.TABASCO (index 60)
    [],    // MEXICO_STATE_NAMES.CHIAPAS (index 61)
    [],    // MEXICO_STATE_NAMES.COLIMA (index 62)
    [],    // MEXICO_STATE_NAMES.NAYARIT (index 63)
    [],    // MEXICO_STATE_NAMES.BAJA_CALIFORNIA_SUR (index 64)
    [],    // MEXICO_STATE_NAMES.SINALOA (index 65)
    [],    // MEXICO_STATE_NAMES.YUCATAN (index 66)
    [],    // MEXICO_STATE_NAMES.VERACRUZ (index 67)
    [],    // MEXICO_STATE_NAMES.JALISCO (index 68)
    [],    // MEXICO_STATE_NAMES.MICHOACAN (index 69)
    [],    // MEXICO_STATE_NAMES.GUERRERO (index 70)
    [],    // MEXICO_STATE_NAMES.OAXACA (index 71)
    [],    // MEXICO_STATE_NAMES.ESTADO_DE_MEXICO (index 72)
    [],    // MEXICO_STATE_NAMES.PUEBLA (index 73)
    [],    // MEXICO_STATE_NAMES.MORELOS (index 74)
    [],    // MEXICO_STATE_NAMES.QUERETARO (index 75)
    [],    // MEXICO_STATE_NAMES.HIDALGO (index 76)
    [],    // MEXICO_STATE_NAMES.GUANAJUATO (index 77)
    [],    // MEXICO_STATE_NAMES.SAN_LUIS_POTOSI (index 78)
    [],    // MEXICO_STATE_NAMES.ZACATECAS (index 79)
    [],    // MEXICO_STATE_NAMES.AGUASCALIENTES (index 80)
    [],    // MEXICO_STATE_NAMES.DURANGO (index 81)
    [],    // MEXICO_STATE_NAMES.TLAXCALA (index 82)
    [],    // MEXICO_STATE_NAMES.CIUDAD_DE_MEXICO (index 83)
    [48],    // CANADA_PROVINCE_NAMES.NOVA_SCOTIA (index 84)
    [],    // CANADA_PROVINCE_NAMES.QUEBEC (index 85)
    [],    // CANADA_PROVINCE_NAMES.MANITOBA (index 86)
    [45],    // CANADA_PROVINCE_NAMES.SASKATCHEWAN (index 87)
    [44],    // CANADA_PROVINCE_NAMES.ALBERTA (index 88)
    [],    // CANADA_PROVINCE_NAMES.NORTHWEST_TERRITORIES (index 89)
    [49],    // CANADA_PROVINCE_NAMES.PRINCE_EDWARD_ISLAND (index 90)
    [],    // CANADA_PROVINCE_NAMES.NEWFOUNDLAND_AND_LABRADOR (index 91)
    [47],    // CANADA_PROVINCE_NAMES.NEW_BRUNSWICK (index 92)
    [],    // CANADA_PROVINCE_NAMES.YUKON (index 93)
    [],    // CANADA_PROVINCE_NAMES.NUNAVUT (index 94)
    [43],    // CANADA_PROVINCE_NAMES.BRITISH_COLUMBIA (index 95)
    [46],    // CANADA_PROVINCE_NAMES.ONTARIO (index 96)
    [],    // TERRITORY_NAMES.AMERICAN_SAMOA (index 97)
    [],    // TERRITORY_NAMES.NORTHERN_MARIANA_ISLANDS (index 98)
    [],    // TERRITORY_NAMES.GUAM (index 99)
    []     // TERRITORY_NAMES.US_VIRGIN_ISLANDS (index 100)
];

export const SIGN_TO_ANSWER_REGION_INDICES = [
    [24],      // Index 0 (Alabama sign) -> Region 24 (ALABAMA)
    [1],       // Index 1 (Arkansas sign) -> Region 1 (ARKANSAS)
    [0],       // Index 2 (Arizona sign) -> Region 0 (ARIZONA)
    [2],       // Index 3 (California sign) -> Region 2 (CALIFORNIA)
    [3],       // Index 4 (Colorado sign) -> Region 3 (COLORADO)
    [4],       // Index 5 (Connecticut sign) -> Region 4 (CONNECTICUT)
    [20],      // Index 6 (Delaware sign) -> Region 20 (DELAWARE)
    [26],      // Index 7 (Florida sign) -> Region 26 (FLORIDA)
    [5],       // Index 8 (Georgia sign) -> Region 5 (GEORGIA)
    [6],       // Index 9 (Hawaii sign) -> Region 6 (HAWAII)
    [35],      // Index 10 (Iowa sign) -> Region 35 (IOWA)
    [27, 12],      // Index 11 (Idaho sign) -> Region 27 (IDAHO) + montana
    [7],       // Index 12 (Illinois sign) -> Region 7 (ILLINOIS)
    [8],       // Index 13 (Indiana sign) -> Region 8 (INDIANA)
    [28],      // Index 14 (Kansas sign) -> Region 28 (KANSAS)
    [36],      // Index 15 (Kentucky sign) -> Region 36 (KENTUCKY)
    [9],       // Index 16 (Louisiana sign) -> Region 9 (LOUISIANA)
    [51],      // Index 17 (Maryland sign) -> Region 51 (MARYLAND)
    [39],      // Index 18 (Michigan sign) -> Region 39 (MICHIGAN)
    [10],      // Index 19 (Minnesota sign) -> Region 10 (MINNESOTA)
    [40],      // Index 20 (Missouri sign) -> Region 40 (MISSOURI)
    [11],      // Index 21 (Mississippi sign) -> Region 11 (MISSISSIPPI)
    [12, 27],      // Index 22 (Montana sign) -> Region 12 (MONTANA) + idaho
    [14],      // Index 23 (North Dakota sign) -> Region 14 (NORTH_DAKOTA)
    [41],      // Index 24 (Nebraska sign) -> Region 41 (NEBRASKA)
    [43],      // Index 25 (New Hampshire sign) -> Region 43 (NEW_HAMPSHIRE)
    [29],      // Index 26 (New Jersey sign) -> Region 29 (NEW_JERSEY)
    [44],      // Index 27 (New York sign) -> Region 44 (NEW_YORK)
    [44],      // Index 28 (New York alternate sign) -> Region 44 (NEW_YORK)
    [45],      // Index 29 (Ohio sign) -> Region 45 (OHIO)
    [15],      // Index 30 (Oklahoma sign) -> Region 15 (OKLAHOMA)
    [46],      // Index 31 (Oregon sign) -> Region 46 (OREGON)
    [47],      // Index 32 (Rhode Island sign) -> Region 47 (RHODE_ISLAND)
    [31],      // Index 33 (South Carolina sign) -> Region 31 (SOUTH_CAROLINA)
    [48],      // Index 34 (South Dakota sign) -> Region 48 (SOUTH_DAKOTA)
    [17],      // Index 35 (Tennessee sign) -> Region 17 (TENNESSEE)
    [49],      // Index 36 (Texas sign) -> Region 49 (TEXAS)
    [34],      // Index 37 (Utah sign) -> Region 34 (UTAH)
    [18],      // Index 38 (Virginia sign) -> Region 18 (VIRGINIA)
    [32],      // Index 39 (Washington sign) -> Region 32 (WASHINGTON)
    [21],      // Index 40 (West Virginia sign) -> Region 21 (WEST_VIRGINIA)
    [22],      // Index 41 (Wisconsin sign) -> Region 22 (WISCONSIN)
    [23],      // Index 42 (Wyoming sign) -> Region 23 (WYOMING)
    [95],      // Index 43 (British Columbia sign) -> Region 95 (BRITISH_COLUMBIA)
    [88],      // Index 44 (Alberta sign) -> Region 88 (ALBERTA)
    [87],      // Index 45 (Saskatchewan sign) -> Region 87 (SASKATCHEWAN)
    [96],      // Index 46 (Ontario sign) -> Region 96 (ONTARIO)
    [92],      // Index 47 (New Brunswick sign) -> Region 92 (NEW_BRUNSWICK)
    [84],      // Index 48 (Nova Scotia sign) -> Region 84 (NOVA_SCOTIA)
    [90],      // Index 49 (Prince Edward Island sign) -> Region 90 (PRINCE_EDWARD_ISLAND)
    [12]       // Index 50 (Montana alternate sign) -> Region 12 (MONTANA)
];
