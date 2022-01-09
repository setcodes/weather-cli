#!/usr/bin/env_node
import {getArgs} from './helpers/args.js';
import {printError, printSuccess, printHelp, printWeather} from "./services/log.service.js";
import {getKeyValue, setKeyValue, TOKEN_DICTIOANRY} from "./services/storage.service.js";
import {getIcon, getWeather} from "./services/api.service.js";

const saveToken = async (token) => {
    if (!token.length) {
        printError("Не передан токен");
        return;
    }
    try {
        await  setKeyValue(TOKEN_DICTIOANRY.token, token);
        printSuccess("Токен сохранен!");
    }catch (e) {
        printError(e.message);
    }
}
const saveCity = async (city) => {
    if (!city.length) {
        printError("Не передан город");
        return;
    }
    try {
        await  setKeyValue(TOKEN_DICTIOANRY.city, city);
        printSuccess("Город сохранен!");
    }catch (e) {
        printError(e.message);
    }
}
const getForCast = async () => {
   try {
       const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIOANRY.city);
       const weather = await getWeather(city);
       printWeather(weather, getIcon(weather.weather[0].icon));
   }catch (e) {
       if (e?.response?.status === 404) {
           printError("Неверно указан город!");
       }else if (e?.response?.status === 401) {
           printError("Неверно указан токен!");
       }else {
           printError(e.message);
       }
   }
}
const initCli = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        printHelp();
    }
    if (args.s) {
        return saveCity(args.s);
    }
    if (args.t) {
        return saveToken(args.t);
    }
    return getForCast();
}
initCli();
