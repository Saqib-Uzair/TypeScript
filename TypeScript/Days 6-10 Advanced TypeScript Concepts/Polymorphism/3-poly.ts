// example of runtime polymorphism


class Animal{

    makesound():void{
        console.log("SOME ANIMALS SOUND");
    }
}


class Dog extends Animal{
    makesound(): void {
        console.log("BARK WOUF WOUF")
    }
}

class Cat extends Animal{
    makesound(): void {
        console.log("MEOW MEOW");
    }
}

function sound(animal:Animal){
    animal.makesound();
}

const dog = new Dog();
const cat = new Cat();
dog.makesound();
cat.makesound();