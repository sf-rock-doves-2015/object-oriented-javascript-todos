var TodoList = function() {
	this.tasks = [];
};

var Task = function(item, list) {
  this.id = Task.lastID++;
  this.description = item;
  this.completed = false;
  this.list = list;
};
Task.lastID = 1;

TodoList.prototype.add = function(detail) {
  this.tasks.push(new Task(detail, this));
};

TodoList.prototype.list = function() {
  for (i = 0; i< this.tasks.length; i++) {
    console.log(this.tasks[i]);
  };
  // for (i=0; i < this.tasks.length; i ++) {
  //   for (var item in this.tasks) {
  //     item.id = i;
  //   };
  // }; <---- don't do this, assign Task.lastID every time you create a new Task in add function
};

Task.prototype.complete = function() {
  this.completed = true;
};

Task.prototype.remove = function() {
  var index = this.list.tasks.indexOf(this)
  this.list.tasks.splice(index,1);
  // for (i = 0; i < this.list.tasks.length; i++) {
  //   if (this.list.tasks[i].id === this.id) {
  //     this.list.tasks.splice(i,1);
  //   };
  // };
}


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

