//email validation project
let emailId= document.getElementById("email-id");
let errorMsg= document.getElementById("error-msg");
let icon = document.getElementById("icon");

function checker() {
    icon.style.display = "inline-block";
    let email=emailId.value.trim(); //trim function will remove empty spaces at start & end of email.
    
    if (email === "") {
        icon.style.display= "none";
        errorMsg.style.display="none";
        emailId.style.border= "2px solid #d1d3d4"
    }
    else if(validateEmail(email)) {
        icon.innerHTML= '<i class= "fas fa-check-circle"></i>';
        icon.style.color= "#2ecc71";
        errorMsg.style.display= "none";
        emailId.style.border= "2px solid #2ecc71";
    } else {
        icon.innerHTML= '<i class= "fas fa-exclamation-circle"></i>';
        icon.style.color= "#ff2851";
        errorMsg.style.display= "block";
        emailId.style.border= "2px solid #ff2851";
    }
}

function validateEmail(email) {
    let atIndex= email.indexOf("@"); //this will find index of @.

    let dotIndex = email.lastIndexOf("."); //this will find . which will be at last. 
    // like kashan.moin@gmail.com. it has 2 dots so it will find last dot. 
    
    //atIndex > 0 means that first letter of email will not be @ symbol.
    //and dotIndex > atIndex+1 means the .symbol should be after the @ symbol.
    //dotIndex <email.length will verify that there are some words after . symbol. like .com
    if(atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length -2) {
            return true;
            }
            else {
                return false;
                }
}