import { activateMenuItem } from "./menu-item";
import { addNewTaskBtnListener } from "./events";

export function loadContent(addContent, menuItem) {
  removeCurrentContent();
  addContent();
  addContentSectionListeners();
  activateMenuItem(menuItem);
}

function removeCurrentContent() {
  if (document.querySelector(".content-section") !== null) {
    document.querySelector(".content-section").remove();
  }
}

function addContentSectionListeners() {
  addNewTaskBtnListener(document.querySelector(".content-section"));
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