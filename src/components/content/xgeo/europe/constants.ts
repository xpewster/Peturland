    /*
    212-230	"NAME": "Albania",
    26867-26900	"NAME": "Bosnia and Herzegovina",
    58365-58384	"NAME": "Bulgaria",
    102679-102696	"NAME": "Cyprus",
    117690-117708	"NAME": "Denmark",
    261204-261222	"NAME": "Ireland",
    351089-351107	"NAME": "Estonia",
    417019-417037	"NAME": "Austria",
    463741-463766	"NAME": "Czech Republic",
    504651-504669	"NAME": "Finland",
    680963-680980	"NAME": "France",
    856791-856809	"NAME": "Georgia",
    896522-896540	"NAME": "Germany",
    1087763-1087780	"NAME": "Greece",
    1375622-1375640	"NAME": "Croatia",
    1497637-1497655	"NAME": "Hungary",
    1545984-1546002	"NAME": "Iceland",
    1687427-1687443	"NAME": "Italy",
    1894016-1894033	"NAME": "Latvia",
    1936078-1936096	"NAME": "Belarus",
    2013963-2013983	"NAME": "Lithuania",
    2064781-2064800	"NAME": "Slovakia",
    2096593-2096617	"NAME": "Liechtenstein",
    2099194-2099246	"NAME": "The former Yugoslav Republic of Macedonia",
    2116703-2116719	"NAME": "Malta",
    2121145-2121163	"NAME": "Belgium",
    2150806-2150830	"NAME": "Faroe Islands",
    2169923-2169941	"NAME": "Andorra",
    2172598-2172619	"NAME": "Luxembourg",
    2179500-2179517	"NAME": "Monaco",
    2181098-2181119	"NAME": "Montenegro",
    2202399-2202421	"NAME": "Netherlands",
    2295367-2295384	"NAME": "Norway",
    3042455-3042472	"NAME": "Poland",
    3114759-3114778	"NAME": "Portugal",
    3156001-3156019	"NAME": "Romania",
    3232287-3232317	"NAME": "Republic of Moldova",
    3265807-3265826	"NAME": "Slovenia",
    3289666-3289682	"NAME": "Spain",
    3408314-3408331	"NAME": "Sweden",
    3643665-3643687	"NAME": "Switzerland",
    3686013-3686030	"NAME": "Turkey",
    3881159-3881184	"NAME": "United Kingdom",
    4222343-4222361	"NAME": "Ukraine",
    4470569-4470590	"NAME": "San Marino",
    4472891-4472908	"NAME": "Serbia",
    4524060-4524094	"NAME": "Holy See (Vatican City)",
    4524905-4524922	"NAME": "Russia",
    */

export const COUNTRIES = [
    "Albania",              // 0
    "Bosnia and Herzegovina", // 1
    "Bulgaria",             // 2
    "Cyprus",               // 3
    "Denmark",              // 4
    "Ireland",              // 5
    "Estonia",              // 6
    "Austria",              // 7
    "Czech Republic",       // 8
    "Finland",              // 9
    "France",               // 10
    "Georgia",              // 11
    "Germany",              // 12
    "Greece",               // 13
    "Croatia",              // 14
    "Hungary",              // 15
    "Iceland",              // 16
    "Italy",                // 17
    "Latvia",               // 18
    "Belarus",              // 19
    "Lithuania",            // 20
    "Slovakia",             // 21
    "Liechtenstein",        // 22
    "North Macedonia",      // 23
    "Malta",                // 24
    "Belgium",              // 25
    "Faroe Islands",        // 26
    "Andorra",              // 27
    "Luxembourg",           // 28
    "Monaco",               // 29
    "Montenegro",           // 30
    "Netherlands",          // 31
    "Norway",               // 32
    "Poland",               // 33
    "Portugal",             // 34
    "Romania",              // 35
    "Moldova",              // 36
    "Slovenia",             // 37
    "Spain",                // 38
    "Sweden",               // 39
    "Switzerland",          // 40
    "Turkey",               // 41
    "United Kingdom",       // 42
    "Ukraine",              // 43
    "San Marino",           // 44
    "Serbia",               // 45
    "Holy See (Vatican City)", // 46
    "Russia",               // 47
];

//0x1 = west
//0x2 = scandinavia
//0x4 = central
//0x8 = baltics
//0x10 = eastern

export const COUNTRY_TO_REGION_BITFLAG = [
    0x10, // Albania
    0x10, // Bosnia and Herzegovina
    0x10, // Bulgaria
    0x10, // Cyprus
    0x2, // Denmark
    0x1, // Ireland
    0x8, // Estonia
    0x4, // Austria
    0x4, // Czech Republic
    0x2, // Finland
    0x1, // France
    0x10, // Georgia
    0x4, // Germany
    0x10, // Greece
    0x10, // Croatia
    0x10, // Hungary
    0x2, // Iceland
    0x4, // Italy
    0x8, // Latvia
    0x10, // Belarus
    0x8, // Lithuania
    0x4, // Slovakia
    0x4, // Liechtenstein
    0x10, // The former Yugoslav Republic of Macedonia
    0x4, // Malta
    0x1, // Belgium
    0x2, // Faroe Islands
    0x1, // Andorra
    0x1, // Luxembourg
    0x1, // Monaco
    0x10, // Montenegro
    0x1, // Netherlands
    0x2, // Norway
    0x10, // Poland
    0x1, // Portugal
    0x10, // Romania
    0x10, // Republic of Moldova
    0x4, // Slovenia
    0x1, // Spain
    0x2, // Sweden
    0x4, // Switzerland
    0x10, // Turkey
    0x1, // United Kingdom
    0x10, // Ukraine
    0x4, // San Marino
    0x10, // Serbia
    0x4, // Holy See (Vatican City)
    0x10, // Russia
]