//Storage
function addTaskLocaly(task){
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    if (!tasks){
        tasks=[];
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks))
}

//completed
function markTaskCompleted(button) {
    const listItem = button.closest('.list-group-item');
    const index = Array.from(listItem.parentNode.children).indexOf(listItem);
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}


//Todo
const todoForm = document.getElementById('todoForm');

todoForm.addEventListener('submit', function(event){
    event.preventDefault();

    const subject = document.getElementById('todoSubject').value;
    const priority = document.getElementById('todoPriority').value;
    const dueDate = document.getElementById('todoDueDate').value;

    if(subject.trim()===''){
        alert('Enter information!');
        return;
    }

    const newTask = {
        subject: subject,
        priority: priority,
        dueDate: dueDate,
        completed: false
    };

    addTaskLocaly(newTask);

    displayTasks(); 
    todoForm.reset();
})

//Display inf
function displayTasks() {
    const todoList = document.getElementById('todoList');
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    todoList.innerHTML = ''; 

    if(tasks && tasks.length > 0){
        tasks.forEach(task => {
            if (!task.completed) {
                todoList.innerHTML +=`
                <li class="list-group-item">
                    <h5>${task.subject}</h5>
                    <p>Due date: ${task.dueDate}</p>
                    <p>Priority: ${task.priority}</p>
                    <button onclick="markTaskCompleted(this)" class="btn btn-success">Completed</button>
                </li>
                `;
            }
        });
    } else {
        todoList.innerHTML = '<li class="list-group-item">No tasks found</li>';
    }
}

// Display tasks
displayTasks();
