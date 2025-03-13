// add a task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
  
    const taskList = document.getElementById("taskList");
  
    // new list 
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${taskText}</span>
      <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;
  
    // Add task 
    taskList.appendChild(li);
  
    // Clear the input field
    taskInput.value = "";
  }
  
  // delete a task
  function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
  }