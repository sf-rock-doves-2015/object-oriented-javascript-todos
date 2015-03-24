var counter = 0;

var Task = function(todoList, description) {
  this.id = counter++;
  this.description = description;
  this.completed = false;
  this.todolist = todoList;
};

Task.prototype.remove = function() {
  var index = this.todolist.tasks.indexOf(this);
  this.todolist.tasks.splice(index, 1);
};

Task.prototype.complete = function() {
    this.completed ? false : true
  };

var TodoList = function() {
  this.tasks = []
};

TodoList.prototype.add = function(description) {
  this.tasks.push(new Task(this, description));
  return this.tasks
};


TodoList.prototype.list = function() {
    for (var i = 0; i < this.tasks.length; i++) {
      console.log(this.tasks[i].id +". " + this.tasks[i].description);
      }
};

// Driver code


var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');
groceryList.tasks //-> [Task, Task, Task]

// groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// getting a task object
var breadTask = groceryList.tasks[0];

breadTask.id //-> 1 (some unique numerical ID)
breadTask.description
breadTask.remove();


// for (var i = 0; i < this.tasks.length; i++) {
//     var item = this.tasks[i]
//     if (task_id === item.id) {
//       this.tasks.splice(i,1);
