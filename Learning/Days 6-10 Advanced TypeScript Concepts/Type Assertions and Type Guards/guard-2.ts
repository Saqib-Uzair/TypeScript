class Person{
    constructor(name: string){}
}

class Person2{
    constructor(name:string){}
}


let obj_person = new Person("saqib");
//console.log(obj_person instanceof Person);

let obj_person2 = new Person2("Uzair");
console.log(obj_person instanceof Person2); // it will return false
console.log(obj_person2 instanceof Person2); // it will return true

