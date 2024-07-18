const switchBtn = document.querySelector('.switch');
const body = document.body;

switchBtn.addEventListener("click", ()=>{
    body.classList.toggle("on");
    //on is the css code that we write in css. we write that code we want to use in this toggle. 
});
