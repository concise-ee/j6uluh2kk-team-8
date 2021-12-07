export async function getChristmas() {

    const response = await fetch('/api/christmas');
    return await response.json();
}

export async function getWeather() {
    const response = await fetch("http://api.weatherapi.com/v1/current.json?key=7db78e8ddfae4d849c3133740210712&q=Tallinn")
    return await response.json();
}