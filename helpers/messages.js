require("colors");

const showMenu = () => {
  return new Promise((resolve, reject) => {
    console.clear();
    console.log("=====================================".green);
    console.log("       Select an option below".green);
    console.log("=====================================\n".green);

    console.log(`${"1".green}. Create Task`);
    console.log(`${"2".green}. `);
    console.log(`${"3".green}. `);
    console.log(`${"4".green}. `);
    console.log(`${"5".green}. `);
    console.log(`${"6".green}. Complete Task(s)`);
    console.log(`${"0".green}. Exit\n`);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Select an option below: ", (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const pause = () => {
  return new Promise((resolve, reject) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\nPress ${"ENTER".green} to continue\n`, (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

module.exports = {
  showMenu,
  pause,
};
