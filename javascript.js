
function lastModified () {
    let x = new Date (document.lastModified);
    document.getElementById("lastMod").innerHTML = "Last Modified" + x;
}