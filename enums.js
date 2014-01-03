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
			"Name": "Pantheon",
			"Title": "The Artisan of War",
			"Abilities": {
				"Passive": "aegis_protection",
				"Q": "spear_shot",
				"W": "aegis_of_zeonia",
				"E": "heartseeker_strike",
				"R": "grand_skyfall"
			}
		},
		{
			"ID": "poppy",
			"Name": "Poppy",
			"Title": "The Iron Ambassador",
			"Abilities": {
				"Passive": "valiant_fighter",
				"Q": "devastating_blow",
				"W": "paragon_of_demacia",
				"E": "heroic_charge",
				"R": "diplomatic_immunity"
			}
		},
		{
			"ID": "quinn",
			"Name": "Quinn and Valor",
			"Title": "Demacia's Wings",
			"Abilities": {
				"Passive": "harrier",
				"Q": "binding_assault",
				"W": "heightened_senses",
				"E": "vault",
				"R": ""
			}
		},
		{
			"ID": "rammus",
			"Name": "Rammus",
			"Title": "The Armordillo",
			"Abilities": {
				"Passive": "spiked_shell",
				"Q": "powerball",
				"W": "defensive_ball_curl",
				"E": "puncturing_taunt",
				"R": "tremors"
			}
		},
		{
			"ID": "renekton",
			"Name": "Renekton",
			"Title": "The Butcher of the Sands",
			"Abilities": {
				"Passive": "reign_of_anger",
				"Q": "cull_the_meek",
				"W": "ruthless_predator",
				"E": "",
				"R": "dominus"
			}
		},
		{
			"ID": "rengar",
			"Name": "Rengar",
			"Title": "The Pridestalker",
			"Abilities": {
				"Passive": "unseen_predator",
				"Q": "",
				"W": "",
				"E": "",
				"R": "thrill_of_the_hunt"
			}
		},
		{
			"ID": "riven",
			"Name": "Riven",
			"Title": "The Exile",
			"Abilities": {
				"Passive": "runic_blade",
				"Q": "broken_wings",
				"W": "ki_burst",
				"E": "valor",
				"R": "blade_of_the_exile"
			}
		},
		{
			"ID": "rumble",
			"Name": "Rumble",
			"Title": "The Mechanized Menace",
			"Abilities": {
				"Passive": "junkyard_titan",
				"Q": "flamespitter",
				"W": "scrap_shield",
				"E": "electro-harpoon",
				"R": "the_equalizer"
			}
		},
		{
			"ID": "ryze",
			"Name": "Ryze",
			"Title": "The Rogue Mage",
			"Abilities": {
				"Passive": "arcane_mastery",
				"Q": "overload",
				"W": "rune_prison",
				"E": "spell_flux",
				"R": "desperate_power"
			}
		},
		{
			"ID": "sejuani",
			"Name": "",
			"Title": "",
			"Abilities": {
				"Passive": "backstacb",
				"Q": "deceive",
				"W": "jack_in_the_box",
				"E": "two-shiv_poison",
				"R": "hallucinate"
			}
		},
		{
			"ID": "shaco",
			"Name": "Shaco",
			"Title": "The Demon Jester",
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
			"Name": "Shen",
			"Title": "Eye of Twilight",
			"Abilities": {
				"Passive": "ki_strike",
				"Q": "vorpal_blade",
				"W": "feint",
				"E": "shadow_dash",
				"R": "stand_united"
			}
		},
		{
			"ID": "shyvana",
			"Name": "Shyvana",
			"Title": "The Half-Dragon",
			"Abilities": {
				"Passive": "dragonborn",
				"Q": "twin_bite",
				"W": "burnout",
				"E": "flame_breath",
				"R": "dragons_descent"
			}
		},
		{
			"ID": "singed",
			"Name": "Singed",
			"Title": "The Mad Chemist",
			"Abilities": {
				"Passive": "empowered_bulwark",
				"Q": "poison_trail",
				"W": "mega_adhesive",
				"E": "fling",
				"R": "insanity_potion"
			}
		},
		{
			"ID": "sion",
			"Name": "Sion",
			"Title": "The Undead Champion",
			"Abilities": {
				"Passive": "feel_no_pain",
				"Q": "cryptic_gaze",
				"W": "deaths_caress",
				"E": "enrage",
				"R": "cannibalism"
			}
		},
		{
			"ID": "sivir",
			"Name": "Sivir",
			"Title": "The Battle Mistress",
			"Abilities": {
				"Passive": "fleet_of_foot",
				"Q": "boomerang_blade",
				"W": "ricochet",
				"E": "spell_shield",
				"R": "on_the_hunt"
			}
		},
		{
			"ID": "skarner",
			"Name": "Skarner",
			"Title": "The Crystal Vanguard",
			"Abilities": {
				"Passive": "energize",
				"Q": "crystal_slash",
				"W": "crystalline_exoskeleton",
				"E": "fracture",
				"R": "impale"
			}
		},
		{
			"ID": "sona",
			"Name": "Sona",
			"Title": "Maven of the Strings",
			"Abilities": {
				"Passive": "power_chord",
				"Q": "hymn_of_valor",
				"W": "aria_of_perseverance",
				"E": "song_of_celerity",
				"R": "crescendo"
			}
		},
		{
			"ID": "soraka",
			"Name": "Soraka",
			"Title": "The Starchild",
			"Abilities": {
				"Passive": "salvation",
				"Q": "starcall",
				"W": "astral_blessing",
				"E": "infuse",
				"R": "wish"
			}
		},
		{
			"ID": "swain",
			"Name": "Swain",
			"Title": "The Master Tactician",
			"Abilities": {
				"Passive": "carrion_renewal",
				"Q": "decrepify",
				"W": "nevermove",
				"E": "torment",
				"R": "ravenous_flock"
			}
		},
		{
			"ID": "syndra",
			"Name": "Syndra",
			"Title": "The Dark Sovereign",
			"Abilities": {
				"Passive": "transcendent",
				"Q": "dark_sphere",
				"W": "",
				"E": "scatter_the_weak",
				"R": "unleashed_power"
			}
		},
		{
			"ID": "talon",
			"Name": "Talon",
			"Title": "The Blade's Shadow",
			"Abilities": {
				"Passive": "mercy",
				"Q": "noxian_diplomacy",
				"W": "rake",
				"E": "cutthroat",
				"R": "shadow_assault"
			}
		},
		{
			"ID": "taric",
			"Name": "Taric",
			"Title": "The Gem Knight",
			"Abilities": {
				"Passive": "gemcraft",
				"Q": "imbue",
				"W": "shatter",
				"E": "dazzle",
				"R": "radiance"
			}
		},
		{
			"ID": "teemo",
			"Name": "Teemo",
			"Title": "The Swift Scout",
			"Abilities": {
				"Passive": "camouflage",
				"Q": "blinding_dart",
				"W": "move_quick",
				"E": "toxic_shot",
				"R": "noxious_trap"
			}
		},
		{
			"ID": "thresh",
			"Name": "Thresh",
			"Title": "The Chain Warden",
			"Abilities": {
				"Passive": "damnation",
				"Q": "death_sentence",
				"W": "dark_passage",
				"E": "flay",
				"R": "the_box"
			}
		},
		{
			"ID": "tristana",
			"Name": "Tristana",
			"Title": "The Megling Gunner",
			"Abilities": {
				"Passive": "draw_a_bead",
				"Q": "rapid_fire",
				"W": "rocket_jump",
				"E": "explosive_shot",
				"R": "buster_shot"
			}
		},
		{
			"ID": "trundle",
			"Name": "Trundle",
			"Title": "The Troll King",
			"Abilities": {
				"Passive": "kings_tribute",
				"Q": "chomp",
				"W": "frozen_domain",
				"E": "pillar_of_ice",
				"R": "subjugate"
			}
		},
		{
			"ID": "tryndamere",
			"Name": "Tryndamere",
			"Title": "The Barbarian King",
			"Abilities": {
				"Passive": "battle_fury",
				"Q": "bloodlust",
				"W": "mocking_shout",
				"E": "spinning_slash",
				"R": "undying_rage"
			}
		},
		{
			"ID": "twistedfate",
			"Name": "Twisted Fate",
			"Title": "The Card Master",
			"Abilities": {
				"Passive": "loaded_dice",
				"Q": "wild_cards",
				"W": "",
				"E": "stacked_deck",
				"R": ""
			}
		},
		{
			"ID": "twitch",
			"Name": "Twitch",
			"Title": "The Plague Rat",
			"Abilities": {
				"Passive": "deadly_venom",
				"Q": "ambush",
				"W": "venom_cask",
				"E": "expunge",
				"R": "spray_and_pray"
			}
		},
		{
			"ID": "udyr",
			"Name": "Udyr",
			"Title": "The Spirit Walker",
			"Abilities": {
				"Passive": "monkeys_agility",
				"Q": "tiger_stance",
				"W": "turtle_stance",
				"E": "bear_stance",
				"R": "phoenix_stance"
			}
		},
		{
			"ID": "urgot",
			"Name": "Urgot",
			"Title": "The Headsman's Pride",
			"Abilities": {
				"Passive": "zaun-touched_bolt_augmenter",
				"Q": "acid_hunter",
				"W": "terror_capacitor",
				"E": "noxian_corrosive_charge",
				"R": "hyper-kinetic_position_reverser"
			}
		},
		{
			"ID": "varus",
			"Name": "Varus",
			"Title": "The Arrow of Retribution",
			"Abilities": {
				"Passive": "living_vengeance",
				"Q": "piercing_arrow",
				"W": "blighted_quiver",
				"E": "hail_of_arrows",
				"R": "chain_of_corruption"
			}
		},
		{
			"ID": "vayne",
			"Name": "Vayne",
			"Title": "The Night Hunter",
			"Abilities": {
				"Passive": "night_hunter",
				"Q": "tumble",
				"W": "silver_bolts",
				"E": "condemn",
				"R": "final_hour"
			}
		},
		{
			"ID": "veigar",
			"Name": "Veigar",
			"Title": "The Tiny Master of Evil",
			"Abilities": {
				"Passive": "equilibrium",
				"Q": "baleful_strike",
				"W": "dark_matter",
				"E": "event_horizon",
				"R": "primordial_burst"
			}
		},
		{
			"ID": "vi",
			"Name": "Vi",
			"Title": "The Piltover Enforcer",
			"Abilities": {
				"Passive": "blast_shield",
				"Q": "vault_breaker",
				"W": "denting_blows",
				"E": "excessive_force",
				"R": "assault_and_battery"
			}
		},
		{
			"ID": "viktor",
			"Name": "Viktor",
			"Title": "The Machine Herald",
			"Abilities": {
				"Passive": "evolving_technology",
				"Q": "",
				"W": "",
				"E": "",
				"R": "chaos_storm"
			}
		},
		{
			"ID": "vladimir",
			"Name": "Vladimir",
			"Title": "The Crimson Reaper",
			"Abilities": {
				"Passive": "crimson_pact",
				"Q": "transfusion",
				"W": "sanguine_pool",
				"E": "tides_of_blood",
				"R": "hemoplague"
			}
		},
		{
			"ID": "volibear",
			"Name": "Volibear",
			"Title": "The Thunder's Roar",
			"Abilities": {
				"Passive": "chosen_of_the_storm",
				"Q": "rolling_thunder",
				"W": "frenzy",
				"E": "majestic_roar",
				"R": "thunder_claws"
			}
		},
		{
			"ID": "warwick",
			"Name": "Warwick",
			"Title": "The Blood Hunter",
			"Abilities": {
				"Passive": "eternal_thirst",
				"Q": "hungering_strike",
				"W": "hunters_call",
				"E": "blood_scent",
				"R": "infinite_duress"
			}
		},
		{
			"ID": "xerath",
			"Name": "Xerath",
			"Title": "The Magus Ascendant",
			"Abilities": {
				"Passive": "ascended_form",
				"Q": "arcanopulse",
				"W": "locus_of_power",
				"E": "mage_chains",
				"R": "arcane_barrage"
			}
		},
		{
			"ID": "xinzhao",
			"Name": "Xin Zhao",
			"Title": "The Seneschal of Demacia",
			"Abilities": {
				"Passive": "challenge",
				"Q": "three_talon_strike",
				"W": "battle_cry",
				"E": "audacious_charge",
				"R": "crescent_sweep"
			}
		},
		{
			"ID": "yasuo",
			"Name": "Yasuo",
			"Title": "The Unforgiven",
			"Abilities": {
				"Passive": "way_of_the_wanderer",
				"Q": "",
				"W": "wind_wall",
				"E": "sweeping_blade",
				"R": "last_breath"
			}
		},
		{
			"ID": "yorick",
			"Name": "Yorick",
			"Title": "The Gravedigger",
			"Abilities": {
				"Passive": "unholy_covenant",
				"Q": "omen_of_war",
				"W": "omen_of_pestilence",
				"E": "omen_of_famine",
				"R": "omen_of_death"
			}
		},
		{
			"ID": "zac",
			"Name": "Zac",
			"Title": "The Secret Weapon",
			"Abilities": {
				"Passive": "cell_division",
				"Q": "stretching_strike",
				"W": "unstable_matter",
				"E": "elastic_slingshot",
				"R": "lets_bounce"
			}
		},
		{
			"ID": "zed",
			"Name": "Zed",
			"Title": "The Master of Shadows",
			"Abilities": {
				"Passive": "contempt_for_the_weak",
				"Q": "razor_shuriken",
				"W": "living_shadow",
				"E": "shadow_slash",
				"R": "death_mark"
			}
		},
		{
			"ID": "ziggs",
			"Name": "Ziggs",
			"Title": "The Hexsplosives Expert",
			"Abilities": {
				"Passive": "short_fuse",
				"Q": "bouncing_bomb",
				"W": "satchel_charge",
				"E": "hexplosive_minefield",
				"R": "mega_inferno_bomb"
			}
		},
		{
			"ID": "zilean",
			"Name": "Zilean",
			"Title": "The Chronokeeper",
			"Abilities": {
				"Passive": "heightened_learning",
				"Q": "time_bomb",
				"W": "rewind",
				"E": "time_warp",
				"R": "chrono_shift"
			}
		},
		{
			"ID": "zyra",
			"Name": "Zyra",
			"Title": "Rise of the Thorns",
			"Abilities": {
				"Passive": "rise_of_the_thorns",
				"Q": "deadly_bloom",
				"W": "rampant_growth",
				"E": "grasping_roots",
				"R": "stranglethorns"
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