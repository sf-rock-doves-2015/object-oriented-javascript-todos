var counter = 0;

var Task = function(description) {
  this.id = counter++;
  this.description = description;
  this.completed = false;
};

var TodoList = function() {
  this.tasks = []
};

TodoList.prototype.add = function(description) {
  this.tasks.push(new Task(description));
};

TodoList.prototype.remove = function(task_id) {
  for (var i = 0; i < this.tasks.length; i++) {
    var item = this.tasks[i]
    if (task_id === item.id) {
      this.tasks.splice(i,1);
    }
  }
}

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
