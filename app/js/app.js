'use strict';


// Declare app level module which depends on filters, and services
angular.module('F1FeederApp', [
  'F1FeederApp.controllers',
  'F1FeederApp.services',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/drivers', {templateUrl: 'partials/drivers.html', controller: 'driversCtrl'});
  $routeProvider.when('/drivers/:id', {templateUrl: 'partials/driver.html', controller: 'driverCtrl'});
  $routeProvider.otherwise({redirectTo: '/drivers'});
}]);
