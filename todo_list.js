var Task = function(id, description, parent) {
  this.id = id;
  this.description = description;
  this.completed = false;
  this.parent = parent;
};

var TodoList = function() {
  this.tasks = [];
};

TodoList.prototype.add = function(description) {
  var id = this.tasks.length + 1;
  var parent = this;
  var newTask = new Task(id, description, parent);
  this.tasks.push(newTask);
};

TodoList.prototype.list = function() {
  return this.tasks;
};

Task.prototype.complete = function() {
  this.completed = true;
};

Task.prototype.remove = function() {
  var index = this.parent.tasks.indexOf(this);
  this.parent.tasks.splice(index, 1); //remove "this"
};

  // this.add = function(item) {
  //   this.todoItems.push({description: item, completed: false});
  // };

  // this.tasks = this.todoItems;

  // this.list = function() {
  //   this.todoItems
  // }
// };



// Driver code


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
