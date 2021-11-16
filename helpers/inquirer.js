require("colors");
const inquirer = require("inquirer");

const optQuestions = [
  {
    type: "list",
    name: "option",
    message: "¿What do you want to do?",
    choices: ["opt1", "opt2", "opt3"],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("=====================================".green);
  console.log("       Select an option below".green);
  console.log("=====================================\n".green);

  const opt = await inquirer.prompt(optQuestions);

  return opt;
};

module.exports = {
  inquirerMenu,
};
