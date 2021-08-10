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

// Only projects are inbox and whatever made
function getProjectTasks(project) {}

// Today will just filter out the tasks due today
function getTodayTasks() {
  //tasks.filter(t)
}

export function getTasks() {
  return tasks;
}

import { getTaskItem } from "./task";

export function loadTasks() {
  const div = document.querySelector("#tasks-container");

  document.querySelector("#tasks-list").remove();

  const ul = document.createElement("ul");
  ul.id = "tasks-list";

  div.appendChild(ul);

  for (let i = 0; i < tasks.length; i++) {
    ul.appendChild(getTaskItem(tasks[i], i));
  }
}
