#!/usr/bin/env_node
import {getArgs} from './helpers/args.js';
import {printError, printSuccess, printHelp} from "./services/log.service.js";
import {setKeyValue, TOKEN_DICTIOANRY} from "./services/storage.service.js";

const saveToken = async (token) => {
    if (!token.length) {
        printError("Не передан token");
        return
    }
    try {
        await  setKeyValue(TOKEN_DICTIOANRY.token, token);
        printSuccess("Токен сохранен!");
    }catch (e) {
        printError(e.message);
    }
}

const initCli = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        printHelp()
    }
    if (args.s) {
        //set sity
    }
    if (args.t) {
        return saveToken( args.t);
    }
}
initCli();
