let takeInput = document.querySelector("#todo-input");
let addButton = document.querySelector("#add-btn");
let taskContainer = document.querySelector(".task-container");

function addTask() {
    let task = takeInput.value.trim();
    if(task === ""){
        takeInput.placeholder = "Please enter a task";
        takeInput.classList.add("error");
        takeInput.value = "";
        return;
    }

    // Creating the output field
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("added-task-container");

    // Creating the checkbox button
    let checkBox = document.createElement("i");
    checkBox.classList.add("fa-solid", "fa-check", "checkbox");

    // Creating the span for task output
    let taskSpan = document.createElement("span");
    taskSpan.classList.add("task-output");
    taskSpan.innerText = task;

    // Creating the edit button
    let editBtn = document.createElement("i");
    editBtn.classList.add("fa-regular", "fa-pen-to-square");
    editBtn.id = "edit-btn";

    // Creating the delete button
    let deleteBtn = document.createElement("i");
    deleteBtn.classList.add("fa-solid", "fa-trash");
    deleteBtn.id = "delete-btn";

    // Appending all elements
    taskDiv.appendChild(checkBox);
    taskDiv.appendChild(taskSpan);
    taskDiv.appendChild(editBtn);
    taskDiv.appendChild(deleteBtn);

    taskContainer.appendChild(taskDiv);

    // Reset input field
    takeInput.value = "";
    takeInput.placeholder = "Add a New Task...";
    takeInput.classList.remove("error");
    addButton.disabled = true;

   //Checkbox listener
checkBox.addEventListener("click", function () {
    taskSpan.classList.add("completed-task");
    checkBox.classList.add("checkbox-disabled");
     editBtn.disabled = true;
});

    //Edit button listener
   editBtn.addEventListener("click", () => {
  const currentText = taskSpan.textContent;
  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.value = currentText;
  inputField.classList.add("edit-input");

  taskDiv.replaceChild(inputField, taskSpan);
  inputField.focus();

  // ✅ Save on Enter key
  inputField.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const newText = inputField.value.trim();
      if (newText !== "") {
        taskSpan.textContent = newText;
        taskDiv.replaceChild(taskSpan, inputField);
      } else {
        alert("Task cannot be empty!");
        inputField.focus();
      }
    }
  });

  // ✅ Optional: Save on blur (user clicks outside)
  inputField.addEventListener("blur", () => {
    const newText = inputField.value.trim();
    if (newText !== "") {
      taskSpan.textContent = newText;
      taskDiv.replaceChild(taskSpan, inputField);
    }
  });
});

    //Delete button listener
    deleteBtn.addEventListener("click", function () {
     taskDiv.remove();
    });
}

// Add task on button click
addButton.addEventListener("click", function (event) {
   
    event.preventDefault();
    addTask();
});

//Input listener to enable/disable button
takeInput.addEventListener("input", function () {
    if (takeInput.value.trim() !== "") {
        addButton.disabled = false;
        takeInput.classList.remove("error");
    } else {
        addButton.disabled = true;
        takeInput.classList.add("error");
    }
});
