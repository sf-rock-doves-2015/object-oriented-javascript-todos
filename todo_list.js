var TodoList = function(name, tasks) {
  this.name = name;
  this.tasks = tasks || [];
};

TodoList.prototype.add = function(description, todolist) {
  this.tasks.push(new Task(description, this));
};

TodoList.prototype.list = function() {
  this.tasks.forEach(function(task, description, complete) {
    console.log(task.complete, task.description)
  } )
};

// TodoList.prototype.indexOf = function(description) {
//     for(var i = 0; i < this.tasks.length; i++){
//       this.tasks[i] === description
//     }
//   })
// };

var Task = function(description, todolist) {
  this.description = description;
  this.todolist = todolist
  this.id = Task.counter++;
  this.complete = false;
};

Task.counter = 1

Task.prototype.markComplete = function() {
  this.complete = true;
};

// Task.prototype.remove = function () {
//   this.todolist.remove(this);
// };

TodoList.prototype.removeLastOne = function(){
  var index =  -1;
  this.tasks.splice(index, 1);
};

TodoList.prototype.remove = function(desc) {
    for(var i = 0; i < this.tasks.length; i++) {
          if(this.tasks[i].description === desc) {
            this.tasks.splice(i, 1)
          };
    };
  };
// match description or id with task
// get the task list property
// access that list and remove the task from that list



// Task.prototype.find = this.tasks.forEach(function(el,index,array){
//     console.log("this element is " +el.description)
//   });
// Todo make forEach loop on this.tasks to get objects


// // Driver list
var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');
// groceryList.find('')

var breadTask = groceryList.tasks[0];

breadTask.id //-> 1 (some unique numerical ID)
breadTask.description //-> 'bread'
breadTask.completed //-> false


// var newTodoList = function() {
//   todoList = {};
//   todoList.tasks = [];
//   todoList.add = function(task){
//     todoList.tasks.push(new Task(name))
//   }
//   todoList.remove = function(task){
//     todoList.tasks.pop(this.task);
//   }
// };


// var Task = function(name){
//   this.complete = false;
//   this.name = name;
// }

// // Driver code


// var todoList =  new newTodoList("matt's todo");

// var carList = new newTodoList("car list");

// todoList.todoList

// todoList.add("walk the dog");
