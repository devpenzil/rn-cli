#! /usr/bin/env node
import inquirer from "inquirer";
const Start = () => {
  const method = inquirer.prompt({
    name: "TYPE",
    type: "list",
    choices: ["Project", "Component", "Screen"],
  });
};
Start();
