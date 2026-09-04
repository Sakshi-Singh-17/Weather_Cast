const cityInput = document.querySelector("#enter-input");
const button = document.querySelector("#button");
const temp = document.querySelector("#temp");
const moisture = document.querySelector("#moisture");
const weather = document.querySelector("#weather");
const weatherIcon = document.querySelector("#weather-icon");

const getWeather = async () => {

    const city = cityInput.value.trim();

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=411047d52e2378c2ffb27cd572ad4ce5&units=metric`;

    try {
        let response = await fetch(URL);

        if (!response.ok) {
            throw new Error("City not found");
        }

        let data = await response.json();
        temp.innerText = `Temperature: ${data.main.temp} °C`;      
        moisture.innerText = `Humidity: ${data.main.humidity}%`;
        weather.innerText = `Weather Condition: ${data.weather[0].description}`;
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weatherIcon.alt = data.weather[0].description;

    } 
    catch (error) {
        console.log(error);
        temp.innerText = "";
        moisture.innerText = "";
        weather.innerText = "City not found. Please try again.";
    }
};


button.addEventListener("click", getWeather);