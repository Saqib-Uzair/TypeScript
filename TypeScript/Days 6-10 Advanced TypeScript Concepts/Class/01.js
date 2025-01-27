var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.display = function () {
        console.log(this.name, this.age);
    };
    return Person;
}());
var person1 = new Person("saqib", 25);
person1.display();
