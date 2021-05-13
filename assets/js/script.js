var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// our function for creating a list item on click.
var createTaskHandler = function () {

    //clears out browser defaults to let the code run without refreshing
    event.preventDefault();

    var listItemEl = document.createElement('li');
    listItemEl.className = 'task-item';
    listItemEl.textContent = "This is a new task!";
    tasksToDoEl.appendChild(listItemEl);

    
};

//calling the actual function
formEl.addEventListener('submit', createTaskHandler);

