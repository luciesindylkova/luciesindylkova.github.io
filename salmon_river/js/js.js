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