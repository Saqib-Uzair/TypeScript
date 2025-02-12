// instance of type guard

class Dog{
    bark(){
        console.log("Woof Woof!");
    }
}


class Cat{
    meow(){
        console.log("Meow Meow!");
    }
}


function makeSound(animal: Dog | Cat){
    if (animal instanceof Dog){
        animal.bark();
    }
    else{
        animal.meow();
    }
}

const myDog = new Dog();
const myCat = new Cat();

makeSound(myDog);
makeSound(myCat);