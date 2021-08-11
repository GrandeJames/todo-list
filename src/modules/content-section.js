import { activateMenuItem } from "./menu-item";
import { addNewTaskBtnListener } from "./events";
import { loadTasks } from "./tasks";

export function loadContentSection(menuItem) {
  const menuItemName = menuItem.textContent;

  loadContent(menuItemName);
  addContentListeners(menuItemName);
  activateMenuItem(menuItem);
}

function loadContent(menuItemName) {
  removeCurrentContent();
  addContentSection(menuItemName);
  loadTasks(menuItemName);
}

function removeCurrentContent() {
  if (document.querySelector(".content-section") !== null) {
    document.querySelector(".content-section").remove();
  }
}

function addContentSection(menuItemName) {
  const section = document.createElement("section");

  section.className = "content-section";

  addContentHeading(section, menuItemName);
  addTasksContainer(section);
  addAddTaskButton(section);

  document.querySelector("main").appendChild(section);
}

function addContentHeading(parentElement, menuItemName) {
  const h1 = document.createElement("h1");

  h1.classList = "content-heading";
  h1.textContent = menuItemName;

  parentElement.appendChild(h1);
}

function addTasksContainer(parentElement) {
  const div = document.createElement("div");
  const ul = document.createElement("ul");

  div.id = "tasks-container";
  ul.id = "tasks-list";

  div.appendChild(ul);

  parentElement.appendChild(div);
}

function addAddTaskButton(parentElement) {
  const button = document.createElement("button");

  button.id = "new-task-button";
  button.textContent = "Add task";

  parentElement.appendChild(button);
}

function addContentListeners(menuItemName) {
  addNewTaskBtnListener(menuItemName);
}
