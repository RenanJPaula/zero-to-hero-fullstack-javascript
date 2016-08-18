(function(angular) {
  'use strict'

  var app = angular.module('repgo', []);

  app.controller('UserController', function($scope) {
    $scope.usuarios = [];
    $scope.user = { nome: '', selecionado: false };

    $scope.add = function() {
      $scope.usuarios.push($scope.user);
      $scope.user = { nome: '', selecionado: false };
    };

    $scope.removerSelecionados = function() {
      $scope.usuarios = $scope.usuarios.filter(function(usuario) {
        return !usuario.selecionado;
      });
    };
  });

})(angular);
