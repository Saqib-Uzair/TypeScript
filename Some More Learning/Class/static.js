var MathOperatons = /** @class */ (function () {
    function MathOperatons() {
    }
    MathOperatons.add = function (a, b) {
        return a + b;
    };
    MathOperatons.substract = function (a, b) {
        return a - b;
    };
    MathOperatons.multiply = function (a, b) {
        return a * b;
    };
    MathOperatons.division = function (a, b) {
        return a / b;
    };
    return MathOperatons;
}());
console.log(MathOperatons.add(1, 2));
console.log(MathOperatons.substract(10, 5));
console.log(MathOperatons.multiply(5, 10));
console.log(MathOperatons.division(10, 5));
