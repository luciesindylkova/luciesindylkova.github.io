
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






// ------- Rating on storm severity in form ------- //
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}