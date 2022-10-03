import shell from "shelljs";
import * as fs from "fs";
import chalk from "chalk";
import { validator } from "../utils/Validator.js";

export async function createProject(appname) {
  const validationStatus = await validator(appname);
  if (validationStatus) {
    shell.exec(
      `git clone https://github.com/devpenzil/clidevpenzil ${appname}`
    );
    shell.cd(appname);
    shell.exec("npm install");
    shell.cd("ios");
    shell.exec("pod install");
  } else {
    console.log(chalk.bgRed("Invalid name format"));
  }
}
