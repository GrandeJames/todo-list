// TODO: add projects
// TODO: add due dates
// TODO: add today content
// TODO: add checklists (squares)
// BUG: clicking on stuff outside of task creation

import { toggleElement } from "../components/hide";

export function handleAddProjectClick() {
  toggleElement(document.querySelector("#add-project-button"));
  insertProjectCreationForm();
}

function insertProjectCreationForm() {
  const element = document.querySelector("#add-project-button");

  element.parentElement.insertBefore(
    getProjectCreationForm(),
    element.nextSibling
  );
}

function getProjectCreationForm() {
  const form = document.createElement("form");

  const input1 = document.createElement("input");

  const div = document.createElement("div");
  const input2 = document.createElement("input");
  const input3 = document.createElement("input");

  form.id = "project-creation-container";

  input1.className = "text-input";

  div.id = "project-input-buttons";

  input1.id = "project-name-input";
  input2.id = "add-project-creation-button";
  input3.id = "cancel-project-creation-button";

  input2.type = "button";
  input3.type = "button";

  input2.value = "Add project";
  input3.value = "Cancel";

  input2.disabled = true;

  div.appendChild(input2);
  div.appendChild(input3);

  form.appendChild(input1);
  form.appendChild(div);

  return form;
}

/*
PROJECTS
TODO: add content for projects
    TODO: add tasks for the projects
        have an array of all the tasks (filter these)
            if it doesn't have a project, load it to inbox
            if it's due today, load that task
            if has project, load that if it's the correct project
TODO: add tasks for today (this should filter all the tasks due today)
TODO: fix styling
TODO: add remove project (on hover)
*/

export function handleCancelProjectCreation() {
  stopProjectCreation();
}

import { loadProjectListener } from "./events";
import { loadPage } from "./content";

export function handleAddProject() {
  const project = getProject();

  insertProject(project);
  stopProjectCreation();
  loadProjectListener(project);
  loadPage(project);
}

function insertProject(project) {
  const element = document.querySelector("#add-project-button");
  element.parentElement.insertBefore(project, element);
}

function getProject() {
  const div = document.createElement("div");

  div.className = "menu-item";

  const projectName = document.querySelector("#project-name-input").value;
  div.textContent = projectName;

  return div;
}

function stopProjectCreation() {
  document.querySelector("#project-creation-container").remove();
  toggleElement(document.querySelector("#add-project-button"));
}
