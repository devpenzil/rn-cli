import { validator } from "../utils/Validator.js";
import chalk from "chalk";
import shell from "shelljs";
import ejs from "ejs";
import * as fs from "fs";

const componentTemplate = fs.readFileSync(
  "/Users/ajoalex/Documents/projects/rn-cli/src/template/component.ejs",
  "utf-8"
);
const some = ejs.render(componentTemplate, { user: "ajo" });
console.log(some);
export async function createComponent(appname) {
  const validationStatus = await validator(appname);
  if (validationStatus) {
    shell.mkdir(appname);
    shell.cd(appname);
    shell.exec(`echo 'hello' > ${appname}.component.tsx`);
    // shell.exec(`echo ${style} > ${appname}.style.tsx`);
  } else {
    console.log(chalk.bgRed("Invalid name format"));
  }
}
