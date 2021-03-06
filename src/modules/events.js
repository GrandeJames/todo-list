import {
  loadTaskCreation,
  removeTaskCreation,
  addEditTask,
} from "./task-creation";
import { toggleSidebar } from "./sidebar";
import { loadTaskElement, loadEditedTaskElement, Task } from "./task";
import { toggleElement } from "../components/toggleElement";
import { addTask, getTaskAtIndex, getTaskId, removeTaskAtIndex } from "./tasks";
import {
  handleAddProjectClick,
  handleCancelProjectCreation,
  handleAddProject,
} from "./project-creation";
import { loadContentSection } from "./content-section";
import { getActiveMenuItem } from "./menu-item";

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
    loadTaskCreation(projectName);
    addAddTaskBtnListener(projectName);
    addCancelTaskCreationListener();
  });
}

function addAddTaskBtnListener(projectName) {
  const button = document.querySelector("#submit-task-creation-button");

  addClickListener(button, () => {
    const titleInputValue = document.getElementById("title-input").value;
    const descriptionInputValue =
      document.getElementById("description-input").value;
    const dueDateInputValue = document.getElementById("due-date").value;
    const priorityValue = document.getElementById("priority").value;

    if (projectName === "Today" || projectName === "Inbox") {
      projectName = null;
    }

    let task = new Task(
      titleInputValue,
      descriptionInputValue,
      dueDateInputValue,
      priorityValue,
      projectName
    );

    addTask(task);
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
    const titleInputValue = document.getElementById("title-input").value;
    const descriptionInputValue =
      document.getElementById("description-input").value;
    const dueDateValue = document.getElementById("due-date").value;
    const priorityValue = document.getElementById("priority").value;

    let task = getTaskAtIndex(index);

    task.title = titleInputValue;
    task.description = descriptionInputValue;
    task.dueDate = dueDateValue;
    task.priority = priorityValue;

    const taskItem = document.querySelector(`[data-index="${index}"]`);

    loadEditedTaskElement(task, index, taskItem);
    removeTaskCreation();
    taskItem.remove();
  });

  addInputListener(
    document.getElementById("title-input"),
    document.querySelector("#save-task-creation-button")
  );
}

function addRemoveTaskBtnListener(index) {
  const button = document.querySelector("#remove-task-button");

  addClickListener(button, () => {
    removeTaskAtIndex(index);
    loadContentSection(getActiveMenuItem());
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

export function addEditTaskListener(taskItem) {
  addClickListener(taskItem, () => {
    addEditTask(taskItem, getTaskAtIndex(taskItem.getAttribute("data-index")));
    toggleElement(taskItem);
    addCancelEditTaskListener(taskItem);
    addSaveTaskBtnListener(taskItem.getAttribute("data-index"));
    addRemoveTaskBtnListener(taskItem.getAttribute("data-index"));
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

// add this listener when a tasks are loaded
// when it gets clicked add clicked to class list
// when it gets clicked cross out the task item
export function addCheckboxListener() {
  const checkboxes = document.querySelectorAll(".checkbox");

  checkboxes.forEach(checkbox => {
    console.log("a");
    checkbox.addEventListener("click", event => {
      event.preventDefault();
      if (checkbox.classList.contains("checked")) {
        checkbox.classList.remove("checked");
      } else {
        checkbox.classList.add("checked");
      }
    });
  });
}

function addClickListener(element, callbackFn) {
  element.addEventListener("click", callbackFn);
}
