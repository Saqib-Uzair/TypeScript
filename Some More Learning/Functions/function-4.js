// Write a function isEven that checks if a given number is even or odd, returning a boolean.
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
var bool = isEven(5);
console.log(bool);
