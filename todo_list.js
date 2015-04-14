var TodoList = function() {
  this.items = [];
  this.tasks = this.items
};

var Task = function(id, item, list_object){
  this.id = id,
  this.description = item,
  this.completed = false
};

Task.prototype.complete = function() {
  this.completed = true
};

Task.prototype.remove = function() {
  list_object.items.slice(id-1,1);
};

TodoList.prototype.add = function(item){
  id = this.items.length+1
  this.items.push(new Task(id,item,this));
};

TodoList.prototype.list = function(){
  for (i=0 ; i<this.items.length; i++) {
    console.log(this.items[i]);
  };
};

// TodoList.prototype.tasks = this.items;




// var breadTask = function()




// Driver code


// var todoList = newTodoList();


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
