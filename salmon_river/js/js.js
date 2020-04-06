function toggleMenu() {
    
    menuButton.classList.toggle("hide");
    if(menuButton.classList.contains("hide")) {
        menuButton.innerHTML = "&Cross;";
    }
    else {
        menuButton.innerHTML = "&#9776;";
    }

    document.getElementById("primaryNav").classList.toggle("hide");

} 

// Weather

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=9540be0505c3be9aad7b3b1fc611de04&units=imperial"

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
   

    document.getElementById('current').innerHTML=weatherInfo.weather[0].main;
    document.getElementById('temp').innerHTML=weatherInfo.main.temp + "&deg;F";
    document.getElementById('humidity').innerHTML=weatherInfo.main.humidity + "%";
    document.getElementById('speed').innerHTML=weatherInfo.wind.speed + "mph";

    var t = weatherInfo.main.temp;
    var s = weatherInfo.wind.speed;

});