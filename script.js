document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

       
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

       
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        
        removeButton.addEventListener('click', function () {
            taskList.removeChild(taskItem);
        });

       
        taskItem.appendChild(removeButton);

    
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Add event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Add event listener to the input field for the "Enter" key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
