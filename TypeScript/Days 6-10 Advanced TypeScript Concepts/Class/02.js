var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.walk = function () {
        console.log("Walking method");
    };
    Animal.prototype.eat = function () {
        console.log("eating some food");
    };
    return Animal;
}());
var cat = new Animal();
cat.walk();
cat.eat();
