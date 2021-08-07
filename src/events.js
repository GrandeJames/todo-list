import { loadInbox } from "./contents/inbox.js";
import { loadToday } from "./contents/today.js";
import { loadTaskCreation, removeTaskCreation } from "./task-creation.js";
import { toggleSidebar } from "./components/sidebar.js";

export function addMenuBtnListener() {
  addClickListener("#menu-button", toggleSidebar);
}

export function addInboxBtnListener(parentElement) {
  addClickListener("#inbox-container", () => loadInbox(parentElement));
}

export function addTodayBtnListener(parentElement) {
  addClickListener("#today-container", () => loadToday(parentElement));
}

export function addNewTaskBtnListener(parentElement) {
  addClickListener("#new-task-button", () => {
    console.log("clicked");
    loadTaskCreation(parentElement);
    addCancelTaskCreationListener();
  });
}

function addCancelTaskCreationListener() {
  console.log("loaded");
  addClickListener("#cancel-task-creation-button", removeTaskCreation);
  console.log("loaded2");
}

function addClickListener(selector, callback) {
  document.querySelector(selector).addEventListener("click", callback);
}
