import { homedir } from "os";
import { join } from "path";
import { promises } from "fs";

const filePath = join(homedir(), "weather-data.json");

const TOKEN_DICTIOANRY = {
    token: "token",
    city: "city",
}

const setKeyValue = async (key, value) => {
    let data = {};
    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath);
        data = JSON.parse(file);
    }
    data[key] = value;
    await promises.writeFile(filePath, JSON.stringify(data));
}

const getKeyValue = async () => {
    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath);
        let data = JSON.parse(file);
        return data[key];
    }else {
        return undefined;
    }
}

const isExist = async (path) => {
   try {
       await promises.stat(path);
       return true;
   }catch (e) {
       return false;
   }
}

export {setKeyValue, getKeyValue, TOKEN_DICTIOANRY};
