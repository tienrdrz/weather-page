var apiKey = "0c8811679fmshd4486e2104d36a4p1bd4abjsne0c793c0062a";
var searchButton = document.querySelector("#search-btn");
var inputCity = document.querySelector("#city");

inputCity.value = localStorage.getItem("cityName");

searchButton.addEventListener("click", event => {
    localStorage.setItem("cityName", $('#city').val());
})



