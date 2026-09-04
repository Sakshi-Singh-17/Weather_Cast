# Weather-Cast 🌤️

A minimalistic weather app project developed using the technologies HTML5, CSS3 and Vanilla JavaScript. The OpenWeatherMap API has been used to request the current weather in a chosen city.

## Features

🔍 Searching for weather by city name
🌡️ Temperature display in Celsius

💧 Humidity

☁️ The current weather state

🖼️ Dynamic weather picture from the OpenWeatherMap API

⚠️ Check for empty city input

❌ Check city name validity

📱 Responsive design

⚡ Async/await and fetch() API request
## Technologies
HTML5
CSS3

Vanilla JavaScript
OpenWeatherMap API
## Project Structure
```text
Weather-Cast/
│
├── index.html
├── style.css
├── script.js
└── README.md
```
## How it works
1. Entered city
2. JS reads & checks the entered city
3. An API call to OpenWeatherMap is made
4. The parsed response data consists of:

Temperature
Humidity
Weather condition
Weather icon
5. Information is displayed
6. Error output in case of an invalid city, or if the API call doesn't work
## OpenWeatherMap API
This project utilizes the OpenWeatherMap Current Weather API.
The request was made using the URL, with the chosen city name, and metric units for Celsius displayed temperature:
```javascript
await fetch(`${URL}${city}${UNITS}`);
```
Parsing the response data:
```javascript
const response = await fetch(URL);
const data = await response.json();
```
The weather icon is generated with the provided icon code from the API:
```javascript
weatherIcon.src =
`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
```
The response from the API that utilizes JS Promise is delivered with async/await syntax.
## Error Handling
App handles invalid user input and unexpected API behavior.
### Empty or not provided input:
```text
Please, enter a city name
```
### API returns "city not found" error:
```text
City not found. Please, try again.
```
App uses try...catch block to handle unexpected errors in the API call.
## Responsive Design
The Weather-Cast app has CSS media queries implemented for better performance on mobile devices (smartphones and tablets). The mobile-first approach is used with a breakpoint defined for:
```text
768px
```
And another for tablets:
```text
480px
```
## JavaScript
The JS code basically takes an input city, executes an API call, parses the response, and then renders the necessary information on the HTML page.
### Code Structure
JS code is organized as separate, standalone blocks.
Weather information is requested using a separate function:
```javascript
const getWeather = async () => {};
```
The "Search" button has an attached click event listener:
```javascript
button.addEventListener("click", getWeather);
```
The code utilizes DOM Selectors to target specific elements.
