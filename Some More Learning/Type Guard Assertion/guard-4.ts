// instanceof Type Guard

// Create two classes Car and Bike. The Car class should have a method drive(), and the Bike class should have a method ride(). Write a function startVehicle that takes an instance of either Car or Bike and calls the appropriate method.


class Car{
    drive(){
        console.log("Car drive");
    }

}

class Bike{
    ride(){
        console.log("Bike ride");
    }
}

function startVehicle(start: Car | Bike){
    if(start instanceof Car){
        start.drive();
    }
    else{
        start.ride();
    }
}

const myCar = new Car();
const myBike = new Bike();


startVehicle(myCar);
startVehicle(myBike);