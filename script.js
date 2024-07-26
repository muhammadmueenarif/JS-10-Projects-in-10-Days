// code to check if it given number is prime number or not.


// function numberChecker() {
//     var number = document.getElementById("userinput").value;
//      number = parseInt(number);
    
//      if (isNaN(number)) {
//         document.getElementById("message").innerText= `please enter a number`;
//         document.getElementById("message").style.color = "red";
//         return;
//      }
//      else if(number<=1) {
//         document.getElementById("message").innerText= `${number} is not a prime number`;
//         document.getElementById("message").style.color="red";
//         return;    
//      }
//      else if (number >1 && number<=3) {
//         document.getElementById("message").innerText= `${number} is a prime number`;
//         document.getElementById("message").style.color="green";
//         return;

//     } else if(number % 2===0 || number % 3===0) {
//             document.getElementById("message").innerText= `${number} is not a prime number`;
//             document.getElementById("message").style.color="red";
//             return;   
//     }
//     else{
//     }
    
// }








// Function to check if a number is prime
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2, sqrt = Math.sqrt(number); i <= sqrt; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to check user input and display result
function numberChecker() {
    var number = document.getElementById("userinput").value;
    number = parseInt(number);

    if (isNaN(number)) {
        document.getElementById("message").innerText = `Please enter a number`;
        document.getElementById("message").style.color = "red";
        return;
    }

    if (isPrime(number)) {
        document.getElementById("message").innerText = `${number} is a prime number`;
        document.getElementById("message").style.color = "green";
    } else {
        document.getElementById("message").innerText = `${number} is not a prime number`;
        document.getElementById("message").style.color = "red";
    }
}