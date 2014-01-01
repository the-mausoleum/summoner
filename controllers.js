function Index($scope, API) {
	API.Summoner.getByName("MaxDeviant").success(function(data) {
		console.log(data);
	}).error(function(data) {
		console.log(data);
	});
}