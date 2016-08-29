(function(angular) {
  'use strict';

  angular.module('repgo').controller('UserController', ctrl);

  ctrl.$inject = ['UserService', '$routeParams', '$location', 'MessageService'];

  function ctrl(userService, $routeParams, $location, messageService) {
    var vm = this;

    vm.init = function() {
      var _id = $routeParams.id;
      if(_id) {
        userService.getById(_id)
          .then(function(resp) {
            vm.user = resp.data;
          })
          .catch(function(err) {
            console.log(err);
          });
      } else {
        vm.user = {};
      }
    };

    vm.save = function(user) {
      userService.save(user)
        .then(function(resp) {
          $location.path('/users');
          messageService.show('Success Save!');
        })
        .catch(function(err) {
          messageService.show('Unespected Error!');
        });
    };

    vm.remove = function(id) {
      userService.remove(id)
        .then(function(resp) {
          $location.path('/users');
          messageService.show('Success Remove!');
        })
        .catch(function(err) {
          messageService.show('Unespected Error!');
        });
    }
  }

})(angular);
