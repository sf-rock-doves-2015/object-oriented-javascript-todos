var TodoList = function() {
  this.tasks = []
};

var Task = function(id, food, list) {
  this.id = id;
  this.description = food;
  this.completed = false;
  this.list = list
};

TodoList.prototype = {
  add: function(food){
    this.tasks.push(new Task(this.tasks.length + 1, food, this))
  },

  list: function(){
    // for(var i = 0; i < this.tasks.length; i++)
    for(var i in this.tasks){
      console.log(this.tasks[i])
    };
  },
}

Task.prototype = {
  complete: function(){
    this.completed = true
  },

  remove: function(){
    this.list.tasks.splice(this.id - 1, 1)
  }
}




// Driver code

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
