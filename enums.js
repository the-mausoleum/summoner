angular.module('App').factory('Enums', function() {
	var Regions = Object.freeze([
		{
			"ID": "na",
			"Name": "North America"
		},
		{
			"ID": "euw",
			"Name": "Western Europe"
		},
		{
			"ID": "eune",
			"Name": "Eastern Europe"
		},
		{
			"ID": "kr",
			"Name": "Korea"
		},
		{
			"ID": "br",
			"Name": "Brazil"
		},
		{
			"ID": "tr",
			"Name": "Turkey"
		},
	]);

	var Champions = Object.freeze([
		{
			"ID": "aatrox",
			"Name": "Aatrox",
			"Title": "The Darkin Blade",
			"Abilities": {
				"Passive": "blood_well",
				"Q": "dark_flight",
				"W": {
					"ToggleOn": "blood_thirst",
					"ToggleOff": "blood_price"
				},
				"E": "blades_of_torment",
				"R": "massacre"
			}
		},
		{
			"ID": "ahri",
			"Name": "Ahri",
			"Title": "The Nine-Tailed Fox",
			"Abilities": {
				"Passive": "essence-theft",
				"Q": "orb_of_deception",
				"W": "fox-fire",
				"E": "charm",
				"R": "spirit_rush"
			}
		},
		{
			"ID": "akali",
			"Name": "Akali",
			"Title": "The Fist of Shadow",
			"Abilities": {
				"Passive": "twin-disciplines",
				"Q": "mark_of_the_assassin",
				"W": "twilight_shroud",
				"E": "crescent_slash",
				"R": "shadow_dance"
			}
		},
		{
			"ID": "alistar",
			"Name": "Alistar",
			"Title": "The Minotaur",
			"Abilities": {
				"Passive": "trample",
				"Q": "pulverize",
				"W": "headbutt",
				"E": "triumphant_roar",
				"R": "unbreakable_will"
			}
		},
		{
			"ID": "amumu",
			"Name": "Amumu",
			"Title": "The Sad Mummy",
			"Abilities": {
				"Passive": "cursed_touch",
				"Q": "bandage_toss",
				"W": "despair",
				"E": "tantrum",
				"R": "curse_of_the_sad_mummy"
			}
		},
		{
			"ID": "anivia",
			"Name": "Anivia",
			"Title": "The Cryophoenix",
			"Abilities": {
				"Passive": "rebirth",
				"Q": "flash_frost",
				"W": "crystallize",
				"E": "frostbite",
				"R": "glacial_storm"
			}
		},
		{
			"ID": "annie",
			"Name": "Annie",
			"Title": "The Dark Child",
			"Abilities": {
				"Passive": "pryomania",
				"Q": "disintegrate",
				"W": "incinerate",
				"E": "molten_shield",
				"R": "summon_tibbers"
			}
		},
		{
			"ID": "ashe",
			"Name": "Ashe",
			"Title": "The Frost Archer",
			"Abilities": {
				"Passive": "focus",
				"Q": "frost-shot",
				"W": "volley",
				"E": "hawkshot",
				"R": "enchanted_crystal_arrow"
			}
		},
		{
			"ID": "blitzcrank",
			"Name": "Blitzcrank",
			"Title": "The Great Steam Golem",
			"Abilities": {
				"Passive": "mana_barrier",
				"Q": "rocket_grab",
				"W": "overdrive",
				"E": "power_fist",
				"R": "static_field"
			}
		},
		{
			"ID": "brand",
			"Name": "Brand",
			"Title": "The Burning Vengeance",
			"Abilities": {
				"Passive": "blaze",
				"Q": "sear",
				"W": "pillar_of_flame",
				"E": "conflagration",
				"R": "pyroclasm"
			}
		},
		{
			"ID": "caitlyn",
			"Name": "Caitlyn",
			"Title": "The Sheriff of Piltover",
			"Abilities": {
				"Passive": "headshot",
				"Q": "piltover_peacemaker",
				"W": "yordle_snap_trap",
				"E": "90_caliber_net",
				"R": "ace_in_the_hole"
			}
		},
		{
			"ID": "cassiopeia",
			"Name": "Cassiopeia",
			"Title": "The Serpent's Embrace",
			"Abilities": {
				"Passive": "deadly_cadence",
				"Q": "noxious_blast",
				"W": "miasma",
				"E": "twin_fang",
				"R": "petrifying_gaze"
			}
		},
		{
			"ID": "chogath",
			"Name": "Cho'Gath",
			"Title": "The Terror of the Void",
			"Abilities": {
				"Passive": "carnivore",
				"Q": "rupture",
				"W": "feral_scream",
				"E": "vorpal_spikes",
				"R": "feast"
			}
		},
		{
			"ID": "corki",
			"Name": "Corki",
			"Title": "The Daring Bombadier",
			"Abilities": {
				"Passive": "hextech_shrapnel_shells",
				"Q": "phosphorous_bomb",
				"W": "valkyrie",
				"E": "gatling_gun",
				"R": "missile_barrage"
			}
		},
		{
			"ID": "darius",
			"Name": "Darius",
			"Title": "The Hand of Noxus",
			"Abilities": {
				"Passive": "hemorrhage",
				"Q": "decimate",
				"W": "crippling_strike",
				"E": "apprehend",
				"R": "noxian_guillotine"
			}
		},
		{
			"ID": "diana",
			"Name": "Diana",
			"Title": "Scorn of the Moon",
			"Abilities": {
				"Passive": "moonsilver_blade",
				"Q": "crescent_strike",
				"W": "pale_cascade",
				"E": "moonfall",
				"R": "lunar_rush"
			}
		},
		{
			"ID": "draven",
			"Name": "Draven",
			"Title": "The Glorious Executioner",
			"Abilities": {
				"Passive": "league_of_draven",
				"Q": "spinning_axe",
				"W": "blood_rush",
				"E": "stand_aside",
				"R": "whirling_death"
			}
		},
		{
			"ID": "drmundo",
			"Name": "Dr. Mundo",
			"Title": "The Madman of Zaun",
			"Abilities": {
				"Passive": "adrenaline_rush",
				"Q": "infected_cleaver",
				"W": "burning_agony",
				"E": "masochism",
				"R": "sadism"
			}
		},
		{
			"ID": "elise",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "evelynn",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "ezreal",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "fiddlesticks",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "fiora",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "fizz",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "galio",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "gangplank",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "garen",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},{
			"ID": "gragas",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},{
			"ID": "graves",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "hecarim",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "heimerdinger",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "irelia",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "janna",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "jarviniv",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "jax",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "jayce",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "jinx",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "karma",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "karthus",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "kassadin",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "katarina",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "kayle",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "kennen",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "khazix",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "kogmaw",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "leblanc",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "leesin",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "leona",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "lissandra",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "lucian",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "lulu",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "lux",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "malphite",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "malzahar",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "maokai",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "masteryi",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "missfortune",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "monkeyking",
			"Name": "Wukong",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "mordekaiser",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "morgana",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "nami",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "nasus",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "nautilus",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "nidalee",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "noctourne",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "nunu",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "olaf",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "orianna",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "pantheon",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "poppy",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "quinn",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "rammus",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "renekton",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "rengar",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "riven",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "rumble",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "ryze",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "sejuani",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "shaco",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "shen",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "shyvana",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "singed",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "sion",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "sivir",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "skarner",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "sona",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "soraka",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "swain",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "syndra",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "talon",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "taric",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "teemo",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "thresh",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "tristana",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "trundle",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "tryndamere",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "twistedfate",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "twitch",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "udyr",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "urgot",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "varus",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "vayne",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "veigar",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "vi",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "viktor",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "vladamir",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "volibear",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "warwick",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "xerath",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "xinzhao",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "yasuo",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "yorick",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "zac",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "zed",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "ziggs",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "zilean",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "zyra",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		// {
		// 	"ID": "",
		// 	"Name": "",
		// 	"Title": "",
		// 	"Abilities": {
		// 		"Passive": "",
		// 		"Q": "",
		// 		"W": "",
		// 		"E": "",
		// 		"R": ""
		// 	}
		// },
	]);

	var Abilities = Object.freeze([
		// Aatrox
		{
			"ID": "blood_well",
			"Name": "Blood Well",
			"Icon": "assets/abilities/Blood_Well.png",
			"Description": ""
		},
		{
			"ID": "dark_flight",
			"Name": "Dark Flight",
			"Icon": "assets/abilities/Dark_Flight.png", 
			"Description": ""
		},
		{
			"ID": "blood_thirst",
			"Name": "Blood Thirst",
			"Icon": "assets/abilities/Blood_Thirst.png", 
			"Description": ""
		},
		{
			"ID": "blood_price",
			"Name": "Blood Price",
			"Icon": "assets/abilities/Blood_Price.png", 
			"Description": ""
		},
		{
			"ID": "blades_of_torment",
			"Name": "Blades of Torment",
			"Icon": "assets/abilities/Blades_of_Torment.png", 
			"Description": ""
		},
		{
			"ID": "massacre",
			"Name": "Massacre",
			"Icon": "assets/abilities/Massacre.png", 
			"Description": ""
		},
		// Ahri
		{
			"ID": "essence-theft",
			"Name": "",
			"Icon": "assets/abilities/", 
			"Description": ""
		},
		{
			"ID": "",
			"Name": "",
			"Icon": "assets/abilities/", 
			"Description": ""
		},
		{
			"ID": "",
			"Name": "",
			"Icon": "assets/abilities/", 
			"Description": ""
		},
		{
			"ID": "",
			"Name": "",
			"Icon": "assets/abilities/", 
			"Description": ""
		},
		// {
		// 	"ID": "",
		// 	"Name": "",
		// 	"Icon": "assets/abilities/", 
		// 	"Description": ""
		// },
	]);

	var SummonerIcons = Object.freeze([
		{
			"ID": 7,
			"Icon": "assets/summoner_icons/ProfileIcon08.jpg"
		},
		{
			"ID": 11,
			"Icon": "assets/summoner_icons/ProfileIcon12.jpg"
		},
		{
			"ID": 21,
			"Icon": "assets/summoner_icons/ProfileIcon22.jpg"
		},
		{
			"ID": 539,
			"Icon": "assets/summoner_icons/ProfileIcon62.jpg"
		},
		{
			"ID": 555,
			"Icon": "assets/summoner_icons/ProfileIcon73.jpg"
		},
		{
			"ID": 579,
			"Icon": "assets/summoner_icons/ProfileIcon_Tome.png"
		},
		{
			"ID": 585,
			"Icon": "assets/summoner_icons/image_104.jpg"
		},
		{
			"ID": 586,
			"Icon": "assets/summoner_icons/image_108.jpg"
		},
		{
			"ID": 588,
			"Icon": "assets/summoner_icons/ProfileIcon_Poro.png"
		},
		{
			"ID": 589,
			"Icon": "assets/summoner_icons/ProfileIcon_BadSanta.png"
		},
		{
			"ID": 591,
			"Icon": "assets/summoner_icons/ProfileIcon_Teemo.png"
		},
		{
			"ID": 592,
			"Icon": "assets/summoner_icons/ProfileIcon_Santa.png"
		},
		// {
		// 	"ID": ,
		// 	"Icon": "assets/summoner_icons/"
		// },
	]);

	return {
		"Regions": Regions,
		"Champions": Champions,
		"Abilities": Abilities,
		"SummonerIcons": SummonerIcons,
	}
});