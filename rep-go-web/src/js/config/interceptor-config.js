(function(angular) {
  'use strict';

  angular.module('repgo').config(config);

  config.$inject = ['$httpProvider'];

  function config($httpProvider) {
    $httpProvider.interceptors.push('BasicAuthInterceptor');
  }

})(angular);
