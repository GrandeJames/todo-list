export function addCreateTask(parentNode) {
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

  parentNode.insertBefore(div, parentNode.lastChild);
}

//move later
function addSubmitTaskButton(parentElement) {
  const button = document.createElement("button");

  button.id = "submit-task-button";
  button.textContent = "Add new task";

  parentElement.appendChild(button);
}
