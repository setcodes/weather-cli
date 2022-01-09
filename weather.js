#!/usr/bin/env_node
import {getArgs} from './helpers/args.js';
import {printError, printSuccess, printHelp} from "./services/log.service.js";

const initCli = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        printHelp()
    }
    if (args.s) {
        //set sity
    }
    if (args.t) {
        // set token
    }
}
initCli();
