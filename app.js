var projectLios = angular.module('projectLios', ['ui.router']);

projectLios.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: "",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'body': {
        templateUrl: 'partials/home.html',
      },
    }
  });

  $stateProvider.state('posts', {
    url: "/posts",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'body': {
        templateUrl: 'partials/posts.html',
        controller: 'PostsCtrl'
      }
    }
  });

});
