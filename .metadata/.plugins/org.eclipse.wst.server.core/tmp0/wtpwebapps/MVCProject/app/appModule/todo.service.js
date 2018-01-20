angular.module('appModule')
.factory('todoService', function($http, $filter, authService, $location) {
	var service = {};
	
	var checkLogin = function() {
		var user = authService.getToken();
		if (!user.id) {
			$location.path('/login')
			return;
		}
		return user;
	}
	
	service.index = function() {
		var user = checkLogin();
		
		if (!user) return;
		
		return $http({
			method : 'GET',
			url : 'rest/user/' + user.id + '/todo'
		});
	}
	
	service.create = function(todo) {
		var user = checkLogin();
		
		if (!user) return;
		return $http({
			method : 'POST',
			url : 'rest/user/' + user.id + '/todo',
			header : {
				'Content-Type' : 'application/json'
			},
			data : todo
		})
	}
	
	service.update = function(edittedTodo) {
		var user = checkLogin();
		
		if (!user) return;
		if (edittedTodo.completed && !edittedTodo.completeDate) {
			edittedTodo.completeDate = $filter('date')(Date.now(), 'MM/dd/yyyy');
		}
		if (!edittedTodo.completed && edittedTodo.completeDate) {
			edittedTodo.completeDate = "";
		}
		
		return $http({
			method : 'PUT',
			url : 'rest/user/'+ user.id +'/todo/' + edittedTodo.id,
			headers : {
				'Content-Type' : 'application/json'
			},
			data : edittedTodo
		})
	}
	
	service.destroy = function(id) {
		var user = checkLogin();
		
		if (!user) return;
		return $http({
			method : 'DELETE',
			url : 'rest/user/'+ user.id +'/todo/' + id
		})
	}
	
	service.show = function(id) {
		var user = checkLogin();
		
		if (!user) return;
		return $http({
			method : 'GET',
			url : 'rest/user/'+ user.id +'/todo/' + id
		})
	}
	
	return service;
})