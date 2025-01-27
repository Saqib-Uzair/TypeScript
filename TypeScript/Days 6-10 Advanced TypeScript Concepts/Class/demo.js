var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    // to display the value of engine
    Car.prototype.disp = function () {
        var car_var = "Engine is:" + this.engine;
        console.log(car_var);
    };
    return Car;
}());
var car_obj = new Car("V8");
car_obj.disp();
