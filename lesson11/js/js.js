
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








// ------- Rating on storm severity in form ------- //
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}