

// id: 3, description: 'milk', completed: false
Task = function(id, name, parent){
    this.id = id
    this.description = name;
    this.completed = false;
    this.parent = parent;
  };

// Task.prototype = {
//   };

Task.prototype.complete = function(){
  this.completed = true;
};

Task.prototype.completed = function(){
  return this.completed;
};

Task.prototype.remove = function(){
};


TodoList = function(){
  // ???
  this.tasks = [];

};

TodoList.prototype.add = function(item){
      var id = this.tasks.length + 1;
      this.tasks.push(new Task(id, item, this ));

};

TodoList.prototype.list = function(){
      for(var i = 0; i < this.tasks.length; i++){
        console.log(this.tasks[i].description);
      };
},


TodoList.prototype.get = function(index){
      return this.tasks[index];
};

TodoList.prototype.complete = function(index_of_item){
      var item_hash = this.get(index_of_item);
      item_hash.completed = true;
};

TodoList.prototype.remove = function(item){
      this.tasks.splice(item, 1);
},

Task.prototype.remove = function(){
  this.parent.remove(this);
};




// Driver code


// var groceryList = new TodoList();

// my_task = new Task("hello", false);

// my_list = new TodoList();

// console.log("test list")
// console.log(my_list.tasks)

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


