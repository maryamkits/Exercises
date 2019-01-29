function Calculator(){
    let calculator = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    }
    this.calculate = function(str){
        this.str = str;
        let split = str.split(" ");
        a =+ split[0],
        op = split[1],
        b =+ split[2]
        return calculator[op](a, b);
    }
    this.addOperator = function(name, func){
        this.name = name;
        this.func = function(a,b){}
        calculator[name] = func;
    }
}
  
let calc = new Calculator();
alert(calc.calculate("5 + 2"));


let powerCalc = new Calculator();

powerCalc.addOperator("*", (a,b) => a * b);
powerCalc.addOperator("/", (a,b) => a / b);
powerCalc.addOperator("**", (a,b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert(result);