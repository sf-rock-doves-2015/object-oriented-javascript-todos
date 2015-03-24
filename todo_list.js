// Object-Oriented JS Todos

var counter = 0;
var Task = function(description) {
  counter++;
  this.id = counter;
  this.description = description;
};

Task.prototype.completed = false;

var TodoList = function() {
  this.tasks = [];
};

TodoList.prototype.list = function() {
  for (var i=0; i<this.tasks.length; i++) {
    console.log(this.tasks[i].id + ". " + this.tasks[i].description);
  };
};

TodoList.prototype.add = function(description) {
  var task = new Task(description);
  this.tasks.push(task);
};

var findIndex = function(nameOfObject, myArray) {
  var indexWeWant;
  for (var i=0; i<myArray.length; i++) {
    if (myArray[i].description === nameOfObject) {
      indexWeWant = i;
    };
  };
  return indexWeWant;
};

TodoList.prototype.remove = function(nameOfTask) {
  var index = findIndex(nameOfTask, this.tasks);
  this.tasks.splice(index, 1)
};

TodoList.prototype.complete = function(nameOfTask) {
  var index = findIndex(nameOfTask, this.tasks);
  this.tasks[index].completed = true;
};

// Driver code

var myList = new TodoList();
myList

// ----------DEFAULT DRIVER CODE-----------

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
// breadTask.complete(); COMMENTED OUT FOR NOW

groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
// breadTask.remove(); COMMENTED OUT FOR NOW

groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}





