function randomNumber() {
    var data = document.getElementById("changer");
    var random = Math.floor(Math.random()*100);
    data.innerHTML = random;
}