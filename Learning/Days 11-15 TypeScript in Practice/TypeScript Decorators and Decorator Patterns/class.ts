function logClass(target: Function){
    console.log(target);
}

@logClass
class Person {

    constructor(name: string){}
}


const person = new Person("Saqib");