const Task = require("./task");

class Tasks {
  _listado = {};

  constructor() {
    this._listado = {};
  }

  get listadoArr() {
    const listado = [];

    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];

      listado.push(tarea);
    });

    return listado;
  }

  loadTaskFromDB = (tasks = []) => {
    tasks.map((item) => {
      const task = new Task(item.desc);
      this._listado[task.id] = task;
    });
  };

  createTask(desc = "") {
    const task = new Task(desc);

    this._listado[task.id] = task;
  }
}

module.exports = Tasks;
