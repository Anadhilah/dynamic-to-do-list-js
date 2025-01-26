document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Retrieve tasks or initialize with an empty array
        storedTasks.forEach(taskText => addTask(taskText, false)); // Load tasks without re-saving them
    }

    // Function to save tasks to Local Storage
    function saveTasks() {
        const tasks = Array.from(taskList.children).map(taskItem => taskItem.textContent.replace('Remove', '').trim());
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Save tasks array to Local Storage
    }

    // Function to add a new task
    function addTask(taskText, save = true) {
        // Check if task text is provided
        if (!taskText.trim()) {
            alert('Please enter a valid task.');
            return;
        }

        // Create a new <li> element for the task
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create a new button element for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Assign an onclick event to the remove button
        removeButton.addEventListener('click', function () {
            taskList.removeChild(taskItem); // Remove task from DOM
            saveTasks(); // Update Local Storage
        });

        // Append the remove button to the task item
        taskItem.appendChild(removeButton);

        // Append the task item to the task list
        taskList.appendChild(taskItem);

        // Save tasks to Local Storage if `save` is true
        if (save) {
            saveTasks();
        }

        // Clear the input field
        taskInput.value = '';
    }

    // Attach event listener to the "Add Task" button
    addButton.addEventListener('click', function () {
        addTask(taskInput.value);
    });

    // Attach event listener to the task input field for the 'Enter' key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });

    // Load tasks from Local Storage on page load
    loadTasks();
});
