(function(angular) {
  'use strict';

  angular.module('repgo')
    .controller('UserListController', controller);

  controller.$inject = ['UserService', '$location', '$routeParams'];

  function controller(userService, $location, $routeParams) {
    var vm = this;

    vm.initList = function() {
      vm.name = $routeParams.name ? $routeParams.name : '';

      userService.getAll($routeParams).success(function(data) {
        vm.users = data;
      });
    };

    vm.search = function(name) {
      if(name == '') {
        $location.search({});
      } else {
        $location.search({ name: name });
      }
    };

    vm.edit = function(user) {
      $location.path('/user/' + user._id + '/edit');
    };

    vm.newUser = function() {
      $location.path('/user/new');
    };
  }

})(angular);
