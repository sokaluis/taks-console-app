require("colors");
const {
  inquirerMenu,
  pauseMenu,
  readInput,
  deleteTaskFromList,
  confirmAction,
  showCheckList,
} = require("./helpers/inquirer");
const { saveFileDB, readDB } = require("./helpers/saveFile");
const Tasks = require("./models/tasks");

const main = async () => {
  let opt = "";
  const tasks = new Tasks();

  const taskDB = readDB();

  if (taskDB) {
    tasks.loadTaskFromDB(taskDB);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await readInput("Description");
        tasks.createTask(desc);
        break;
      case "2":
        tasks.taskList();
        break;
      case "3":
        tasks.taskListByStatus(true);
        break;
      case "4":
        tasks.taskListByStatus(false);
        break;
      case "5":
        const ids = await showCheckList(tasks.listadoArr);
        tasks.toggleCompleted(ids);
        break;
      case "6":
        const id = await deleteTaskFromList(tasks.listadoArr);
        if (id !== 0) {
          const confirmDelete = await confirmAction("Are you sure?");
          if (confirmDelete) {
            tasks.deleteTask(id);
            console.log("The Task has been deleted successfully");
          }
        }
        break;

      default:
        break;
    }

    saveFileDB(tasks.listadoArr);

    await pauseMenu();
  } while (opt !== "0");
};

main();
