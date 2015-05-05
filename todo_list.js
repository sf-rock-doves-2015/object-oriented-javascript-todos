var TodoList = function() {
	this.tasks = [];
};

TodoList.prototype = {
  add: function(new_item){
    new_task = new Task(new_item);
    this.tasks.push(new_task);
  },
   list: function(){
    for (var i = 0; i < this.tasks.length; i++){
      console.log(this.tasks[i]);
    };
  },
};

var Task = function(item) {
  // this.id = this.tasks.length + 1,
  this.description = item;
};

Task.prototype = {
  completed: false,
  complete: function(){
    this.completed = true
  },
};







  // indexOf: function(search_item){
  //   console.log(this.tasks.indexOf(search_item));

  // },

  // remove: function(index_of_item){
  //   this.tasks.splice(index_of_item,1);
  // },

  // complete: function(index_to_complete){
  //   this.tasks[index_to_complete].completedls = true;
  // },

  // get: function(index_of_item){
  //   console.log(this.tasks[index_of_item].description);
  // },




// // Driver code
var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// // tasks is now an array of Task objects
console.log(groceryList.tasks); //-> [Task, Task, Task]

groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// // getting a task object
var breadTask = groceryList.tasks[0];
console.log(breadTask);

// breadTask.id //-> 1 (some unique numerical ID)
// breadTask.description //-> 'bread'
// breadTask.completed //-> false


// // This should complete the task
// breadTask.complete();

// groceryList.list();
// //> Task {id: 1, description: 'bread', completed: true}
// //> Task {id: 2, description: 'cheese', completed: false}
// //> Task {id: 3, description: 'milk', completed: false}


// // This should remove the task from the todo list
// breadTask.remove();

// groceryList.list();
// //> Task {id: 2, description: 'cheese', completed: false}
// //> Task {id: 3, description: 'milk', completed: false}
