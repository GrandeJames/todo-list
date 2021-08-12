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

  console.log(tasks);
}

// Adding is fine
// BUG REMOVED WRONG TASK WITH WRONG INDEX (1 instead of 3)

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
    tasksToAdd = getTodayTasks();
  } else {
    tasksToAdd = getProjectTasks(menuItemName);
  }
  appendTasks(tasksToAdd);
}

function getInboxTasks() {
  return tasks.filter(task => task.project === null);
}

import { isToday, parseISO } from "date-fns";

function getTodayTasks() {
  return tasks.filter(task => isToday(parseISO(task.dueDate)));
}

function getProjectTasks(projectName) {
  return tasks.filter(task => task.project === projectName);
}

function appendTasks(tasksToAdd) {
  tasksToAdd.forEach(task => loadTaskElement(task, tasks.indexOf(task)));
}

//index is wrong
//the index is the new array not the original array (tasksToAdd)
