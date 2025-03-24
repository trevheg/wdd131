const pageTemperature = document.querySelector("#temperature");
const pageConditions = document.querySelector("#conditions");
const pageWindSpeed = document.querySelector("#wind-speed");
const pageWindChill = document.querySelector("#wind-chill");

let temperature = 10
let conditions = "Kaijuu Attack"
let windSpeed = 10

function calculateWindChill(temperature, windSpeed) {
    return 0;
}

pageTemperature.textContent = `${temperature}°C`;
pageConditions.textContent = `${conditions}`;
pageWindSpeed.textContent = `${windSpeed} km/h`;
