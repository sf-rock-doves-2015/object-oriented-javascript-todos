var newTodoList = function() {
	this.tasks = [];
};

newTodoList.prototype.add = function(item_name) {
  this.tasks.push(new Task(this, item_name));
  task_num = this.tasks.length-1;
  this.tasks[task_num].id = task_num + 1;
};

newTodoList.prototype.list = function() {
  for(var i in this.tasks) {
    console.log(this.tasks[i]);
  };
};

var Task = function(todolist, item_name) {
  this.id;
  this.description = item_name;
  this.completed = false;
  this.todolist = todolist;
};

Task.prototype.complete = function() {
  this.completed = true;
};

Task.prototype.remove = function() {
  delete this.todolist.tasks[this.id-1];
};




// Driver code


// Note we are using a JavaScript constructor now.
var groceryList = new newTodoList();
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
