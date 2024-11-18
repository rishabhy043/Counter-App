const count = document.querySelector(".count");
const plusbtn = document.querySelector(".plus-btn");
const minusbtn = document.querySelector(".minus-btn");
const plusminusby = document.querySelector(".inc-dec-by");
const resetbtn = document.querySelector(".reset-btn");

plusbtn.addEventListener("click" , () =>{
    const countvalue = parseInt(count.innerText);
    const changebyvalue = parseInt(plusminusby.value)
    count.innerText = countvalue + changebyvalue
});

minusbtn.addEventListener("click" , () =>{
    const countvalue = parseInt(count.innerText);
    const changebyvalue = parseInt(plusminusby.value)
    count.innerText = countvalue - changebyvalue
    });

resetbtn.addEventListener("click" , () =>{
 count.innerText = 0;
})    