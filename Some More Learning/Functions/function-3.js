// Write a function multiply that takes two parameters: num1 and num2 (both numbers) and returns their product. It should also return null if one of the parameters is not a number.
function multiply(num1, num2) {
    if (typeof num1 != "number" || typeof num2 != "number") {
        return null;
    }
    else {
        return num1 * num2;
    }
}
var mul = multiply("gsdjfg", 5);
console.log(mul);
