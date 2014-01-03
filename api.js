angular.module('App').factory('API', function($http) {
	var region = "na";
	var versions = Object.freeze({
		"champion": "v1.1",
		"game": "v1.2",
		"league": "v2.2",
		"stats": "v1.2",
		"summoner": "v1.2",
		"team": "v2.2"
	});
	var key = "4e5378a0-1af3-41e2-a571-3723af9ab9e8"
	var baseURL = "https://prod.api.pvp.net/api/lol/" + region + "/";

	function GET(url) {
		// Return AJAX promise token
		return $http.get(baseURL + url + "?api_key=" + key);
	}

	var API = function() {};

	// Retrieve all champions
	API.getChampions = function() {
		return GET(versions["champion"] + "/champion");
	}

	// Get recent games by summoner ID
	API.getGames = function(id) {
		return GET(versions["games"] + "/game/by-summoner/" + id + "/recent");
	}

	// Retrieves league data for summoner, including leagues for all of summoner's teams
	API.getLeagues = function(id) {
		return GET(versions["league"] + "/league/by-summoner/" + id);
	}

	// Get player stats summaries by summoner ID. One summary is returned per queue type
	API.getStatsSummary = function(id) {
		return GET(versions["stats"] + "stats/by-summoner/" + id + "/summary");
	}

	// Get ranked stats by summoner ID. Includes statistics for Twisted Treeline and Summoner's Rift
	API.getRankedStats = function(id) {
		return GET(versions["stats"] + "stats/by-summoner/" + id + "/ranked");
	}

	API.Summoner = {};

	// Get mastery pages by summoner ID
	API.Summoner.getMasteries = function(id) {
		return GET(versions["summoner"] + "/summoner/" + id + "/masteries");
	}

	// Get rune pages by summoner ID
	API.Summoner.getRunes = function(id) {
		return GET(versions["summoner"] + "/summoner/" + id + "/runes");
	}

	// Get summoner by name
	API.Summoner.getByName = function(name) {
		return GET(versions["summoner"] + "/summoner/by-name/" + name);
	}

	// Get summoner by summoner ID
	API.Summoner.getByID = function(id) {
		return GET(versions["summoner"] + "/summoner/" + id);
	}

	// Get list of summoners by summoner IDs
	API.Summoner.getListByID = function(id_list) {
		return GET(versions["summoner"] + "/summoner/" + id_list + "/name")
	}

	// Retrieves teams for given summoner ID
	API.getTeams = function(id) {
		return GET(versions["team"] + "/team/by-summoner/" + id);
	}

	return API;
});