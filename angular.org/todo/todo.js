angular.module('todoApp', [])
    .controller('TodoListController', function(){
        var todoList = this;
        todoList.todos = [
            { text: 'grasp on Angular construct', done:true },
            { text: 'build new App', done:false}
        ];

        todoList.addTodo = function(){
            todoList.todos.push({ text: todoList.todoText, done:false});
            todoList.todoText = '';
        };
        todoList.remaining = function(){
            var count = 0;
            angular.forEach(todoList.todos, function(todo){
                count += todo.done ? 0 : 1;
            });
            return count;
        };
        todoList.archive = function(){
          var oldTodos = todoList.todos;
          todoList.todos = [];
          todoList.archived = [];
          angular.forEach(oldTodos, function(todo) {
              if (todo.done) todoList.archived.push(todo);
              if (!todo.done) todoList.todos.push(todo);
          });
        };
    })