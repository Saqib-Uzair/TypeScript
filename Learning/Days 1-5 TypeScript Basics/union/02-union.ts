// Write a function printValue that accepts a parameter which can be either a string or a boolean.


function printValue(x: string | boolean){

    return x;
}


let x_string = printValue("Saqib Uzair");
let x_boolean = printValue(true);


console.log(x_string);
console.log(x_boolean);