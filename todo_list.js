
var TodoList = function() {
  this.tasks = []
};

// var todoList = new TodoList();

var Task = function(id, description){
  this.id = id
  this.description = description;
  this.completed = false;
};

TodoList.prototype.add = function(item) {
  id = this.tasks.length + 1
  var newTask = new Task(id, item);
  this.tasks.push(newTask);
};

TodoList.prototype.list = function(){
  for (i=0; i<this.tasks.length; i++){
    console.log("id: " + i + " ");
    console.log(this.tasks[i]);
  };
};

Task.prototype.complete = function() {
  this.completed = true;
};

Task.prototype.remove = function(){
  for (var i = 0; i < this.tasks.length; i++){
    if (this.tasks[i] === this){
      delete this.tasks[i];
    };
  };
};

var todoList = new TodoList();

