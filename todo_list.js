// Note we are using a JavaScript constructor now.

// Create a TodoList constructor factory:
var TodoList = function() {
  this.tasks=[];
};

TodoList.prototype.add = function(task_description){
  this.tasks.push(new Task(task_description));
  this.tasks[this.tasks.length-1].id = this.tasks.length-1;
}
 // creates a new task object and pushes it into the list of tasks array
  // it will be the last element in the array
  // go get that last element (our new task) & set its ID = to it's index in the array

TodoList.prototype.list = function(){
  this.tasks.forEach(function(task){
    console.log("Task" + task.id, "Description: " + task.description, "Completed: " +task.completed)
  });
}

TodoList.prototype.remove = function(task){
  var task_index = this.tasks.indexOf(task);
  delete this.tasks[task_index];
}

// ==========================================================
// Create a Task constructor factory:
var Task = function(task_description){
 this.completed = false;
 this.id;
 this.description = task_description;
};

Task.prototype.complete = function(){
  this.completed = true;
}

Task.prototype.remove = function(todo_list){
  var index = this.todoList.tasks.indexOf(todo_list)
  this.todoList.tasks.splice(index,1)
}

// ==========================================================
// DriverCode:
var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('milk');
groceryList.add('cheese');
groceryList.add('beer');
// =============================================================
// tasks is now an array of Task objects
//-> [Task, Task, Task]
groceryList.tasks

// =============================================================
groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// getting a task object
var breadTask = groceryList.tasks[0];

breadTask.id
//-> 1 (some unique numerical ID)
breadTask.description
//-> 'bread'
breadTask.completed
//-> false


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
