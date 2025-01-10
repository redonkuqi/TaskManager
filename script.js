const taskList = document.getElementById('taskList');

function addTask(task) {
    const li = document.createElement('li');
    li.textContent = task;
    taskList.appendChild(li);
}

addTask('Sample Task');
