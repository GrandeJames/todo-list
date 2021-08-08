export class Project {
  name;
  tasks = [];

  constructor(title) {
    this.name = title;
  }

  get name() {
    return this.name;
  }

  get tasks() {
    return this.tasks;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  //TODO: add remove task
}
