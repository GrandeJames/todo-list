import { loadInboxContent } from "./contents/inbox";
import { loadTodayContent } from "./contents/today";
import {
  loadTaskCreation,
  removeTaskCreation,
  addEditTask,
  hideTaskItem,
} from "./task-creation";
import { toggleSidebar } from "./sidebar";

import { inboxProject, todayProject } from "../components/initial-page-load";

import { projects } from "./projects";

// Delete later
import { addTaskItem, Task } from "./task.js";
import { toggleElement } from "../components/hide";

export function addMenuBtnListener() {
  addClickListener("#menu-button", toggleSidebar);
}

export function addInboxBtnListener(parentElement) {
  addClickListener("#inbox-container", () => loadInboxContent(parentElement));
}

export function addTodayBtnListener(parentElement) {
  addClickListener("#today-container", () => loadTodayContent(parentElement));
}

export function addNewTaskBtnListener(selector, projectName) {
  addClickListener("#new-task-button", () => {
    loadTaskCreation(selector);

    addSubmitTaskBtnListener(projectName);
    addCancelTaskCreationListener();
  });
}

function addSubmitTaskBtnListener(projectName) {
  addClickListener("#submit-task-creation-button", () => {
    const titleInput = document.getElementById("title-input");
    const descriptionInput = document.getElementById("description-input");

    let task = new Task(titleInput.value, descriptionInput.value);

    addTaskItem(task);
    addTaskToProject(task, projectName);
    removeTaskCreation();
  });

  addTitleInputListener();
}

function addTaskToProject(task, projectName) {
  projects.forEach(project => {
    if (project.name === projectName) {
      project.addTask(task);
    }
  });
}

function addTitleInputListener() {
  const titleInput = document.getElementById("title-input");

  titleInput.addEventListener("input", () => {
    const submitTaskCreationBtn = document.querySelector(
      "#submit-task-creation-button"
    );

    if (titleInput.value.trim() === "") {
      submitTaskCreationBtn.disabled = true;
    } else {
      submitTaskCreationBtn.disabled = false;
    }
  });
}

function addCancelTaskCreationListener() {
  addClickListener("#cancel-task-creation-button", removeTaskCreation);
}

// TODO: add the listener when the task-item is created
export function addEditTaskListenerWRONG() {
  addClickListener(".task-item", event => {
    addEditTask("#tasks-list");

    // TODO: Hide the particular clicked element
    console.log(event.target.parentElement.parentElement.parentElement);
    //hideTaskItem(event.target.parentElement.parentElement.parentElement);
  });
}

export function addEditTaskListener(element) {
  element.addEventListener("click", () => {
    console.log("test");
    addEditTask(element);
    toggleElement(element);
    // TODO: make the task creation container underneath the element, not on top of the buttons
    // TODO hide the buttons
    // TODO: make task creation use the task object from the clicked
  });
}

function addClickListener(selector, callback) {
  document.querySelector(selector).addEventListener("click", callback);
}
