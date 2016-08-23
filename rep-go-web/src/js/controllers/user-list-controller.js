(function(angular) {
  'use strict';

  angular.module('repgo')
    .controller('UserListController', controller);

  controller.$inject = ['$scope', 'UserService'];

  function controller($scope, userService) {

    $scope.initList = function() {
      userService.getAll().success(function(data) {
        $scope.users = data;
      });
    };

  }

})(angular);
