#! /usr/bin/env node
import { createProject } from "./commands/create-project.js";
import yargs from "yargs";
import chalk from "chalk";
const args = yargs(process.argv.slice(2))
  .option("component", {
    describe: "Create a New Component",
    string: "component name",
  })
  .option("screen", {
    describe: "Create a New Screen",
    string: "screen name",
  }).argv;

const Start = async () => {
  if (args._.includes("generate")) {
    if (args.component) {
      console.log("component");
    } else if (args.screen) {
      console.log("screen");
    } else {
      console.log("invalid flag");
    }
  } else if (args._.includes("create-app")) {
    createProject(args._[1]);
  } else {
    console.log(chalk.bgRed("command not found"));
  }
};
Start();
