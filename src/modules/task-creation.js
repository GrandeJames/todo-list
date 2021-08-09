import { toggleElement } from "../components/hide";

export function loadTaskCreation(selector) {
  addCreateTask(selector);
  toggleCreateTaskBtn();
  addTaskCreationButtons(document.querySelector("#task-creation-container"));
}

//remove?
import { hideOnClickOutside } from "./events";

export function addEditTask(element, task) {
  // TODO: if clicked on anything else other than inside the

  // add remove functionality, add save functionality that removes the hidden element and add the new saved one

  const taskCreation = getTaskCreation();

  element.parentElement.insertBefore(taskCreation, element.nextSibling);

  toggleCreateTaskBtn();

  addEditTaskButtons(document.querySelector("#task-creation-container"));

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

  const label2 = document.createElement("label");

  const input3 = document.createElement("input");
  const input4 = document.createElement("input");

  const select = document.createElement("select");

  div1.classList = "input-task-container";

  div2.classList = "top-input-container";
  div3.classList = "bottom-input-container";

  input1.classList = "text-input";
  input2.classList = "text-input";

  input1.id = "title-input";
  input2.id = "description-input";
  input3.id = "due-date";
  input4.id = "remove-task-button";

  input1.placeholder = "Title";
  input2.placeholder = "Description";

  input1.required = true;

  input3.type = "date";
  input4.type = "button";

  label2.setAttribute("for", "priority");
  label2.textContent = "Priority: ";

  input4.value = "Remove";

  div3.appendChild(input3);

  div3.appendChild(label2);
  div3.appendChild(select);

  div3.appendChild(input4);

  div2.appendChild(input1);
  div2.appendChild(input2);

  div1.appendChild(div2);
  div1.appendChild(div3);

  form.appendChild(div1);

  return form;
}
