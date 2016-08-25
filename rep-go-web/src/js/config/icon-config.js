(function(angular) {
  'use strict';

  angular.module('repgo').config(config);

  config.$inject = ['$mdIconProvider'];

  function config($mdIconProvider) {
    $mdIconProvider
      .icon('navigation:menu', 'src/img/icons/ic_menu.svg', 24)
      .icon('content:add', 'src/img/icons/ic_add.svg', 24)
      .icon('social:people', 'src/img/icons/ic_people.svg', 24);
  }

})(angular);
