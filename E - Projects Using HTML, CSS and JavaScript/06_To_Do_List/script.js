let sectionToAddTask = document.querySelector(".todo-list-elem");
let userTask = document.querySelector("#taskInput");
let addTaskButton = document.querySelector("#addList");

let taskArray = getUserTaskDataFromLocalStorage() || [];

function addTodoList(e) {
  e.preventDefault();
  let realTask = userTask.value.trim();
  userTask.value = "";

  if (realTask !== "" && !taskArray.includes(realTask)) {
    taskArray.push(realTask);
    taskArray = [...new Set(taskArray)];
    localStorage.setItem("usersTaskData", JSON.stringify(taskArray));
    showTaskOnPage(realTask);
  }
}

addTaskButton.addEventListener("click", (e) => {
  addTodoList(e);
});

function getUserTaskDataFromLocalStorage() {
  let originalUsersTask = JSON.parse(localStorage.getItem("usersTaskData"));
  return originalUsersTask;
}

function addDeletedTaskArrayToLocal(taskArray) {
  localStorage.setItem("usersTaskData", JSON.stringify(taskArray));
}
function iterateTask() {
  taskArray.forEach(function (task) {
    showTaskOnPage(task);
  });
}
iterateTask();

function showTaskOnPage(task) {
  let divElement = document.createElement("div");
  divElement.id = "task-main-div";
  divElement.innerHTML = `
        <li id="task-name">${task}</li>
        <button id="deleteBtn">Delete</button>
      `;
  sectionToAddTask.append(divElement);
}

sectionToAddTask.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.id === "deleteBtn") {
    deleteTask(e);
  }
});

function deleteTask(e) {
  e.preventDefault();
  let listItem = e.target;
  let taskName = listItem.previousElementSibling.innerText;
  let parentElement = listItem.parentElement;
  taskArray = taskArray.filter((curTask) => {
    return curTask !== taskName;
  });

  addDeletedTaskArrayToLocal(taskArray);
  parentElement.remove();
}
