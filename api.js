App.factory('API', function($http) {
	var region = "na";
	var version = "v1.1"
	var key = "?api_key=4e5378a0-1af3-41e2-a571-3723af9ab9e8"
	var baseURL = "https://prod.api.pvp.net/api/lol/" + region + "/" + version;

	function GET(url) {
		// Return AJAX promise token
		return $http.get(baseURL + url + key);
	}

	var API = function() {};

	// Retrieve all champions
	API.getChampions = function() {
		return GET("/champion");
	}

	// Get recent games by summoner ID
	API.getGames = function(id) {
		return GET("/game/by-summoner/" + id + "/recent");
	}

	API.Summoner = {};

	// Get summoner by name
	API.Summoner.getByName = function(name) {
		return GET("/summoner/by-name/" + name);
	}

	// Get summoner by summoner ID
	API.Summoner.getByID = function(id) {
		return GET("/summoner/" + id);
	}

	API.Summoner.getListByID = function(id_list) {
		return GET("/summoner/" + id_list + "/name")
	}

	// Get mastery pages by summoner ID
	API.Summoner.getMasteries = function(id) {
		return GET("/summoner/" + id + "/masteries");
	}

	// Get rune pages by summoner ID
	API.Summoner.getRunes = function(id) {
		return GET("/summoner/" + id + "/runes");
	}

	return API;
});