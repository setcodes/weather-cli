import {getKeyValue, TOKEN_DICTIOANRY} from "./storage.service";
import axios from "axios";


const getWeather = async (city) => {
    const token = await getKeyValue(TOKEN_DICTIOANRY.token);
    if (!token) {
        throw new Error("Не задан ключ API, задайте его командой -t [API_KEY]")
    }
    const {data} = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
            q: city,
            appid: token,
            lang: "ru",
            units: "metric"
        }
    });

    return data;
}
export {getWeather};
