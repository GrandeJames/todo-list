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

import { addTask, getTaskAtIndex, getTaskId } from "./tasks";

function addSubmitTaskBtnListener(projectName) {
  addClickListener("#submit-task-creation-button", () => {
    const titleInput = document.getElementById("title-input");
    const descriptionInput = document.getElementById("description-input");

    let task = new Task(titleInput.value, descriptionInput.value);
    addTask(task);

    addTaskItem(task, getTaskId(task));
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

function addCancelEditTaskListener(element) {
  addClickListener("#cancel-task-creation-button", () => {
    removeTaskCreation();
    toggleElement(element);
  });
}

export function addEditTaskListener(element) {
  element.addEventListener("click", () => {
    addEditTask(element, getTaskAtIndex(element.id));
    toggleElement(element);
    addCancelEditTaskListener(element);
  });
}

export function hideOnClickOutside() {
  const outsideClickListener = event => {
    if (event.target.closest("#task-creation-container") === null) {
      //removeClickListener();
      console.log("test1");
    } else {
      console.log("test2");
    }
  };

  const removeClickListener = () => {
    document.removeEventListener("click", outsideClickListener);
  };

  document.addEventListener("click", outsideClickListener);
}

function addClickListener(selector, callback) {
  document.querySelector(selector).addEventListener("click", callback);
}
