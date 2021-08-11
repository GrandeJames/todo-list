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

import { getTaskItem } from "./task";

export function loadTasks(name) {
  addEmptyTasksList();
  addTasks(name);

  console.log({ tasks });
}

function addEmptyTasksList() {
  document.querySelector("#tasks-list").remove();

  const ul = document.createElement("ul");
  ul.id = "tasks-list";

  document.querySelector("#tasks-container").appendChild(ul);
}

function addTasks(menuItemName) {
  if (menuItemName === "Inbox") {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].project === undefined) {
        document
          .querySelector("#tasks-list")
          .appendChild(getTaskItem(tasks[i], i));
      }
    }
  } else if (menuItemName === "Today") {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].dueDate !== undefined) {
        // If due date is today
        // THIS CAN BE ANY TASK (ALL TASKS)
      }
    }
  } else {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].project === menuItemName) {
        document
          .querySelector("#tasks-list")
          .appendChild(getTaskItem(tasks[i], i));
      }
    }
  }
}

// Today will filter out all the tasks due today
