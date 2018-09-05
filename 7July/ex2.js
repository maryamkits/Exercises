let i = 0;
function printNumber(){
    do {
        i++;
    }
    while(i == 10);
        alert(i);
let intervalID = setInterval(1, 10);
    if( i == 10){
        clearInterval(intervalID);
    }
}
// setInterval(printNumber(), 1000);


function printNumbersTimeOut(from, to){
    let current = from;
    setTimeout(function go(){
        alert(current);
        if(current < to){
            setTimeout(go, 1000)
        }
        current++;
    }, 1000)
}
// printNumbersTimeOut(1,10);



function printNumbersIntervar(from,to){
    let current = from;
    let timerId = setInterval( () => {
        alert(current);
        if(current == to){
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}
printNumbersIntervar(1,5);