// Write a function that calculates the factorial of a given number.


function findFactorial(x:number): number{
    let factorial = 1;
    for (let i=x; i>0; i--){
        factorial *=i;
    }
    return factorial;    
}


console.log(findFactorial(5));