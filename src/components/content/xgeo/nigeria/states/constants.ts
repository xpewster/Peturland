export const STATES = [
	"Abia",
	"Adamawa",
	"Akwa Ibom",
	"Anambra",
	"Bauchi",
	"Bayelsa",
	"Benue",
	"Borno",
	"Cross River",
	"Delta",
	"Ebonyi",
	"Edo",
	"Ekiti",
	"Enugu",
	"Federal Capital Territory",
	"Gombe",
	"Imo",
	"Jigawa",
	"Kaduna",
	"Kano",
	"Katsina",
	"Kebbi",
	"Kogi",
	"Kwara",
	"Lagos",
	"Nasarawa",
	"Niger",
	"Ogun",
	"Ondo",
	"Osun",
	"Oyo",
	"Plateau",
	"Rivers",
	"Sokoto",
	"Taraba",
	"Yobe",
	"Zamfara",
]

export const REGION_INDEX_TO_NIGERIAN_STATE_INDEX = [
    [0], [1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15], [16], [17],
    [18], [19], [20], [21], [22], [23], [24], [25], [26], [27], [28], [29], [30], [31],
    [32], [33], [34], [35], [36], [37], [38], [39], [40],
];

export const NIGERIA_REGION_BITFLAG = [
    0x2, 0x4, 0x2, 0x2, 0x4, 0x2, 0x2, 0x4, 0x1, 0x2, 0x4, 0x2, 0x1, 0x2, 0x1, 0x1, 0x2, 0x4, 0x4, //Gombe last
    0x2, 0x4, 0x4, 0x4, 0x4, 0x4, 0x1, 0x1, 0x1, // Lagos
    0x4, 0x4, 0x1, 0x1, 0x1, 0x1, 0x4, 0x2, 0x4, 0x4, 0x4, 0x4
]