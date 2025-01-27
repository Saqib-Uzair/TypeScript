class Car{
    engine: string;

    constructor(engine:string){
        this.engine = engine;
    }

    // to display the value of engine

    disp():void{
        let car_var = "Engine is:" + this.engine;
        console.log(car_var);
    }
}


const car_obj = new Car("V8");
car_obj.disp();