(function(angular) {
  'use strict';

  angular.module('repgo').config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
    $routeProvider.when('/user/new', {
      templateUrl: 'src/view/user.html',
			controller: 'UserController',
			controllerAs: 'userCtrl'
    }).when('/users', {
      templateUrl: 'src/view/users.html'
    });
  }

})(angular);
