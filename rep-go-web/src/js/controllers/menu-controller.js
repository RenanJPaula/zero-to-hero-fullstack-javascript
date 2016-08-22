(function(angular) {
  'use strict';

  angular.module('repgo').controller('MenuController', ctrl);

  ctrl.$inject = ['$scope', '$mdSidenav'];

  function ctrl($scope, $mdSidenav) {

    $scope.toggle = function() {
      $mdSidenav('menu').toggle();
    };

  }

})(angular);
