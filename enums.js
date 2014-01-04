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

	var Champions = Object.freeze({
		"aatrox": {
			"Name": "Aatrox",
			"Title": "The Darkin Blade",
		},
		"ahri": {
			"Name": "Ahri",
			"Title": "The Nine-Tailed Fox",
		},
		"akali": {
			"Name": "Akali",
			"Title": "The Fist of Shadow",
		},
		"alistar": {
			"Name": "Alistar",
			"Title": "The Minotaur",
		},
		"amumu": {
			"Name": "Amumu",
			"Title": "The Sad Mummy",
		},
		"anivia": {
			"Name": "Anivia",
			"Title": "The Cryophoenix",
		},
		"annie": {
			"Name": "Annie",
			"Title": "The Dark Child",
		},
		"ashe": {
			"Name": "Ashe",
			"Title": "The Frost Archer",
		},
		"blitzcrank": {
			"Name": "Blitzcrank",
			"Title": "The Great Steam Golem",
		},
		"brand": {
			"Name": "Brand",
			"Title": "The Burning Vengeance",
		},
		"caitlyn": {
			"Name": "Caitlyn",
			"Title": "The Sheriff of Piltover",
		},
		"cassiopeia": {
			"Name": "Cassiopeia",
			"Title": "The Serpent's Embrace",
		},
		"chogath": {
			"Name": "Cho'Gath",
			"Title": "The Terror of the Void",
		},
		"corki": {
			"Name": "Corki",
			"Title": "The Daring Bombadier",
		},
		"darius": {
			"Name": "Darius",
			"Title": "The Hand of Noxus",
		},
		"diana": {
			"Name": "Diana",
			"Title": "Scorn of the Moon",
		},
		"draven": {
			"Name": "Draven",
			"Title": "The Glorious Executioner",
		},
		"drmundo": {
			"Name": "Dr. Mundo",
			"Title": "The Madman of Zaun",
		},
		"elise": {
			"Name": "Elise",
			"Title": "The Spider Queen",
		},
		"evelynn": {
			"Name": "Evelynn",
			"Title": "The Widowmaker",
		},
		"ezreal": {
			"Name": "Ezreal",
			"Title": "The Prodigal Explorer",
		},
		"fiddlesticks": {
			"Name": "Fiddlesticks",
			"Title": "The Harbinger of Doom",
		},
		"fiora": {
			"Name": "Fiora",
			"Title": "The Grand Duelist",
		},
		"fizz": {
			"Name": "Fizz",
			"Title": "The Tidal Trickster",
		},
		"galio": {
			"Name": "Galio",
			"Title": "The Sentinel's Sorrow",
		},
		"gangplank": {
			"Name": "Gangplank",
			"Title": "The Saltwater Scourge",
		},
		"garen": {
			"Name": "Garen",
			"Title": "The Might of Demacia",
		},
		"gragas": {
			"Name": "Gragas",
			"Title": "The Rabble Rouser",
		},
		"graves": {
			"Name": "Graves",
			"Title": "The Outlaw",
		},
		"hecarim": {
			"Name": "Hecarim",
			"Title": "The Shadow of War",
		},
		"heimerdinger": {
			"Name": "Heimerdinger",
			"Title": "The Revered Inventor",
		},
		"irelia": {
			"Name": "Irelia",
			"Title": "The Will of the Blades",
		},
		"janna": {
			"Name": "Janna",
			"Title": "The Storm's Fury",
		},
		"jarvaniv": {
			"Name": "Jarvan IV",
			"Title": "The Exemplar of Demacia",
		},
		"jax": {
			"Name": "Jax",
			"Title": "Grandmaster at Arms",
		},
		"jayce": {
			"Name": "Jayce",
			"Title": "The Defender of Tomorrow",
		},
		"jinx": {
			"Name": "Jinx",
			"Title": "The Loose Cannon",
		},
		"karma": {
			"Name": "Karma",
			"Title": "The Enlightened One",
		},
		"karthus": {
			"Name": "Karthus",
			"Title": "The Deathsinger",
		},
		"kassadin": {
			"Name": "Kassadin",
			"Title": "The Void Walker",
		},
		"katarina": {
			"Name": "Katarina",
			"Title": "The Sinister Blade",
		},
		"kayle": {
			"Name": "Kayle",
			"Title": "The Judicator",
		},
		"kennen": {
			"Name": "Kennen",
			"Title": "The Heart of the Tempest",
		},
		"khazix": {
			"Name": "Kha'Zix",
			"Title": "The Voidreaver",
		},
		"kogmaw": {
			"Name": "Kog'Maw",
			"Title": "The Mouth of the Abyss",
		},
		"leblanc": {
			"Name": "LeBlanc",
			"Title": "The Deceiver",
		},
		"leesin": {
			"Name": "Lee Sin",
			"Title": "The Blind Monk",
		},
		"leona": {
			"Name": "Leona",
			"Title": "The Radiant Dawn",
		},
		"lissandra": {
			"Name": "Lissandra",
			"Title": "The Ice WItch",
		},
		"lucian": {
			"Name": "Lucian",
			"Title": "The Purifierw",
		},
		"lulu": {
			"Name": "Lulu",
			"Title": "The Fae Sorceress",
		},
		"lux": {
			"Name": "Lux",
			"Title": "The Lady of Luminosity",
		},
		"malphite": {
			"Name": "Malphite",
			"Title": "Shard of the Monolith",
		},
		"malzahar": {
			"Name": "Malzahar",
			"Title": "The Prophet of the Void",
		},
		"maokai": {
			"Name": "Maokai",
			"Title": "The Twisted Treant",
		},
		"masteryi": {
			"Name": "Master Yi",
			"Title": "The Wuju Bladesmanw",
		},
		"missfortune": {
			"Name": "Miss Fortune",
			"Title": "The Bounty Hunter",
		},
		"monkeyking": {
			"Name": "Wukong",
			"Title": "The Monkey King",
		},
		"mordekaiser": {
			"Name": "Mordekaiser",
			"Title": "The Master of Metal",
		},
		"morgana": {
			"Name": "Morgana",
			"Title": "Fallen Angel",
		},
		"nami": {
			"Name": "Nami",
			"Title": "The Tidecaller",
		},
		"nasus": {
			"Name": "Nasus",
			"Title": "The Curator of the Sands",
		},
		"nautilus": {
			"Name": "Nautilus",
			"Title": "The Titan of the Depths",
		},
		"nidalee": {
			"Name": "Nidalee",
			"Title": "The Bestial Huntress",
		},
		"noctourne": {
			"Name": "Nocturne",
			"Title": "The Eternal Nightmare",
		},
		"nunu": {
			"Name": "Nunu",
			"Title": "The Yeti Rider",
		},
		"olaf": {
			"Name": "Olaf",
			"Title": "The Berserker",
		},
		"orianna": {
			"Name": "Orianna",
			"Title": "The Lady of Clockwork",
		},
		"pantheon": {
			"Name": "Pantheon",
			"Title": "The Artisan of War",
		},
		"poppy": {
			"Name": "Poppy",
			"Title": "The Iron Ambassador",
		},
		"quinn": {
			"Name": "Quinn and Valor",
			"Title": "Demacia's Wings",
		},
		"rammus": {
			"Name": "Rammus",
			"Title": "The Armordillo",
		},
		"renekton": {
			"Name": "Renekton",
			"Title": "The Butcher of the Sands",
		},
		"rengar": {
			"Name": "Rengar",
			"Title": "The Pridestalker",
		},
		"riven": {
			"Name": "Riven",
			"Title": "The Exile",
		},
		"rumble": {
			"Name": "Rumble",
			"Title": "The Mechanized Menace",
		},
		"ryze": {
			"Name": "Ryze",
			"Title": "The Rogue Mage",
		},
		"sejuani": {
			"Name": "Sejuani",
			"Title": "The Winter's Wrath",
		},
		"shaco": {
			"Name": "Shaco",
			"Title": "The Demon Jester",
		},
		"shen": {
			"Name": "Shen",
			"Title": "Eye of Twilight",
		},
		"shyvana": {
			"Name": "Shyvana",
			"Title": "The Half-Dragon",
		},
		"singed": {
			"Name": "Singed",
			"Title": "The Mad Chemist",
		},
		"sion": {
			"Name": "Sion",
			"Title": "The Undead Champion",
		},
		"sivir": {
			"Name": "Sivir",
			"Title": "The Battle Mistress",
		},
		"skarner": {
			"Name": "Skarner",
			"Title": "The Crystal Vanguard",
		},
		"sona": {
			"Name": "Sona",
			"Title": "Maven of the Strings",
		},
		"soraka": {
			"Name": "Soraka",
			"Title": "The Starchild",
		},
		"swain": {
			"Name": "Swain",
			"Title": "The Master Tactician",
		},
		"syndra": {
			"Name": "Syndra",
			"Title": "The Dark Sovereign",
		},
		"talon": {
			"Name": "Talon",
			"Title": "The Blade's Shadow",
		},
		"taric": {
			"Name": "Taric",
			"Title": "The Gem Knight",
		},
		"teemo": {
			"Name": "Teemo",
			"Title": "The Swift Scout",
		},
		"thresh": {
			"Name": "Thresh",
			"Title": "The Chain Warden",
		},
		"tristana": {
			"Name": "Tristana",
			"Title": "The Megling Gunner",
		},
		"trundle": {
			"Name": "Trundle",
			"Title": "The Troll King",
		},
		"tryndamere": {
			"Name": "Tryndamere",
			"Title": "The Barbarian King",
		},
		"twistedfate": {
			"Name": "Twisted Fate",
			"Title": "The Card Master",
		},
		"twitch": {
			"Name": "Twitch",
			"Title": "The Plague Rat",
		},
		"udyr": {
			"Name": "Udyr",
			"Title": "The Spirit Walker",
		},
		"urgot": {
			"Name": "Urgot",
			"Title": "The Headsman's Pride",
		},
		"varus": {
			"Name": "Varus",
			"Title": "The Arrow of Retribution",
		},
		"vayne": {
			"Name": "Vayne",
			"Title": "The Night Hunter",
		},
		"veiger": {
			"Name": "Veigar",
			"Title": "The Tiny Master of Evil",
		},
		"vi": {
			"Name": "Vi",
			"Title": "The Piltover Enforcer",
		},
		"viktor": {
			"Name": "Viktor",
			"Title": "The Machine Herald",
		},
		"vladimir": {
			"Name": "Vladimir",
			"Title": "The Crimson Reaper",
		},
		"volibear": {
			"Name": "Volibear",
			"Title": "The Thunder's Roar",
		},
		"warwick": {
			"Name": "Warwick",
			"Title": "The Blood Hunter",
		},
		"xerath": {
			"Name": "Xerath",
			"Title": "The Magus Ascendant",
		},
		"xinzhao": {
			"Name": "Xin Zhao",
			"Title": "The Seneschal of Demacia",
		},
		"yasuo": {
			"Name": "Yasuo",
			"Title": "The Unforgiven",
		},
		"yorick": {
			"Name": "Yorick",
			"Title": "The Gravedigger",
		},
		"zac": {
			"Name": "Zac",
			"Title": "The Secret Weapon",
		},
		"zed": {
			"Name": "Zed",
			"Title": "The Master of Shadows",
		},
		"ziggs": {
			"Name": "Ziggs",
			"Title": "The Hexsplosives Expert",
		},
		"zilean": {
			"Name": "Zilean",
			"Title": "The Chronokeeper",
		},
		"zyra": {
			"Name": "Zyra",
			"Title": "Rise of the Thorns",
		},
	});

	var Abilities = Object.freeze({
		"aatrox": {
			"Passive": {
				"ID": "blood_well",
				"Name": "Blood Well",
				"Icon": "assets/abilities/Blood_Well.png",
				"Description": ""
			},
			"Q": {
				"ID": "dark_flight",
				"Name": "Dark Flight",
				"Icon": "assets/abilities/Dark_Flight.png", 
				"Description": ""
			},
			"W": {
				"ToggleOn": {
					"ID": "blood_thirst",
					"Name": "Blood Thirst",
					"Icon": "assets/abilities/Blood_Thirst.png", 
					"Description": ""
				},
				"ToggleOff": {
					"ID": "blood_price",
					"Name": "Blood Price",
					"Icon": "assets/abilities/Blood_Price.png", 
					"Description": ""
				}
			},
			"E": {
				"ID": "blades_of_torment",
				"Name": "Blades of Torment",
				"Icon": "assets/abilities/Blades_of_Torment.png", 
				"Description": ""
			},
			"R": {
				"ID": "massacre",
				"Name": "Massacre",
				"Icon": "assets/abilities/Massacre.png", 
				"Description": ""
			}
		},
		"ahri": {
			"Passive": {
				"ID": "essence_theft",
				"Name": "Essence Theft",
				"Icon": "assets/abilities/Essence_Theft.png",
				"Description": ""
			},
			"Q": {
				"ID": "orb_of_deception",
				"Name": "Orb of Deception",
				"Icon": "assets/abilities/Orb_of_Deception.png",
				"Description": ""
			},
			"W": {
				"ID": "fox-fire",
				"Name": "Fox-Fire",
				"Icon": "assets/abilities/Fox-Fire.png",
				"Description": ""
			},
			"E": {
				"ID": "charm",
				"Name": "Charm",
				"Icon": "assets/abilities/Charm.png",
				"Description": ""
			},
			"R": {
				"ID": "spirit_rush",
				"Name": "Spirit Rush",
				"Icon": "assets/abilities/Spirit_Rush.png",
				"Description": ""
			}
		},
		"akali": {
			"Passive": {
				"ID": "twin_disciplines",
				"Name": "Twin Disciplines",
				"Icon": "assets/abilities/Twin_Disciplines.png",
				"Description": ""
			},
			"Q": {
				"ID": "mark_of_the_assassin",
				"Name": "Mark of the Assassin",
				"Icon": "assets/abilities/Mark_of_the_Assassin.png",
				"Description": ""
			},
			"W": {
				"ID": "twilight_shroud",
				"Name": "Twilight Shroud",
				"Icon": "assets/abilities/Twilight_Shroud.png",
				"Description": ""
			},
			"E": {
				"ID": "crescent_slash",
				"Name": "Crescent Slash",
				"Icon": "assets/abilities/Crescent_Slash.png",
				"Description": ""
			},
			"R": {
				"ID": "shadow_dance",
				"Name": "Shadow Dance",
				"Icon": "assets/abilities/Shadow_Dance.png",
				"Description": ""
			}
		},
		"alistar": {
			"Passive": {
				"ID": "trample",
				"Name": "Trample",
				"Icon": "assets/abilities/Trample.png",
				"Description": ""
			},
			"Q": {
				"ID": "pulverize",
				"Name": "Pulverize",
				"Icon": "assets/abilities/Pulverize.png",
				"Description": ""
			},
			"W": {
				"ID": "headbutt",
				"Name": "Headbutt",
				"Icon": "assets/abilities/Headbutt.png",
				"Description": ""
			},
			"E": {
				"ID": "triumphant_roar",
				"Name": "Triumphant Roar",
				"Icon": "assets/abilities/Triumphant_Roar.png",
				"Description": ""
			},
			"R": {
				"ID": "unbreakable_will",
				"Name": "Unbreakable Will",
				"Icon": "assets/abilities/Unbreakable_Will.png",
				"Description": ""
			}
		},
		"amumu": {
			"Passive": {
				"ID": "cursed_touch",
				"Name": "Cursed Touch",
				"Icon": "assets/abilities/Cursed_Touch.png",
				"Description": ""
			},
			"Q": {
				"ID": "bandage_toss",
				"Name": "Bandage Toss",
				"Icon": "assets/abilities/Bandage_Toss.png",
				"Description": ""
			},
			"W": {
				"ID": "despair",
				"Name": "Despair",
				"Icon": "assets/abilities/Despair.png",
				"Description": ""
			},
			"E": {
				"ID": "tantrum",
				"Name": "Tantrum",
				"Icon": "assets/abilities/Tantrum.png",
				"Description": ""
			},
			"R": {
				"ID": "curse_of_the_sad_mummy",
				"Name": "Curse of the Sad Mummy",
				"Icon": "assets/abilities/Curse_of_the_Sad_Mummy.png",
				"Description": ""
			}
		},
		"anivia": {
			"Passive": {
				"ID": "rebirth",
				"Name": "Rebirth",
				"Icon": "assets/abilities/Rebirth.png",
				"Description": ""
			},
			"Q": {
				"ID": "flash_frost",
				"Name": "Flash Frost",
				"Icon": "assets/abilities/Flash_Frost.png",
				"Description": ""
			},
			"W": {
				"ID": "crystallize",
				"Name": "Crystallize",
				"Icon": "assets/abilities/Crystallize.png",
				"Description": ""
			},
			"E": {
				"ID": "frostbite",
				"Name": "Frostbite",
				"Icon": "assets/abilities/Frostbite.png",
				"Description": ""
			},
			"R": {
				"ID": "glacial_storm",
				"Name": "Glacial Storm",
				"Icon": "assets/abilities/Glacial_Storm.png",
				"Description": ""
			}
		},
		"annie": {
			"Passive": {
				"ID": "pyromania",
				"Name": "Pyromania",
				"Icon": "assets/abilities/Pyromania.png",
				"Description": ""
			},
			"Q": {
				"ID": "disintegrate",
				"Name": "Disintegrate",
				"Icon": "assets/abilities/Disintegrate.png",
				"Description": ""
			},
			"W": {
				"ID": "incinerate",
				"Name": "Incinerate",
				"Icon": "assets/abilities/Incinerate.png",
				"Description": ""
			},
			"E": {
				"ID": "molten_shield",
				"Name": "Molten Shield",
				"Icon": "assets/abilities/Molten_Shield.png",
				"Description": ""
			},
			"R": {
				"ID": "summon_tibbers",
				"Name": "Summon Tibbers",
				"Icon": "assets/abilities/Summon_Tibbers.png",
				"Description": ""
			}
		},
		"ashe": {
			"Passive": {
				"ID": "focus",
				"Name": "Focus",
				"Icon": "assets/abilities/Focus.png",
				"Description": ""
			},
			"Q": {
				"ID": "frost_shot",
				"Name": "Frost Shot",
				"Icon": "assets/abilities/Frost_Shot.png",
				"Description": ""
			},
			"W": {
				"ID": "volley",
				"Name": "Volley",
				"Icon": "assets/abilities/Volley.png",
				"Description": ""
			},
			"E": {
				"ID": "hawkshot",
				"Name": "Hawkshot",
				"Icon": "assets/abilities/Hawkshot.png",
				"Description": ""
			},
			"R": {
				"ID": "enchanted_crystal_arrow",
				"Name": "Enchanted Crystal Arrow",
				"Icon": "assets/abilities/Enchanted_Crystal_Arrow.png",
				"Description": ""
			}
		},
		"blitzcrank": {
			"Passive": {
				"ID": "mana_barrier",
				"Name": "Mana Barrier",
				"Icon": "assets/abilities/Mana_Barrier.png",
				"Description": ""
			},
			"Q": {
				"ID": "rocket_grab",
				"Name": "Rocket Grab",
				"Icon": "assets/abilities/Rocket_Grab.png",
				"Description": ""
			},
			"W": {
				"ID": "overdrive",
				"Name": "Overdrive",
				"Icon": "assets/abilities/Overdrive.png",
				"Description": ""
			},
			"E": {
				"ID": "power_fist",
				"Name": "Power Fist",
				"Icon": "assets/abilities/Power_Fist.png",
				"Description": ""
			},
			"R": {
				"ID": "static_field",
				"Name": "Static Field",
				"Icon": "assets/abilities/Static_Field.png",
				"Description": ""
			}
		},
		"brand": {
			"Passive": {
				"ID": "blaze",
				"Name": "Blaze",
				"Icon": "assets/abilities/Blaze.png",
				"Description": ""
			},
			"Q": {
				"ID": "sear",
				"Name": "Sear",
				"Icon": "assets/abilities/Sear.png",
				"Description": ""
			},
			"W": {
				"ID": "pillar_of_flame",
				"Name": "Pillar of Flame",
				"Icon": "assets/abilities/Pillar_of_Flame.png",
				"Description": ""
			},
			"E": {
				"ID": "conflagration",
				"Name": "Conflagration",
				"Icon": "assets/abilities/Conflagration.png",
				"Description": ""
			},
			"R": {
				"ID": "pyroclasm",
				"Name": "Pyroclasm",
				"Icon": "assets/abilities/Pyroclasm.png",
				"Description": ""
			}
		},
		"caitlyn": {
			"Passive": {
				"ID": "headshot",
				"Name": "Headshot",
				"Icon": "assets/abilities/Headshot.png",
				"Description": ""
			},
			"Q": {
				"ID": "piltover_peacemaker",
				"Name": "Piltover Peacemaker",
				"Icon": "assets/abilities/Piltover_Peacemaker.png",
				"Description": ""
			},
			"W": {
				"ID": "yordle_snap_trap",
				"Name": "Yordle Snap Trap",
				"Icon": "assets/abilities/Yordle_Snap_Trap.png",
				"Description": ""
			},
			"E": {
				"ID": "90_caliber_net",
				"Name": "90 Caliber Net",
				"Icon": "assets/abilities/90_Caliber_Net.png",
				"Description": ""
			},
			"R": {
				"ID": "ace_in_the_hole",
				"Name": "Ace in the Hole",
				"Icon": "assets/abilities/Ace_in_the_Hole.png",
				"Description": ""
			}
		},
		"cassiopeia": {
			"Passive": {
				"ID": "deadly_cadence",
				"Name": "Deadly Cadence",
				"Icon": "assets/abilities/Deadly_Cadence.png",
				"Description": ""
			},
			"Q": {
				"ID": "noxious_blast",
				"Name": "Noxious Blast",
				"Icon": "assets/abilities/Noxious_Blast.png",
				"Description": ""
			},
			"W": {
				"ID": "miasma",
				"Name": "Miasma",
				"Icon": "assets/abilities/Miasma.png",
				"Description": ""
			},
			"E": {
				"ID": "twin_fang",
				"Name": "Twin Fang",
				"Icon": "assets/abilities/Twin_Fang.png",
				"Description": ""
			},
			"R": {
				"ID": "petrifying_gaze",
				"Name": "Petrifying Gaze",
				"Icon": "assets/abilities/Petrifying_Gaze.png",
				"Description": ""
			}
		},
		"chogath": {
			"Passive": {
				"ID": "carnivore",
				"Name": "Carnivore",
				"Icon": "assets/abilities/Carnivore.png",
				"Description": ""
			},
			"Q": {
				"ID": "rupture",
				"Name": "Rupture",
				"Icon": "assets/abilities/Rupture.png",
				"Description": ""
			},
			"W": {
				"ID": "feral_screen",
				"Name": "Feral Screen",
				"Icon": "assets/abilities/Feral_Screen.png",
				"Description": ""
			},
			"E": {
				"ID": "vorpal_spikes",
				"Name": "Vorpal Spikes",
				"Icon": "assets/abilities/Vorpal_Spikes.png",
				"Description": ""
			},
			"R": {
				"ID": "feast",
				"Name": "Feast",
				"Icon": "assets/abilities/Feast.png",
				"Description": ""
			}
		},
		"corki": {
			"Passive": {
				"ID": "hextech_shrapnel_shells",
				"Name": "Hextech Shrapnel Shells",
				"Icon": "assets/abilities/Hextech_Shrapnel_Shells.png",
				"Description": ""
			},
			"Q": {
				"ID": "phosphorus_bomb",
				"Name": "Phosphorus Bomb",
				"Icon": "assets/abilities/Phosphorus_Bomb.png",
				"Description": ""
			},
			"W": {
				"ID": "valkyrie",
				"Name": "Valkyrie",
				"Icon": "assets/abilities/Valkyrie.png",
				"Description": ""
			},
			"E": {
				"ID": "gatling_gun",
				"Name": "Gatling Gun",
				"Icon": "assets/abilities/Gatling_Gun.png",
				"Description": ""
			},
			"R": {
				"ID": "missile_barrage",
				"Name": "Missile Barrage",
				"Icon": "assets/abilities/Missile_Barrage.png",
				"Description": ""
			}
		},
		"darius": {
			"Passive": {
				"ID": "hemmorrhage",
				"Name": "Hemmorrhage",
				"Icon": "assets/abilities/Hemmorrhage.png",
				"Description": ""
			},
			"Q": {
				"ID": "decimate",
				"Name": "Decimate",
				"Icon": "assets/abilities/Decimate.png",
				"Description": ""
			},
			"W": {
				"ID": "crippling_strike",
				"Name": "Crippling Strike",
				"Icon": "assets/abilities/Crippling_Strike.png",
				"Description": ""
			},
			"E": {
				"ID": "apprehend",
				"Name": "Apprehend",
				"Icon": "assets/abilities/Apprehend.png",
				"Description": ""
			},
			"R": {
				"ID": "noxian_guillotine",
				"Name": "Noxian Guillotine",
				"Icon": "assets/abilities/Noxian_Guillotine.png",
				"Description": ""
			}
		},
		"diana": {
			"Passive": {
				"ID": "moonsilver_blade",
				"Name": "Moonsilver Blade",
				"Icon": "assets/abilities/Moonsilver_Blade.png",
				"Description": ""
			},
			"Q": {
				"ID": "cresent_strike",
				"Name": "Cresent Strike",
				"Icon": "assets/abilities/Cresent_Strike.png",
				"Description": ""
			},
			"W": {
				"ID": "pale_cascade",
				"Name": "Pale Cascade",
				"Icon": "assets/abilities/Pale_Cascade.png",
				"Description": ""
			},
			"E": {
				"ID": "moonfall",
				"Name": "Moonfall",
				"Icon": "assets/abilities/Moonfall.png",
				"Description": ""
			},
			"R": {
				"ID": "lunar_rush",
				"Name": "Lunar Rush",
				"Icon": "assets/abilities/Lunar_Rush.png",
				"Description": ""
			}
		},
		"drmundo": {
			"Passive": {
				"ID": "adrenaline_rush",
				"Name": "Adrenaline Rush",
				"Icon": "assets/abilities/Adrenaline_Rush.png",
				"Description": ""
			},
			"Q": {
				"ID": "infected_cleaver",
				"Name": "Infected Cleaver",
				"Icon": "assets/abilities/Infected_Cleaver.png",
				"Description": ""
			},
			"W": {
				"ID": "burning_agony",
				"Name": "Burning Agony",
				"Icon": "assets/abilities/Burning_Agony.png",
				"Description": ""
			},
			"E": {
				"ID": "masochism",
				"Name": "Masochism",
				"Icon": "assets/abilities/Masochism.png",
				"Description": ""
			},
			"R": {
				"ID": "sadism",
				"Name": "Sadism",
				"Icon": "assets/abilities/Sadism.png",
				"Description": ""
			}
		},
		"draven": {
			"Passive": {
				"ID": "league_of_draven",
				"Name": "League of Draven",
				"Icon": "assets/abilities/League_of_Draven.png",
				"Description": ""
			},
			"Q": {
				"ID": "spinning_axe",
				"Name": "Spinning Axe",
				"Icon": "assets/abilities/Spinning_Axe.png",
				"Description": ""
			},
			"W": {
				"ID": "blood_rush",
				"Name": "Blood Rush",
				"Icon": "assets/abilities/Blood_Rush.png",
				"Description": ""
			},
			"E": {
				"ID": "stand_aside",
				"Name": "Stand Aside",
				"Icon": "assets/abilities/Stand_Aside.png",
				"Description": ""
			},
			"R": {
				"ID": "whirling_death",
				"Name": "Whirling Death",
				"Icon": "assets/abilities/Whirling_Death.png",
				"Description": ""
			}
		},
		"elise": {
			"Passive": {
				"ID": "spider_swarm",
				"Name": "Spider Swarm",
				"Icon": "assets/abilities/Spider_Swarm.png",
				"Description": ""
			},
			"Q": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			},
			"W": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			},
			"E": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			},
			"R": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			}
		},
		"evelynn": {
			"Passive": {
				"ID": "shadow_walk",
				"Name": "Shadow Walk",
				"Icon": "assets/abilities/Shadow_Walk.png",
				"Description": ""
			},
			"Q": {
				"ID": "hate_spike",
				"Name": "Hate Spike",
				"Icon": "assets/abilities/Hate_Spike.png",
				"Description": ""
			},
			"W": {
				"ID": "dark_frenzy",
				"Name": "Dark Frenzy",
				"Icon": "assets/abilities/Dark_Frenzy.png",
				"Description": ""
			},
			"E": {
				"ID": "ravage",
				"Name": "Ravage",
				"Icon": "assets/abilities/Ravage.png",
				"Description": ""
			},
			"R": {
				"ID": "agonys_embrace",
				"Name": "Agony's Embrace",
				"Icon": "assets/abilities/Agony's_Embrace.png",
				"Description": ""
			}
		},
		"ezreal": {
			"Passive": {
				"ID": "rising_spell_force",
				"Name": "Rising Spell Force",
				"Icon": "assets/abilities/Rising_Spell_Force.png",
				"Description": ""
			},
			"Q": {
				"ID": "mystic_shot",
				"Name": "Mystic Shot",
				"Icon": "assets/abilities/Mystic_Shot.png",
				"Description": ""
			},
			"W": {
				"ID": "essence_flux",
				"Name": "Essence Flux",
				"Icon": "assets/abilities/Essence_Flux.png",
				"Description": ""
			},
			"E": {
				"ID": "arcane_shift",
				"Name": "Arcane Shift",
				"Icon": "assets/abilities/Arcane_Shift.png",
				"Description": ""
			},
			"R": {
				"ID": "trueshot_barrage",
				"Name": "Trueshot Barrage",
				"Icon": "assets/abilities/Trueshot_Barrage.png",
				"Description": ""
			}
		},
		"fiddlesticks": {
			"Passive": {
				"ID": "dread",
				"Name": "Dread",
				"Icon": "assets/abilities/Dread.png",
				"Description": ""
			},
			"Q": {
				"ID": "terrift",
				"Name": "Terrift",
				"Icon": "assets/abilities/Terrift.png",
				"Description": ""
			},
			"W": {
				"ID": "drain",
				"Name": "Drain",
				"Icon": "assets/abilities/Drain.png",
				"Description": ""
			},
			"E": {
				"ID": "dark_wind",
				"Name": "Dark Wind",
				"Icon": "assets/abilities/Dark_Wind.png",
				"Description": ""
			},
			"R": {
				"ID": "crowstorm",
				"Name": "Crowstorm",
				"Icon": "assets/abilities/Crowstorm.png",
				"Description": ""
			}
		},
		"fiora": {
			"Passive": {
				"ID": "duelist",
				"Name": "Duelist",
				"Icon": "assets/abilities/Duelist.png",
				"Description": ""
			},
			"Q": {
				"ID": "lunge",
				"Name": "Lunge",
				"Icon": "assets/abilities/Lunge.png",
				"Description": ""
			},
			"W": {
				"ID": "riposte",
				"Name": "Riposte",
				"Icon": "assets/abilities/Riposte.png",
				"Description": ""
			},
			"E": {
				"ID": "burst_of_speed",
				"Name": "Burst of Speed",
				"Icon": "assets/abilities/Burst_of_Speed.png",
				"Description": ""
			},
			"R": {
				"ID": "blade_waltz",
				"Name": "Blade Waltz",
				"Icon": "assets/abilities/Blade_Waltz.png",
				"Description": ""
			}
		},
		"fizz": {
			"Passive": {
				"ID": "nimble_fighter",
				"Name": "Nimble Fighter",
				"Icon": "assets/abilities/Nimble_Fighter.png",
				"Description": ""
			},
			"Q": {
				"ID": "urchin_strike",
				"Name": "Urchin Strike",
				"Icon": "assets/abilities/Urchin_Strike.png",
				"Description": ""
			},
			"W": {
				"ID": "seastone_trident",
				"Name": "Seastone Trident",
				"Icon": "assets/abilities/Seastone_Trident.png",
				"Description": ""
			},
			"E": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			},
			"R": {
				"ID": "chum_the_waters",
				"Name": "Chum the Waters",
				"Icon": "assets/abilities/Chum_the_Waters.png",
				"Description": ""
			}
		},
		"galio": {
			"Passive": {
				"ID": "runic_skin",
				"Name": "Runic Skin",
				"Icon": "assets/abilities/Runic_Skin.png",
				"Description": ""
			},
			"Q": {
				"ID": "resolute_smite",
				"Name": "Resolute Smite",
				"Icon": "assets/abilities/Resolute_Smite.png",
				"Description": ""
			},
			"W": {
				"ID": "bulwark",
				"Name": "Bulwark",
				"Icon": "assets/abilities/Bulwark.png",
				"Description": ""
			},
			"E": {
				"ID": "righteous_gust",
				"Name": "Righteous Gust",
				"Icon": "assets/abilities/Righteous_Gust.png",
				"Description": ""
			},
			"R": {
				"ID": "idol_of_durand",
				"Name": "Idol of Durand",
				"Icon": "assets/abilities/Idol_of_Durand.png",
				"Description": ""
			}
		},
		"gangplank": {
			"Passive": {
				"ID": "grog_soaked_blade",
				"Name": "Grog Soaked Blade",
				"Icon": "assets/abilities/Grog_Soaked_Blade.png",
				"Description": ""
			},
			"Q": {
				"ID": "parrrley",
				"Name": "Parrrley",
				"Icon": "assets/abilities/Parrrley.png",
				"Description": ""
			},
			"W": {
				"ID": "remove_scurvy",
				"Name": "Remove Scurvy",
				"Icon": "assets/abilities/Remove_Scurvy.png",
				"Description": ""
			},
			"E": {
				"ID": "raise_morale",
				"Name": "Raise Morale",
				"Icon": "assets/abilities/Raise_Morale.png",
				"Description": ""
			},
			"R": {
				"ID": "cannon_barrage",
				"Name": "Cannon Barrage",
				"Icon": "assets/abilities/Cannon_Barrage.png",
				"Description": ""
			}
		},
		"garen": {
			"Passive": {
				"ID": "perseverance",
				"Name": "Perseverance",
				"Icon": "assets/abilities/Perseverance.png",
				"Description": ""
			},
			"Q": {
				"ID": "decisive_strike",
				"Name": "Decisive Strike",
				"Icon": "assets/abilities/Decisive_Strike.png",
				"Description": ""
			},
			"W": {
				"ID": "courage",
				"Name": "Courage",
				"Icon": "assets/abilities/Courage.png",
				"Description": ""
			},
			"E": {
				"ID": "judgement",
				"Name": "Judgement",
				"Icon": "assets/abilities/Judgement.png",
				"Description": ""
			},
			"R": {
				"ID": "demacian_justice",
				"Name": "Demacian Justice",
				"Icon": "assets/abilities/Demacian_Justice.png",
				"Description": ""
			}
		},
		"gragas": {
			"Passive": {
				"ID": "happy_hour",
				"Name": "Happy Hour",
				"Icon": "assets/abilities/Happy_Hour.png",
				"Description": ""
			},
			"Q": {
				"ID": "barrel_roll",
				"Name": "Barrel Roll",
				"Icon": "assets/abilities/Barrel_Roll.png",
				"Description": ""
			},
			"W": {
				"ID": "drunken_rage",
				"Name": "Drunken Rage",
				"Icon": "assets/abilities/Drunken_Rage.png",
				"Description": ""
			},
			"E": {
				"ID": "body_slam",
				"Name": "Body Slam",
				"Icon": "assets/abilities/Body_Slam.png",
				"Description": ""
			},
			"R": {
				"ID": "explosive_cask",
				"Name": "Explosive Cask",
				"Icon": "assets/abilities/Explosive_Cask.png",
				"Description": ""
			}
		},
		"graves": {
			"Passive": {
				"ID": "true_grit",
				"Name": "True Grit",
				"Icon": "assets/abilities/True_Grit.png",
				"Description": ""
			},
			"Q": {
				"ID": "buckshot",
				"Name": "Buckshot",
				"Icon": "assets/abilities/Buckshot.png",
				"Description": ""
			},
			"W": {
				"ID": "smoke_screen",
				"Name": "Smoke Screen",
				"Icon": "assets/abilities/Smoke_Screen.png",
				"Description": ""
			},
			"E": {
				"ID": "quickdraw",
				"Name": "Quickdraw",
				"Icon": "assets/abilities/Quickdraw.png",
				"Description": ""
			},
			"R": {
				"ID": "collateral_damage",
				"Name": "Collateral Damage",
				"Icon": "assets/abilities/Collateral_Damage.png",
				"Description": ""
			}
		},
		"hecarim": {
			"Passive": {
				"ID": "warpath",
				"Name": "Warpath",
				"Icon": "assets/abilities/Warpath.png",
				"Description": ""
			},
			"Q": {
				"ID": "rampage",
				"Name": "Rampage",
				"Icon": "assets/abilities/Rampage.png",
				"Description": ""
			},
			"W": {
				"ID": "spirit_of_dread",
				"Name": "Spirit of Dread",
				"Icon": "assets/abilities/Spirit_of_Dread.png",
				"Description": ""
			},
			"E": {
				"ID": "devastating_charge",
				"Name": "Devastating Charge",
				"Icon": "assets/abilities/Devastating_Charge.png",
				"Description": ""
			},
			"R": {
				"ID": "onslaught_of_shadows",
				"Name": "Onslaught of Shadows",
				"Icon": "assets/abilities/Onslaught_of_Shadows.png",
				"Description": ""
			}
		},
		"heimerdinger": {
			"Passive": {
				"ID": "techmaturgical_repair_bots",
				"Name": "Techmaturgical Repair Bots",
				"Icon": "assets/abilities/Techmaturgical_Repair_Bots.png",
				"Description": ""
			},
			"Q": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			},
			"W": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			},
			"E": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			},
			"R": {
				"ID": "upgrade",
				"Name": "UPGRADE!!!",
				"Icon": "assets/abilities/Upgrade.png",
				"Description": ""
			}
		},
		"irelia": {
			"Passive": {
				"ID": "ionian_fervor",
				"Name": "Ionian Fervor",
				"Icon": "assets/abilities/Ionian_Fervor.png",
				"Description": ""
			},
			"Q": {
				"ID": "bladesurge",
				"Name": "Bladesurge",
				"Icon": "assets/abilities/Bladesurge.png",
				"Description": ""
			},
			"W": {
				"ID": "hiten_style",
				"Name": "Hiten Style",
				"Icon": "assets/abilities/Hiten_Style.png",
				"Description": ""
			},
			"E": {
				"ID": "equilibrium_strike",
				"Name": "Equilibrium Strike",
				"Icon": "assets/abilities/Equilibrium_Strike.png",
				"Description": ""
			},
			"R": {
				"ID": "transcendent_blades",
				"Name": "Transcendent Blades",
				"Icon": "assets/abilities/Transcendent_Blades.png",
				"Description": ""
			}
		},
		"janna": {
			"Passive": {
				"ID": "tailwind",
				"Name": "Tailwind",
				"Icon": "assets/abilities/Tailwind.png",
				"Description": ""
			},
			"Q": {
				"ID": "howling_gale",
				"Name": "Howling Gale",
				"Icon": "assets/abilities/Howling_Gale.png",
				"Description": ""
			},
			"W": {
				"ID": "zephyr",
				"Name": "Zephyr",
				"Icon": "assets/abilities/Zephyr.png",
				"Description": ""
			},
			"E": {
				"ID": "eye_of_the_storm",
				"Name": "Eye of the Storm",
				"Icon": "assets/abilities/Eye_of_the_Storm.png",
				"Description": ""
			},
			"R": {
				"ID": "monsoon",
				"Name": "Monsoon",
				"Icon": "assets/abilities/Monsoon.png",
				"Description": ""
			}
		},
		"jarvaniv": {
			"Passive": {
				"ID": "martial_cadence",
				"Name": "Martial Cadence",
				"Icon": "assets/abilities/Martial_Cadence.png",
				"Description": ""
			},
			"Q": {
				"ID": "dragon_strike",
				"Name": "Dragon Strike",
				"Icon": "assets/abilities/Dragon_Strike.png",
				"Description": ""
			},
			"W": {
				"ID": "golden_aegis",
				"Name": "Golden Aegis",
				"Icon": "assets/abilities/Golden_Aegis.png",
				"Description": ""
			},
			"E": {
				"ID": "demacian_standard",
				"Name": "Demacian Standard",
				"Icon": "assets/abilities/Demacian_Standard.png",
				"Description": ""
			},
			"R": {
				"ID": "cataclysm",
				"Name": "Cataclysm",
				"Icon": "assets/abilities/Cataclysm.png",
				"Description": ""
			}
		},
		"jax": {
			"Passive": {
				"ID": "relentless_assault",
				"Name": "Relentless Assault",
				"Icon": "assets/abilities/Relentless_Assault.png",
				"Description": ""
			},
			"Q": {
				"ID": "leap_stike",
				"Name": "Leap Stike",
				"Icon": "assets/abilities/Leap_Stike.png",
				"Description": ""
			},
			"W": {
				"ID": "empower",
				"Name": "Empower",
				"Icon": "assets/abilities/Empower.png",
				"Description": ""
			},
			"E": {
				"ID": "counter_strike",
				"Name": "Counter Strike",
				"Icon": "assets/abilities/Counter_Strike.png",
				"Description": ""
			},
			"R": {
				"ID": "grandmasters_might",
				"Name": "Grandmaster's Might",
				"Icon": "assets/abilities/Grandmaster's_Might.png",
				"Description": ""
			}
		},
		"jayce": {
			"Passive": {
				"ID": "hextech_capacitor",
				"Name": "Hextech Capacitor",
				"Icon": "assets/abilities/Hextech_Capacitor.png",
				"Description": ""
			},
			"Q": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			},
			"W": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			},
			"E": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			},
			"R": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			}
		},
		"jinx": {
			"Passive": {
				"ID": "get_excited",
				"Name": "Get Excited!",
				"Icon": "assets/abilities/Get_Excited.png",
				"Description": ""
			},
			"Q": {
				"ID": "switcheroo",
				"Name": "Switcheroo!",
				"Icon": "assets/abilities/Switcheroo.png",
				"Description": ""
			},
			"W": {
				"ID": "zap",
				"Name": "Zap!",
				"Icon": "assets/abilities/Zap.png",
				"Description": ""
			},
			"E": {
				"ID": "flame_chompers",
				"Name": "Flame Chompers!",
				"Icon": "assets/abilities/Flame_Chompers.png",
				"Description": ""
			},
			"R": {
				"ID": "super_mega_death_rocket",
				"Name": "Super Mega Death Rocket!",
				"Icon": "assets/abilities/Super_Mega_Death_Rocket.png",
				"Description": ""
			}
		},
		"karma": {
			"Passive": {
				"ID": "gathering_fire",
				"Name": "Gathering Fire",
				"Icon": "assets/abilities/Gathering_Fire.png",
				"Description": ""
			},
			"Q": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			},
			"W": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			},
			"E": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			},
			"R": {
				"ID": "mantra",
				"Name": "Mantra",
				"Icon": "assets/abilities/Mantra.png",
				"Description": ""
			}
		},
		"karthus": {
			"Passive": {
				"ID": "death_defiled",
				"Name": "Death Defiled",
				"Icon": "assets/abilities/Death_Defiled.png",
				"Description": ""
			},
			"Q": {
				"ID": "lay_waste",
				"Name": "Lay Waste",
				"Icon": "assets/abilities/Lay_Waste.png",
				"Description": ""
			},
			"W": {
				"ID": "wall_of_pain",
				"Name": "Wall of Pain",
				"Icon": "assets/abilities/Wall_of_Pain.png",
				"Description": ""
			},
			"E": {
				"ID": "defiled",
				"Name": "Defiled",
				"Icon": "assets/abilities/Defiled.png",
				"Description": ""
			},
			"R": {
				"ID": "requiem",
				"Name": "Requiem",
				"Icon": "assets/abilities/Requiem.png",
				"Description": ""
			}
		},
		"kassadin": {
			"Passive": {
				"ID": "void_stone",
				"Name": "Void Stone",
				"Icon": "assets/abilities/Void_Stone.png",
				"Description": ""
			},
			"Q": {
				"ID": "null_sphere",
				"Name": "Null Sphere",
				"Icon": "assets/abilities/Null_Sphere.png",
				"Description": ""
			},
			"W": {
				"ID": "nether_blade",
				"Name": "Nether Blade",
				"Icon": "assets/abilities/Nether_Blade.png",
				"Description": ""
			},
			"E": {
				"ID": "force_pulse",
				"Name": "Force Pulse",
				"Icon": "assets/abilities/Force_Pulse.png",
				"Description": ""
			},
			"R": {
				"ID": "riftwalk",
				"Name": "Riftwalk",
				"Icon": "assets/abilities/Riftwalk.png",
				"Description": ""
			}
		},
		"katarina": {
			"Passive": {
				"ID": "voracity",
				"Name": "Voracity",
				"Icon": "assets/abilities/Voracity.png",
				"Description": ""
			},
			"Q": {
				"ID": "bounding_blades",
				"Name": "Bounding Blades",
				"Icon": "assets/abilities/Bounding_Blades.png",
				"Description": ""
			},
			"W": {
				"ID": "sinister_steel",
				"Name": "Sinister Steel",
				"Icon": "assets/abilities/Sinister_Steel.png",
				"Description": ""
			},
			"E": {
				"ID": "shunpo",
				"Name": "Shunpo",
				"Icon": "assets/abilities/Shunpo.png",
				"Description": ""
			},
			"R": {
				"ID": "death_lotus",
				"Name": "Death Lotus",
				"Icon": "assets/abilities/Death_Lotus.png",
				"Description": ""
			}
		},
		"kayle": {
			"Passive": {
				"ID": "holy_fervor",
				"Name": "Holy Fervor",
				"Icon": "assets/abilities/Holy_Fervor.png",
				"Description": ""
			},
			"Q": {
				"ID": "reckoning",
				"Name": "Reckoning",
				"Icon": "assets/abilities/Reckoning.png",
				"Description": ""
			},
			"W": {
				"ID": "divine_blessing",
				"Name": "Divine Blessing",
				"Icon": "assets/abilities/Divine_Blessing.png",
				"Description": ""
			},
			"E": {
				"ID": "righteous_fury",
				"Name": "Righteous Fury",
				"Icon": "assets/abilities/Righteous_Fury.png",
				"Description": ""
			},
			"R": {
				"ID": "intervention",
				"Name": "Intervention",
				"Icon": "assets/abilities/Intervention.png",
				"Description": ""
			}
		},
		"kennen": {
			"Passive": {
				"ID": "mark_of_the_storm",
				"Name": "Mark of the Storm",
				"Icon": "assets/abilities/Mark_of_the_Storm.png",
				"Description": ""
			},
			"Q": {
				"ID": "thundering_shuriken",
				"Name": "Thundering Shuriken",
				"Icon": "assets/abilities/Thundering_Shuriken.png",
				"Description": ""
			},
			"W": {
				"ID": "electrical_surge",
				"Name": "Electrical Surge",
				"Icon": "assets/abilities/Electrical_Surge.png",
				"Description": ""
			},
			"E": {
				"ID": "lightning_rush",
				"Name": "Lightning Rush",
				"Icon": "assets/abilities/Lightning_Rush.png",
				"Description": ""
			},
			"R": {
				"ID": "slicing_maelstrom",
				"Name": "Slicing Maelstrom",
				"Icon": "assets/abilities/Slicing_Maelstrom.png",
				"Description": ""
			}
		},
		"khazix": {
			"Passive": {
				"ID": "unseen_threat",
				"Name": "Unseen Threat",
				"Icon": "assets/abilities/Unseen_Threat.png",
				"Description": ""
			},
			"Q": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			},
			"W": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			},
			"E": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			},
			"R": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			}
		},
		"kogmaw": {
			"Passive": {
				"ID": "icathian_surprise",
				"Name": "Icathian Surprise",
				"Icon": "assets/abilities/Icathian_Surprise.png",
				"Description": ""
			},
			"Q": {
				"ID": "caustic_spittle",
				"Name": "Caustic Spittle",
				"Icon": "assets/abilities/Caustic_Spittle.png",
				"Description": ""
			},
			"W": {
				"ID": "bio-arcane_barrage",
				"Name": "Bio-Arcane Barrage",
				"Icon": "assets/abilities/Bio-Arcane_Barrage.png",
				"Description": ""
			},
			"E": {
				"ID": "void_ooze",
				"Name": "Void Ooze",
				"Icon": "assets/abilities/Void_Ooze.png",
				"Description": ""
			},
			"R": {
				"ID": "living_artillery",
				"Name": "Living Artillery",
				"Icon": "assets/abilities/Living_Artillery.png",
				"Description": ""
			}
		},
		"leblanc": {
			"Passive": {
				"ID": "mirror_image",
				"Name": "Mirror Image",
				"Icon": "assets/abilities/Mirror_Image.png",
				"Description": ""
			},
			"Q": {
				"ID": "sigil_of_silence",
				"Name": "Sigil of Silence",
				"Icon": "assets/abilities/Sigil_of_Silence.png",
				"Description": ""
			},
			"W": {
				"ID": "distortion",
				"Name": "Distortion",
				"Icon": "assets/abilities/Distortion.png",
				"Description": ""
			},
			"E": {
				"ID": "ethereal_chains",
				"Name": "Ethereal Chains",
				"Icon": "assets/abilities/Ethereal_Chains.png",
				"Description": ""
			},
			"R": {
				"ID": "mimic",
				"Name": "Mimic",
				"Icon": "assets/abilities/Mimic.png",
				"Description": ""
			}
		},
		"leesin": {
			"Passive": {
				"ID": "flurry",
				"Name": "Flurry",
				"Icon": "assets/abilities/Flurry.png",
				"Description": ""
			},
			"Q": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			},
			"W": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			},
			"E": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			},
			"R": {
				"ID": "dragons_rage",
				"Name": "Dragon's Rage",
				"Icon": "assets/abilities/Dragon's_Rage.png",
				"Description": ""
			}
		},
		"leona": {
			"Passive": {
				"ID": "sunlight",
				"Name": "Sunlight",
				"Icon": "assets/abilities/Sunlight.png",
				"Description": ""
			},
			"Q": {
				"ID": "shield_of_daybreak",
				"Name": "Shield of Daybreak",
				"Icon": "assets/abilities/Shield_of_Daybreak.png",
				"Description": ""
			},
			"W": {
				"ID": "eclipse",
				"Name": "Eclipse",
				"Icon": "assets/abilities/Eclipse.png",
				"Description": ""
			},
			"E": {
				"ID": "zenith_blade",
				"Name": "Zenith Blade",
				"Icon": "assets/abilities/Zenith_Blade.png",
				"Description": ""
			},
			"R": {
				"ID": "solar_flare",
				"Name": "Solar Flare",
				"Icon": "assets/abilities/Solar_Flare.png",
				"Description": ""
			}
		},
		"lissandra": {
			"Passive": {
				"ID": "iceborn",
				"Name": "Iceborn",
				"Icon": "assets/abilities/Iceborn.png",
				"Description": ""
			},
			"Q": {
				"ID": "ice_shard",
				"Name": "Ice Shard",
				"Icon": "assets/abilities/Ice_Shard.png",
				"Description": ""
			},
			"W": {
				"ID": "ring_of_frost",
				"Name": "Ring of Frost",
				"Icon": "assets/abilities/Ring_of_Frost.png",
				"Description": ""
			},
			"E": {
				"ID": "glacial_path",
				"Name": "Glacial Path",
				"Icon": "assets/abilities/Glacial_Path.png",
				"Description": ""
			},
			"R": {
				"ID": "frozen_tomb",
				"Name": "Frozen Tomb",
				"Icon": "assets/abilities/Frozen_Tomb.png",
				"Description": ""
			}
		},
		"lucian": {
			"Passive": {
				"ID": "lightslinger",
				"Name": "Lightslinger",
				"Icon": "assets/abilities/Lightslinger.png",
				"Description": ""
			},
			"Q": {
				"ID": "piercing_light",
				"Name": "Piercing Light",
				"Icon": "assets/abilities/Piercing_Light.png",
				"Description": ""
			},
			"W": {
				"ID": "ardent_blaze",
				"Name": "Ardent Blaze",
				"Icon": "assets/abilities/Ardent_Blaze.png",
				"Description": ""
			},
			"E": {
				"ID": "relentless_pursuit",
				"Name": "Relentless Pursuit",
				"Icon": "assets/abilities/Relentless_Pursuit.png",
				"Description": ""
			},
			"R": {
				"ID": "the_culling",
				"Name": "The Culling",
				"Icon": "assets/abilities/The_Culling.png",
				"Description": ""
			}
		},
		"lulu": {
			"Passive": {
				"ID": "pix_faerie_companion",
				"Name": "Pix, Faerie Companion",
				"Icon": "assets/abilities/Pix_Faerie_Companion.png",
				"Description": ""
			},
			"Q": {
				"ID": "glitterlance",
				"Name": "Glitterlance",
				"Icon": "assets/abilities/Glitterlance.png",
				"Description": ""
			},
			"W": {
				"ID": "whimsy",
				"Name": "Whimsy",
				"Icon": "assets/abilities/Whimsy.png",
				"Description": ""
			},
			"E": {
				"ID": "help_pix",
				"Name": "Help, Pix!",
				"Icon": "assets/abilities/Help_Pix.png",
				"Description": ""
			},
			"R": {
				"ID": "wild_growth",
				"Name": "Wild Growth",
				"Icon": "assets/abilities/Wild_Growth.png",
				"Description": ""
			}
		},
		"lux": {
			"Passive": {
				"ID": "illumination",
				"Name": "Illumination",
				"Icon": "assets/abilities/Illumination.png",
				"Description": ""
			},
			"Q": {
				"ID": "light_binding",
				"Name": "Light Binding",
				"Icon": "assets/abilities/Light_Binding.png",
				"Description": ""
			},
			"W": {
				"ID": "prismatic_barrier",
				"Name": "Prismatic Barrier",
				"Icon": "assets/abilities/Prismatic_Barrier.png",
				"Description": ""
			},
			"E": {
				"ID": "lucent_singularity",
				"Name": "Lucent Singularity",
				"Icon": "assets/abilities/Lucent_Singularity.png",
				"Description": ""
			},
			"R": {
				"ID": "final_spark",
				"Name": "Final Spark",
				"Icon": "assets/abilities/Final_Spark.png",
				"Description": ""
			}
		},
		"malphite": {
			"Passive": {
				"ID": "granite_shield",
				"Name": "Granite Shield",
				"Icon": "assets/abilities/Granite_Shield.png",
				"Description": ""
			},
			"Q": {
				"ID": "seismic_shard",
				"Name": "Seismic Shard",
				"Icon": "assets/abilities/Seismic_Shard.png",
				"Description": ""
			},
			"W": {
				"ID": "brutal_strikes",
				"Name": "Brutal Strikes",
				"Icon": "assets/abilities/Brutal_Strikes.png",
				"Description": ""
			},
			"E": {
				"ID": "ground_slam",
				"Name": "Ground Slam",
				"Icon": "assets/abilities/Ground_Slam.png",
				"Description": ""
			},
			"R": {
				"ID": "unstoppable_force",
				"Name": "Unstoppable Force",
				"Icon": "assets/abilities/Unstoppable_Force.png",
				"Description": ""
			}
		},
		"malzahar": {
			"Passive": {
				"ID": "summon_voidling",
				"Name": "Summon Voidling",
				"Icon": "assets/abilities/Summon_Voidling.png",
				"Description": ""
			},
			"Q": {
				"ID": "call_of_the_void",
				"Name": "Call of the Void",
				"Icon": "assets/abilities/Call_of_the_Void.png",
				"Description": ""
			},
			"W": {
				"ID": "null_zone",
				"Name": "Null Zone",
				"Icon": "assets/abilities/Null_Zone.png",
				"Description": ""
			},
			"E": {
				"ID": "malefic_visions",
				"Name": "Malefic Visions",
				"Icon": "assets/abilities/Malefic_Visions.png",
				"Description": ""
			},
			"R": {
				"ID": "nether_grasp",
				"Name": "Nether Grasp",
				"Icon": "assets/abilities/Nether_Grasp.png",
				"Description": ""
			}
		},
		"maokai": {
			"Passive": {
				"ID": "sap_magic",
				"Name": "Sap Magic",
				"Icon": "assets/abilities/Sap_Magic.png",
				"Description": ""
			},
			"Q": {
				"ID": "arcane_smash",
				"Name": "Arcane Smash",
				"Icon": "assets/abilities/Arcane_Smash.png",
				"Description": ""
			},
			"W": {
				"ID": "twisted_advance",
				"Name": "Twisted Advance",
				"Icon": "assets/abilities/Twisted_Advance.png",
				"Description": ""
			},
			"E": {
				"ID": "sapling_toss",
				"Name": "Sapling Toss",
				"Icon": "assets/abilities/Sapling_Toss.png",
				"Description": ""
			},
			"R": {
				"ID": "vengeful_maelstrom",
				"Name": "Vengeful Maelstrom",
				"Icon": "assets/abilities/Vengeful_Maelstrom.png",
				"Description": ""
			}
		},
		"masteryi": {
			"Passive": {
				"ID": "double_strike",
				"Name": "Double Strike",
				"Icon": "assets/abilities/Double_Strike.png",
				"Description": ""
			},
			"Q": {
				"ID": "alpha_strike",
				"Name": "Alpha Strike",
				"Icon": "assets/abilities/Alpha_Strike.png",
				"Description": ""
			},
			"W": {
				"ID": "meditate",
				"Name": "Meditate",
				"Icon": "assets/abilities/Meditate.png",
				"Description": ""
			},
			"E": {
				"ID": "wuju_style",
				"Name": "Wuju Style",
				"Icon": "assets/abilities/Wuju_Style.png",
				"Description": ""
			},
			"R": {
				"ID": "highlander",
				"Name": "Highlander",
				"Icon": "assets/abilities/Highlander.png",
				"Description": ""
			}
		},
		"missfortune": {
			"Passive": {
				"ID": "strut",
				"Name": "Strut",
				"Icon": "assets/abilities/Strut.png",
				"Description": ""
			},
			"Q": {
				"ID": "double_up",
				"Name": "Double Up",
				"Icon": "assets/abilities/Double_Up.png",
				"Description": ""
			},
			"W": {
				"ID": "impure_shots",
				"Name": "Impure Shots",
				"Icon": "assets/abilities/Impure_Shots.png",
				"Description": ""
			},
			"E": {
				"ID": "make_it_rain",
				"Name": "Make It Rain",
				"Icon": "assets/abilities/Make_It_Rain.png",
				"Description": ""
			},
			"R": {
				"ID": "bullet_time",
				"Name": "Bullet Time",
				"Icon": "assets/abilities/Bullet_Time.png",
				"Description": ""
			}
		},
		"mordekaiser": {
			"Passive": {
				"ID": "iron_man",
				"Name": "Iron Man",
				"Icon": "assets/abilities/Iron_Man.png",
				"Description": ""
			},
			"Q": {
				"ID": "mace_of_spades",
				"Name": "Mace of Spades",
				"Icon": "assets/abilities/Mace_of_Spades.png",
				"Description": ""
			},
			"W": {
				"ID": "creeping_death",
				"Name": "Creeping Death",
				"Icon": "assets/abilities/Creeping_Death.png",
				"Description": ""
			},
			"E": {
				"ID": "siphon_of_destruction",
				"Name": "Siphon of Destruction",
				"Icon": "assets/abilities/Siphon_of_Destruction.png",
				"Description": ""
			},
			"R": {
				"ID": "children_of_the_grave",
				"Name": "Children of the Grave",
				"Icon": "assets/abilities/Children_of_the_Grave.png",
				"Description": ""
			}
		},
		"morgana": {
			"Passive": {
				"ID": "soul_siphon",
				"Name": "Soul Siphon",
				"Icon": "assets/abilities/Soul_Siphon.png",
				"Description": ""
			},
			"Q": {
				"ID": "dark_binding",
				"Name": "Dark Binding",
				"Icon": "assets/abilities/Dark_Binding.png",
				"Description": ""
			},
			"W": {
				"ID": "tormented_soil",
				"Name": "Tormented Soil",
				"Icon": "assets/abilities/Tormented_Soil.png",
				"Description": ""
			},
			"E": {
				"ID": "black_shield",
				"Name": "Black Shield",
				"Icon": "assets/abilities/Black_Shield.png",
				"Description": ""
			},
			"R": {
				"ID": "soul_shackles",
				"Name": "Soul Shackles",
				"Icon": "assets/abilities/Soul_Shackles.png",
				"Description": ""
			}
		},
		"nami": {
			"Passive": {
				"ID": "surging_tides",
				"Name": "Surging Tides",
				"Icon": "assets/abilities/Surging_Tides.png",
				"Description": ""
			},
			"Q": {
				"ID": "aqua_prison",
				"Name": "Aqua Prison",
				"Icon": "assets/abilities/Aqua_Prison.png",
				"Description": ""
			},
			"W": {
				"ID": "ebb_and_flow",
				"Name": "Ebb and Flow",
				"Icon": "assets/abilities/Ebb_and_Flow.png",
				"Description": ""
			},
			"E": {
				"ID": "tidecallers_blessing",
				"Name": "Tidecaller's Blessing",
				"Icon": "assets/abilities/Tidecaller's_Blessing.png",
				"Description": ""
			},
			"R": {
				"ID": "tidal_wave",
				"Name": "Tidal Wave",
				"Icon": "assets/abilities/Tidal_Wave.png",
				"Description": ""
			}
		},
		"nasus": {
			"Passive": {
				"ID": "soul_eater",
				"Name": "Soul Eater",
				"Icon": "assets/abilities/Soul_Eater.png",
				"Description": ""
			},
			"Q": {
				"ID": "siphoning_strike",
				"Name": "Siphoning Strike",
				"Icon": "assets/abilities/Siphoning_Strike.png",
				"Description": ""
			},
			"W": {
				"ID": "wither",
				"Name": "Wither",
				"Icon": "assets/abilities/Wither.png",
				"Description": ""
			},
			"E": {
				"ID": "spirit_fire",
				"Name": "Spirit Fire",
				"Icon": "assets/abilities/Spirit_Fire.png",
				"Description": ""
			},
			"R": {
				"ID": "fury_of_the_sands",
				"Name": "Fury of the Sands",
				"Icon": "assets/abilities/Fury_of_the_Sands.png",
				"Description": ""
			}
		},
		"nautilus": {
			"Passive": {
				"ID": "staggering_blow",
				"Name": "Staggering Blow",
				"Icon": "assets/abilities/Staggering_Blow.png",
				"Description": ""
			},
			"Q": {
				"ID": "dredge_line",
				"Name": "Dredge Line",
				"Icon": "assets/abilities/Dredge_Line.png",
				"Description": ""
			},
			"W": {
				"ID": "titans_wrath",
				"Name": "Titan's Wrath",
				"Icon": "assets/abilities/Titan's_Wrath.png",
				"Description": ""
			},
			"E": {
				"ID": "riptide",
				"Name": "Riptide",
				"Icon": "assets/abilities/Riptide.png",
				"Description": ""
			},
			"R": {
				"ID": "depth_charge",
				"Name": "Depth Charge",
				"Icon": "assets/abilities/Depth_Charge.png",
				"Description": ""
			}
		},
		"nidalee": {
			"Passive": {
				"ID": "prowl",
				"Name": "Prowl",
				"Icon": "assets/abilities/Prowl.png",
				"Description": ""
			},
			"Q": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			},
			"W": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			},
			"E": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			},
			"R": {
				"ID": "aspect_of_the_cougar",
				"Name": "Aspect of the Cougar",
				"Icon": "assets/abilities/Aspect_of_the_Cougar.png",
				"Description": ""
			}
		},
		"noctourne": {
			"Passive": {
				"ID": "umbra_blades",
				"Name": "Umbra Blades",
				"Icon": "assets/abilities/Umbra_Blades.png",
				"Description": ""
			},
			"Q": {
				"ID": "duskbringer",
				"Name": "Duskbringer",
				"Icon": "assets/abilities/Duskbringer.png",
				"Description": ""
			},
			"W": {
				"ID": "shroud_of_darkness",
				"Name": "Shroud of Darkness",
				"Icon": "assets/abilities/Shroud_of_Darkness.png",
				"Description": ""
			},
			"E": {
				"ID": "unspeakable_horror",
				"Name": "Unspeakable Horror",
				"Icon": "assets/abilities/Unspeakable_Horror.png",
				"Description": ""
			},
			"R": {
				"ID": "paranoia",
				"Name": "Paranoia",
				"Icon": "assets/abilities/Paranoia.png",
				"Description": ""
			}
		},
		"nunu": {
			"Passive": {
				"ID": "visionary",
				"Name": "Visionary",
				"Icon": "assets/abilities/Visionary.png",
				"Description": ""
			},
			"Q": {
				"ID": "consume",
				"Name": "Consume",
				"Icon": "assets/abilities/Consume.png",
				"Description": ""
			},
			"W": {
				"ID": "blood_boil",
				"Name": "Blood Boil",
				"Icon": "assets/abilities/Blood_Boil.png",
				"Description": ""
			},
			"E": {
				"ID": "ice_blast",
				"Name": "Ice Blast",
				"Icon": "assets/abilities/Ice_Blast.png",
				"Description": ""
			},
			"R": {
				"ID": "absolute_zero",
				"Name": "Absolute Zero",
				"Icon": "assets/abilities/Absolute_Zero.png",
				"Description": ""
			}
		},
		"olaf": {
			"Passive": {
				"ID": "berserker_rage",
				"Name": "Berserker Rage",
				"Icon": "assets/abilities/Berserker_Rage.png",
				"Description": ""
			},
			"Q": {
				"ID": "undertow",
				"Name": "Undertow",
				"Icon": "assets/abilities/Undertow.png",
				"Description": ""
			},
			"W": {
				"ID": "vicious_strikes",
				"Name": "Vicious Strikes",
				"Icon": "assets/abilities/Vicious_Strikes.png",
				"Description": ""
			},
			"E": {
				"ID": "reckless_swing",
				"Name": "Reckless Swing",
				"Icon": "assets/abilities/Reckless_Swing.png",
				"Description": ""
			},
			"R": {
				"ID": "ragnarok",
				"Name": "Ragnarok",
				"Icon": "assets/abilities/Ragnarok.png",
				"Description": ""
			}
		},
		"orianna": {
			"Passive": {
				"ID": "clockwork_windup",
				"Name": "Clockwork Windup",
				"Icon": "assets/abilities/Clockwork_Windup.png",
				"Description": ""
			},
			"Q": {
				"ID": "command_attack",
				"Name": "Command: Attack",
				"Icon": "assets/abilities/Command_Attack.png",
				"Description": ""
			},
			"W": {
				"ID": "command_dissonance",
				"Name": "Command: Dissonance",
				"Icon": "assets/abilities/Command_Dissonance.png",
				"Description": ""
			},
			"E": {
				"ID": "command_protect",
				"Name": "Command: Protect",
				"Icon": "assets/abilities/Command_Protect.png",
				"Description": ""
			},
			"R": {
				"ID": "command_shockwave",
				"Name": "Command: Shockwave",
				"Icon": "assets/abilities/Command_Shockwave.png",
				"Description": ""
			}
		},
		"pantheon": {
			"Passive": {
				"ID": "aegis_protection",
				"Name": "Aegis Protection",
				"Icon": "assets/abilities/Aegis_Protection.png",
				"Description": ""
			},
			"Q": {
				"ID": "spear_shot",
				"Name": "Spear Shot",
				"Icon": "assets/abilities/Spear_Shot.png",
				"Description": ""
			},
			"W": {
				"ID": "aegis_of_zeonia",
				"Name": "Aegis of Zeonia",
				"Icon": "assets/abilities/Aegis_of_Zeonia.png",
				"Description": ""
			},
			"E": {
				"ID": "heartseeker_strike",
				"Name": "Heartseeker Strike",
				"Icon": "assets/abilities/Heartseeker_Strike.png",
				"Description": ""
			},
			"R": {
				"ID": "grand_skyfall",
				"Name": "Grand Skyfall",
				"Icon": "assets/abilities/Grand_Skyfall.png",
				"Description": ""
			}
		},
		"poppy": {
			"Passive": {
				"ID": "valiant_fighter",
				"Name": "Valiant Fighter",
				"Icon": "assets/abilities/Valiant_Fighter.png",
				"Description": ""
			},
			"Q": {
				"ID": "devastating_blow",
				"Name": "Devastating Blow",
				"Icon": "assets/abilities/Devastating_Blow.png",
				"Description": ""
			},
			"W": {
				"ID": "paragon_of_demacia",
				"Name": "Paragon of Demacia",
				"Icon": "assets/abilities/Paragon_of_Demacia.png",
				"Description": ""
			},
			"E": {
				"ID": "heroic_charge",
				"Name": "Heroic Charge",
				"Icon": "assets/abilities/Heroic_Charge.png",
				"Description": ""
			},
			"R": {
				"ID": "diplomatic_immunity",
				"Name": "Diplomatic Immunity",
				"Icon": "assets/abilities/Diplomatic_Immunity.png",
				"Description": ""
			}
		},
		"quinn": {
			"Passive": {
				"ID": "harrier",
				"Name": "Harrier",
				"Icon": "assets/abilities/Harrier.png",
				"Description": ""
			},
			"Q": {
				"ID": "blinding_assault",
				"Name": "Blinding Assault",
				"Icon": "assets/abilities/Blinding_Assault.png",
				"Description": ""
			},
			"W": {
				"ID": "heightened_senses",
				"Name": "Heightened Senses",
				"Icon": "assets/abilities/Heightened_Senses.png",
				"Description": ""
			},
			"E": {
				"ID": "vault",
				"Name": "Vault",
				"Icon": "assets/abilities/Vault.png",
				"Description": ""
			},
			"R": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			}
		},
		"rammus": {
			"Passive": {
				"ID": "spiked_shell",
				"Name": "Spiked Shell",
				"Icon": "assets/abilities/Spiked_Shell.png",
				"Description": ""
			},
			"Q": {
				"ID": "powerball",
				"Name": "Powerball",
				"Icon": "assets/abilities/Powerball.png",
				"Description": ""
			},
			"W": {
				"ID": "defensive_ball_curl",
				"Name": "Defensive Ball Curl",
				"Icon": "assets/abilities/Defensive_Ball_Curl.png",
				"Description": ""
			},
			"E": {
				"ID": "puncturing_taunt",
				"Name": "Puncturing Taunt",
				"Icon": "assets/abilities/Puncturing_Taunt.png",
				"Description": ""
			},
			"R": {
				"ID": "tremors",
				"Name": "Tremors",
				"Icon": "assets/abilities/Tremors.png",
				"Description": ""
			}
		},
		"renekton": {
			"Passive": {
				"ID": "reign_of_anger",
				"Name": "Reign of Anger",
				"Icon": "assets/abilities/Reign_of_Anger.png",
				"Description": ""
			},
			"Q": {
				"ID": "cull_the_meek",
				"Name": "Cull the Meek",
				"Icon": "assets/abilities/Cull_the_Meek.png",
				"Description": ""
			},
			"W": {
				"ID": "ruthless_predator",
				"Name": "Ruthless Predator",
				"Icon": "assets/abilities/Ruthless_Predator.png",
				"Description": ""
			},
			"E": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			},
			"R": {
				"ID": "dominus",
				"Name": "Dominus",
				"Icon": "assets/abilities/Dominus.png",
				"Description": ""
			}
		},
		"rengar": {
			"Passive": {
				"ID": "unseen_predator",
				"Name": "Unseen Predator",
				"Icon": "assets/abilities/Unseen_Predator.png",
				"Description": ""
			},
			"Q": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			},
			"W": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			},
			"E": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			},
			"R": {
				"ID": "thrill_of_the_hunt",
				"Name": "Thrill of the Hunt",
				"Icon": "assets/abilities/Thrill_of_the_Hunt.png",
				"Description": ""
			}
		},
		"riven": {
			"Passive": {
				"ID": "runic_blade",
				"Name": "Runic Blade",
				"Icon": "assets/abilities/Runic_Blade.png",
				"Description": ""
			},
			"Q": {
				"ID": "broken_wings",
				"Name": "Broken Wings",
				"Icon": "assets/abilities/Broken_Wings.png",
				"Description": ""
			},
			"W": {
				"ID": "ki_burst",
				"Name": "Ki Burst",
				"Icon": "assets/abilities/Ki_Burst.png",
				"Description": ""
			},
			"E": {
				"ID": "valor",
				"Name": "Valor",
				"Icon": "assets/abilities/Valor.png",
				"Description": ""
			},
			"R": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			}
		},
		"rumble": {
			"Passive": {
				"ID": "junkyard_titan",
				"Name": "Junkyard Titan",
				"Icon": "assets/abilities/Junkyard_Titan.png",
				"Description": ""
			},
			"Q": {
				"ID": "flamespitter",
				"Name": "Flamespitter",
				"Icon": "assets/abilities/Flamespitter.png",
				"Description": ""
			},
			"W": {
				"ID": "scrap_shield",
				"Name": "Scrap Shield",
				"Icon": "assets/abilities/Scrap_Shield.png",
				"Description": ""
			},
			"E": {
				"ID": "electro-harpoon",
				"Name": "Electro-Harpoon",
				"Icon": "assets/abilities/Electro-Harpoon.png",
				"Description": ""
			},
			"R": {
				"ID": "the_equalizer",
				"Name": "The Equalizer",
				"Icon": "assets/abilities/The_Equalizer.png",
				"Description": ""
			}
		},
		"ryze": {
			"Passive": {
				"ID": "arcane_mastery",
				"Name": "Arcane Mastery",
				"Icon": "assets/abilities/Arcane_Mastery.png",
				"Description": ""
			},
			"Q": {
				"ID": "overload",
				"Name": "Overload",
				"Icon": "assets/abilities/Overload.png",
				"Description": ""
			},
			"W": {
				"ID": "rune_prison",
				"Name": "Rune Prison",
				"Icon": "assets/abilities/Rune_Prison.png",
				"Description": ""
			},
			"E": {
				"ID": "spell_flux",
				"Name": "Spell Flux",
				"Icon": "assets/abilities/Spell_Flux.png",
				"Description": ""
			},
			"R": {
				"ID": "desperate_power",
				"Name": "Desperate Power",
				"Icon": "assets/abilities/Desperate_Power.png",
				"Description": ""
			}
		},
		"sejuani": {
			"Passive": {
				"ID": "frost_armor",
				"Name": "Frost Armor",
				"Icon": "assets/abilities/Frost_Armor.png",
				"Description": ""
			},
			"Q": {
				"ID": "arctic_assault",
				"Name": "Arctic Assault",
				"Icon": "assets/abilities/Arctic_Assault.png",
				"Description": ""
			},
			"W": {
				"ID": "flail_of_the_northern_winds",
				"Name": "Flail of the Northern Winds",
				"Icon": "assets/abilities/Flail_of_the_Northern_Winds.png",
				"Description": ""
			},
			"E": {
				"ID": "permafrost",
				"Name": "Permafrost",
				"Icon": "assets/abilities/Permafrost.png",
				"Description": ""
			},
			"R": {
				"ID": "glacial_prison",
				"Name": "Glacial Prison",
				"Icon": "assets/abilities/Glacial_Prison.png",
				"Description": ""
			}
		},
		"shaco": {
			"Passive": {
				"ID": "backstab",
				"Name": "Backstab",
				"Icon": "assets/abilities/Backstab.png",
				"Description": ""
			},
			"Q": {
				"ID": "deceive",
				"Name": "Deceive",
				"Icon": "assets/abilities/Deceive.png",
				"Description": ""
			},
			"W": {
				"ID": "jack_in_the_box",
				"Name": "Jack In The Box",
				"Icon": "assets/abilities/Jack_In_The_Box.png",
				"Description": ""
			},
			"E": {
				"ID": "two-shiv_poison",
				"Name": "Two-Shiv Poison",
				"Icon": "assets/abilities/Two-Shiv_Poison.png",
				"Description": ""
			},
			"R": {
				"ID": "hallucinate",
				"Name": "Hallucinate",
				"Icon": "assets/abilities/Hallucinate.png",
				"Description": ""
			}
		},
		"shen": {
			"Passive": {
				"ID": "ki_strike",
				"Name": "Ki Strike",
				"Icon": "assets/abilities/Ki_Strike.png",
				"Description": ""
			},
			"Q": {
				"ID": "vorpal_blade",
				"Name": "Vorpal Blade",
				"Icon": "assets/abilities/Vorpal_Blade.png",
				"Description": ""
			},
			"W": {
				"ID": "feint",
				"Name": "Feint",
				"Icon": "assets/abilities/Feint.png",
				"Description": ""
			},
			"E": {
				"ID": "shadow_dash",
				"Name": "Shadow Dash",
				"Icon": "assets/abilities/Shadow_Dash.png",
				"Description": ""
			},
			"R": {
				"ID": "stand_united",
				"Name": "Stand United",
				"Icon": "assets/abilities/Stand_United.png",
				"Description": ""
			}
		},
		"shyvana": {
			"Passive": {
				"ID": "dragonborn",
				"Name": "Dragonborn",
				"Icon": "assets/abilities/Dragonborn.png",
				"Description": ""
			},
			"Q": {
				"ID": "twin_bite",
				"Name": "Twin Bite",
				"Icon": "assets/abilities/Twin_Bite.png",
				"Description": ""
			},
			"W": {
				"ID": "burnout",
				"Name": "Burnout",
				"Icon": "assets/abilities/Burnout.png",
				"Description": ""
			},
			"E": {
				"ID": "flame_breath",
				"Name": "Flame Breath",
				"Icon": "assets/abilities/Flame_Breath.png",
				"Description": ""
			},
			"R": {
				"ID": "dragons_descent",
				"Name": "Dragon's Descent",
				"Icon": "assets/abilities/Dragon's_Descent.png",
				"Description": ""
			}
		},
		"singed": {
			"Passive": {
				"ID": "empowered_bulwark",
				"Name": "Empowered Bulwark",
				"Icon": "assets/abilities/Empowered_Bulwark.png",
				"Description": ""
			},
			"Q": {
				"ID": "poison_trail",
				"Name": "Poison Trail",
				"Icon": "assets/abilities/Poison_Trail.png",
				"Description": ""
			},
			"W": {
				"ID": "mega_adhesive",
				"Name": "Mega Adhesive",
				"Icon": "assets/abilities/Mega_Adhesive.png",
				"Description": ""
			},
			"E": {
				"ID": "fling",
				"Name": "Fling",
				"Icon": "assets/abilities/Fling.png",
				"Description": ""
			},
			"R": {
				"ID": "insanity_potion",
				"Name": "Insanity Potion",
				"Icon": "assets/abilities/Insanity_Potion.png",
				"Description": ""
			}
		},
		"sion": {
			"Passive": {
				"ID": "feel_no_pain",
				"Name": "Feel No Pain",
				"Icon": "assets/abilities/Feel_No_Pain.png",
				"Description": ""
			},
			"Q": {
				"ID": "cryptic_gaze",
				"Name": "Cryptic Gaze",
				"Icon": "assets/abilities/Cryptic_Gaze.png",
				"Description": ""
			},
			"W": {
				"ID": "deaths_caress",
				"Name": "Death's Caress",
				"Icon": "assets/abilities/Death's_Caress.png",
				"Description": ""
			},
			"E": {
				"ID": "enrage",
				"Name": "Enrage",
				"Icon": "assets/abilities/Enrage.png",
				"Description": ""
			},
			"R": {
				"ID": "cannibalism",
				"Name": "Cannibalism",
				"Icon": "assets/abilities/Cannibalism.png",
				"Description": ""
			}
		},
		"sivir": {
			"Passive": {
				"ID": "fleet_of_foot",
				"Name": "Fleet of Foot",
				"Icon": "assets/abilities/Fleet_of_Foot.png",
				"Description": ""
			},
			"Q": {
				"ID": "boomerang_blade",
				"Name": "Boomerang Blade",
				"Icon": "assets/abilities/Boomerang_Blade.png",
				"Description": ""
			},
			"W": {
				"ID": "ricochet",
				"Name": "Ricochet",
				"Icon": "assets/abilities/Ricochet.png",
				"Description": ""
			},
			"E": {
				"ID": "spell_shield",
				"Name": "Spell Shield",
				"Icon": "assets/abilities/Spell_Shield.png",
				"Description": ""
			},
			"R": {
				"ID": "on_the_hunt",
				"Name": "On The Hunt",
				"Icon": "assets/abilities/On_The_Hunt.png",
				"Description": ""
			}
		},
		"skarner": {
			"Passive": {
				"ID": "energize",
				"Name": "Energize",
				"Icon": "assets/abilities/Energize.png",
				"Description": ""
			},
			"Q": {
				"ID": "crystal_slash",
				"Name": "Crystal Slash",
				"Icon": "assets/abilities/Crystal_Slash.png",
				"Description": ""
			},
			"W": {
				"ID": "crystalline_exoskeleton",
				"Name": "Crystalline Exoskeleton",
				"Icon": "assets/abilities/Crystalline_Exoskeleton.png",
				"Description": ""
			},
			"E": {
				"ID": "fracture",
				"Name": "Fracture",
				"Icon": "assets/abilities/Fracture.png",
				"Description": ""
			},
			"R": {
				"ID": "impale",
				"Name": "Impale",
				"Icon": "assets/abilities/Impale.png",
				"Description": ""
			}
		},
		"sona": {
			"Passive": {
				"ID": "power_chord",
				"Name": "Power Chord",
				"Icon": "assets/abilities/Power_Chord.png",
				"Description": ""
			},
			"Q": {
				"ID": "hymn_of_valor",
				"Name": "Hymn of Valor",
				"Icon": "assets/abilities/Hymn_of_Valor.png",
				"Description": ""
			},
			"W": {
				"ID": "aria_of_perseverance",
				"Name": "Aria of Perseverance",
				"Icon": "assets/abilities/Aria_of_Perseverance.png",
				"Description": ""
			},
			"E": {
				"ID": "song_of_celerity",
				"Name": "Song of Celerity",
				"Icon": "assets/abilities/Song_of_Celerity.png",
				"Description": ""
			},
			"R": {
				"ID": "crescendo",
				"Name": "Crescendo",
				"Icon": "assets/abilities/Crescendo.png",
				"Description": ""
			}
		},
		"soraka": {
			"Passive": {
				"ID": "salvation",
				"Name": "Salvation",
				"Icon": "assets/abilities/Salvation.png",
				"Description": ""
			},
			"Q": {
				"ID": "starcall",
				"Name": "Starcall",
				"Icon": "assets/abilities/Starcall.png",
				"Description": ""
			},
			"W": {
				"ID": "astral_blessing",
				"Name": "Astral Blessing",
				"Icon": "assets/abilities/Astral_Blessing.png",
				"Description": ""
			},
			"E": {
				"ID": "infuse",
				"Name": "Infuse",
				"Icon": "assets/abilities/Infuse.png",
				"Description": ""
			},
			"R": {
				"ID": "wish",
				"Name": "Wish",
				"Icon": "assets/abilities/Wish.png",
				"Description": ""
			}
		},
		"swain": {
			"Passive": {
				"ID": "carrion_renewal",
				"Name": "Carrion Renewal",
				"Icon": "assets/abilities/Carrion_Renewal.png",
				"Description": ""
			},
			"Q": {
				"ID": "decrepify",
				"Name": "Decrepify",
				"Icon": "assets/abilities/Decrepify.png",
				"Description": ""
			},
			"W": {
				"ID": "nevermove",
				"Name": "Nevermove",
				"Icon": "assets/abilities/Nevermove.png",
				"Description": ""
			},
			"E": {
				"ID": "torment",
				"Name": "Torment",
				"Icon": "assets/abilities/Torment.png",
				"Description": ""
			},
			"R": {
				"ID": "ravenous_flock",
				"Name": "Ravenous Flock",
				"Icon": "assets/abilities/Ravenous_Flock.png",
				"Description": ""
			}
		},
		"syndra": {
			"Passive": {
				"ID": "transcendent",
				"Name": "Transcendent",
				"Icon": "assets/abilities/Transcendent.png",
				"Description": ""
			},
			"Q": {
				"ID": "dark_sphere",
				"Name": "Dark Sphere",
				"Icon": "assets/abilities/Dark_Sphere.png",
				"Description": ""
			},
			"W": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			},
			"E": {
				"ID": "scatter_the_weak",
				"Name": "Scatter the Weak",
				"Icon": "assets/abilities/Scatter_the_Weak.png",
				"Description": ""
			},
			"R": {
				"ID": "unleashed_power",
				"Name": "Unleashed Power",
				"Icon": "assets/abilities/Unleashed_Power.png",
				"Description": ""
			}
		},
		"talon": {
			"Passive": {
				"ID": "mercy",
				"Name": "Mercy",
				"Icon": "assets/abilities/Mercy.png",
				"Description": ""
			},
			"Q": {
				"ID": "noxian_diplomacy",
				"Name": "Noxian Diplomacy",
				"Icon": "assets/abilities/Noxian_Diplomacy.png",
				"Description": ""
			},
			"W": {
				"ID": "rake",
				"Name": "Rake",
				"Icon": "assets/abilities/Rake.png",
				"Description": ""
			},
			"E": {
				"ID": "cutthroat",
				"Name": "Cutthroat",
				"Icon": "assets/abilities/Cutthroat.png",
				"Description": ""
			},
			"R": {
				"ID": "shadow_assault",
				"Name": "Shadow Assault",
				"Icon": "assets/abilities/Shadow_Assault.png",
				"Description": ""
			}
		},
		"taric": {
			"Passive": {
				"ID": "gemcraft",
				"Name": "Gemcraft",
				"Icon": "assets/abilities/Gemcraft.png",
				"Description": ""
			},
			"Q": {
				"ID": "imbue",
				"Name": "Imbue",
				"Icon": "assets/abilities/Imbue.png",
				"Description": ""
			},
			"W": {
				"ID": "shatter",
				"Name": "Shatter",
				"Icon": "assets/abilities/Shatter.png",
				"Description": ""
			},
			"E": {
				"ID": "dazzle",
				"Name": "Dazzle",
				"Icon": "assets/abilities/Dazzle.png",
				"Description": ""
			},
			"R": {
				"ID": "radiance",
				"Name": "Radiance",
				"Icon": "assets/abilities/Radiance.png",
				"Description": ""
			}
		},
		"teemo": {
			"Passive": {
				"ID": "camouflage",
				"Name": "Camouflage",
				"Icon": "assets/abilities/Camouflage.png",
				"Description": ""
			},
			"Q": {
				"ID": "blinding_dart",
				"Name": "Blinding Dart",
				"Icon": "assets/abilities/Blinding_Dart.png",
				"Description": ""
			},
			"W": {
				"ID": "move_quick",
				"Name": "Move Quick",
				"Icon": "assets/abilities/Move_Quick.png",
				"Description": ""
			},
			"E": {
				"ID": "toxic_shot",
				"Name": "Toxic Shot",
				"Icon": "assets/abilities/Toxic_Shot.png",
				"Description": ""
			},
			"R": {
				"ID": "noxious_trap",
				"Name": "Noxious Trap",
				"Icon": "assets/abilities/Noxious_Trap.png",
				"Description": ""
			}
		},
		"thresh": {
			"Passive": {
				"ID": "damnation",
				"Name": "Damnation",
				"Icon": "assets/abilities/Damnation.png",
				"Description": ""
			},
			"Q": {
				"ID": "death_sentence",
				"Name": "Death Sentence",
				"Icon": "assets/abilities/Death_Sentence.png",
				"Description": ""
			},
			"W": {
				"ID": "dark_passage",
				"Name": "Dark Passage",
				"Icon": "assets/abilities/Dark_Passage.png",
				"Description": ""
			},
			"E": {
				"ID": "flay",
				"Name": "Flay",
				"Icon": "assets/abilities/Flay.png",
				"Description": ""
			},
			"R": {
				"ID": "the_box",
				"Name": "The Box",
				"Icon": "assets/abilities/The_Box.png",
				"Description": ""
			}
		},
		"tristana": {
			"Passive": {
				"ID": "draw_a_bead",
				"Name": "Draw a Bead",
				"Icon": "assets/abilities/Draw_a_Bead.png",
				"Description": ""
			},
			"Q": {
				"ID": "rapid_fire",
				"Name": "Rapid Fire",
				"Icon": "assets/abilities/Rapid_Fire.png",
				"Description": ""
			},
			"W": {
				"ID": "rocket_jump",
				"Name": "Rocket Jump",
				"Icon": "assets/abilities/Rocket_Jump.png",
				"Description": ""
			},
			"E": {
				"ID": "explosive_shot",
				"Name": "Explosive Shot",
				"Icon": "assets/abilities/Explosive_Shot.png",
				"Description": ""
			},
			"R": {
				"ID": "buster_shot",
				"Name": "Buster Shot",
				"Icon": "assets/abilities/Buster_Shot.png",
				"Description": ""
			}
		},
		"trundle": {
			"Passive": {
				"ID": "kings_tribute",
				"Name": "King's Tribute",
				"Icon": "assets/abilities/King's_Tribute.png",
				"Description": ""
			},
			"Q": {
				"ID": "chomp",
				"Name": "Chomp",
				"Icon": "assets/abilities/Chomp.png",
				"Description": ""
			},
			"W": {
				"ID": "frozen_domain",
				"Name": "Frozen Domain",
				"Icon": "assets/abilities/Frozen_Domain.png",
				"Description": ""
			},
			"E": {
				"ID": "pillar_of_ice",
				"Name": "Pillar of Ice",
				"Icon": "assets/abilities/Pillar_of_Ice.png",
				"Description": ""
			},
			"R": {
				"ID": "subjugate",
				"Name": "Subjugate",
				"Icon": "assets/abilities/Subjugate.png",
				"Description": ""
			}
		},
		"tryndamere": {
			"Passive": {
				"ID": "battle_fury",
				"Name": "Battle Fury",
				"Icon": "assets/abilities/Battle_Fury.png",
				"Description": ""
			},
			"Q": {
				"ID": "bloodlust",
				"Name": "Bloodlust",
				"Icon": "assets/abilities/Bloodlust.png",
				"Description": ""
			},
			"W": {
				"ID": "mocking_shout",
				"Name": "Mocking Shout",
				"Icon": "assets/abilities/Mocking_Shout.png",
				"Description": ""
			},
			"E": {
				"ID": "spinning_slash",
				"Name": "Spinning Slash",
				"Icon": "assets/abilities/Spinning_Slash.png",
				"Description": ""
			},
			"R": {
				"ID": "undying_rage",
				"Name": "Undying Rage",
				"Icon": "assets/abilities/Undying_Rage.png",
				"Description": ""
			}
		},
		"twistedfate": {
			"Passive": {
				"ID": "loaded_dice",
				"Name": "Loaded Dice",
				"Icon": "assets/abilities/Loaded_Dice.png",
				"Description": ""
			},
			"Q": {
				"ID": "wild_cards",
				"Name": "Wild Cards",
				"Icon": "assets/abilities/Wild_Cards.png",
				"Description": ""
			},
			"W": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			},
			"E": {
				"ID": "stacked_deck",
				"Name": "Stacked Deck",
				"Icon": "assets/abilities/Stacked_Deck.png",
				"Description": ""
			},
			"R": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			}
		},
		"twitch": {
			"Passive": {
				"ID": "deadly_venom",
				"Name": "Deadly Venom",
				"Icon": "assets/abilities/Deadly_Venom.png",
				"Description": ""
			},
			"Q": {
				"ID": "ambush",
				"Name": "Ambush",
				"Icon": "assets/abilities/Ambush.png",
				"Description": ""
			},
			"W": {
				"ID": "venom_cask",
				"Name": "Venom Cask",
				"Icon": "assets/abilities/Venom_Cask.png",
				"Description": ""
			},
			"E": {
				"ID": "expunge",
				"Name": "Expunge",
				"Icon": "assets/abilities/Expunge.png",
				"Description": ""
			},
			"R": {
				"ID": "spray_and_pray",
				"Name": "Spray and Pray",
				"Icon": "assets/abilities/Spray_and_Pray.png",
				"Description": ""
			}
		},
		"udyr": {
			"Passive": {
				"ID": "monkeys_agility",
				"Name": "Monkey's Agility",
				"Icon": "assets/abilities/Monkey's_Agility.png",
				"Description": ""
			},
			"Q": {
				"ID": "tiger_stance",
				"Name": "Tiger Stance",
				"Icon": "assets/abilities/Tiger_Stance.png",
				"Description": ""
			},
			"W": {
				"ID": "turtle_stance",
				"Name": "Turtle Stance",
				"Icon": "assets/abilities/Turtle_Stance.png",
				"Description": ""
			},
			"E": {
				"ID": "bear_stance",
				"Name": "Bear Stance",
				"Icon": "assets/abilities/Bear_Stance.png",
				"Description": ""
			},
			"R": {
				"ID": "phoenix_stance",
				"Name": "Phoenix Stance",
				"Icon": "assets/abilities/Phoenix_Stance.png",
				"Description": ""
			}
		},
		"urgot": {
			"Passive": {
				"ID": "zaun-touched_bolt_augmenter",
				"Name": "Zaun-Touched Bolt Augmenter",
				"Icon": "assets/abilities/Zaun-Touched_Bolt_Augmenter.png",
				"Description": ""
			},
			"Q": {
				"ID": "acid_hunter",
				"Name": "Acid Hunter",
				"Icon": "assets/abilities/Acid_Hunter.png",
				"Description": ""
			},
			"W": {
				"ID": "terror_capicator",
				"Name": "Terror Capicator",
				"Icon": "assets/abilities/Terror_Capicator.png",
				"Description": ""
			},
			"E": {
				"ID": "noxian_corrosive_charge",
				"Name": "Noxian Corrosive Charge",
				"Icon": "assets/abilities/Noxian_Corrosive_Charge.png",
				"Description": ""
			},
			"R": {
				"ID": "hyper-kinetic_position_reverser",
				"Name": "Hyper-Kinetic Position Reverser",
				"Icon": "assets/abilities/Hyper-Kinetic_Position_Reverser.png",
				"Description": ""
			}
		},
		"varus": {
			"Passive": {
				"ID": "living_vengeance",
				"Name": "Living Vengeance",
				"Icon": "assets/abilities/Living_Vengeance.png",
				"Description": ""
			},
			"Q": {
				"ID": "piercing_arrow",
				"Name": "Piercing Arrow",
				"Icon": "assets/abilities/Piercing_Arrow.png",
				"Description": ""
			},
			"W": {
				"ID": "blighted_quiver",
				"Name": "Blighted Quiver",
				"Icon": "assets/abilities/Blighted_Quiver.png",
				"Description": ""
			},
			"E": {
				"ID": "hail_of_arrows",
				"Name": "Hail of Arrows",
				"Icon": "assets/abilities/Hail_of_Arrows.png",
				"Description": ""
			},
			"R": {
				"ID": "chain_of_corruption",
				"Name": "Chain of Corruption",
				"Icon": "assets/abilities/Chain_of_Corruption.png",
				"Description": ""
			}
		},
		"vayne": {
			"Passive": {
				"ID": "night_hunter",
				"Name": "Night Hunter",
				"Icon": "assets/abilities/Night_Hunter.png",
				"Description": ""
			},
			"Q": {
				"ID": "tumble",
				"Name": "Tumble",
				"Icon": "assets/abilities/Tumble.png",
				"Description": ""
			},
			"W": {
				"ID": "silver_bolts",
				"Name": "Silver Bolts",
				"Icon": "assets/abilities/Silver_Bolts.png",
				"Description": ""
			},
			"E": {
				"ID": "condemn",
				"Name": "Condemn",
				"Icon": "assets/abilities/Condemn.png",
				"Description": ""
			},
			"R": {
				"ID": "final_hour",
				"Name": "Final Hour",
				"Icon": "assets/abilities/Final_Hour.png",
				"Description": ""
			}
		},
		"veigar": {
			"Passive": {
				"ID": "equilibrium",
				"Name": "Equilibrium",
				"Icon": "assets/abilities/Equilibrium.png",
				"Description": ""
			},
			"Q": {
				"ID": "baleful_strike",
				"Name": "Baleful Strike",
				"Icon": "assets/abilities/Baleful_Strike.png",
				"Description": ""
			},
			"W": {
				"ID": "dark_matter",
				"Name": "Dark Matter",
				"Icon": "assets/abilities/Dark_Matter.png",
				"Description": ""
			},
			"E": {
				"ID": "event_horizon",
				"Name": "Event Horizon",
				"Icon": "assets/abilities/Event_Horizon.png",
				"Description": ""
			},
			"R": {
				"ID": "primordial_burst",
				"Name": "Primordial Burst",
				"Icon": "assets/abilities/Primordial_Burst.png",
				"Description": ""
			}
		},
		"vi": {
			"Passive": {
				"ID": "blast_shield",
				"Name": "Blast Shield",
				"Icon": "assets/abilities/Blast_Shield.png",
				"Description": ""
			},
			"Q": {
				"ID": "vault_breaker",
				"Name": "Vault Breaker",
				"Icon": "assets/abilities/Vault_Breaker.png",
				"Description": ""
			},
			"W": {
				"ID": "denting_blows",
				"Name": "Denting Blows",
				"Icon": "assets/abilities/Denting_Blows.png",
				"Description": ""
			},
			"E": {
				"ID": "excessive_force",
				"Name": "Excessive Force",
				"Icon": "assets/abilities/Excessive_Force.png",
				"Description": ""
			},
			"R": {
				"ID": "assault_and_battery",
				"Name": "Assault and Battery",
				"Icon": "assets/abilities/Assault_and_Battery.png",
				"Description": ""
			}
		},
		"viktor": {
			"Passive": {
				"ID": "evolving_technology",
				"Name": "Evolving Technology",
				"Icon": "assets/abilities/Evolving_Technology.png",
				"Description": ""
			},
			"Q": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			},
			"W": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			},
			"E": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/.png",
				"Description": ""
			},
			"R": {
				"ID": "chaos_storm",
				"Name": "Chaos Storm",
				"Icon": "assets/abilities/Chaos_Storm.png",
				"Description": ""
			}
		},
		"vladimir": {
			"Passive": {
				"ID": "crimson_pact",
				"Name": "Crimson Pact",
				"Icon": "assets/abilities/Crimson_Pact.png",
				"Description": ""
			},
			"Q": {
				"ID": "transfusion",
				"Name": "Transfusion",
				"Icon": "assets/abilities/Transfusion.png",
				"Description": ""
			},
			"W": {
				"ID": "sanguine_pool",
				"Name": "Sanguine Pool",
				"Icon": "assets/abilities/Sanguine_Pool.png",
				"Description": ""
			},
			"E": {
				"ID": "tides_of_blood",
				"Name": "Tides of Blood",
				"Icon": "assets/abilities/Tides_of_Blood.png",
				"Description": ""
			},
			"R": {
				"ID": "hemoplague",
				"Name": "Hemoplague",
				"Icon": "assets/abilities/Hemoplague.png",
				"Description": ""
			}
		},
		"volibear": {
			"Passive": {
				"ID": "chosen_of_the_storm",
				"Name": "Chosen of the Storm",
				"Icon": "assets/abilities/Chosen_of_the_Storm.png",
				"Description": ""
			},
			"Q": {
				"ID": "rolling_thunder",
				"Name": "Rolling Thunder",
				"Icon": "assets/abilities/Rolling_Thunder.png",
				"Description": ""
			},
			"W": {
				"ID": "frenzy",
				"Name": "Frenzy",
				"Icon": "assets/abilities/Frenzy.png",
				"Description": ""
			},
			"E": {
				"ID": "majestic_roar",
				"Name": "Majestic Roar",
				"Icon": "assets/abilities/Majestic_Roar.png",
				"Description": ""
			},
			"R": {
				"ID": "thunder_claws",
				"Name": "Thunder Claws",
				"Icon": "assets/abilities/Thunder_Claws.png",
				"Description": ""
			}
		},
		"zac": {
			"Passive": {
				"ID": "cell_division",
				"Name": "Cell Division",
				"Icon": "assets/abilities/Cell_Division.png",
				"Description": ""
			},
			"Q": {
				"ID": "stretching_strike",
				"Name": "Stretching Strike",
				"Icon": "assets/abilities/Stretching_Strike.png",
				"Description": ""
			},
			"W": {
				"ID": "unstable_matter",
				"Name": "Unstable Matter",
				"Icon": "assets/abilities/Unstable_Matter.png",
				"Description": ""
			},
			"E": {
				"ID": "elastic_slingshot",
				"Name": "Elastic Slingshot",
				"Icon": "assets/abilities/Elastic_Slingshot.png",
				"Description": ""
			},
			"R": {
				"ID": "lets_bounce",
				"Name": "Let's Bounce!",
				"Icon": "assets/abilities/Lets_Bounce.png",
				"Description": ""
			}
		},
		"zed": {
			"Passive": {
				"ID": "contempt_for_the_weak",
				"Name": "Contempt for the Weak",
				"Icon": "assets/abilities/Contempt_for_the_Weak.png",
				"Description": ""
			},
			"Q": {
				"ID": "razor_shuriken",
				"Name": "Razor Shuriken",
				"Icon": "assets/abilities/Razor_Shuriken.png",
				"Description": ""
			},
			"W": {
				"ID": "living_shadow",
				"Name": "Living Shadow",
				"Icon": "assets/abilities/Living_Shadow.png",
				"Description": ""
			},
			"E": {
				"ID": "shadow_slash",
				"Name": "Shadow Slash",
				"Icon": "assets/abilities/Shadow_Slash.png",
				"Description": ""
			},
			"R": {
				"ID": "death_mark",
				"Name": "Death Mark",
				"Icon": "assets/abilities/Death_Mark.png",
				"Description": ""
			}
		},
		"ziggs": {
			"Passive": {
				"ID": "short_fuse",
				"Name": "Short Fuse",
				"Icon": "assets/abilities/Short_Fuse.png",
				"Description": ""
			},
			"Q": {
				"ID": "bouncing_bomb",
				"Name": "Bouncing Bomb",
				"Icon": "assets/abilities/Bouncing_Bomb.png",
				"Description": ""
			},
			"W": {
				"ID": "satchel_charge",
				"Name": "Satchel Charge",
				"Icon": "assets/abilities/Satchel_Charge.png",
				"Description": ""
			},
			"E": {
				"ID": "hexplosive_minefield",
				"Name": "Hexplosive Minefield",
				"Icon": "assets/abilities/Hexplosive_Minefield.png",
				"Description": ""
			},
			"R": {
				"ID": "mega_inferno_bomb",
				"Name": "Mega Inferno Bomb",
				"Icon": "assets/abilities/Mega_Inferno_Bomb.png",
				"Description": ""
			}
		},
		"zilean": {
			"Passive": {
				"ID": "heightened_learning",
				"Name": "Heightened Learning",
				"Icon": "assets/abilities/Heightened_Learning.png",
				"Description": ""
			},
			"Q": {
				"ID": "time_bomb",
				"Name": "Time Bomb",
				"Icon": "assets/abilities/Time_Bomb.png",
				"Description": ""
			},
			"W": {
				"ID": "rewind",
				"Name": "Rewind",
				"Icon": "assets/abilities/Rewind.png",
				"Description": ""
			},
			"E": {
				"ID": "time_warp",
				"Name": "Time Warp",
				"Icon": "assets/abilities/Time_Warp.png",
				"Description": ""
			},
			"R": {
				"ID": "chrono_shift",
				"Name": "Chrono Shift",
				"Icon": "assets/abilities/Chrono_Shift.png",
				"Description": ""
			}
		},
		"zyra": {
			"Passive": {
				"ID": "rise_of_the_thorns",
				"Name": "Rise of the Thorns",
				"Icon": "assets/abilities/Rise_of_the_Thorns.png",
				"Description": ""
			},
			"Q": {
				"ID": "deadly_bloom",
				"Name": "Deadly Bloom",
				"Icon": "assets/abilities/Deadly_Bloom.png",
				"Description": ""
			},
			"W": {
				"ID": "rampant_growth",
				"Name": "Rampant Growth",
				"Icon": "assets/abilities/Rampant_Growth.png",
				"Description": ""
			},
			"E": {
				"ID": "grasping_roots",
				"Name": "Grasping Roots",
				"Icon": "assets/abilities/Grasping_Roots.png",
				"Description": ""
			},
			"R": {
				"ID": "stranglethorns",
				"Name": "Stranglethorns",
				"Icon": "assets/abilities/Stranglethorns.png",
				"Description": ""
			}
		},
		// "": {
		// 	"Passive": {
		// 		"ID": "",
		// 		"Name": "",
		// 		"Icon": "assets/abilities/",
		// 		"Description": ""
		// 	},
		// 	"Q": {
		// 		"ID": "",
		// 		"Name": "",
		// 		"Icon": "assets/abilities/",
		// 		"Description": ""
		// 	},
		// 	"W": {
		// 		"ID": "",
		// 		"Name": "",
		// 		"Icon": "assets/abilities/",
		// 		"Description": ""
		// 	},
		// 	"E": {
		// 		"ID": "",
		// 		"Name": "",
		// 		"Icon": "assets/abilities/",
		// 		"Description": ""
		// 	},
		// 	"R": {
		// 		"ID": "",
		// 		"Name": "",
		// 		"Icon": "assets/abilities/",
		// 		"Description": ""
		// 	}
		// },
	});

	var SummonerIcons = Object.freeze([
		{
			"ID": -1,
			"Icon": "assets/summoner_icons/-1.png"
		},
		{
			"ID": 0,
			"Icon": "assets/summoner_icons/0.jpg"
		},
		{
			"ID": 1,
			"Icon": "assets/summoner_icons/1.jpg"
		},
		{
			"ID": 2,
			"Icon": "assets/summoner_icons/2.jpg"
		},
		{
			"ID": 3,
			"Icon": "assets/summoner_icons/3.jpg"
		},
		{
			"ID": 4,
			"Icon": "assets/summoner_icons/4.jpg"
		},
		{
			"ID": 5,
			"Icon": "assets/summoner_icons/5.jpg"
		},
		{
			"ID": 6,
			"Icon": "assets/summoner_icons/6.jpg"
		},
		{
			"ID": 7,
			"Icon": "assets/summoner_icons/7.jpg"
		},
		{
			"ID": 8,
			"Icon": "assets/summoner_icons/8.jpg"
		},
		{
			"ID": 9,
			"Icon": "assets/summoner_icons/9.jpg"
		},
		{
			"ID": 10,
			"Icon": "assets/summoner_icons/10.jpg"
		},
		{
			"ID": 11,
			"Icon": "assets/summoner_icons/11.jpg"
		},
		{
			"ID": 12,
			"Icon": "assets/summoner_icons/12.jpg"
		},
		{
			"ID": 13,
			"Icon": "assets/summoner_icons/13.jpg"
		},
		{
			"ID": 17,
			"Icon": "assets/summoner_icons/17.jpg"
		},
		{
			"ID": 18,
			"Icon": "assets/summoner_icons/18.jpg"
		},
		{
			"ID": 19,
			"Icon": "assets/summoner_icons/19.jpg"
		},
		{
			"ID": 20,
			"Icon": "assets/summoner_icons/20.jpg"
		},
		{
			"ID": 21,
			"Icon": "assets/summoner_icons/21.jpg"
		},
		{
			"ID": 22,
			"Icon": "assets/summoner_icons/22.jpg"
		},
		{
			"ID": 23,
			"Icon": "assets/summoner_icons/23.jpg"
		},
		{
			"ID": 24,
			"Icon": "assets/summoner_icons/24.jpg"
		},
		{
			"ID": 26,
			"Icon": "assets/summoner_icons/26.jpg"
		},
		{
			"ID": 27,
			"Icon": "assets/summoner_icons/27.jpg"
		},
		{
			"ID": 28,
			"Icon": "assets/summoner_icons/28.jpg"
		},
		{
			"ID": 39,
			"Icon": "assets/summoner_icons/39.jpg"
		},
		{
			"ID": 502,
			"Icon": "assets/summoner_icons/502.jpg"
		},
		{
			"ID": 508,
			"Icon": "assets/summoner_icons/508.jpg"
		},
		{
			"ID": 518,
			"Icon": "assets/summoner_icons/518.jpg"
		},
		{
			"ID": 533,
			"Icon": "assets/summoner_icons/533.jpg"
		},
		{
			"ID": 538,
			"Icon": "assets/summoner_icons/538.jpg"
		},
		{
			"ID": 539,
			"Icon": "assets/summoner_icons/539.jpg"
		},
		{
			"ID": 543,
			"Icon": "assets/summoner_icons/543.jpg"
		},
		{
			"ID": 546,
			"Icon": "assets/summoner_icons/546.png"
		},
		{
			"ID": 550,
			"Icon": "assets/summoner_icons/550.png"
		},
		{
			"ID": 552,
			"Icon": "assets/summoner_icons/552.png"
		},
		{
			"ID": 555,
			"Icon": "assets/summoner_icons/555.jpg"
		},
		{
			"ID": 556,
			"Icon": "assets/summoner_icons/556.jpg"
		},
		{
			"ID": 579,
			"Icon": "assets/summoner_icons/579.png"
		},
		{
			"ID": 580,
			"Icon": "assets/summoner_icons/580.jpg"
		},
		{
			"ID": 582,
			"Icon": "assets/summoner_icons/582.jpg"
		},
		{
			"ID": 583,
			"Icon": "assets/summoner_icons/583.jpg"
		},
		{
			"ID": 585,
			"Icon": "assets/summoner_icons/585.jpg"
		},
		{
			"ID": 586,
			"Icon": "assets/summoner_icons/586.jpg"
		},
		{
			"ID": 588,
			"Icon": "assets/summoner_icons/588.png"
		},
		{
			"ID": 589,
			"Icon": "assets/summoner_icons/589.png"
		},
		{
			"ID": 590,
			"Icon": "assets/summoner_icons/590.png"
		},
		{
			"ID": 591,
			"Icon": "assets/summoner_icons/591.png"
		},
		{
			"ID": 592,
			"Icon": "assets/summoner_icons/592.png"
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