const apiKey = '362f8e788f1a0c290b7c9b4676083ae9'
// let city = 'ahmedabad'

async function weatherData(city){

const response = await fetch(

    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

);
console.log(response);
let data = await response.json();
console.log(data)
// console.log(data.name)
// console.log(data.main.temp)
// console.log(data.main.humidity)
// console.log(data.wind.speed)
// console.log(data.visibility)
updateweatherUI(data) ;
  
} 

// weatherData();

let cityElement = document.querySelector(".city");
let temp = document.querySelector(".temp");
let windSpeed = document.querySelector(".wind-speed");
let humidity = document.querySelector(".humidity");
let visibility = document.querySelector(".visibility-distance");

let description = document.querySelector(".description-text")
let date = document.querySelector(".date")



function updateweatherUI(value){
    // console.log(value);

    cityElement.textContent = value.name;
    temp.textContent = `${Math.round(value.main.temp)}°`;
    windSpeed.textContent = `${value.wind.speed} KM/H`;
    humidity.textContent =  `${value.main.humidity}%`;
    visibility.textContent =  `${value.visibility/1000} KM`;
    description.textContent = value.weather[0].description

    const currentDate = new Date();
    date.textContent = currentDate.toDateString();




}

const formElement = document.querySelector(".search-form");
const inputElement = document.querySelector(".city-input");

formElement.addEventListener("submit", (event) =>{
    event.preventDefault();

    let city = inputElement.value
    if(city !== ""){

        weatherData(city);
        inputElement.value = "";


    }
});
