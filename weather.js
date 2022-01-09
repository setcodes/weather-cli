#!/usr/bin/env_node
import {getArgs} from './helpers/args.js';

const initCli = () => {
    const args = getArgs(process.argv);
    console.log(args);
    if (args.h) {
        //help
    }
    if (args.s) {
        //set sity
    }
    if (args.t) {
        // set token
    }
}
initCli();
