angular.module('authModule')
.factory('authService', function($http, $cookies, $location) {
	var service = {};
	
	var removeToken = function() {
		$cookies.remove('uid');
		$cookies.remove('userEmail');
	}
	
	var saveToken = function(user) {
		$cookies.put('uid', user.id);
		$cookies.put('userEmail', user.email);
	}
	
	service.getToken = function() {
		var user = {};
		user.id = $cookies.get('uid');
		user.email = $cookies.get('userEmail');
		return user;
	}
	
	service.register = function(user) {
		return $http({
			method : 'POST',
			url : 'rest/auth/register',
			headers :  {
				'Content-Type' : 'application/json'
			},
			data : user
		})
		.then(function(response) {
			saveToken(response.data);
		})
		.catch(console.error)
	}
	
	service.login = function(user) {
		return $http({
			url : 'rest/auth/login',
			method : 'POST',
			headers : {
				'Content-Type' : 'application/json'
			},
			data : user
		})
		.then(function(response) {
			saveToken(response.data)
		})
		.catch(console.error)
	}
	
	service.logout = function() {
		return $http({
			url : 'rest/auth/logout',
			method : 'POST'
		})
		.then(function(response) {
			removeToken();
		})
	}
	
	return service;
})
