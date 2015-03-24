
var Task = function(todoList, description){
  this.todoList = todoList;
  this.id = Task.counter++;
  this.description = description;
  this.completed = false;
};

Task.counter = 1;

var TodoList = function(){
  this.tasks = [];
};

Task.prototype.complete = function(){
  this.completed = true
};

TodoList.prototype.add = function(description){
  var task = new Task(this, description);
  this.tasks.push(task);
};

Task.prototype.remove = function(){
  var index = this.todoList.tasks.indexOf(this);
  this.todoList.tasks.splice(index, 1);
};

TodoList.prototype.list = function(){
  for (i = 0; i < this.tasks.length; i++){
    console.log(this.tasks[i]);
  };
};



// Driver code


// Note we are using a JavaScript constructor now.
var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
groceryList.tasks //-> [Task, Task, Task]

// groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// // getting a task object
var breadTask = groceryList.tasks[0];

// breadTask.id //-> 1 (some unique numerical ID)
// breadTask.description //-> 'bread'
// breadTask.completed //-> false


// This should complete the task
breadTask.complete();

groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// // This should remove the task from the todo list
breadTask.remove();

groceryList.list();
// //> Task {id: 2, description: 'cheese', completed: false}
// //> Task {id: 3, description: 'milk', completed: false}
