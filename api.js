import 'dotenv/config';

const baseUrl = 'http://api.weatherapi.com/v1/current.json';
const apiKey = process.env.API_KEY;
// const city = 'Almaty';
const aqi = 'yes';

let params = new URLSearchParams();
params.append('key', apiKey);
params.append('aqi', aqi);


export async function getData (city) {
    try {
        params.append('q', city);

        const fullUrl = `${baseUrl}?${params.toString()}`;

        const response = await fetch(fullUrl);
        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
