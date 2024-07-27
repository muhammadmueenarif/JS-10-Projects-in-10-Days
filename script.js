// palindrome checker

//function to check if given string is palindrome or not.
function isPalindrome(str) {
    const Cleanstr = str.toLowerCase().replace(/[^a-z0-9]/g, ''); //if special characters are entered, 
    //they will be replaced. 

    const reversedstr = Cleanstr.split('').reverse().join(''); //split the string into an
    //array of characters, reverse the array and join the characters back into a string.
    return Cleanstr === reversedstr; //return true if the string is equal to its reverse,
}

function palindromeChecker() {
    const inputText = document.getElementById("inputText");
    const result = document.getElementById("result");
    if (isPalindrome(inputText.value)) {
        result.textContent = `"${inputText.value}" is a palindrome`;
    } else {
        result.textContent = `"${inputText.value}" is not a palindrome`;
    }
    result.classList.add('fadeIn');
    inputText.value = ""; // it will clear the input field after checking so we can enter new text.
}

document.getElementById("checkButton").addEventListener("click", palindromeChecker);

