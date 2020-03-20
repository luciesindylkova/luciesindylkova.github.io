// ------- Upcoming Events ------- //

const townsURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(townsURL)
  .then((response) => response.json())
  .then((eventInfo) => {
    var towns = eventInfo['towns'];
    console.log(towns)
    for(let i=0; i<=towns.length; i++) {
        if(towns[i].name==="Preston") {
            const appendEvent = document.querySelector('.announcement');
         for (let x=0; x<towns[i].events.length; x++) {
            let myEvent = document.createElement('p');
            myEvent.innerHTML = towns[i].events[x];
            appendEvent.appendChild(myEvent);


            }
        }
    }
});



