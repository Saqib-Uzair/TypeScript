// Write a function isEven that checks if a given number is even or odd, returning a boolean.


function isEven(num:number):boolean{

    if (num%2 == 0){
        return true;
    }
    
    else{
        return false;
    }
}

let bool = isEven(5);
console.log(bool);