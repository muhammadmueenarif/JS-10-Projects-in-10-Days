// code to get input from user and display unicode of the character 


function detectChar() {
    var input = document.getElementById("inputType").value;
    if (input) {
        const unicodeValue = input.charCodeAt(0);
        const result = `The unicode of "${input}" is ${unicodeValue}`;
        document.getElementById("result").textContent = result;
        document.getElementById("inputType").value=""; // it will clear input after each result.

    } else {
        document.getElementById("result").textContent = 'Please Enter a Character';
    }

}




// another way we can use.
// function Detector() {
//     var userText = document.getElementById("inputText").value;
//     var unicode = userText.charCodeAt();  
//     document.getElementById("result").innerHTML = "unicode of the character is " + unicode;
// }