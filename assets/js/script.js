var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// our function for creating a list item on click.
var createTaskHandler = function (event) {

    //clears out browser defaults to let the code run without refreshing
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
    //create list item
    var listItemEl = document.createElement('li');
    listItemEl.className = 'task-item'; // connects the styling from CSS

    //create div to hold task info and add to list item
    var taskInfoEl = document.createElement('div');
    taskInfoEl.className = 'task-info';// connects the styling from CSS


    //add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    //add the div to the list item
    listItemEl.appendChild(taskInfoEl);

    //add entire list item to list
    tasksToDoEl.appendChild(listItemEl);

};

//calling the actual function
formEl.addEventListener('submit', createTaskHandler);

