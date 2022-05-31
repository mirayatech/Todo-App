// Selectors
const taskInput = document.querySelector(".task-input input");
const filters = document.querySelector(".filters span");
const clearAll = document.querySelector(".clear-btn");
const taskBox = document.querySelector(".task-box");

// Getting localstorage todo-list
let todos = JSON.parse(localStorage.getItem("todo-list"));

// Show the todos inside the taskBox (that are in the local storage)
function showTodo() {
  let li = "";
  if (todos) {
    todos.forEach((todo, id) => {
      li += `<li class="task">
      <label for="${id}">
          <input onclick="updateStatus(this)" type="checkbox" id="1" />
          <p>${todo.name}</p>
      </label>
      <!-- settings -->
      <div class="settings">
          <i class="fa-solid fa-ellipsis"></i>
          <ul class="task-menu">
              <li><i class="fa-solid fa-pen"></i>Edit</li>
              <li><i class="fa-regular fa-trash-can"></i>Delete</li>
          </ul>
      </div>
  </li>`;
    });
  }

  taskBox.innerHTML = li;
}

// Every ime we write and hit enter ,we add to the localstorage
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
    showTodo();
  }
});
