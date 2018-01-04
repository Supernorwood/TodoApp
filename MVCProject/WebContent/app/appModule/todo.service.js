angular.module('appModule')
.factory('todoService', function() {
  var service = {};

  // private
  var todos = [
      {
          id : 1,
          task : 'Go round mums',
          description : '',
          completed : true
        },
        {
          id : 2,
          task : 'Get Liz back',
          description : '',
          completed : false
        },
        {
          id : 3,
          task : 'Sort life out',
          description : '',
          completed :  false
        }
  ];

  // public
  service.index = function() {
    return todos;
  };

  service.create = function(todo) {
    todos.push(todo);
  };
  
  service.update = function(edittedTodo){
	  todos.forEach(function(todo, idx, array) {
          if (todo.id === edittedTodo.id) {
              array.splice(idx, 1, edittedTodo);
          }
      });

  }
  
  service.destroy = function(deleteTodo){
      todos.forEach(function(todo, idx, array) {
          if (todo.id === deleteTodo.id) {
              array.splice(idx, 1);
          }
      });
    }
  
  

  return service;
})
