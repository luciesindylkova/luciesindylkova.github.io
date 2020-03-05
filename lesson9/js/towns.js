const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
      if(i===1 || i===4 || i===5){
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let motto = document.createElement('h3');
        let yearFounded = document.createElement('p');
        let rainfall = document.createElement('p');
        let image = document.createElement('img');
        let div = document.createElement('div');
            if (i === 4) {
                div.classList.add("floatLeft");
            }
            else {
              div.classList.add("floatRight");
            }

        h2.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
        rainfall.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;

        image.setAttribute('src', 'images/' + towns[i].photo);
        image.setAttribute('alt', towns[i].name);

        
        div.appendChild(h2);
        div.appendChild(motto);
        div.appendChild(yearFounded);
        div.appendChild(rainfall);
        
        card.appendChild(div);
        card.appendChild(image);
        

        document.querySelector('div.cards').appendChild(card);
      }
    }
  }
    );
