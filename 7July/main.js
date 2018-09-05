// callback functions

function say(message = "hello", personFunc){
    personFunc(message);
}

function helloJohn(message){
    console.log(`${message}, My Name is John`)
}
function helloMary(message){
    console.log(`${message}, My Name is Mary`)
}

// say("I am from Georgia", helloJohn);
// say("I am from USA", helloMary);
// say(undefined, helloJohn);

// helloJohn("hi");



//

let User = {
    name: "Gela",
    age: 13,
    isPupil: true,
    printInfo: function(){
        console.log(`${this.name}, ${this.age}, ${this.isPupil}`)
    }
}
// User.printInfo();




//
function Person(name, lastname){
    this.name = name;
    this.lastname = lastname;

    this.info = function(){
        console.log(`${this.name} ${this.lastname}`)
    }
}
let john = new Person("John", "Smith");
let emma = new Person("Emma", "Wattson")
// john.info();


//
// window.onload = () => {
//     init();
// }
// function init(){
//     func();
//     func();
//     func();
// }

document.addEventListener('DOMContentLoaded', (event) => {
    let h1 = document.getElementsByTagName('h1')[0];
    h1.innerHTML = "Hello <small><small>from</small></small> JS";
    h1.style.color = "red";
    h1.style.padding = "10px";
    h1.style.backgroundColor = "#eee";
    h1.style.textAlign = "center";

    h1.addEventListener('click', (event) => {
        setTimeout(greet, 3000)
    })
})


//setTimeout
//setInterval

function greet(){
    alert("setTimeout()");
}
// setTimeout(greet, 3000);

// setTimeout(() => alert("Arrow Function"), 1000)

// let timerId = setTimeout(say, 2000, "I am from Georgia", helloJohn);
// console.log(timerId);


// let intervalId = setInterval(() => {
//     alert("setInterval")
// }, 1000);

// setTimeout(() => {
//     clearInterval(intervalId);
//     alert("Stop Interval");
// }, 5000)  // 5 ის მერე თიშავს


// setTimeout(() => alert("World"), 0);

// alert("Hello");

// setTimeout(say, 0, "I am from Georgia", helloJohn);

function s(){
    john.print();
    emma.print();
    // jimi.print();
    setTimeout(say, 0, "I am from Georgia", helloJohn);
    john.print();
    emma.print();
    // jimi.print();
}
// s();

let i = 0;
let start = Date.now();

function count(){
    for(let j = 0; j < 2e9; j++){
        i++;
    }
    alert(`Done ${Date.now() - start} ms`);
}
// count();

function count2(){
    do {
        i++;
    }
    while(i % 1e6 != 0);
    if( i == 2e9){
        alert(`Done ${Date.now() - start} ms`);
    }
    else {
        setTimeout(count2, 0)
    }
}
// count2();
// s();


// closure
function add(first, second){
    return fisrt + second;
}
function sub(first, second){
    return first - second;
}
function mul(first, second){
    return first * second;
}
function identityf(x){
    return function(){
        return x;
    }
}
function addf(first){
    return function(second){
        return first + second;
    }
}
function liftf(binary){
    return function(first){
        return function(second){
            return binary(first, second)
        }
    }
}

let myX = identityf(8);
let addF = addf(8);
let myLift = liftf(mul)(2)(4);
// console.log(myX());
// console.log(addF(5));
console.log(myLift);

