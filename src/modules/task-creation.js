import { toggleElement } from "../components/hide";

export function loadTaskCreation(selector) {
  addCreateTask(selector);
  toggleCreateTaskBtn();
  addTaskCreationButtons(document.querySelector("#task-creation-container"));
}

//remove?
import { hideOnClickOutside } from "./events";

export function addEditTask(element, task) {
  // TODO: add task as parameter
  // TODO: set the values of the inputs with the task object
  // TODO: if clicked on anything else other than inside the

  // the task properties should be filled (title, description, ...)
  // add remove functionality, add save functionality that removes the hidden element and add the new saved one

  const taskCreation = getTaskCreation();

  element.parentElement.insertBefore(taskCreation, element.nextSibling);

  toggleCreateTaskBtn();

  addEditTaskButtons(document.querySelector("#task-creation-container"));

  document.querySelector("#title-input").value = "test edit title";
  document.querySelector("#description-input").value = "test edit description";

  document.querySelector("#title-input").value = task.title;
  document.querySelector("#description-input").value = task.description;

  //remove?
  hideOnClickOutside();
}

function addEditTaskButtons(parentElement) {
  const div = document.createElement("div");
  div.id = "task-buttons-container";

  addSaveTaskButton(div);
  addCancelButton(div);

  parentElement.appendChild(div);
}

function addSaveTaskButton(parentElement) {
  const input = document.createElement("input");

  input.id = "save-task-creation-button";
  input.type = "button";
  input.value = "Save task";

  parentElement.appendChild(input);
}

function addCreateTask(selector) {
  document.querySelector(selector).appendChild(getTaskCreation());
}

export function removeTaskCreation() {
  const taskCreationContainer = document.querySelector(
    "#task-creation-container"
  );

  taskCreationContainer.remove();
  toggleCreateTaskBtn();
}

function toggleCreateTaskBtn() {
  toggleElement(document.querySelector("#new-task-button"));
}

function addTaskCreationButtons(parentElement) {
  const div = document.createElement("div");
  div.id = "task-buttons-container";

  addSubmitTaskButton(div);
  addCancelButton(div);

  parentElement.appendChild(div);
}

function addSubmitTaskButton(parentElement) {
  const input = document.createElement("input");

  input.id = "submit-task-creation-button";
  input.type = "button";
  input.value = "Add task";
  input.disabled = true;

  parentElement.appendChild(input);
}

function addCancelButton(parentElement) {
  const input = document.createElement("input");

  input.id = "cancel-task-creation-button";
  input.type = "button";
  input.value = "Cancel";

  parentElement.appendChild(input);
}

function getTaskCreation() {
  const form = document.createElement("form");
  form.id = "task-creation-container";

  const div1 = document.createElement("div");

  const div2 = document.createElement("div");
  const div3 = document.createElement("div");

  const input1 = document.createElement("input");
  const input2 = document.createElement("input");

  div1.classList = "input-task-container";

  div2.classList = "top-input-container";
  div3.classList = "bottom-input-container";

  input1.classList = "text-input";
  input2.classList = "text-input";

  input1.id = "title-input";
  input2.id = "description-input";

  input1.name = "title";
  input2.name = "description";

  input1.placeholder = "Title";
  input2.placeholder = "Description";

  input1.required = true;

  div2.appendChild(input1);
  div2.appendChild(input2);

  div1.appendChild(div2);
  div1.appendChild(div3);

  form.appendChild(div1);

  return form;
}
