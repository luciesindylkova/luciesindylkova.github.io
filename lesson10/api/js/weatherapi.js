const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=9540be0505c3be9aad7b3b1fc611de04";
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInformation) => {
    console.log(weatherInformation);

    document.getElementById('current-temp').textContent = weatherInformation.main.temp;

    const imagesrc = 'https://openweathermap.org/img/w/' + weatherInformation.weather[0].icon + '.png';  // note the concatenation
  const desc = weatherInformation.weather[0].description;  // note how we reference the weather array
  document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
  document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
  document.getElementById('icon').setAttribute('alt', desc);

  });

 



