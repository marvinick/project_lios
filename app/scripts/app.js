'use strict';

/**
 * @ngdoc overview
 * @name projectLiosApp
 * @description
 * # projectLiosApp
 *
 * Main module of the application.
 */
angular
  .module('projectLiosApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
