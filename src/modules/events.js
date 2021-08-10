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
import { addNewTaskItem, addEditedTaskItem, Task } from "./task.js";

import { loadTasks } from "./tasks";
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

import {
  addTask,
  getTaskAtIndex,
  getTaskId,
  getTasks,
  removeTaskAtIndex,
} from "./tasks";

function addSubmitTaskBtnListener(projectName) {
  addClickListener("#submit-task-creation-button", () => {
    const titleInput = document.getElementById("title-input");
    const descriptionInput = document.getElementById("description-input");

    let task = new Task(titleInput.value, descriptionInput.value);
    addTask(task);

    addNewTaskItem(task, getTaskId(task));
    addTaskToProject(task, projectName);
    removeTaskCreation();
  });

  addTitleInputListener(document.querySelector("#submit-task-creation-button"));
}

function addSaveTaskBtnListener(index) {
  addClickListener("#save-task-creation-button", () => {
    const titleInput = document.getElementById("title-input");
    const descriptionInput = document.getElementById("description-input");

    let task = getTaskAtIndex(index);
    task.title = titleInput.value;
    task.description = descriptionInput.value;

    addEditedTaskItem(task, index, document.getElementById(index));

    removeTaskCreation();

    document.getElementById(index).remove();
  });

  addTitleInputListener(document.querySelector("#save-task-creation-button"));
}

// RN
// TODO: WHEN I REMOVE SOMETHING, RELOAD THE CONTENT
// BUG: REMOVE BUTTON IS INSIDE THE ADD TASK CREATION
function addRemoveTaskBtnListener(index) {
  addClickListener("#remove-task-button", () => {
    // reload the page: remove the section then readd the section with the tasks
    console.log("BEFORE" + getTasks());
    removeTaskCreation();

    removeTaskAtIndex(index);
    console.log("AFTER" + getTasks());
    loadTasks();
  });
}

function addTaskToProject(task, projectName) {
  projects.forEach(project => {
    if (project.name === projectName) {
      project.addTask(task);
    }
  });
}

function addTitleInputListener(element) {
  const titleInput = document.getElementById("title-input");

  titleInput.addEventListener("input", () => {
    if (titleInput.value.trim() === "") {
      element.disabled = true;
    } else {
      element.disabled = false;
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
    addSaveTaskBtnListener(element.id);
    addRemoveTaskBtnListener(element.id);
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
