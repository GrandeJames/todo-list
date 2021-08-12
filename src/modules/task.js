import { addEditTaskListener } from "./events";
export class Task {
  title;
  description;

  constructor(title, description, project) {
    this.title = title;
    this.description = description;
    this.project = project;
    //this.dueDate = dueDate;
    //this.priority = priority;
  }

  get title() {
    return this.title;
  }

  get description() {
    return this.description;
  }
}

export function loadTaskElement(task, index) {
  const taskItem = getTaskItem(task, index);

  document.querySelector("#tasks-list").appendChild(taskItem);
  addEditTaskListener(taskItem);
}

export function loadEditedTaskElement(task, index, element) {
  const taskItem = getTaskItem(task, index);

  element.parentElement.insertBefore(taskItem, element.nextSibling);
  addEditTaskListener(taskItem);
}

export function getTaskItem(task, index) {
  const taskItem = document.createElement("li");
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");

  taskItem.setAttribute("data-index", index);

  taskItem.className = "task-item";
  div1.className = "task";
  div2.className = "task-info";
  p1.className = "task-title";
  p2.className = "task-description";

  p1.textContent = task.title;
  p2.textContent = task.description;

  div2.appendChild(p1);
  div2.appendChild(p2);

  div1.appendChild(div2);

  taskItem.appendChild(div1);

  return taskItem;
}
