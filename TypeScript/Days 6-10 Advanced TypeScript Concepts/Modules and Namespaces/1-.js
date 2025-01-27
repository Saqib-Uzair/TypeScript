var Person;
(function (Person) {
    var User1 = /** @class */ (function () {
        function User1() {
        }
        return User1;
    }());
    Person.User1 = User1;
    function multiply(a, b) {
        console.log(a * b);
    }
    Person.multiply = multiply;
    multiply(10, 5);
})(Person || (Person = {}));
