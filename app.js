require("colors");
const { inquirerMenu, pauseMenu, readInput } = require("./helpers/inquirer");
const { saveFileDB, readDB } = require("./helpers/saveFile");
const Tasks = require("./models/tasks");

const main = async () => {
  let opt = "";
  const tasks = new Tasks();

  const taskDB = readDB();

  if (taskDB) {
    tasks.loadTaskFromDB(taskDB);
  }
  await pauseMenu();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await readInput("Description");
        tasks.createTask(desc);
        break;
      case "2":
        console.log(tasks.listadoArr);
        break;
      case "3":
        break;
      case "4":
        break;
      case "5":
        break;
      case "6":
        break;

      default:
        break;
    }

    saveFileDB(tasks.listadoArr);

    await pauseMenu();
  } while (opt !== "0");
};

main();
