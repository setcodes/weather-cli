import chalk  from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
    console.log(chalk.bgRed(" ERROR ") + " " + error);
}
const printSuccess = (message) => {
    console.log(chalk.bgGreen(" SUCCESS ") + " " + message);
}
const printHelp = () => {
    console.log(
    dedent(
            `${chalk.bgCyan(" HELP ")}
        Без параметров - вывод погоды
        -h вывод помощи
        -s [SITY] установка города
        -t [API_KEY] установка токена
        `)
    );
}

export {printError, printSuccess, printHelp};
