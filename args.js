export default async function getCityArgument () {
    const userCity = process.argv[2];

    if (!userCity) {
        console.log("Пожалуйста, укажите название города.");
        process.exit(1);
    }
    return await userCity;
}