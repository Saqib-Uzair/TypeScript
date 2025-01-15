// Add Access Modifiers
// Modify the Person class to:
//     Make the name property private.
//     Add a getter and setter for the name property.
//     Ensure the greet method can still access the name.
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.get = function () {
        console.log("This is the getter method");
    };
    Person.prototype.set = function () {
        console.log("This is the setter method");
    };
    Person.prototype.greet = function () {
        console.log(this.name);
    };
    return Person;
}());
var person_obj = new Person("Saqib");
person_obj.get();
person_obj.set();
person_obj.greet();
