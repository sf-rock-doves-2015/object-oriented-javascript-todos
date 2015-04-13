var createTodoList = function() {
  var todoList = {};
  todoList.tasks = [];

  var Item = function(description, id, parent) {
    this.description = description;
    this.completed = false;
    this.parent = parent;
    this.id = id;
    this.remove = function() {
      var id = this.parent.indexOf(this.description);
      this.parent.remove(id);
    }
  };

  Item.prototype.complete = function() {
      this.completed = true;
  };


  todoList.add = function(item, id) {
    todoList.tasks.push(new Item(item, id, this));
  };

  todoList.list = function() {
    for(i=0; i < todoList.tasks.length; i++) {
      console.log(todoList.tasks[i]);
    };
  };

  todoList.indexOf = function(item) {
    for(i=0; i < todoList.tasks.length; i++) {
      if (todoList.tasks[i].description === item) {
        return i;
      }
    }
  };

  todoList.remove = function(index) {
    todoList.tasks.splice(index, 1);
  };

  todoList.get = function(index) {
    return this.tasks[index]
  };

  todoList.complete = function() {
    Item.completed = true
  };

  return todoList;
};





// Driver code


var groceryList = createTodoList();

groceryList.add('bread',1);
groceryList.add('cheese',2);
groceryList.add('milk',3);
groceryList.tasks
groceryList.list(); //-> [
// // {description: 'bread', completed: false},
// // {description: 'cheese', completed: false},
// // {description: 'milk', completed: false},
// // ];
var breadTask = groceryList.tasks[0];

breadTask.id //-> 1 (some unique numerical ID)
breadTask.description //-> 'bread'
breadTask.completed //-> false


// // This should complete the task
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




