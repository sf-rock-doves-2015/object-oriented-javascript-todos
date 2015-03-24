var Task = function(description) {
  this.id = Task.counter++;
  this.description = description;
  this.completed = false;
};

Task.counter = 0;

var TodoList = function() {
  this.tasks = [];
};

TodoList.prototype.add = function(description) {
  var task = new Task(description);
  this.tasks.push(task);
};


// Driver code


var grocerylist = new TodoList();


// // Note we are using a JavaScript constructor now.
var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// // tasks is now an array of Task objects
groceryList.tasks //-> [Task, Task, Task]

// groceryList.list();
// //> Task {id: 1, description: 'bread', completed: false}
// //> Task {id: 2, description: 'cheese', completed: false}
// //> Task {id: 3, description: 'milk', completed: false}


// // getting a task object
// var breadTask = groceryList.tasks[0];

// breadTask.id //-> 1 (some unique numerical ID)
// breadTask.description //-> 'bread'
// breadTask.completed //-> false


// // This should complete the task
// breadTask.complete();

// groceryList.list();
// //> Task {id: 1, description: 'bread', completed: true}
// //> Task {id: 2, description: 'cheese', completed: false}
// //> Task {id: 3, description: 'milk', completed: false}


// // This should remove the task from the todo list
// breadTask.remove();

// groceryList.list();
// //> Task {id: 2, description: 'cheese', completed: false}
// //> Task {id: 3, description: 'milk', completed: false}

