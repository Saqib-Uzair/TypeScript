// Add Access Modifiers

// Modify the Person class to:

//     Make the name property private.
//     Add a getter and setter for the name property.
//     Ensure the greet method can still access the name.


class Person {
    private name: string;
    
    constructor(name:string){
        this.name = name;
    }

    get():void{
        console.log("This is the getter method");
    }
    
    set():void{
        console.log("This is the setter method");
    }
    greet():void{
         console.log(this.name);
    }
}

let person_obj = new Person("Saqib");
person_obj.get();
person_obj.set();
person_obj.greet();