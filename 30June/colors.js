let btn = document.querySelector(".btn");
let result1 = document.querySelector(".result1");
let result2 = document.querySelector(".result2");
let result3 = document.querySelector(".result3");
let wrapper = document.querySelector(".wrapper");


let color1, color2, color3;
wrapper.addEventListener('click', function(e){
    if((parseInt(e.target.textContent)) < 4){
        let style = window.getComputedStyle(e.target);
        color1 = style.getPropertyValue("background-color");
    }
    else if((parseInt(e.target.textContent)) < 7){
        let style = window.getComputedStyle(e.target);
        color2 = style.getPropertyValue("background-color");
    }
    else {
        let style = window.getComputedStyle(e.target);
        color3 = style.getPropertyValue("background-color");
    }
})

btn.addEventListener('click', function(){
    result1.style.backgroundColor = color1;
    result2.style.backgroundColor = color2;
    result3.style.backgroundColor = color3;
})