function Index($scope, API) {
	
}

function ChampionList($scope, API) {
	var Champions = {};

	API.getChampions().success(function(data) {
		Champions = data.champions;
		var output = "";

		for (var i = 0; i < Champions.length; i++) {
			var champion = Champions[i].name.toLowerCase()
			var img_path = "assets/champions/" + champion + ".png";

			output += '<div id="' + champion + '"><a href="#/champions/' + champion + '"><img class="champions" src="' + img_path + '" alt="" width="64" height="64"</img></a></div>'
		}

		$('.champions').html(output);
	}).error(function(data) {
		console.log(data);
	});

	function imageExists(url) {
		var image = new Image();
		image.src = url;
		return image.height != 0;
	}
}

function ChampionDetail($scope, $routeParams, API) {
	$scope.Champion = {};
	$scope.Champion.Name = $routeParams.name;
}

function SummonerSearch($scope, $location, API, Enums) {
	$scope.Region = Enums.Regions[0];
	$scope.Regions = Enums.Regions;

	$scope.search = function() {
		API.Summoner.getByName($scope.Name).success(function(data) {
			window.location = "#/summoners/" + $scope.Region.ID + "/" + data.id;
			// $location.url($location.path());
		}).error(function(data) {
			console.log(data);
		});
	}
}

function SummonerDetail($scope, $routeParams, API, Enums) {
	$scope.Summoner = {};
	$scope.Summoner.ID = $routeParams.id;

	API.Summoner.getByID($scope.Summoner.ID).success(function(data) {
		console.log(data);
		$scope.Summoner = {
			"ID": data.id,
			"Name": data.name,
			"Region": Enums.Regions.filter(function(o) { return o.ID === $routeParams.region })[0].Name,
			"Level": data.summonerLevel,
			"Icon": Enums.SummonerIcons.filter(function(o) { return o.ID === data.profileIconId })[0].Icon
		}

		// API.getTeams($scope.Summoner.ID).success(function(data) {
		// 	console.log(data);
		// }).error(function(data) {
		// 	console.log(data);
		// });
	}).error(function(data) {
		console.log(data);
	});
}

function SummonerStats($scope, $routeParams, API, Enums) {
	$scope.Summoner = {};
	$scope.Summoner.ID = $routeParams.id;

	API.Summoner.getByID($scope.Summoner.ID).success(function(data) {
		console.log(data);
		$scope.Summoner = {
			"ID": data.id,
			"Name": data.name,
			"Region": Enums.Regions.filter(function(o) { return o.ID === $routeParams.region })[0].Name,
			"Level": data.summonerLevel,
			"Icon": Enums.SummonerIcons.filter(function(o) { return o.ID === data.profileIconId })[0].Icon
		}

		API.getRankedStats($scope.Summoner.ID).success(function(data) {
			console.log(data);
			for (var key in data.champions) {
				if (data.champions[key].id === 0) {
					var combined = data.champions[key].stats;
					break;
				}
			}

			$scope.Games = {
				"Total": combined.totalSessionsPlayed,
				"Wins": combined.totalSessionsWon
			}
		}).error(function(data) {
			console.log(data);
		});
	}).error(function(data) {
		console.log(data);
	});

	$scope.getWinRate = function() {
		if ($scope.Games) {
			return Math.round($scope.Games.Wins / $scope.Games.Total * 100);
		}

		return null;
	}
}