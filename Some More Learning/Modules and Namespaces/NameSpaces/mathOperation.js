var MathOperation;
(function (MathOperation) {
    function add(a, b) {
        return a + b;
    }
    MathOperation.add = add;
    function subtract(a, b) {
        return a - b;
    }
    MathOperation.subtract = subtract;
})(MathOperation || (MathOperation = {}));
console.log(MathOperation.add(1, 2));
console.log(MathOperation.subtract(10, 4));
