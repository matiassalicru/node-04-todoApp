const Task = require('../models/task');

class TaskRepository {
  _task = null;

  constructor() {
    this._task = [];
  }

  getAlltasks() {

  }

  createTask(title){
    const task = new Task(title);
  }

  deleteTask() {

  }

  completeTask() {
    
  }
  
}