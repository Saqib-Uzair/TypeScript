// instanceof Type Guard
// Create two classes Car and Bike. The Car class should have a method drive(), and the Bike class should have a method ride(). Write a function startVehicle that takes an instance of either Car or Bike and calls the appropriate method.
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Car drive");
    };
    return Car;
}());
var Bike = /** @class */ (function () {
    function Bike() {
    }
    Bike.prototype.ride = function () {
        console.log("Bike ride");
    };
    return Bike;
}());
function startVehicle(start) {
    if (start instanceof Car) {
        start.drive();
    }
    else {
        start.ride();
    }
}
var myCar = new Car();
var myBike = new Bike();
startVehicle(myCar);
startVehicle(myBike);
