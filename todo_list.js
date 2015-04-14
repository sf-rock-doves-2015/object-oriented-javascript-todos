
// var createTodoList = function() {
//   var todoList = {
//     tasks: [],

//     add: function(item) {
//       this.tasks.push({description: item, completed: false});
//     },

//     list: function() {
//       for (i=0; i<this.tasks.length; i++) {
//         console.log(this.tasks[i]);
//       }
//     },

//     indexOf: function(item){
//       for(var i = 0; i < this.tasks.length; i++){
//         if (this.tasks[i].description === item) return i
//       }
//     },

//     get: function(index) {
//       console.log(this.tasks[index])
//     },

//     complete: function(index) {
//       this.tasks[index].completed = true
//     },

//     remove: function(index) {
//       this.tasks.splice(index,1)
//     },

//   };
//   return todoList;
// };
// var newTodoList = function() {
  var Task = function(todoList, description){
    this.id = Task.last_id_number++;
    this.description = description;
    this.completed = false;
    this.todoList = todoList;
  };

  Task.prototype.complete = function(){
    this.completed = true;
  };

  Task.last_id_number = 0;

  var TodoList = function(){
    this.tasks = [];
  };

  TodoList.prototype.add = function(item){
    this.tasks.push(new Task(this, item));
  };

  TodoList.prototype.list = function(){
    for(var i = 0; i < this.tasks.length; i++) {
      console.log(this.tasks[i]);
    }
  }

  Task.prototype.remove = function(){
    this.todoList.tasks.splice(this.id - 1, 1)
  }



// };

// Driver code

// Note we are using a JavaScript constructor now.
var groceryList = new TodoList();

groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
groceryList.tasks //-> [Task, Task, Task]

groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// getting a task object
var breadTask = groceryList.tasks[0];

breadTask.id //-> 1 (some unique numerical ID)
breadTask.description //-> 'bread'
breadTask.completed //-> false


// This should complete the task
breadTask.complete();

groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
breadTask.remove();

groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}

// var todoList = newTodoList();
