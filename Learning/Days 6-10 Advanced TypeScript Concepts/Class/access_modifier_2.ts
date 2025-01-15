class Person1{
    public name:string;
    protected id: number;


    constructor(name:string, id:number){
        this.name = name;
        this.id = id;
    }

    dis():void{
        console.log(this.name);
        console.log(this.id);
    }
}

const obj = new Person1("Saqib",25);
console.log(obj.name);