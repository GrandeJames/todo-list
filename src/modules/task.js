// Inbox is just a list of ALL tasks
// Today is just a list of all the tasks due TODAY
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

export function addNewTaskItem(task, index) {
  document.querySelector("#tasks-list").appendChild(getTaskItem(task, index));
}

export function addEditedTaskItem(task, index, element) {
  element.parentElement.insertBefore(
    getTaskItem(task, index),
    element.nextSibling
  );
}

export function getTaskItem(task, index) {
  const taskItem = document.createElement("li");
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");

  taskItem.id = index;

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

  // TODO: move?
  addEditTaskListener(taskItem);

  return taskItem;
}
