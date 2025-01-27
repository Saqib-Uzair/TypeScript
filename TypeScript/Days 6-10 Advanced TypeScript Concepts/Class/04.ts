// Create a Basic Class
// Define a Person class with the following properties:
//     name (string)
//     age (number)
// Add a constructor to initialize the properties. Also, create a method greet that logs a greeting message using the person's name.

class Person{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name= name;
        this.age = age;
    }
    greet():void{
        console.log("Good Evening",this.name)
        console.log(this.age,"age")
    }
}

const ubaid_bhai = new Person("Syed Ubaid ur Rehman",29);
ubaid_bhai.greet();