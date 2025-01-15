var Person1 = /** @class */ (function () {
    function Person1(name, id) {
        this.name = name;
        this.id = id;
    }
    Person1.prototype.dis = function () {
        console.log(this.name);
        console.log(this.id);
    };
    return Person1;
}());
var obj = new Person1("Saqib", 25);
console.log(obj.name);
