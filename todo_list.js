var Task = function(todoList, description) {
  this.id = Task.counter++;
  this.todoList = todoList;
  this.description = description;
  this.completed = false;
};

Task.counter = 0;

Task.prototype = {
  complete: function() {
    this.completed = true
  },

  remove: function() {
    this.todoList.remove(this)
  }
}



var TodoList = function() {
  this.tasks = [];
};

TodoList.prototype = {
  add: function(description){
    this.tasks.push(new Task(this, description))
    return this.tasks
  },

  list: function() {
    for (var i=0; i<this.tasks.length; i++) {
      console.log(this.tasks[i])
    }
  },

  remove: function(task){
    var index = this.tasks.indexOf(task)
    if (index !== -1) {this.tasks.splice(index, 1);}
  }
};

// groceryList.list();


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


