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
			"ID": 579,
			"Icon": "assets/summoner_icons/ProfileIcon_Tome.png"
		},
		{
			"ID": 588,
			"Icon": "assets/summoner_icons/ProfileIcon_Poro.png"
		},
		// {

		// },
	]);

	return {
		"Regions": Regions,
		"SummonerIcons": SummonerIcons,
	}
});