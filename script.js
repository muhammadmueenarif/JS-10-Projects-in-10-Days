
function changeText() {
    var name = prompt("Enter your name");
    document.getElementById("world").innerHTML = name + '!';
}

//we can also do this by queryselector. 
// const btnElement = document.querySelector('button');
// const world = document.getElementById('world');

// btnElement.onclick = function () {
//     const username= prompt("");
//     world.textContent = username;
// }