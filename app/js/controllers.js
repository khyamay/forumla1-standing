'use strict';

/* Controllers */

angular.module('F1FeederApp.controllers', [])
  .controller('driversCtrl', ['$scope', 'ergastAPIService', function($scope, ergastAPIService) {
  	$scope.nameFilter = null;
  	$scope.driversList = [];

  	ergastAPIService.getDrivers().success(function (response){
  	$scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;

  	})
  }]);

 
