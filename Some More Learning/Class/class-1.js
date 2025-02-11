var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.introduce = function () {
        console.log("Hello, My name is", this.name, "And i am ", this.age, "years old.");
    };
    return Person;
}());
var person = new Person("saqib", 25);
person.introduce();
