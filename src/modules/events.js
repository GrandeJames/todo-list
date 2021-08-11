import {
  loadTaskCreation,
  removeTaskCreation,
  addEditTask,
} from "./task-creation";
import { toggleSidebar } from "./sidebar";
import { loadTaskElement, loadEditedTaskElement, Task } from "./task";
import { toggleElement } from "../components/toggleElement";
import {
  loadTasks,
  addTask,
  getTaskAtIndex,
  getTaskId,
  removeTaskAtIndex,
} from "./tasks";
import {
  handleAddProjectClick,
  handleCancelProjectCreation,
  handleAddProject,
} from "./project-creation";
import { loadContentSection } from "./content-section";

export function addMenuBtnListener() {
  const button = document.querySelector("#menu-button");
  addClickListener(button, toggleSidebar);
}

export function addMenuItemListener(menuItem) {
  addClickListener(menuItem, () => loadContentSection(menuItem));
}

export function addNewTaskBtnListener(projectName) {
  const button = document.querySelector("#new-task-button");

  addClickListener(button, () => {
    loadTaskCreation();
    addAddTaskBtnListener(projectName);
    addCancelTaskCreationListener();
  });
}

function addAddTaskBtnListener(projectName) {
  const button = document.querySelector("#submit-task-creation-button");

  addClickListener(button, () => {
    const titleInput = document.getElementById("title-input");
    const descriptionInput = document.getElementById("description-input");

    let task =
      projectName === "Today" || projectName === "Inbox"
        ? new Task(titleInput.value, descriptionInput.value)
        : new Task(titleInput.value, descriptionInput.value, projectName);

    addTask(task);
    // TODO: if task is defined in today, its due date should automatically be today, so add default value for that

    loadTaskElement(task, getTaskId(task));
    removeTaskCreation();
  });

  addInputListener(
    document.getElementById("title-input"),
    document.querySelector("#submit-task-creation-button")
  );
}

function addSaveTaskBtnListener(index) {
  const button = document.querySelector("#save-task-creation-button");

  addClickListener(button, () => {
    const titleInput = document.getElementById("title-input");
    const descriptionInput = document.getElementById("description-input");

    let task = getTaskAtIndex(index);
    task.title = titleInput.value;
    task.description = descriptionInput.value;

    loadEditedTaskElement(task, index, document.getElementById(index));

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
  const button = document.querySelector("#remove-task-button");

  addClickListener(button, () => {
    //removeTaskCreation(); // might not be needed
    removeTaskAtIndex(index);
    loadContentSection();
  });
}

function addInputListener(input, button) {
  input.addEventListener("input", () => {
    button.disabled = input.value.trim() === "" ? true : false;
  });
}

function addCancelTaskCreationListener() {
  const button = document.querySelector("#cancel-task-creation-button");
  addClickListener(button, removeTaskCreation);
}

function addCancelEditTaskListener(element) {
  const button = document.querySelector("#cancel-task-creation-button");

  addClickListener(button, () => {
    removeTaskCreation();
    toggleElement(element);
  });
}

export function addEditTaskListener(element) {
  addClickListener(element, () => {
    addEditTask(element, getTaskAtIndex(element.getAttribute("data-index")));
    toggleElement(element);
    addCancelEditTaskListener(element);
    addSaveTaskBtnListener(element.id);
    addRemoveTaskBtnListener(element.id);
  });
}

export function addAddProjectListener() {
  const button = document.querySelector("#add-project-button");

  addClickListener(button, () => {
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
  const button = document.querySelector("#cancel-project-creation-button");
  addClickListener(button, handleCancelProjectCreation);
}

function addAddProjectCreationBtnListener() {
  const button = document.querySelector("#add-project-creation-button");
  addClickListener(button, handleAddProject);
}

export function loadProjectListener(project) {
  addClickListener(project, () => {
    loadContentSection(project);
  });
}

function addClickListener(element, callbackFn) {
  element.addEventListener("click", callbackFn);
}
