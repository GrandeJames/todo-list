import { loadInbox } from "./contents/inbox.js";
import { loadToday } from "./contents/today.js";
import { addCreateTask } from "./create-task.js";
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
  addClickListener("#new-task-button", () => addCreateTask(parentElement));
}

function addClickListener(selector, callback) {
  document.querySelector(selector).addEventListener("click", callback);
}
