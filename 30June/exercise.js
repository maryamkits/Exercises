// let styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// styles[Math.floor(styles.length / 2)] = "Classics";
// let first = styles[0];
// styles.splice(0,1);
// styles.unshift("Rap", "Reggae");
// console.log(styles);


// დავალება 13

let arr = [-2,-3,4,-1,-2,1,5,-3];
function getMaxSubSu(arr){
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0; i < arr.lenght; i++){
        sum2 = 0;
    }
    for(let k = i; k < arr.lenght; k++){
        sum2 =+ sum1[k];
        if(sum2 > sum1){
            sum2 = sum1;
        }
    }
    return sum2;
}