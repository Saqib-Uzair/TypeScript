// Write a TypeScript program that defines a class called Vehicle with properties make and model. Implement a constructor that initializes these properties when a Vehicle object is created. Then, create a derived class Car that extends Vehicle. Finally, create a derived class SportsCar that extends Car. Ensure that properties are inherited correctly and each class has its own constructor.  



class Vehicle{
    make:string;
    model:number;

    constructor(make:string,model:number){
        this.make = make;
        this.model=model;
    }
}

class Car extends Vehicle{

    constructor(make:string,model:number){
        super(make,model);
    }
}

class SportsCar extends Car{

    constructor(make:string, model:number){
        super(make,model);
    }
}

const car_obj = new Car("Make",2025);
console.log(car_obj.make);
console.log(car_obj.model);