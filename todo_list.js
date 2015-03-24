var newTodoList = function() {
  this.tasks = [];
};

var Task = function(description, newTodolist) {
  this.description = description;
  this.completed = false;
  this.todolist = newTodolist;
};

Task.prototype.complete = function() {
  this.completed = true;
};
Task.prototype.remove = function () {
  index = this.tasks.indexOf(this.description);
  this.todolist.tasks.splice(index, 1);
};
newTodoList.prototype.add = function (new_task) {
  var new_task = new Task(new_task);
  this.tasks.push(new_task);
  new_task.id = this.tasks.indexOf(new_task) + 1;
};
newTodoList.prototype.list = function () {
  for (i=0;i<this.tasks.length; i++) {
    console.log(this.tasks[i]);
  }
};

var breadTask = new Task("bread");
var groceryList = new newTodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');
