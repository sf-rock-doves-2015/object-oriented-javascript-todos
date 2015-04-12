ID = 1
var newTodoList = function() {
	this.stuffToDo = []
};

var task = function(description, parent){
	this.id = ID++,
	this.description = description,
	this.completed = false,
	this.parentList = parent
}

task.prototype.complete = function(){
	this.completed = true;
}

task.prototype.remove = function(){
	this.parentList.stuffToDo.splice(this.id - 1, 1)
}

newTodoList.prototype.add = function(item){
	this.stuffToDo.push(new task(item, this))
}

newTodoList.prototype.list = function(){
	for(var i = 0; i < this.stuffToDo.length; i++){
		console.log(this.stuffToDo[i])
	}
}

// Driver code

var todoList = new newTodoList();
todoList.add('bread');
todoList.add('cheese');
todoList.add('milk');

// tasks is now an array of Task objects
todoList.stuffToDo //-> [Task, Task, Task]
todoList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}

// getting a task object
var breadTask = todoList.stuffToDo[0];
breadTask.id //-> 1 (some unique numerical ID)
breadTask.description //-> 'bread'
breadTask.completed //-> false

// This should complete the task
breadTask.complete();
console.log(breadTask.completed) //-> true
todoList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}

// This should remove the task from the todo list
breadTask.remove();
todoList.list();