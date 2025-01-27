// Define a Person Interface
// Create an interface called Person with the following properties:

// name (string)
// age (number)
// isEmployed (boolean)
// address (an object with street, city, and zipCode as properties)
// Then, create a variable of type Person and assign it appropriate values.


interface Person{
    name: string,
    age: number,
    isEmployed: boolean,
    address: object,
};


let address={
    street: 2,
    city: "Mirpurkhas",
    zipCode: 69000,
}
const person:Person ={
    name:"Saqib Uzair",
    age: 25,
    isEmployed: true,
    address: address,
}

console.log(person.name);
console.log(person.age);
console.log(person.isEmployed);
console.log(person.address);