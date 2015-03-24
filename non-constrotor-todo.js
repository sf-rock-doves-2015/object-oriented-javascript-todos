var createTodoList = function() {
  var todoList = {};
  todoList.tasks = [];
  todoList.add = function(task) {
    this.tasks.push(task);
  };
  return todoList;
};

var createTask = function(name) {
  var task = {};
  task.complete = false;
  task.name = name;
  task.markComplete = function() {
    this.complete = true;
  };
};
