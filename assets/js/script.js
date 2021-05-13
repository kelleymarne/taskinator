var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// our function for creating a list item on click.
var createTaskHandler = function () {
    var listItemEl = document.createElement('li');
    listItemEl.className = 'task-item';
    listItemEl.textContent = "This is a new task!";
    tasksToDoEl.appendChild(listItemEl);
}

//calling the actual function
buttonEl.addEventListener('click', createTaskHandler);

