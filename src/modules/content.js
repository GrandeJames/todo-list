import { activateMenuItem } from "./menu-item";
import { addNewTaskBtnListener } from "./events";

import { loadTasks } from "./tasks";

export function loadInitialContent(menuItem) {
  const name = menuItem.textContent;

  loadContent(name);
  addContentSectionListeners(name);
  activateMenuItem(menuItem);
}

export function handleMenuItemClick(menuItem) {
  const name = menuItem.textContent;

  loadContent(name);
  addContentSectionListeners(name);
  activateMenuItem(menuItem);
}

function loadContent(name) {
  removeCurrentContent();
  addContentSection(name);

  // TODO: make it load the correct tasks
  loadTasks();
}

function removeCurrentContent() {
  if (document.querySelector(".content-section") !== null) {
    document.querySelector(".content-section").remove();
  }
}

function addContentSectionListeners(projectName) {
  addNewTaskBtnListener(".content-section", projectName);
}

export function addContentSection(heading) {
  const section = document.createElement("section");

  section.className = "content-section";

  addContentHeading(section, heading);
  addTaskSection(section);
  addNewTaskButton(section);

  document.querySelector("main").appendChild(section);
}

function addContentHeading(parentElement, heading) {
  const h1 = document.createElement("h1");

  h1.classList = "content-heading";
  h1.textContent = heading;

  parentElement.appendChild(h1);
}

function addTaskSection(parentElement) {
  const div = document.createElement("div");
  const ul = document.createElement("ul");

  div.id = "tasks-container";
  ul.id = "tasks-list";

  div.appendChild(ul);

  parentElement.appendChild(div);
}

function addNewTaskButton(parentElement) {
  const button = document.createElement("button");

  button.id = "new-task-button";
  button.textContent = "Add new task";

  parentElement.appendChild(button);
}
