import * as api from './api.js';

let userCity = 'Almaty';

const data = await api.getData(userCity);
console.log(data);