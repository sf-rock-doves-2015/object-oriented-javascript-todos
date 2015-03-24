var TodoList = function() {

  var todoList = {};
  // var index = list.indexOf(taskObject)
  todoList.add = function(note) {

    taskObject = {
      //id:          index,
      description: note,
      completed:   false,
      complete: function() {
        this.completed = true;
      },
      remove: function() {
        this = undefined;
      }
    }
    this.tasks.push(taskObject)
  };

  todoList.list = function() {
    for (i=0;i<this.tasks.length; i++) {
      console.log(this.tasks[i])
    }
  }

  return todoList;
};

var TodoList = function() {
  this.tasks = [];
  this.id = 0;
}

TodoList.prototype.add = function(task) {
  // adds a task to your this.tasks
  // increment your this.id
  // set this.id to the task.id
  console.log("todolist add");
}

TodoList.prototype.remove = function(task) {
  // remove the task from your this.tasks
  //this.task
  console.log("todolist remove");
}



var Task = function(description, todolist) {
  this.description = description;
  this.todolist = todolist;
  this.id = null;
}

var cheeseTask = new Task(....);

Task.prototype.remove = function() {
  this.todolist.remove(this);
}



// Driver code


var groceryList = new TodoList();

groceryList.add("Milk");
groceryList.add("Bread");
groceryList.add("Egg");
groceryList.add("Almond");
groceryList.add("Kale");


var breadTask = groceryList.tasks[0]
breadTask.remove();


