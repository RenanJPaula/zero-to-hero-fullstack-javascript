(function(angular) {
  'use strict';

  angular.module('repgo').factory('MessageService', service);

  service.$inject = ['$rootScope'];

  function service($rootScope) {
    var svc = {};

    svc.show = function(message) {
      $rootScope.$broadcast('show-message', message);
    }

    return svc;
  }

})(angular);
