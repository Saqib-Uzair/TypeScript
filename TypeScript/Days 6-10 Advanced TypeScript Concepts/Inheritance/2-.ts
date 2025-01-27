// Write a TypeScript class called Animal with properties name and species. Implement a constructor that initializes these properties when an Animal object is created. Next, create a derived class Tiger that extends Animal. Add a method roar() to the Tiger class that prints a message indicating that the tiger is roaring. 

class Animal{
    
    name:string;
    species:string;

    constructor(name:string, species:string){
        this.name = name;
        this.species = species;
    }
}


class Tiger extends Animal{

    roar():void{
        console.log("The Tiger is Roaring");
    }
}

// const animal_obj = new Animal("Tiger","Panthera");
const tiger_obj = new Tiger("Tiger","Panthera");
tiger_obj.roar();