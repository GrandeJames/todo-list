// Inbox is just a list of ALL tasks
// Today is just a list of all the tasks due TODAY
// NEED 1 ARRAY OF TASKS FOR INBOX_TASKS
// NEED 1 ARRAY OF TASKS DUE TODAY_TASKS
// Project (has name and array of tasks)
// Task (has title, description, due date, priority)
export class Task {
  title;
  description;

  constructor(title, description) {
    this.title = title;
    this.description = description;
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

/*
<div id="tasks-container">
  <ul id="tasks-list">

          <li class="task-item"> GOOD
            <div class="task"> (flex row) GOOD
              <div class="task-info"> (flex column) GOOD
                <p class="task-title"></p> GOOD
                <p class="task-description"></p> GOOD
                <div class="importance-info"> (flex row) LATER
                  <p class="task-deadline"</p> LATER
                  <p class="task-priority">Priority: x</p> LATER
                </div> LATER
              </div>
              <div class="task-options"
              </div>
            </div>
          </li>

          <li>
            <div class="task">Other task</div>
          </li>
        </ul
      </div>
*/

// This will add task if it was inputted correctly
export function addTask(parentElement, task) {
  const taskItem = document.createElement("li");
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");

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

  parentElement.appendChild(taskItem);
}
