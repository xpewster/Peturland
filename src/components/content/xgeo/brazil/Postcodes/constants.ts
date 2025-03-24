

export const POSTCODES = [
    '01', '02', '03', '04', '05', '06', '07', '08', '09',
    '11', '12', '13', '14', '15', '16', '17', '18', '19',
    '20', '21', '22', '23', '24', '25', '27', '28', '29',
    '30', '31', '32', '33', '34', '35', '36', '37', '38', '39',
    '40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
    '50', '51', '52', '53', '54', '55', '56', '57', '58', '59',
    '60', '61', '62', '63', '64', '65', '66', '67', '68', '69',
    '70', '71', '72', '73', '74', '75', '76', '77', '78', '79',
    '80', '81', '82', '83', '84', '85', '86', '87', '88', '89',
    '90', '91', '92', '93', '94', '95', '96', '97', '98', '99'
];

export const REGION_INDEX_TO_POSTCODE_INDEX: number[][] = [
    [66],  // Region 0 -> postcode '69'
    [75],  // Region 1 -> postcode '78'
    [65],  // Region 2 -> postcode '68'
    [64],  // Region 3 -> postcode '67'
    [63],  // Region 4 -> postcode '66'
    [62],  // Region 5 -> postcode '65'
    [44],  // Region 6 -> postcode '47'
    [70],  // Region 7 -> postcode '73'
    [73],  // Region 8 -> postcode '76'
    [72],  // Region 9 -> postcode '75'
    [68],  // Region 10 -> postcode '71'
    [67],  // Region 11 -> postcode '70'
    [69],  // Region 12 -> postcode '72'
    [71],  // Region 13 -> postcode '74'
    [13],  // Region 14 -> postcode '15'
    [12],  // Region 15 -> postcode '14'
    [34],  // Region 16 -> postcode '37'
    [32],  // Region 17 -> postcode '35'
    [74],  // Region 18 -> postcode '77'
    [36],  // Region 19 -> postcode '39'
    [15],  // Region 20 -> postcode '17'
    [84],  // Region 21 -> postcode '87'
    [83],  // Region 22 -> postcode '86'
    [81],  // Region 23 -> postcode '84'
    [86],  // Region 24 -> postcode '89'
    [9],   // Region 25 -> postcode '11'
    [21],  // Region 26 -> postcode '23'
    [24],  // Region 27 -> postcode '27'
    [95],  // Region 28 -> postcode '98'
    [93],  // Region 29 -> postcode '96'
    [87],  // Region 30 -> postcode '90'
    [88],  // Region 31 -> postcode '91'
    [89],  // Region 32 -> postcode '92'
    [90],  // Region 33 -> postcode '93'
    [91],  // Region 34 -> postcode '94'
    [85],  // Region 35 -> postcode '88'
    [96],  // Region 36 -> postcode '99'
    [94],  // Region 37 -> postcode '97'
    [0],   // Region 38 -> postcode '01'
    [1],   // Region 39 -> postcode '02'
    [2],   // Region 40 -> postcode '03'
    [3],   // Region 41 -> postcode '04'
    [4],   // Region 42 -> postcode '05'
    [5],   // Region 43 -> postcode '06'
    [6],   // Region 44 -> postcode '07'
    [8],   // Region 45 -> postcode '09'
    [7],   // Region 46 -> postcode '08'
    [92],  // Region 47 -> postcode '95'
    [10],  // Region 48 -> postcode '12'
    [11],  // Region 49 -> postcode '13'
    [77],  // Region 50 -> postcode '80'
    [79],  // Region 51 -> postcode '82'
    [78],  // Region 52 -> postcode '81'
    [80],  // Region 53 -> postcode '83'
    [82],  // Region 54 -> postcode '85'
    [16],  // Region 55 -> postcode '18'
    [76],  // Region 56 -> postcode '79'
    [17],  // Region 57 -> postcode '19'
    [14],  // Region 58 -> postcode '16'
    [35],  // Region 59 -> postcode '38'
    [26],  // Region 60 -> postcode '29'
    [24],  // Region 61 -> postcode '27' (duplicate with Region 27)
    [20],  // Region 62 -> postcode '22'
    [19],  // Region 63 -> postcode '21'
    [18],  // Region 64 -> postcode '20'
    [23],  // Region 65 -> postcode '25'
    [22],  // Region 66 -> postcode '24'
    [25],  // Region 67 -> postcode '28'
    [27],  // Region 68 -> postcode '30'
    [29],  // Region 69 -> postcode '32'
    [28],  // Region 70 -> postcode '31'
    [30],  // Region 71 -> postcode '33'
    [31],  // Region 72 -> postcode '34'
    [33],  // Region 73 -> postcode '36'
    [42],  // Region 74 -> postcode '45'
    [37],  // Region 75 -> postcode '40'
    [38],  // Region 76 -> postcode '41'
    [39],  // Region 77 -> postcode '42'
    [40],  // Region 78 -> postcode '43'
    [41],  // Region 79 -> postcode '44'
    [43],  // Region 80 -> postcode '46'
    [45],  // Region 81 -> postcode '48'
    [60],  // Region 82 -> postcode '63'
    [55],  // Region 83 -> postcode '58'
    [54],  // Region 84 -> postcode '57'
    [53],  // Region 85 -> postcode '56'
    [46],  // Region 86 -> postcode '49'
    [47],  // Region 87 -> postcode '50'
    [48],  // Region 88 -> postcode '51'
    [51],  // Region 89 -> postcode '54'
    [49],  // Region 90 -> postcode '52'
    [50],  // Region 91 -> postcode '53'
    [52],  // Region 92 -> postcode '55'
    [56],  // Region 93 -> postcode '59'
    [57],  // Region 94 -> postcode '60'
    [58],  // Region 95 -> postcode '61'
    [59],  // Region 96 -> postcode '62'
    [61]   // Region 97 -> postcode '64'
];

export const REGION_INDEX_TO_POSTCODE_PREFIX_BITFLAG = [
    0x40, 0x80, 0x40, 0x40, 0x40, 0x40, 0x10, 0x80, 0x80, 0x80, // 0-9
    0x80, 0x80, 0x80, 0x80, 0x02, 0x02, 0x08, 0x08, 0x80, 0x08, // 10-19
    0x02, 0x100, 0x100, 0x100, 0x100, 0x02, 0x04, 0x04, 0x200, 0x200, // 20-29
    0x200, 0x200, 0x200, 0x200, 0x200, 0x100, 0x200, 0x200, 0x01, 0x01, // 30-39
    0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x200, 0x02, 0x02, // 40-49
    0x100, 0x100, 0x100, 0x100, 0x100, 0x02, 0x80, 0x02, 0x02, 0x08, // 50-59
    0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x08, 0x08, // 60-69
    0x08, 0x08, 0x08, 0x08, 0x10, 0x10, 0x10, 0x10, 0x10, 0x10, // 70-79
    0x10, 0x10, 0x40, 0x20, 0x20, 0x20, 0x10, 0x20, 0x20, 0x20, // 80-89
    0x20, 0x20, 0x20, 0x20, 0x40, 0x40, 0x40, 0x40 // 90-97
];

export const POSTCODE_TO_REGION_INDICES: number[][] = [
    [38],       // Postcode '01' -> Region 38
    [39],       // Postcode '02' -> Region 39
    [40],       // Postcode '03' -> Region 40
    [41],       // Postcode '04' -> Region 41
    [42],       // Postcode '05' -> Region 42
    [43],       // Postcode '06' -> Region 43
    [44],       // Postcode '07' -> Region 44
    [46],       // Postcode '08' -> Region 46
    [45],       // Postcode '09' -> Region 45
    [25],       // Postcode '11' -> Region 25
    [48],       // Postcode '12' -> Region 48
    [49],       // Postcode '13' -> Region 49
    [15],       // Postcode '14' -> Region 15
    [14],       // Postcode '15' -> Region 14
    [58],       // Postcode '16' -> Region 58
    [20],       // Postcode '17' -> Region 20
    [55],       // Postcode '18' -> Region 55
    [57],       // Postcode '19' -> Region 57
    [64],       // Postcode '20' -> Region 64
    [63],       // Postcode '21' -> Region 63
    [62],       // Postcode '22' -> Region 62
    [26],       // Postcode '23' -> Region 26
    [66],       // Postcode '24' -> Region 66
    [65],       // Postcode '25' -> Region 65
    [27, 61],   // Postcode '27' -> Regions 27, 61
    [67],       // Postcode '28' -> Region 67
    [60],       // Postcode '29' -> Region 60
    [68],       // Postcode '30' -> Region 68
    [70],       // Postcode '31' -> Region 70
    [69],       // Postcode '32' -> Region 69
    [71],       // Postcode '33' -> Region 71
    [72],       // Postcode '34' -> Region 72
    [17],       // Postcode '35' -> Region 17
    [73],       // Postcode '36' -> Region 73
    [16],       // Postcode '37' -> Region 16
    [59],       // Postcode '38' -> Region 59
    [19],       // Postcode '39' -> Region 19
    [75],       // Postcode '40' -> Region 75
    [76],       // Postcode '41' -> Region 76
    [77],       // Postcode '42' -> Region 77
    [78],       // Postcode '43' -> Region 78
    [79],       // Postcode '44' -> Region 79
    [74],       // Postcode '45' -> Region 74
    [80],       // Postcode '46' -> Region 80
    [6],        // Postcode '47' -> Region 6
    [81],       // Postcode '48' -> Region 81
    [86],       // Postcode '49' -> Region 86
    [87],       // Postcode '50' -> Region 87
    [88],       // Postcode '51' -> Region 88
    [90],       // Postcode '52' -> Region 90
    [91],       // Postcode '53' -> Region 91
    [89],       // Postcode '54' -> Region 89
    [92],       // Postcode '55' -> Region 92
    [85],       // Postcode '56' -> Region 85
    [84],       // Postcode '57' -> Region 84
    [83],       // Postcode '58' -> Region 83
    [93],       // Postcode '59' -> Region 93
    [94],       // Postcode '60' -> Region 94
    [95],       // Postcode '61' -> Region 95
    [96],       // Postcode '62' -> Region 96
    [82],       // Postcode '63' -> Region 82
    [97],       // Postcode '64' -> Region 97
    [5],        // Postcode '65' -> Region 5
    [4],        // Postcode '66' -> Region 4
    [3],        // Postcode '67' -> Region 3
    [2],        // Postcode '68' -> Region 2
    [0],        // Postcode '69' -> Region 0
    [11],       // Postcode '70' -> Region 11
    [10],       // Postcode '71' -> Region 10
    [12],       // Postcode '72' -> Region 12
    [7],        // Postcode '73' -> Region 7
    [13],       // Postcode '74' -> Region 13
    [9],        // Postcode '75' -> Region 9
    [8],        // Postcode '76' -> Region 8
    [18],       // Postcode '77' -> Region 18
    [1],        // Postcode '78' -> Region 1
    [56],       // Postcode '79' -> Region 56
    [50],       // Postcode '80' -> Region 50
    [52],       // Postcode '81' -> Region 52
    [51],       // Postcode '82' -> Region 51
    [53],       // Postcode '83' -> Region 53
    [23],       // Postcode '84' -> Region 23
    [54],       // Postcode '85' -> Region 54
    [22],       // Postcode '86' -> Region 22
    [21],       // Postcode '87' -> Region 21
    [35],       // Postcode '88' -> Region 35
    [24],       // Postcode '89' -> Region 24
    [30],       // Postcode '90' -> Region 30
    [31],       // Postcode '91' -> Region 31
    [32],       // Postcode '92' -> Region 32
    [33],       // Postcode '93' -> Region 33
    [34],       // Postcode '94' -> Region 34
    [47],       // Postcode '95' -> Region 47
    [29],       // Postcode '96' -> Region 29
    [37],       // Postcode '97' -> Region 37
    [28],       // Postcode '98' -> Region 28
    [36]        // Postcode '99' -> Region 36
];

export const STATE_COLORS: string[] = [
    // Regions 0-13 (postcodes 69, 78, 68, 67, 66, 65, 47, 73, 76, 75, 71, 70, 72, 74)
    "#0082ff", "#0082ff", "#0082ff", "#0082ff", "#0082ff", //Amazonian states
    "#00a8ff", // Maranhao
    "#72b000", // Part of Bahia 47
    "#b00000", "#b00000", "#b00000", "#b00000", "#b00000", "#b00000", "#b00000", // Goias
    
    // Regions 14-19 (postcodes 15, 14, 37, 35, 77, 39)
    "#ffe500", "#ffe500", // SP
    "#059400", "#059400", // MG
    "#ffb300", // TO
    "#059400", // MG
    
    // Regions 20-29 (postcodes 17, 87, 86, 84, 89, 11, 23, 27, 98, 96)
    "#ffe500", // sp
    "#8f0000", "#8f0000", "#8f0000", // PR
    "#a10069", // SC
    "#ffe500", // SP
    "#ffb300", "#ffb300", 
    "#72b000", "#72b000",
    
    // Regions 30-39 (postcodes 90, 91, 92, 93, 94, 88, 99, 97, 01, 02)
    "#72b000", "#72b000", "#72b000", "#72b000", "#72b000", // RGDS
    "#a10069", // SC
    "#72b000", // RGDS
    "#72b000", 
    "#ffe500", "#ffe500", // SP
    
    // Regions 40-49 (postcodes 03, 04, 05, 06, 07, 09, 08, 95, 12, 13)
    "#ffe500", "#ffe500", "#ffe500", "#ffe500", "#ffe500", "#ffe500", "#ffe500", // SP
    "#72b000", // RGDS
    "#ffe500", "#ffe500", // SP
    
    // Regions 50-59 (postcodes 80, 82, 81, 83, 85, 18, 79, 19, 16, 38)
    "#8f0000", "#8f0000", "#8f0000", "#8f0000", "#8f0000", // PR
    "#ffe500", // SP
    "#00a8ff", // MGDS
    "#ffe500", "#ffe500", // SP 
    "#059400", // MG
    
    // Regions 60-69 (postcodes 29, 27, 22, 21, 20, 25, 24, 28, 30, 32)
    "#a19600", // ES
    "#00d589", "#00d589", "#00d589", "#00d589", "#00d589", "#00d589", "#00d589", // RJ
    "#059400", "#059400", // MG
    
    // Regions 70-97 (remaining postcodes)
    "#059400", "#059400", "#059400", "#059400", // MG
    "#72b000", "#72b000", "#72b000", "#72b000", "#72b000", "#72b000", "#72b000", "#72b000", // BA
    "#00d589", // CE
    "#8f0000", // PB
    "#00a8ff", // AL
    "#059400", // PE
    "#eeeeee", // SE
    "#059400", "#059400", "#059400", "#059400", "#059400", "#059400", // PE
    "#00a8ff", 
    "#00d589", "#00d589", "#00d589", // CE
    "#ffe500" // PI
  ];