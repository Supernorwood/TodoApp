angular.module('appModule')
.component('todoList', {
    templateUrl : 'app/appModule/todoList/todoList.component.html',
    
    
    controller : function(todoService, $filter) {
        var vm = this;
        
        vm.selected = null;
        
        vm.editTodo = null;

        var date = $filter('date')(Date.now(), 'MM/dd/yyyy');
        
        vm.todos = [];
        
        var reloadToDos = function(){
            todoService.index()    // returns promise of
                .then(function(response){         
                    vm.todos = response.data;
            });
        };
        
        reloadToDos();
        
        vm.todos = todoService.index();

        todoService.index()
 		.then(function(response){
 			console.log(response);
 			console.log(response.data);
 			vm.todos = response.data;
 			console.log(vm.todos);
 		})
 		
        
        

     
        
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
        

		// reloads index
		vm.reload = function() {
			todoService.index().then(function(res) {
				vm.todos = res.data;
			})
		}

		vm.reload();
        
//        var generateId = function() {
//            return vm.todos[vm.todos.length-1].id + 1;
//        }
        
        vm.countTodos = function() {
            return vm.todos.length;
        }
        
     // create
		vm.addTask = function(newTask) {
			newTask.completed = false;
			newTask.description = '';

			var res = todoService.create(newTask);

			res.then(function(res) {
			
				vm.reload();
			})
		}
		
		// Update
		vm.updateTodo = function(todo) {

			console.log(todo);
			var res = todoService.update(todo);

			res.then(function(res) {
				vm.selected = res.data;
				vm.editTodo = null;
				vm.reload();
			})

		}
		



		// Delete
		vm.deleteTodo = function(tid) {
			var res = todoService.destroy(tid);

			res.then(function(res) {
				vm.reload();
			})
		}
        
    },
    controllerAs : 'vm'
});