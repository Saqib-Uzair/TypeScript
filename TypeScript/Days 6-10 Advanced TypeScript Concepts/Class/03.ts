class Car{
    name: string;
    year: number;

    constructor(name: string, year: number){
        this.name= name;
        this.year=year;
    }

    to_display():void{
        console.log("Name:",this.name);
        console.log("Year:",this.year);
    }
}

const audi= new Car("Audi Etron Gt",2023);
audi.to_display()