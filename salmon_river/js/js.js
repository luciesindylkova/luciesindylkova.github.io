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

// Guides

const requestURL = 'https://luciesindylkova.github.io/json/guides.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const guides = jsonObject['guides'];
        console.log(guides);

    for (let i = 0; i < guides.length; i++ ) {

        let card = document.createElement('section');
        let name = document.createElement('h3');
        let experience = document.createElement('p');
        let email = document.createElement('p');
        let bio = document.createElement('p');
        let image = document.createElement('img');
        let div = document.createElement('div');
            if (i === 1) {
                div.classList.add("floatLeft");
            }
            else {
              div.classList.add("floatRight");
            }

        name.textContent = guides[i].name;
        experience.textContent = 'Year of experience: ' + guides[i].years;
        email.textContent = 'Email: ' + guides[i].email;
        bio.textContent = 'Bio: ' + guides[i].biography;

        image.setAttribute('src', 'images/' + guides[i].photo);
        image.setAttribute('alt', guides[i].name);

        
        div.appendChild(name);
        div.appendChild(experience);
        div.appendChild(email);
        div.appendChild(bio);
        
        card.appendChild(image);
        card.appendChild(div);

        

        document.querySelector('div.guidesDiv').appendChild(card);
      
    }
  }
    );
