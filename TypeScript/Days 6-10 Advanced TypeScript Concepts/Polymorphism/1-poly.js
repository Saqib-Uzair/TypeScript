var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    return Calculator;
}());
var cal = new Calculator();
console.log(cal.add(1, 2));
console.log(cal.add("Hello", " World"));
