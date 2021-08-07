export function addContentSection(parentElement, heading) {
  const section = document.createElement("section");

  section.className = "content-section";

  addContentHeading(section, heading);
  addNewTaskButton(section);

  parentElement.appendChild(section);
}

function addContentHeading(parentElement, heading) {
  const h1 = document.createElement("h1");

  h1.classList = "content-heading";
  h1.textContent = heading;

  parentElement.appendChild(h1);
}

function addNewTaskButton(parentElement) {
  const button = document.createElement("button");

  button.id = "new-task-button";
  button.textContent = "Add new task";

  parentElement.appendChild(button);
}

export function removeCurrentContent() {
  if (document.querySelector(".content-section") !== null) {
    document.querySelector(".content-section").remove();
  }
}
