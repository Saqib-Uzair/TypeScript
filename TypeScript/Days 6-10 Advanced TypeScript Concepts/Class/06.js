// Write a TypeScript class called Bus with the properties make, model, and year. Implement a constructor that initializes these properties when a Bus object is created.
var Bus = /** @class */ (function () {
    function Bus(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Bus.prototype.disp = function () {
        console.log(this.make);
        console.log(this.model);
        console.log(this.year);
    };
    return Bus;
}());
var bus = new Bus("Make", "Model", 2025);
bus.disp();
