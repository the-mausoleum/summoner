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
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/",
				"Description": ""
			},
			"Q": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/",
				"Description": ""
			},
			"W": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/",
				"Description": ""
			},
			"E": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/",
				"Description": ""
			},
			"R": {
				"ID": "",
				"Name": "",
				"Icon": "assets/abilities/",
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