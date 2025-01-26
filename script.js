
//    
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if the input field is empty
        if (taskText === '') {
            alert('Please enter a task.');
            return; // Exit the function if the input is empty
        }

        // Create a new <li> element for the task
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create a new button element for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove'; // Set button text
        removeButton.className = 'remove-btn'; // Add class for styling

        // Assign an onclick event to the remove button
        removeButton.addEventListener('click', function () {
            taskList.removeChild(taskItem); // Remove the task item
        });

        // Append the remove button to the task item
        taskItem.appendChild(removeButton);

        // Append the task item to the task list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Attach event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Attach event listener to the task input field for the 'Enter' key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') { // Check if the pressed key is "Enter"
            addTask(); // Call the addTask function
        }
    });
});
