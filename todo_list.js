function TodoList() {
	this.tasks = [];
}

TodoList.prototype.add = function(item) {
	var list_hash = {id: this.tasks.length + 1, description: item, completed: false};
	this.tasks.push(list_hash);
};

TodoList.prototype.list = function() {
	var count = 0

	for(var x = 0; x < this.tasks.length; x++) {
		console.log(this.tasks[x]);
	}
};

// prototype is an instance of the superclass and creates
// an instance of the object when a prototype function is
// added
// * objectplayground.com
//==========================================================
// Driver code

// Note we are using a JavaScript constructor now.
var groceryList = new TodoList();
console.log('=======todolist prototype======');
console.log(TodoList.prototype);
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
console.log('=======tasks======');
groceryList.tasks //-> [Task, Task, Task]

groceryList.list();
// //> Task {id: 1, description: 'bread', completed: false}
// //> Task {id: 2, description: 'cheese', completed: false}
// //> Task {id: 3, description: 'milk', completed: false}


// // getting a task object
var breadTask = groceryList.tasks[0];
// console.log(breadTask);

console.log('=======breadTask properties======');
console.log(breadTask.id) //-> 1 (some unique numerical ID)
console.log(breadTask.description) //-> 'bread'
console.log(breadTask.completed) //-> false


// // This should complete the task
breadTask.complete = function() {
	this.completed = true;
};
breadTask.complete()
// console.log(breadTask);

console.log('=======completes task======');
groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
breadTask.remove = function() {
	groceryList.tasks.splice(0, 1);
};

breadTask.remove();
console.log('=======breadTask removed======');
groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}