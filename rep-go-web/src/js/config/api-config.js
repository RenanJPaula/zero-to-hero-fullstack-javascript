(function(angular) {
  'use strict';

  var host = 'http://localhost:3000/';

  angular.module('repgo').constant('API', {
    user: host + 'user/'
  });

})(angular);
