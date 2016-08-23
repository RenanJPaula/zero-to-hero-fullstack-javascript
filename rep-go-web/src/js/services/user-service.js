(function(angular) {
  'use strict';

  angular.module('repgo').factory('UserService', service);

  service.$inject = ['$http', 'API'];

  function service($http, API) {
    var svc = {};

    svc.save = function(user) {
      return $http.post(API.user, user);
    };

    svc.getAll = function() {
      return $http.get(API.user);
    };

    return svc;
  }

})(angular);
