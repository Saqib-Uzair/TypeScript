var Car = /** @class */ (function () {
    function Car(name, year) {
        this.name = name;
        this.year = year;
    }
    Car.prototype.to_display = function () {
        console.log("Name:", this.name);
        console.log("Year:", this.year);
    };
    return Car;
}());
var audi = new Car("Audi Etron Gt", 2023);
audi.to_display();
