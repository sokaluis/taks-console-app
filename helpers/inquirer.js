require("colors");
const inquirer = require("inquirer");

const optQuestions = [
  {
    type: "list",
    name: "option",
    message: "¿What do you want to do?",
    choices: [
      {
        value: "1",
        name: `${"1.".green} Create Task`,
      },
      {
        value: "2",
        name: `${"2.".green} Show Tasks`,
      },
      {
        value: "3",
        name: `${"3.".green} Show Completed Tasks`,
      },
      {
        value: "4",
        name: `${"4.".green} Show Pending Tasks`,
      },
      {
        value: "5",
        name: `${"5.".green} Complete Task(s)`,
      },
      {
        value: "6",
        name: `${"6.".green} Delete Task`,
      },
      {
        value: "0",
        name: `${"0.".green} Exit`,
      },
    ],
  },
];

const optPauseQuestions = [
  {
    type: "input",
    name: "option",
    message: `Press ${"ENTER".green} to continue`,
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("=====================================".green);
  console.log("       Select an option below".white);
  console.log("=====================================\n".green);

  const { option } = await inquirer.prompt(optQuestions);

  return option;
};

const pauseMenu = async () => {
  console.log("\n");

  const { option } = await inquirer.prompt(optPauseQuestions);

  return option;
};

const readInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingresa un valor";
        }
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);

  return desc;
};

module.exports = {
  inquirerMenu,
  pauseMenu,
  readInput,
};
