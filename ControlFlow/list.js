var todos = ["Buy New Turtle"];
window.setTimeout(function() {
  // put all of your JS code from the lecture here

  var input = prompt("What would you like to do?");

  while(input !== "quit") {
  	//handle input
  	if(input === "list") {
  		listToDos();
  	} else if(input === "new") {
  		addToDo();
  	} else if(input === "delete") {
  		deleteToDo();
  	}
  	//ask again for new input
  	input = prompt("What would you like to do?");
  }
  console.log("OK, YOU QUIT THE APP");

  function listToDos() {
  	console.log("********")
  		todos.forEach(function(todo, i){
  			console.log(i + ": " + todo);
  		});
  		console.log("********")
  }

  function addToDo() {
  	//ask for new todo
  	var newToDo = prompt("Enter new todo");
  	//add to todos array
 	todos.push(newToDo);
 	console.log("Added ToDo");
  }

  function deleteToDo() {
  	//ask for index of ToDo to be deleted
  	var index =  prompt("Enter the index of the ToDo to delete");
	//delete that ToDo
	todos.splice(index, 1);
  	console.log("Deleted ToDo");
  }

}, 500);