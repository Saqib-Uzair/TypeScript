// Write a TypeScript class called Bus2 with the properties make, model, and year. Add a method start() that prints a message indicating that the Bus is starting
var Bus2 = /** @class */ (function () {
    function Bus2(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Bus2.prototype.start = function () {
        console.log("The bus is starting");
    };
    return Bus2;
}());
var bus2 = new Bus2("make", "model", 2025);
bus2.start();
