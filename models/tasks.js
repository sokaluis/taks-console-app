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

  createTask(desc = "") {
    const task = new Task(desc);

    this._listado[task.id] = task;
  }
}

module.exports = Tasks;
