

var TodoList = function(){
  this.tasks = []
  this.add = function(item){
    task = new Task(item, this);
    this.tasks.push(task)
  }
  this.list = function(){
    for (i=0; i<this.tasks.length; i++){
      console.log("id: " + i + " ");
      console.log(this.tasks[i]);
    }
  }
  this.indexOf = function(item) {
    for (i=0; i<this.tasks.length; i++){
      if (this.tasks[i].name === item){
        return i;
      }
    }
  }
  this.remove = function(index){
    this.tasks.splice(index, 1);
  }
  this.get = function(index) {
    return this.tasks[index].name;
  }

}

var Task = function(name, parent) {
  this.name = name;
  this.completed = false;
  this.complete = function() {
    return this.completed = true;
  }
  this.parent = parent;
  this.remove = function() {
    this.index_at_parent = this.parent.indexOf(this.name);
    this.parent.remove(this.index_at_parent);
  }
}

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

