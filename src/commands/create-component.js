import { validator } from "../utils/Validator.js";
import chalk from "chalk";
import shell from "shelljs";
import * as fs from "fs";
import * as ejs from "ejs";
const componentTemplate = fs.readFileSync(
  "/Users/ajoalex/Documents/projects/rn-cli/src/template/component.ejs",
  "utf-8"
);
export async function createComponent(appname) {
  const some = ejs.render(componentTemplate, { component: appname });
  const validationStatus = await validator(appname);
  if (validationStatus) {
    shell.mkdir(appname);
    shell.cd(appname);
    shell.touch(`${appname}.component.tsx`);
    shell.touch(`${appname}.style.ts`);
    fs.writeFileSync(
      `/Users/ajoalex/Documents/projects/rn-cli/${appname}/${appname}.component.tsx`,
      some
    );
  } else {
    console.log(chalk.bgRed("Invalid name format"));
  }
}
