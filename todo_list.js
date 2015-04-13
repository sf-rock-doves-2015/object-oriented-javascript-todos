"use strict";

var Task = function (description, list) {
  this.id = TodoList.idtrack++;
  this.description = description;
  this.completed = false;
  this.list = list;   //this was key for making remove work.
};

Task.prototype.complete = function () {
  this.completed = true;
};

Task.prototype.remove = function () {
  this.list.remove(this.description);
};

var TodoList = function () {
  this.tasks = [];
  this.id = 0;
};

TodoList.prototype.idtrack = 1;

TodoList.prototype.add = function (task) {
  //for id, could also have use length of the tasks array to assign id.
    this.tasks.push(new Task(task, this))
};

TodoList.prototype.list = function () {
    for(var i=0; i<this.tasks.length; i++) {
      console.log(this.tasks[i]);
    }
};

TodoList.prototype.remove = function (item) {
  for(var i=0; i<this.tasks.length; i++ ) {
    if (this.tasks[i].description === item) { this.tasks.splice(i,1); }
  }
}


// Build this API:
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
