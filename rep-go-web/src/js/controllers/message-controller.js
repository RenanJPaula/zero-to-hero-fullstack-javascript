(function(angular) {
  'use strict';

  angular.module('repgo').controller('MessageController', ctrl);

  ctrl.$inject = ['$rootScope', '$mdToast'];

  function ctrl($rootScope, $mdToast) {
    var vm = this;

    $rootScope.$on('show-message', function(event, message) {
      $mdToast.showSimple(message);
    });
  }

})(angular);
