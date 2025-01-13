// Exercise: Basic Interface Creation

// Create an interface named Person that includes the following properties:

//     name: a string
//     age: a number
//     isEmployed: a boolean
//     Write a function that takes an object of type Person and logs a message about the person's details.


interface Person{
    name: string,
    age: number,
    isEmployed: boolean
}
const user1: Person ={
    name:'Saqib uzair',
    age: 25,
    isEmployed: true               
}


function obj(user1:Person){
    console.log("Name:",user1.name)
    console.log("Age:",user1.age)
    console.log("Employed:",user1.isEmployed)
}

obj(user1)