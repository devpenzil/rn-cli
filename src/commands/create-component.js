import { validator } from "../utils/Validator.js";
import chalk from "chalk";
import shell from "shelljs";
export async function createComponent(appname) {
  const validationStatus = await validator(appname);
  if (validationStatus) {
    shell.mkdir(appname);
    shell.cd(appname);
    shell.touch(`${appname}.component.tsx`);
    shell.touch(`${appname}.style.ts`);
  } else {
    console.log(chalk.bgRed("Invalid name format"));
  }
}
