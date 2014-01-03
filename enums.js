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
				"Passive": "spider_swarm",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "evelynn",
			"Name": "Evelynn",
			"Title": "The Widowmaker",
			"Abilities": {
				"Passive": "shadow_walk",
				"Q": "hate_spike",
				"W": "dark_frenzy",
				"E": "ravage",
				"R": "agonys_embrace"
			}
		},
		{
			"ID": "ezreal",
			"Name": "Ezreal",
			"Title": "The Prodigal Explorer",
			"Abilities": {
				"Passive": "rising_spell_force",
				"Q": "mystic_shot",
				"W": "essence_flux",
				"E": "arcane_shift",
				"R": "trueshot_barrage"
			}
		},
		{
			"ID": "fiddlesticks",
			"Name": "Fiddlesticks",
			"Title": "The Harbinger of Doom",
			"Abilities": {
				"Passive": "dread",
				"Q": "terrify",
				"W": "drain",
				"E": "dark_wind",
				"R": "crowstorm"
			}
		},
		{
			"ID": "fiora",
			"Name": "Fiora",
			"Title": "The Grand Duelist",
			"Abilities": {
				"Passive": "duelist",
				"Q": "lunge",
				"W": "riposte",
				"E": "burst_of_speed",
				"R": "bldae_waltz"
			}
		},
		{
			"ID": "fizz",
			"Name": "Fizz",
			"Title": "The Tidal Trickster",
			"Abilities": {
				"Passive": "nimble_fighter",
				"Q": "urching_strike",
				"W": "seastone_trident",
				"E": "",
				"R": "chum_the_waters"
			}
		},
		{
			"ID": "galio",
			"Name": "Galio",
			"Title": "The Sentinel's Sorrow",
			"Abilities": {
				"Passive": "runic_skin",
				"Q": "resolute_smite",
				"W": "bulwark",
				"E": "righteous_gust",
				"R": "idol_of_durand"
			}
		},
		{
			"ID": "gangplank",
			"Name": "Gangplank",
			"Title": "The Saltwater Scourge",
			"Abilities": {
				"Passive": "grog_soaked_blade",
				"Q": "parrrley",
				"W": "remove_scurvy",
				"E": "raise_morale",
				"R": "cannon_barrage"
			}
		},
		{
			"ID": "garen",
			"Name": "Garen",
			"Title": "The Might of Demacia",
			"Abilities": {
				"Passive": "perseverance",
				"Q": "decisive_strike",
				"W": "courage",
				"E": "judgement",
				"R": "demacian_justice"
			}
		},{
			"ID": "gragas",
			"Name": "Gragas",
			"Title": "The Rabble Rouser",
			"Abilities": {
				"Passive": "happy_hour",
				"Q": "barrel_roll",
				"W": "drunken_rage",
				"E": "body_slam",
				"R": "explosive_cask"
			}
		},{
			"ID": "graves",
			"Name": "Graves",
			"Title": "The Outlaw",
			"Abilities": {
				"Passive": "true_grit",
				"Q": "buckshot",
				"W": "smoke_screen",
				"E": "quickdraw",
				"R": "collateral_damage"
			}
		},
		{
			"ID": "hecarim",
			"Name": "Hecarim",
			"Title": "The Shadow of War",
			"Abilities": {
				"Passive": "warpath",
				"Q": "rampage",
				"W": "spirit_of_dread",
				"E": "devastating_charge",
				"R": "onslaught_of_shadows"
			}
		},
		{
			"ID": "heimerdinger",
			"Name": "Heimerdinger",
			"Title": "The Revered Inventor",
			"Abilities": {
				"Passive": "techmaturgical_repair_bots",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "irelia",
			"Name": "Irelia",
			"Title": "The Will of the Blades",
			"Abilities": {
				"Passive": "ionian_fervor",
				"Q": "bladesurge",
				"W": "hiten_style",
				"E": "equilibrium_strike",
				"R": "transcendent_blades"
			}
		},
		{
			"ID": "janna",
			"Name": "Janna",
			"Title": "The Storm's Fury",
			"Abilities": {
				"Passive": "tailwind",
				"Q": "howling_gale",
				"W": "zephyr",
				"E": "eye_of_the_storm",
				"R": "monsoon"
			}
		},
		{
			"ID": "jarviniv",
			"Name": "Jarvan IV",
			"Title": "The Exemplar of Demacia",
			"Abilities": {
				"Passive": "martial_candence",
				"Q": "dragon_strike",
				"W": "golden_aegis",
				"E": "demacian_standard",
				"R": "cataclysm"
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
			"Name": "Jax",
			"Title": "Grandmaster at Arms",
			"Abilities": {
				"Passive": "relentless_assault",
				"Q": "leap_strike",
				"W": "empower",
				"E": "counter_strike",
				"R": "grandmasters_might"
			}
		},
		{
			"ID": "jinx",
			"Name": "Jinx",
			"Title": "The Loose Cannon",
			"Abilities": {
				"Passive": "get_excited",
				"Q": "switcheroo",
				"W": "zap",
				"E": "flam_chombers",
				"R": "super_mega_death_rocket"
			}
		},
		{
			"ID": "karma",
			"Name": "Karma",
			"Title": "The Enlightened One",
			"Abilities": {
				"Passive": "gathering_fire",
				"Q": "",
				"W": "",
				"E": "",
				"R": "manta"
			}
		},
		{
			"ID": "karthus",
			"Name": "Karthus",
			"Title": "The Deathsinger",
			"Abilities": {
				"Passive": "death_defiled",
				"Q": "lay_waste",
				"W": "wall_of_pain",
				"E": "defile",
				"R": "requiem"
			}
		},
		{
			"ID": "kassadin",
			"Name": "Kassadin",
			"Title": "The Void Walker",
			"Abilities": {
				"Passive": "void_stone",
				"Q": "null_sphere",
				"W": "nether_blade",
				"E": "force_pulse",
				"R": "riftwalk"
			}
		},
		{
			"ID": "katarina",
			"Name": "Katarina",
			"Title": "The Sinister Blade",
			"Abilities": {
				"Passive": "voracity",
				"Q": "bouncing_blades",
				"W": "sinister_steel",
				"E": "shunpo",
				"R": "death_lotus"
			}
		},
		{
			"ID": "kayle",
			"Name": "Kayle",
			"Title": "The Judicator",
			"Abilities": {
				"Passive": "holy_fervor",
				"Q": "reckoning",
				"W": "divine_blessing",
				"E": "righteous_fury",
				"R": "intervention"
			}
		},
		{
			"ID": "kennen",
			"Name": "Kennen",
			"Title": "The Heart of the Tempest",
			"Abilities": {
				"Passive": "mark_of_the_storm",
				"Q": "thrundering_shuriken",
				"W": "electrical_surge",
				"E": "lightning_rush",
				"R": "slicing_maelstrom"
			}
		},
		{
			"ID": "khazix",
			"Name": "Kha'Zix",
			"Title": "The Voidreaver",
			"Abilities": {
				"Passive": "unseen_threat",
				"Q": "",
				"W": "",
				"E": "",
				"R": ""
			}
		},
		{
			"ID": "kogmaw",
			"Name": "Kog'Maw",
			"Title": "The Mouth of the Abyss",
			"Abilities": {
				"Passive": "icathian_surprise",
				"Q": "caustic_spittle",
				"W": "bio-arcane_barrage",
				"E": "void_ooze",
				"R": "living_artillery"
			}
		},
		{
			"ID": "leblanc",
			"Name": "LeBlanc",
			"Title": "The Deceiver",
			"Abilities": {
				"Passive": "mirror_image",
				"Q": "sigil_of_silence",
				"W": "distortion",
				"E": "ethereal_chains",
				"R": "mimic"
			}
		},
		{
			"ID": "leesin",
			"Name": "Lee Sin",
			"Title": "The Blind Monk",
			"Abilities": {
				"Passive": "",
				"Q": "",
				"W": "",
				"E": "",
				"R": "dragons_rage"
			}
		},
		{
			"ID": "leona",
			"Name": "Leona",
			"Title": "The Radiant Dawn",
			"Abilities": {
				"Passive": "sunlight",
				"Q": "shield_of_daybreak",
				"W": "eclipse",
				"E": "zenith_blade",
				"R": "solar_flare"
			}
		},
		{
			"ID": "lissandra",
			"Name": "Lissandra",
			"Title": "The Ice WItch",
			"Abilities": {
				"Passive": "iceborn",
				"Q": "ice_shard",
				"W": "ring_of_frost",
				"E": "glacial_path",
				"R": "frozen_tomb"
			}
		},
		{
			"ID": "lucian",
			"Name": "Lucian",
			"Title": "The Purifierw",
			"Abilities": {
				"Passive": "lightslinger",
				"Q": "piercing_light",
				"W": "ardent_blaze",
				"E": "relentless_pursuit",
				"R": "the_culling"
			}
		},
		{
			"ID": "lulu",
			"Name": "Lulu",
			"Title": "The Fae Sorceress",
			"Abilities": {
				"Passive": "pix_faerie_companion",
				"Q": "glitterlance",
				"W": "whimsy",
				"E": "help_pix",
				"R": "wild_growth"
			}
		},
		{
			"ID": "lux",
			"Name": "Lux",
			"Title": "The Lady of Luminosity",
			"Abilities": {
				"Passive": "illumination",
				"Q": "light_binding",
				"W": "prismatic_barrier",
				"E": "lucent_singularity",
				"R": "final_spark"
			}
		},
		{
			"ID": "malphite",
			"Name": "Malphite",
			"Title": "Shard of the Monolith",
			"Abilities": {
				"Passive": "granite_shield",
				"Q": "seismic_shard",
				"W": "brutal_stikes",
				"E": "ground_slam",
				"R": "unstoppable_force"
			}
		},
		{
			"ID": "malzahar",
			"Name": "Malzahar",
			"Title": "The Prophet of the Void",
			"Abilities": {
				"Passive": "summon_voidling",
				"Q": "call_of_the_void",
				"W": "null_zone",
				"E": "malefic_visions",
				"R": "nether_grasp"
			}
		},
		{
			"ID": "maokai",
			"Name": "Maokai",
			"Title": "The Twisted Treant",
			"Abilities": {
				"Passive": "sap_magic",
				"Q": "arcane_smash",
				"W": "twisted_advance",
				"E": "sapling_toss",
				"R": "vengeful_maelstrom"
			}
		},
		{
			"ID": "masteryi",
			"Name": "Master Yi",
			"Title": "The Wuju Bladesmanw",
			"Abilities": {
				"Passive": "double_strike",
				"Q": "alpha_stike",
				"W": "meditate",
				"E": "wuju_style",
				"R": "highlander"
			}
		},
		{
			"ID": "missfortune",
			"Name": "Miss Fortune",
			"Title": "",
			"Abilities": {
				"Passive": "strut",
				"Q": "double_up",
				"W": "impure_shots",
				"E": "make_it_rain",
				"R": "bullet_time"
			}
		},
		{
			"ID": "monkeyking",
			"Name": "Wukong",
			"Title": "The Monkey King",
			"Abilities": {
				"Passive": "stone_skin",
				"Q": "crushing_blow",
				"W": "decoy",
				"E": "nimbus_strike",
				"R": "cyclone"
			}
		},
		{
			"ID": "mordekaiser",
			"Name": "Mordekaiser",
			"Title": "The Master of Metalw",
			"Abilities": {
				"Passive": "iron_man",
				"Q": "mace_of_spades",
				"W": "creeping_death",
				"E": "siphon_of_destruction",
				"R": "children_of_the_grave"
			}
		},
		{
			"ID": "morgana",
			"Name": "Morgana",
			"Title": "Fallen Angel",
			"Abilities": {
				"Passive": "soul_siphon",
				"Q": "dark_binding",
				"W": "tormented_soil",
				"E": "black_shield",
				"R": "soul_shackles"
			}
		},
		{
			"ID": "nami",
			"Name": "Nami",
			"Title": "The Tidecaller",
			"Abilities": {
				"Passive": "surging_tides",
				"Q": "aqua_prison",
				"W": "ebb_and_flow",
				"E": "tidecallers_blessing",
				"R": "tidal_wave"
			}
		},
		{
			"ID": "nasus",
			"Name": "Nasus",
			"Title": "The Curator of the Sands",
			"Abilities": {
				"Passive": "soul_eater",
				"Q": "siphoning_strike",
				"W": "whither",
				"E": "spirit_fire",
				"R": "fury_of_the_sands"
			}
		},
		{
			"ID": "nautilus",
			"Name": "Nautilus",
			"Title": "The Titan of the Depths",
			"Abilities": {
				"Passive": "staggering_blow",
				"Q": "dredge_line",
				"W": "titans_wrath",
				"E": "riptide",
				"R": "depth_charge"
			}
		},
		{
			"ID": "nidalee",
			"Name": "Nidalee",
			"Title": "The Bestial Huntress",
			"Abilities": {
				"Passive": "prowl",
				"Q": "",
				"W": "",
				"E": "",
				"R": "aspect of the Cougar"
			}
		},
		{
			"ID": "noctourne",
			"Name": "Nocturne",
			"Title": "The Eternal Nightmare",
			"Abilities": {
				"Passive": "umbra_blades",
				"Q": "duskbringer",
				"W": "shroud_of_darkness",
				"E": "unspeakable_horror",
				"R": "paranoia"
			}
		},
		{
			"ID": "nunu",
			"Name": "Nunu",
			"Title": "The Yeti_Rider",
			"Abilities": {
				"Passive": "visionary",
				"Q": "consume",
				"W": "blood_boil",
				"E": "ice_blast",
				"R": "absolute_zero"
			}
		},
		{
			"ID": "olaf",
			"Name": "Olaf",
			"Title": "The Berserker",
			"Abilities": {
				"Passive": "berserker_rage",
				"Q": "undertow",
				"W": "vicious_strikes",
				"E": "reckless_swing",
				"R": "ragnarok"
			}
		},
		{
			"ID": "orianna",
			"Name": "Orianna",
			"Title": "The Lady of Clockwork",
			"Abilities": {
				"Passive": "clockwork_windup",
				"Q": "command_attack",
				"W": "command_dissonance",
				"E": "command_protect",
				"R": "command_shockwave"
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