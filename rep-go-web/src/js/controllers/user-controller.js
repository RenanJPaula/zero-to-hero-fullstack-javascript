(function(angular) {
  'use strict';

  angular.module('repgo').controller('UserController', ctrl);

  ctrl.$inject = ['$scope', 'UserService'];

  function ctrl($scope, userService) {
    $scope.user = {};

    $scope.save = function(user) {
      userService.save(user)
        .then(function(resp) {
          console.log(resp);
        })
        .catch(function(err) {
          console.log(err);
        });
    };
  }

})(angular);
