// Inbox is just a list of ALL tasks
// Today is just a list of all the tasks due TODAY
// NEED 1 ARRAY OF TASKS FOR INBOX_TASKS
// NEED 1 ARRAY OF TASKS DUE TODAY_TASKS
// Project (has name and array of tasks)
// Task (has title, description, due date, priority)
class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
