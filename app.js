"use strict";

var App = angular.module("App", ["ngRoute"]);

App.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		controller: 'Index',
		templateUrl: 'partials/index.html'
	})
	.when('/champions', {
		controller: 'ChampionList',
		templateUrl: 'partials/champion-list.html'
	})
	.otherwise({ redirectTo: '/' });
});