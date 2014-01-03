"use strict";

var App = angular.module('App', ['ngRoute']);

App.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		controller: 'Index',
		templateUrl: 'partials/index.html'
	})
	.when('/champions', {
		controller: 'ChampionList',
		templateUrl: 'partials/champion-list.html'
	})
	.when('/champions/:name', {
		controller: 'ChampionDetail',
		templateUrl: 'partials/champion-detail.html'
	})
	.when('/summoners', {
		controller: 'SummonerSearch',
		templateUrl: 'partials/summoner-search.html'
	})
	.when('/summoners/:region/:id', {
		controller: 'SummonerDetail',
		templateUrl: 'partials/summoner-detail.html'
	})
	.when('/summoners/:region/:id/stats', {
		controller: 'SummonerStats',
		templateUrl: 'partials/summoner-stats.html'
	})
	.otherwise({ redirectTo: '/' });

	// $locationProvider.html5Mode(true);
});