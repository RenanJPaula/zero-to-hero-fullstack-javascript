(function(angular) {
  'use strict';

  angular.module('repgo')
    .controller('UserListController', controller);

  controller.$inject = ['UserService', '$location'];

  function controller(userService, $location) {
    var vm = this;

    vm.initList = function() {
      userService.getAll().success(function(data) {
        vm.users = data;
      });
    };

    vm.edit = function(user) {
      $location.path('/user/' + user._id + '/edit');
    };
  }

})(angular);
