import * as api from './api.js';
import getCity from "./args.js";

async function master() {
    let city = await getCity();

    console.log(`Получаем погоду для города: ${city}...`);

    const data = await api.getData(city);
    console.log(data);
}

await master();
