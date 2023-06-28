const apiKey = "330585768a117fa19cd22c087bcbe87d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
// const cityUndefined = document.getElementById("city");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    // esta varaible data va a contener la informacion de la ciudad que pongamos (en este caso banglore)
    let data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";

    // if (cityUndefined == 'undefined') {
    //     console.log('Introduce una ciudad valida');
    // }


    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "assets/cloud.svg";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "assets/clear.svg";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "assets/rain.svg";
    } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "assets/snow.svg";
    } else if (data.weather[0].main == "Storm") {
        weatherIcon.src = "assets/storm.svg";
    } else if (data.weather[0].main == "Haze") {
        weatherIcon.src = "assets/haze.svg";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
document.addEventListener("keydown", (event) => {
    if (event.key == 'Enter') {
        checkWeather(searchBox.value);
    }
});

checkWeather(city);

