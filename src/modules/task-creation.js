import { toggleElement } from "../components/hide";

export function loadTaskCreation(parentElement) {
  addCreateTask(parentElement);
  toggleCreateTaskBtn();
  addTaskCreationButtons(document.querySelector("#task-creation-container"));
}

function addCreateTask(parentElement) {
  const form = document.createElement("form");
  form.id = "task-creation-container";

  const div = document.createElement("div");

  //remove form2 and name it input task container

  const div2 = document.createElement("div");
  const div3 = document.createElement("div");

  const input1 = document.createElement("input");
  const input2 = document.createElement("input");

  div.classList = "input-task-container";

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

  div.appendChild(div2);
  div.appendChild(div3);

  form.appendChild(div);

  parentElement.insertBefore(form, parentElement.lastChild);
}

export function removeTaskCreation() {
  const taskCreationContainer = document.querySelector(
    "#task-creation-container"
  );

  taskCreationContainer.remove();
  toggleCreateTaskBtn();
}

function toggleCreateTaskBtn() {
  toggleElement("#new-task-button");
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

  parentElement.appendChild(input);
}

function addCancelButton(parentElement) {
  const input = document.createElement("input");

  input.id = "cancel-task-creation-button";
  input.type = "button";
  input.value = "Cancel";

  parentElement.appendChild(input);
}
