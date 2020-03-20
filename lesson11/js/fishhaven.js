// Current Weather
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585000&APPID=9540be0505c3be9aad7b3b1fc611de04&units=imperial"

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
   

    document.getElementById('current').innerHTML=weatherInfo.weather[0].main;
    document.getElementById('temp').innerHTML=weatherInfo.main.temp + "&deg;F";
    document.getElementById('humidity').innerHTML=weatherInfo.main.humidity + "%";
    document.getElementById('speed').innerHTML=weatherInfo.wind.speed + "mph";

    var t = weatherInfo.main.temp;
    var s = weatherInfo.wind.speed;
    var wc = 35.74 + (0.6215*t) - 35.75*Math.pow(s,0.16) + (0.4275*t*Math.pow(s, 0.16));
        if (s>3 && t<=50) {
            document.getElementById("windChill").innerHTML=wc.toFixed(1) + "&deg;F";
        }
        else {
            document.getElementById("windChill").innerHTML="N/A";
        }
});

// 5 Day Forecast

const mydate = new Date();
const x = mydate.getDay();
console.log(x);
const myweekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(myweekday[3]);

const api = "https://api.openweathermap.org/data/2.5/forecast?id=5585000&APPID=9540be0505c3be9aad7b3b1fc611de04&units=imperial"

fetch(api)
  .then((response) => response.json())
  .then((weatherInfo) => {
    let forecastDayNumber = x;
    let myList=weatherInfo.list;
    for(let i = 0; i<myList.length; i++){
        let time = myList[i].dt_txt;
        if(time.includes('18:00:00')){
          forecastDayNumber+=1;
            if(forecastDayNumber === 7){
                forecastDayNumber = 0;
            } //end 2nd if
            let dayName = document.createElement('span');
            dayName.innerHTML = myweekday[forecastDayNumber];
    
            let myTemp = document.createElement('p');
            myTemp.innerHTML = `${weatherInfo.list[i].main.temp}\xB0`;
    
            let iconCode = weatherInfo.list[i].weather[0].icon;
            let iconPath = `http://openweathermap.org/img/w/${iconCode}.png`;
            let myIcon = document.createElement('img');
            myIcon.style.width = '70px';
            myIcon.src = iconPath;
    
            let myDay = document.createElement('div');
            myDay.setAttribute('class', 'weekdays');
            myDay.appendChild(dayName).setAttribute('class', 'dayName');
            myDay.appendChild(myIcon);.setAttribute('alt', 'weather icon');
            myDay.appendChild(myTemp);
            
            let myForecast = document.querySelector('.forecast');
            myForecast.appendChild(myDay);
    
            let fore = document.querySelector('.fore');
            fore.appendChild(myForecast);
        }//end 1st if
    }//end for cycle
}); //end fetch(api)

// ------- Windchill ------- //



