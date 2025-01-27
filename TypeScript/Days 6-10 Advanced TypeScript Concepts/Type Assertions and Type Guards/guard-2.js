var Person = /** @class */ (function () {
    function Person(name) {
    }
    return Person;
}());
var Person2 = /** @class */ (function () {
    function Person2(name) {
    }
    return Person2;
}());
var obj_person = new Person("saqib");
//console.log(obj_person instanceof Person);
var obj_person2 = new Person2("Uzair");
console.log(obj_person instanceof Person2); // it will return false
console.log(obj_person2 instanceof Person2); // it will return true
