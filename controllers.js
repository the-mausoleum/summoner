function Index($scope, API) {
	// API.Summoner.getByName("MaxDeviant").success(function(data) {
	// 	console.log(data);
	// }).error(function(data) {
	// 	console.log(data);
	// });
API.getChampions().success(function(data) {
		console.log(data);
	}).error(function(data) {
		console.log(data);
	});
}

function ChampionList($scope, API) {
	var Champions = {};

	API.getChampions().success(function(data) {
		Champions = data.champions;
		var output = "";

		for (var i = 0; i < Champions.length; i++) {
			output += '<div id="' + Champions[i].name + '"><img src="assets/champions/' + Champions[i].name + ".png"  + '"</img>"></div>'
		}

		$('.champions').html(output);
	}).error(function(data) {
		console.log(data);
	});
}

function ChampionDetail($scope, API) {

}