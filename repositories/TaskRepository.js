const Task = require("../models/Task");
const { saveData, getData } = require("../helpers/fileManager");

class TaskRepository {
  _tasks = null;

  constructor() {
    const data = getData();
    if (data) {
      this._tasks = data;
    } else {
      this._tasks = [];
    }
  }

  getAlltasks() {
    return this._tasks;
  }

  /**
   ** @param {String} title
   * TODO: Nos falta persistir datos en archivo
   *
   */
  createTask(title) {
    const task = new Task(title);
    this._tasks.push(task);
    saveData(this._tasks);
  }

  deleteTask() {}

  completeTask() {}
}

module.exports = {
  TaskRepository,
};
