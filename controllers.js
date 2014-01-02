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
			var img_path = "assets/champions/" + Champions[i].name + ".png"

			if (imageExists(img_path)) {
				output += '<div id="' + Champions[i].name + '"><a href="#/champions/' + Champions[i].name + '"><img class="champions" src="' + img_path + '" width="64"</img></a></div>'
			} else {
				output += '<div id="' + Champions[i].name + '"><a href="#/champions/' + Champions[i].name + '"><img class="champions" src="assets/champions/Champion.png" width="64"</img></a></div>'
			}
			
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

function ChampionDetail($scope, API) {

}