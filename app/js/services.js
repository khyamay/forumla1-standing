'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('F1FeederApp.services', []).
	factory('ergastAPIService', ['$http', function($http){
		var ergastAPI = {};

		ergastAPI.getDrivers = function(){
			return $http({
				method: 'JSONP',
        		url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
			});
		};

		ergastAPI.getDriversDetails = function(id){
			return $http({
				method: 'JSONP',
				url: 'http://ergast.com/api/f1/2013/drivers/' + id +'/driverStandings.json?callback=JSON_CALLBACK'
			})
		};

		ergastAPI.getDriverRaces = function (id){
			return $http({
				method: 'JSONP',
				url: 'http://ergast.com/api/f1/2013/drivers/' + id + '/results.json?callback=JSON_CALLBACK'
			})
		}

		return ergastAPI;
	}])
