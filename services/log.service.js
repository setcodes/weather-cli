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
const printWeather = (res, icon) => {
    console.log(
        dedent(
            `${chalk.bgBlue(" WEATHER ")}
        Прогноз погоды в городе ${res.name} 
        =======================
        Сегодня  ${icon}   ${res.weather[0].description}
        Температура воздуха: ${Math.round(res.main.temp)}º (ощущается как ${Math.round(res.main.feels_like)}º)
        Максимальная температура воздуха: ${Math.round(res.main.temp_max)}º
        Влажность воздуха: ${res.main.humidity} %
        `)
    );
}
export {printError, printSuccess, printHelp, printWeather};
