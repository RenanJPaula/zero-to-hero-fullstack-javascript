(function(angular) {
  'use strict';

  angular.module('repgo').controller('MenuController', ctrl);

  ctrl.$inject = ['$mdSidenav', '$location'];

  function ctrl($mdSidenav, $location) {
    var vm = this;

    vm.menuItens = [
      { name: 'Users', path: '/users', icon: 'social:people' }
    ];

    vm.toggle = function() {
      $mdSidenav('menu').toggle();
    };

    vm.show = function(path) {
      $mdSidenav('menu').toggle();
      $location.path(path);
    };

  }

})(angular);
