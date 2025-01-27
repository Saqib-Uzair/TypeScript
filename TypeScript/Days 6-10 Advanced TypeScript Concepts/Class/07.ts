// Write a TypeScript class called Bus2 with the properties make, model, and year. Add a method start() that prints a message indicating that the Bus is starting


class Bus2{
    
    make:string;
    model:string;
    year:number;

    constructor(make:string,model:string,year:number){

        this.make = make;
        this.model= model;
        this.year = year;
    }

    start():void{
        console.log("The bus is starting")
    }
}


const bus2 = new Bus2("make","model",2025);
bus2.start()