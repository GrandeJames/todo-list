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

/*
  TODO: load the inbox content right away
  TODO: call addMenuItemListener whenever the button is made (inbox and today is initially. custom is whenever made)
*/

import { handleMenuItemClick } from "./content";

export function addMenuItemListener(menuItemElement) {
  menuItemElement.addEventListener("click", () =>
    handleMenuItemClick(menuItemElement)
  );
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

  addInputListener(
    document.getElementById("title-input"),
    document.querySelector("#submit-task-creation-button")
  );
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

  addInputListener(
    document.getElementById("title-input"),
    document.querySelector("#save-task-creation-button")
  );
}

// BUG: REMOVE BUTTON IS INSIDE THE ADD TASK CREATION
function addRemoveTaskBtnListener(index) {
  addClickListener("#remove-task-button", () => {
    removeTaskCreation();
    removeTaskAtIndex(index);
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

function addInputListener(input, button) {
  input.addEventListener("input", () => {
    if (input.value.trim() === "") {
      button.disabled = true;
    } else {
      button.disabled = false;
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

import {
  handleAddProjectClick,
  handleCancelProjectCreation,
  handleAddProject,
} from "./project-creation";

export function addAddProjectListener() {
  addClickListener("#add-project-button", () => {
    handleAddProjectClick();

    addInputListener(
      document.querySelector("#project-name-input"),
      document.querySelector("#add-project-creation-button")
    );
    addCancelProjectCreationBtnListener();
    addAddProjectCreationBtnListener();
  });
}

function addCancelProjectCreationBtnListener() {
  addClickListener(
    "#cancel-project-creation-button",
    handleCancelProjectCreation
  );
}

function addAddProjectCreationBtnListener() {
  addClickListener("#add-project-creation-button", handleAddProject);
}

function addClickListener(selector, callback) {
  document.querySelector(selector).addEventListener("click", callback);
}
