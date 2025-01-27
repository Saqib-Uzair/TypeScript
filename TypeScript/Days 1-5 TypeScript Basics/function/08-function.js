// Write a function that calculates the factorial of a given number.
function findFactorial(x) {
    var factorial = 1;
    for (var i = x; i > 0; i--) {
        factorial *= i;
    }
    return factorial;
}
console.log(findFactorial(5));
