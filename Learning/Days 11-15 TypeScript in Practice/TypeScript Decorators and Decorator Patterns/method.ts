function measureTime(fn: Function): void{
    console.time("Execution Time");

    fn();
    console.timeEnd("Execution Time");
}



class Emp{
    
    constructor(name:string){}
    
    @measureTime
    disp(){
        console.log("Method Decorator")
    }
}

const emp = new Emp("Name:");

emp.disp()