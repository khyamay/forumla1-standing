'use strict';

/* Controllers */

angular.module('F1FeederApp.controllers', [])
  .controller('driversCtrl', ['$scope', function($scope) {
  	$scope.driversList = [
  	{
  		Driver: {
  			givenName: 'Sebastian',
  			familyName: 'Vettel'
  		},
  		points: 322,
  		natinality: 'German',
  		Contstructors: [
  		{
  			name: 'Red Bull'
  		}]
  	},{
  	Driver: {
  			givenName: 'Fernando',
  			familyName: 'Alonso'
  		},
  		points: 207,
  		natinality: 'Spanish',
  		Contstructors: [
  		{
  			name: 'Ferrari'
  		}]
		}
  	];
  }]);

 
