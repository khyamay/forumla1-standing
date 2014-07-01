'use strict';

/* Controllers */

angular.module('F1FeederApp.controllers', [])
  .controller('driversCtrl', ['$scope', 'ergastAPIService', function($scope, ergastAPIService) {
  	$scope.nameFilter = null;
  	$scope.driversList = [];

  	$scope.searchFilter = function (driver){
  		var keyword = new RegExp($scope.nameFilter, 'i');
  		return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
  	};


  	ergastAPIService.getDrivers().success(function (response){
  	$scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;

  	});

  }]).
  controller('driverCtrl', ['$scope','$routeParams', 'ergastAPIService', function($scope, $routeParams, ergastAPIService){
  	$scope.id = $routeParams.id;
  	$scope.races = [];
  	$scope.driver = null;

  	ergastAPIService.getDriversDetails($scope.id)
  		.success(function (response){
		$scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];   		

	});

  	ergastAPIService.getDriverRaces($scope.id)
  		.success(function (response){
  			$scope.races = response.MRData.RaceTable.Races;
  		});
  }]);

 
