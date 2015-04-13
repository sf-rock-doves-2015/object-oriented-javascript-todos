var Task = function(index, item, parent) {
  this.id = index
  this.description = item
  this.completed = false
  this.parent = parent
}

var TodoList = function() {
  this.tasks = []
};

TodoList.prototype.add = function(item) {
  var index = this.tasks.length + 1;
  this.tasks.push(new Task(index, item, this));
}

TodoList.prototype.list = function() {
  for (i = 0; i < this.tasks.length; i++) {
    console.log(this.tasks[i]);
  }
}

Task.prototype.complete = function() {
  this.completed = true;
}

Task.prototype.remove = function() {
 list_array = this.parent.tasks
 for (var i=0;i<list_array.length;i++){
  if (list_array[i] === this){
    delete list_array[i]
  }
 }
}

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
