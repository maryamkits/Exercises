// let parentBox = document.querySelectorAll(".Boxes")
let first = document.querySelector(".firstBox");
first.addEventListener('click', function(){
    // for(let i = 0; i <= 3; i++){
        let b = document.getElementById("box1");
        let bStyle = b.style.backgroundColor;
        document.getElementById("box11").style.backgroundColor = bStyle;
    // }
});
