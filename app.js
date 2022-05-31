// Selectors
const taskInput = document.querySelector(".task-input input");
const filters = document.querySelector(".filters span");
const clearAll = document.querySelector(".clear-btn");
const taskBox = document.querySelector(".task-box");

// Getting localstorage todo-list
let todos = JSON.parse(localStorage.getItem("todo-list"));

taskInput.addEventListener("keyup", (e) => {
  let userTask = taskInput.value.trim();
  if (e.key == "Enter" && userTask) {
    if (!todos) {
      //if todo is not existed, pass an empty array to todos
      todos = [];
    }
    taskInput.value = "";
    let taskInfo = { name: userTask, status: "pending" };
    todos.push(taskInfo); //adding new task to todos
    localStorage.setItem("todo-list", JSON.stringify(todos));
  }
});
