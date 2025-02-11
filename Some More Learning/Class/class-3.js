var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Vehicle.prototype.start = function () {
        console.log(this.make, this.model, "is starting");
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, year, numDoors) {
        var _this = _super.call(this, make, model, year) || this;
        _this.numDoors = numDoors;
        return _this;
    }
    ;
    Car.prototype.start = function () {
        console.log(this.make, this.model, "with ", this.numDoors, "doors is starting");
    };
    return Car;
}(Vehicle));
var car_obj = new Car("make", "model", 2025, 4);
car_obj.start();
