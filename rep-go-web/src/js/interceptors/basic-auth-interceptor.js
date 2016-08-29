(function(angular) {
	'use strict';

	angular.module('repgo').factory('BasicAuthInterceptor', factory);

	factory.$inject = ['$q', '$window', '$cookies'];

  function factory($q, $window, $cookies) {
		var interceptor = {};

		function getCredentials() {
			$cookies.putObject('USER', { name:'dev', password:'dev' });

			var user = $cookies.getObject('USER');
			return user ? btoa(user.name + ':' + user.password) : '';
		}

		interceptor.request = function(config) {
      config.headers.Authorization = 'Basic ' + getCredentials();
			return config;
    };

		interceptor.responseError = function(rejection) {
			if(rejection.status === 401 || rejection.status === 403) {
				$window.location.href = 'login';
			}

			return $q.reject(rejection);
		};

		return interceptor;
  }

})(angular);
