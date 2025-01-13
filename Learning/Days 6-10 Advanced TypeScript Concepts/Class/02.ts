class Animal {
    constructor(){

    }
    
    walk():void{
        console.log("Walking method")    
    }

    eat():void{
        console.log("eating some food")
    }
}



const cat = new Animal();
cat.walk()
cat.eat()