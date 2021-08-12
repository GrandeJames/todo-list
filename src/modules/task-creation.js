import { toggleElement } from "../components/toggleElement";
import { getTodaysDate } from "../components/date";

export function loadTaskCreation(sectionName) {
  addCreateTask(sectionName);
  toggleCreateTaskBtn();
  addTaskCreationButtons(document.querySelector("#task-creation-container"));
}

function addCreateTask(sectionName) {
  document.querySelector(".content-section").appendChild(getTaskCreation());

  if (sectionName === "Today") {
    addDefaultDateToTaskCreation();
  }
}

function addDefaultDateToTaskCreation() {
  const dueDate = document.querySelector("#due-date");

  dueDate.value = getTodaysDate();
}

export function addEditTask(element, task) {
  const taskCreation = getTaskCreation();
  element.parentElement.insertBefore(taskCreation, element.nextSibling);

  appendRemoveButton();

  toggleCreateTaskBtn();

  addEditTaskButtons(document.querySelector("#task-creation-container"));

  document.querySelector("#title-input").value = task.title;
  document.querySelector("#description-input").value = task.description;
  document.querySelector("#due-date").value = task.dueDate;
  document.querySelector("#priority").value = task.priority;
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

function appendRemoveButton() {
  const input4 = document.createElement("input");
  input4.id = "remove-task-button";
  input4.type = "button";
  input4.value = "Remove";

  document.querySelector(".bottom-input-container").appendChild(input4);
}

function getTaskCreation() {
  const form = document.createElement("form");
  form.id = "task-creation-container";

  const div1 = document.createElement("div");

  const div2 = document.createElement("div");
  const div3 = document.createElement("div");

  const input1 = document.createElement("input");
  const input2 = document.createElement("input");

  const input3 = document.createElement("input");

  const select = document.createElement("select");
  const option1 = document.createElement("option");
  const option2 = document.createElement("option");
  const option3 = document.createElement("option");

  div1.classList = "input-task-container";

  div2.classList = "top-input-container";
  div3.classList = "bottom-input-container";

  input1.classList = "text-input";
  input2.classList = "text-input";

  input1.id = "title-input";
  input2.id = "description-input";
  input3.id = "due-date";
  select.id = "priority";

  input1.placeholder = "Title";
  input2.placeholder = "Description";

  input1.required = true;

  input3.type = "date";

  option1.value = "low";
  option2.value = "medium";
  option3.value = "high";

  option1.textContent = "Low Priority";
  option2.textContent = "Medium Priority";
  option3.textContent = "High Priority";

  select.appendChild(option1);
  select.appendChild(option2);
  select.appendChild(option3);

  div3.appendChild(input3);

  div3.appendChild(select);

  div2.appendChild(input1);
  div2.appendChild(input2);

  div1.appendChild(div2);
  div1.appendChild(div3);

  form.appendChild(div1);

  return form;
}
