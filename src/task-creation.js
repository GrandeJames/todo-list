import { hideElement } from "./components/hide.js";

export function loadTaskCreation(parentElement) {
  addCreateTask(parentElement);
  toggleCreateTaskBtn();
  addTaskCreationButtons(parentElement);
}

function addCreateTask(parentElement) {
  const div = document.createElement("div");

  const form = document.createElement("form");

  const div2 = document.createElement("div");
  const div3 = document.createElement("div");

  const input1 = document.createElement("input");
  const input2 = document.createElement("input");

  div.classList = "create-task-container";
  form.classList = "create-task-form";

  div2.classList = "top-input-container";
  div3.classList = "bottom-input-container";

  input1.classList = "text-input";
  input2.classList = "text-input";

  input1.id = "title-input";
  input2.id = "description-input";

  input1.name = "title";
  input2.name = "description";

  input1.placeholder = "New To-Do";
  input2.placeholder = "Description";

  div2.appendChild(input1);
  div2.appendChild(input2);

  form.appendChild(div2);
  form.appendChild(div3);

  div.appendChild(form);

  parentElement.insertBefore(div, parentElement.lastChild);
}

function toggleCreateTaskBtn() {
  hideElement("#new-task-button");
}

function addTaskCreationButtons(parentElement) {
  const div = document.createElement("div");
  div.id = "task-buttons-container";

  addSubmitTaskButton(div);
  addCancelButton(div);

  parentElement.appendChild(div);
}

function addSubmitTaskButton(parentElement) {
  const button = document.createElement("button");

  button.id = "submit-task-creation-button";
  button.textContent = "Add new task";

  parentElement.appendChild(button);
}

function addCancelButton(parentElement) {
  const button = document.createElement("button");

  button.id = "cancel-task-creation-button";
  button.textContent = "Cancel";

  parentElement.appendChild(button);
}
