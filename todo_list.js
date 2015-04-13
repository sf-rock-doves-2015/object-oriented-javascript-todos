var counter = 0;

var Task = function(description, list) {
  this.id = counter++;
  this.description = description;
  this.completed = false;
  this.parent = list
};


var newTodoList = function() {
  this.tasks = [];
}

newTodoList.prototype.add = function(item) {
  this.tasks.push(new Task(item, this.tasks));
  }

newTodoList.prototype.list = function() {
  for (var i = 0; i < this.tasks.length; i++) {
    console.log(this.tasks[i]);
  }
};

Task.prototype.complete = function() {
  completed: true;
  };

Task.prototype.remove = function() {
  this.list.splice(this.id-1);
};



// Driver code


var groceryList = new newTodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// // tasks is now an array of Task objects
// groceryList.tasks //-> [Task, Task, Task]

groceryList.list();
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
