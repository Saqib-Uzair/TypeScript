// Implement a function that finds the maximum number
function findMax(x, y) {
    if (x > y) {
        return x + " Greater than " + y;
    }
    else if (x < y) {
        return y + " Greater than " + x;
    }
}
var maxNum = findMax(10, 5);
console.log(maxNum);
