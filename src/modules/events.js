import { loadInboxContent } from "./contents/inbox.js";
import { loadTodayContent } from "./contents/today.js";
import { loadTaskCreation, removeTaskCreation } from "./task-creation.js";
import { toggleSidebar } from "./sidebar.js";

// Delete later
import { addTask, Task } from "./task.js";

export function addMenuBtnListener() {
  addClickListener("#menu-button", toggleSidebar);
}

export function addInboxBtnListener(parentElement) {
  addClickListener("#inbox-container", () => loadInboxContent(parentElement));
}

export function addTodayBtnListener(parentElement) {
  addClickListener("#today-container", () => loadTodayContent(parentElement));
}

export function addNewTaskBtnListener(parentElement) {
  addClickListener("#new-task-button", () => {
    loadTaskCreation(parentElement);
    addCancelTaskCreationListener();

    let constObj = new Task("this is title", "the desc");
    console.log(constObj.title);
    addTask(document.querySelector("#tasks-container"), constObj);
  });
}

function addCancelTaskCreationListener() {
  addClickListener("#cancel-task-creation-button", removeTaskCreation);
}

function addClickListener(selector, callback) {
  document.querySelector(selector).addEventListener("click", callback);
}
