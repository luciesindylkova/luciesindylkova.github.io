let date = new Date();
let y = date.getFullYear();
let m = date.getMonth();
let d = date.getDate();

document.getElementById("today").textContent = (m+1) + "/" + d + "/" + y;

function toggleMenu() {
    
    document.getElementById("primaryNav").classList.toggle("hide");
} 