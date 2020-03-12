//ADD the key and change units to imperial
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=9540be0505c3be9aad7b3b1fc611de04&units=imperial"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);

    document.getElementById('place').innerHTML=weatherInfo.name;
    document.getElementById('currentTemp').innerHTML=weatherInfo.main.temp;
    document.getElementById('windSpeed').innerHTML=weatherInfo.wind.speed;

    const iconcode = weatherInfo.weather[0].icon;
    console.log(iconcode);

    const icon_path = "http://openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon_path);

    document.getElementById('weather_icon').src = icon_path;

 }); //end of "then" fat arrow function

 const mydate = new Date();
const y = mydate.getDay();
console.log(y);
const myweekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(myweekday[3]);




