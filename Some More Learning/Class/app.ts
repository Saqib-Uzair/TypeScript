class Emp{
    private _name:string;


    constructor(_name:string){
        this._name = _name;
    }

    // getter for the name

    get name():string{
        return this._name;
    }

    set name(value:string){
        if(value.length>0){
            this._name = value;
        }
        else {
            console.log("Name cannot be empty");
        }
    }
}

let emp = new Emp("Saqib Uzair");
// console.log(emp.name);

emp.name  = "johnson baby lotion";
console.log(emp.name);