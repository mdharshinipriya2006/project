
function addTask() {

    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;
    span.className = "task-text";

    // Task buttons
    const buttons = document.createElement("div");
    buttons.className = "task-buttons";

    // Complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Done";
    completeBtn.className = "complete-btn";

    completeBtn.onclick = function () {
        span.classList.toggle("completed");
    };

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function () {
        li.remove();
        checkEmpty();
    };

    buttons.appendChild(completeBtn);
    buttons.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(buttons);

    taskList.appendChild(li);

    input.value = "";

    checkEmpty();
}

function checkEmpty() {

    const taskList = document.getElementById("taskList");

    const emptyMessage = document.getElementById("emptyMessage");

    if (taskList.children.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
}

// Add task using Enter key
document.getElementById("taskInput").addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        addTask();
    }

});
