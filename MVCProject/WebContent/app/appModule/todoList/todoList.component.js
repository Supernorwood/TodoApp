angular.module('appModule')
.component('todoList', {
    templateUrl : 'app/appModule/todoList/todoList.component.html',
    
    
    controller : function(todoService) {
        var vm = this;
        
        vm.selected = null;
        
        vm.editTodo = null;

        vm.todos = [];
        
        vm.todos = todoService.index();
//            {
//              id : 1,
//              task : 'Go round mums',
//              description : '',
//              completed : true
//            },
//            {
//              id : 2,
//              task : 'Get Liz back',
//              description : '',
//              completed : false
//            },
//            {
//              id : 3,
//              task : 'Sort life out',
//              description : '',
//              completed :  false
//            }
        
        
        vm.updateTodo = function() {
//                vm.todos.forEach(function(todo, idx, array) {
//                    if (todo.id === edittedTodo.id) {
//                        array.splice(idx, 1, edittedTodo);
//                    }
//                });
        			todoService.update(vm.editTodo);
//                vm.selected = vm.editTodo; 
                vm.editTodo = null;
        }
     
        
        vm.deleteTodo = function(todo){
        		todoService.destroy(todo);
        }
        
        vm.setEditTodo = function() {
                vm.editTodo = angular.copy(vm.selected);
        }
        
        vm.displayTable = function() {
            vm.selected = null;
        }
        
        vm.displayTodo = function(todo) {
                vm.selected = todo;
        }
        
        var generateId = function() {
            return vm.todos[vm.todos.length-1].id + 1;
        }
        
        vm.countTodos = function() {
            return vm.todos.length;
        }
        
        vm.addTodo = function(todo) {
            console.log(todo);
            var todo = angular.copy(todo);
            todo.id = generateId();
            todo.description = '';
            todo.completed = false;
            
            vm.todos.push(todo);
        }
        
    },
    controllerAs : 'vm'
});