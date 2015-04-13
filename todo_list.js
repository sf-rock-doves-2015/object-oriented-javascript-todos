var newTodoList = function() {
	this.tasks = []
};

var id = 1

var task = function(item, taskList){
  this.id = id
  id = id + 1
  this.description = item
  this.completed = false
  this.List = taskList
}

task.prototype = {
  complete: function() {
    this.completed = true;
  },

  remove: function(){
    this.List.tasks.splice(this.id - 1, 1)
  }
}

newTodoList.prototype = {
  add: function(item) {
   this.tasks.push(new task(item, this))
 },

   list: function(){
    for(var i = 0; i < this.tasks.length; i++){
      console.log(this.tasks[i])
    }
  }
}
// Driver code

// Note we are using a JavaScript constructor now.
var groceryList = new newTodoList();
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

groceryList.list()