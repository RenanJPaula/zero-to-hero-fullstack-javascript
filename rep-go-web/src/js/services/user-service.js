(function(angular) {
  'use strict';

  angular.module('repgo').factory('UserService', service);

  service.$inject = ['$http', 'API'];

  function service($http, API) {
    var svc = {};

    svc.save = function(user) {
      if(user._id) {
        return $http.put(API.user + user._id, user);
      } else {
        return $http.post(API.user, user);
      }
    };

    svc.getById = function(id) {
      return $http.get(API.user + id);
    };

    svc.getAll = function() {
      return $http.get(API.user);
    };

    svc.remove = function(id) {
      return $http.delete(API.user + id);
    };

    return svc;
  }

})(angular);
