(function(angular) {
  'use strict';

  angular.module('repgo').config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
    $routeProvider
      .when('/users', {
        templateUrl: 'src/view/users.html',
  			controller: 'UserListController',
  			controllerAs: 'vm'
      })
      .when('/user/new', {
        templateUrl: 'src/view/user.html',
  			controller: 'UserController',
  			controllerAs: 'vm'
      })
      .when('/user/:id/edit', {
        templateUrl: 'src/view/user.html',
  			controller: 'UserController',
  			controllerAs: 'vm'
      });
  }

})(angular);
