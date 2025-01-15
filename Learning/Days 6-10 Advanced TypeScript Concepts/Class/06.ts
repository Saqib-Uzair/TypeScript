// Write a TypeScript class called Bus with the properties make, model, and year. Implement a constructor that initializes these properties when a Bus object is created.


class Bus {
    make: string;
    model:string;
    year:number;

    constructor(make:string, model:string, year:number){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    disp():void{
        console.log(this.make);
        console.log(this.model);
        console.log(this.year);
    }
}

const bus = new Bus("Make","Model",2025);

bus.disp(); 