var dateText = document.querySelector('#display-date')

var apiKey = "e04e3fdbd3f9d1194e400e14cc8f5a3f";
var searchButton = document.querySelector("#searchbtn");
var inputCity = document.querySelector("#city");

inputCity.value = localStorage.getItem("cityName");

searchButton.addEventListener("click", event => {
    localStorage.setItem("cityName", $('#city').val());
});

var todayDate = new Date();
var todayDay = currentDate.getDate();
var todayMonth = currentDate.getMonth();
var todayYear = currentDate.getFullYear();

var displayDate = function () {
    dateText.innerHTML =
    "Today's date is " +
    todayYear + '/' + todayMonth + '/' + todayDay;
};



const iconE = document.querySelector(".icon");
const tempE = document.querySelector(".temperature p");
const tempEDesc = document.querySelector(".temperature-desc p");
const locationE = document.querySelector(".location p");

//defining properties
const weather = {

    temperature: {
        value: 16,
        unit: "celsius"
    },
    description: "Thunderstorms",
    icondId: "tstorms",
    city: "Toronto",
    country: "CA"
};

displayWeather(){

iconE.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;

tempE.innerHTML =  `${weather.temperature.value} ° C`;

tempEDesc.innerHTML = weather.description;

locationE.innerHTML = `${weather.city}, ${weather.country}`;
};

function celToFar(temperature){
 (temperature * 9/5) + 32;
}

if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition( setPosition, showError);
} else {
    window.alert("Browser does not support geolocation")
}

function setPosition(position){
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    getWeather(lat, long);
}

function getWeather(lat, long){
    let apiKeyLink = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`
}
// displayDate();