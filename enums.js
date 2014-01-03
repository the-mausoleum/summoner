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

	var SummonerIcons = Object.freeze([
		{
			"ID": 7,
			"Icon": "assets/summoner_icons/ProfileIcon08.jpg"
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
			"ID": 579,
			"Icon": "assets/summoner_icons/ProfileIcon_Tome.png"
		},
		{
			"ID": 588,
			"Icon": "assets/summoner_icons/ProfileIcon_Poro.png"
		},
		{
			"ID": 591,
			"Icon": "assets/summoner_icons/ProfileIcon_Teemo.png"
		}
		// {
		// 	"ID": ,
		// 	"Icon": "assets/summoner_icons/"
		// },
	]);

	return {
		"Regions": Regions,
		"SummonerIcons": SummonerIcons,
	}
});