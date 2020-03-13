
// ------- Current Date ------- //
let date = new Date();
let y = date.getFullYear();
let m = date.getMonth();
let d = date.getDate();

document.getElementById("today").textContent = (m+1) + "/" + d + "/" + y;

// ------- Menu Toggle ------- //
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

// ------- Announcement ------- //

let day = date.getDay();

const announcement = document.querySelector('.announcement');
if(day == 5){
    announcement.style.display = 'block';
} else {
    announcement.style.display = 'none';
}

// ------- Windchill ------- //

var t = parseFloat(document.querySelector('#temp').innerHTMLL)
var s = parseFloat(document.querySelector('#speed').innerHTML)
var wc = 35.74 + (0.6215*t) - 35.75*Math.pow(s,0.16) + (0.4275*t*Math.pow(s, 0.16));
/*if (s>3 && t<=50) {*/
    document.getElementById("windChill").innerHTML=wc.toFixed(1) + "&deg;F";
/*}
else {
    document.getElementById("windChill").innerHTML="N/A";
}
*/
// ------- Weather ------- //



// ------- Rating on storm severity in form ------- //
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}