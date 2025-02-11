class Vehicle{
    make: string;
    model: string;
    year: number;

    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(){
        console.log(this.make,this.model,"is starting");
    }
}


class Car extends Vehicle{
    numDoors: number;

    constructor(make:string,model:string,year:number,numDoors:number){
        
        super(make,model,year);
        this.numDoors = numDoors;

        
    };
    start(): void {
        console.log(this.make,this.model,"with ",this.numDoors,"doors is starting");
    }
}

let car_obj = new Car("make","model",2025,4)

car_obj.start();
