const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const inputBox = document.querySelector(".input-box");

addTaskBtn.addEventListener('click', () => {

    const taskContent = taskInput.value

    if (taskContent.trim() === '') {
        alert("Please Enter a Task...")
        return
    }

    const task = document.createElement('li')
    task.innerText = taskContent

    const checkBox = document.createElement('input')
    checkBox.type = 'checkbox'
    checkBox.classList = 'task-checkbox'
    checkBox.addEventListener('change', () => {
        if (checkBox.checked) {
            task.style.textDecoration = 'line-through'
        }

        else {
            task.style.textDecoration = 'none'
        }
    })
    task.insertBefore(checkBox, task.firstChild)

    const deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.innerText = "Delete";
    deleteTaskBtn.addEventListener("click", deleteTask);
    task.appendChild(deleteTaskBtn);
    
    task.classList.add('task')
    task.style.backgroundColor = `grey`; 
    taskList.appendChild(task)
    taskInput.value = ''
    
    if (taskCount > 1) {
        updateInputBoxHeight(task.offsetHeight + 5)
    } else {
        updateInputBoxHeight(task.offsetHeight)
    }
});


function deleteTask() {
    const taskItem = this.parentNode;
    const checkBox = taskItem.querySelector(".task-checkbox")

    if (!checkBox.checked) {
        alert("Please complete task")
        return
    }

    taskItem.remove();
    taskCount--;
    updateInputBoxHeight(-(taskItem.offsetHeight + 5));
}


  function updateInputBoxHeight(change) {
    const inputBoxHeight = inputBox.offsetHeight;
    const newInputBoxHeight = inputBoxHeight + change;
    inputBox.style.height = `${newInputBoxHeight}px`;
}

