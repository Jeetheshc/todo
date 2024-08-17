

function loadCSS(filename) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = filename;
    document.head.appendChild(link);
}

loadCSS('style.css');
let tasks = [];
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center task-item';
        li.textContent = task;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm';
        deleteBtn.innerHTML = '<i class="bi bi-trash"></i>';
        deleteBtn.onclick = () => deleteTask(index);

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDescription = taskInput.value.trim();

    if (taskDescription !== '') {
        tasks.push(taskDescription);
        taskInput.value = '';
        renderTasks();
    } else {
        alert('Task description cannot be empty.');
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

document.getElementById('addTaskBtn').addEventListener('click', addTask);
