import shell from "shelljs";
import * as fs from "fs";
import chalk from "chalk";
const regex = new RegExp(/^[a-zA-Z]+$/);
export async function createProject(appname) {
  const validationStatus = await validate(appname);
  if (validationStatus) {
    shell.exec(
      `git clone https://github.com/devpenzil/clidevpenzil ${appname}`
    );
    shell.cd(appname);
    shell.exec("npm install");
    shell.cd("ios");
    shell.exec("pod install");
  } else {
    console.log(chalk.bgRed("Invalid Project name"));
  }
}
function validate(appname) {
  return new Promise((resolve, reject) => {
    return resolve(regex.test(appname));
  });
}
export default { createProject };
