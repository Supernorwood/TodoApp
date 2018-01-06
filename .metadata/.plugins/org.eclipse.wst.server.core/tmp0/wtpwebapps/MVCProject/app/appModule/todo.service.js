angular.module('appModule')
.factory('todoService', function($http) {
  var service = {};
  
//  var BASE_URL = 'http://localhost:8080/MVCProject/rest/user';

  // private
  var todos = [];

  // public
  service.index = function() {
	    return $http({
	      method : 'GET',
	      url : 'http://localhost:8080/MVCProject/rest/user/1/todo'
	    })
	  };

	  service.create = function(todo) {
		    return $http({
		      method : 'POST',
		      url : 'http://localhost:8080/MVCProject/rest/user/1/todo',
		      headers : {
		        'Content-Type' : 'application/json'
		      },
		      data : todo
		    })
		  };
  
		  service.destroy = function(tid){
			
			  return $http({
			      method : 'DELETE',
			      url : 'http://localhost:8080/MVCProject/rest/user/1/todo/' + tid
			    })
			  
				
		  };
		  
		  
		  service.update = function(todos){

			  return $http({
			      method : 'PUT',
			      url : 'http://localhost:8080/MVCProject/rest/user/1/todo/' + todos.id, 
			      headers : {
			        'Content-Type' : 'application/json'
			      },
			      data : todos
			    })

			  };
  

  return service;
})
