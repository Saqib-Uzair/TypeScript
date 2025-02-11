class Person{
    name;
    age;

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    introduce(){
        console.log("Hello, My name is",this.name,"And i am ",this.age,"years old.");
    }
}


let person = new Person("saqib",25);

person.introduce();