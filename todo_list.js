Task = function(id, belongsTo, description, completed) {
  this.id = id;
  this.belongsTo = belongsTo;
  this.description = description;
  this.completed = completed;
  this.complete = function() {
    this.completed = true;
  };
  this.remove = function() {
    this.belongsTo.remove((this.id - 1))
  };
};

TodoList = function() {
  this.tasks = [];
};

TodoList.prototype = {

  add: function(task) {
    this.tasks.push(new Task((this.tasks.length + 1), this, task, false));
  },

  list: function() {
    for (i = 0; i < this.tasks.length; i++) {
      console.log(this.tasks[i]);
    };
  },

  remove: function(item_index) {
    this.tasks.splice(item_index, 1);
    return this.tasks;
  }

};



// Note we are using a JavaScript constructor now.
groceryList = new TodoList();

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
