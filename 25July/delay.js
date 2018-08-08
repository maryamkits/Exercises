function delay(ms) { 
    return new Promise(function(resolve){
        setTimeout(() =>{ 
            resolve(ms)
            }, ms);
    })    
}
delay(3000).then((ms)=>alert(`Runs after ${ms/1000} seconds`));
