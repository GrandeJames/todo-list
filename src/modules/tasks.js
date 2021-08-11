import { loadTaskElement } from "./task";

let tasks = [];

export function addTask(task) {
  tasks.push(task);
}

export function getTaskId(task) {
  return tasks.indexOf(task);
}

export function getTaskAtIndex(index) {
  return tasks[index];
}

export function removeTaskAtIndex(index) {
  tasks.splice(index, 1);
}

export function getTasks() {
  return tasks;
}

export function loadTasks(name) {
  addEmptyTasksList();
  addTasksToTasksList(name);
}

function addEmptyTasksList() {
  document.querySelector("#tasks-list").remove();

  const ul = document.createElement("ul");
  ul.id = "tasks-list";

  document.querySelector("#tasks-container").appendChild(ul);
}

function addTasksToTasksList(menuItemName) {
  let tasksToAdd = [];
  if (menuItemName === "Inbox") {
    tasksToAdd = getInboxTasks();
  } else if (menuItemName === "Today") {
    // TODO
  } else {
    tasksToAdd = getProjectTasks(menuItemName);
  }
  appendTasks(tasksToAdd);
}

function getInboxTasks() {
  return tasks.filter(task => task.project === undefined);
}

function getProjectTasks(projectName) {
  return tasks.filter(task => task.project === projectName);
}

function appendTasks(tasksToAdd) {
  tasksToAdd.forEach((task, index) => loadTaskElement(task, index));
}
