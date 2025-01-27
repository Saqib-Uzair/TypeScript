function readOnly(target:any, key:string){

    Object.defineProperty(target,key,{
        writable: false,
        enumerable: true,
        configurable: false
    });
}


class Company {
    @readOnly
    name: string;

    constructor(name:string){
        this.name = name;
    }
}

const cmp = new Company("Name: Company");

cmp.name = "change name:";
console.log(cmp.name);