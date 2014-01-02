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

function Index($scope, API) {

}

function ChampionList($scope, API) {
	var Champions = {};

	API.getChampions().success(function(data) {
		Champions = data.champions;
		var output = "";

		for (var i = 0; i < Champions.length; i++) {
			var img_path = "assets/champions/" + Champions[i].name + ".png";

			output += '<div id="' + Champions[i].name + '"><a href="#/champions/' + Champions[i].name + '"><img class="champions" src="' + img_path + '" width="64"</img></a></div>'
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

function SummonerSearch($scope, $location, API) {
	$scope.Region = Regions[0];
	$scope.Regions = Regions;

	$scope.search = function() {
		API.Summoner.getByName($scope.Name).success(function(data) {
			window.location = "#/summoners/" + $scope.Region.ID + "/" + data.id;
			// $location.url($location.path());
		}).error(function(data) {
			console.log(data);
		});
	}
}

function SummonerDetail($scope, $routeParams, API) {
	$scope.Summoner = {};
	$scope.Summoner.ID = $routeParams.id;

	API.Summoner.getByID($scope.Summoner.ID).success(function(data) {
		console.log(data);
		$scope.Summoner = {
			"Name": data.name,
			"Region": Regions[$routeParams.region],
			"Level": data.summonerLevel
		}
	}).error(function(data) {
		console.log(data);
	});
}