for(let i = 1; i < 7; i++){
    let pinkBox = document.getElementsByClassName("box"+i);
    pinkBox[2].style.backgroundColor = "pink";
    pinkBox[3].style.backgroundColor = "pink";
}

let blueBox1 = document.getElementsByClassName("box3");
let blueBox2 = document.getElementsByClassName("box4");
for(let i = 0; i < 6; i++){
    blueBox1[i].style.backgroundColor = "blue";
    blueBox2[i].style.backgroundColor = "blue";
}
blueBox1[2].style.backgroundColor = "pink";
blueBox2[3].style.backgroundColor = "pink";