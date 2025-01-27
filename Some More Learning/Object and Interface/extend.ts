// Extending Interfaces
// Create an interface called Employee with the following properties:

// id (string)
// name (string)
// position (string)
// salary (number)
// Create another interface called Manager that extends Employee and adds a teamSize property (number).

// Create objects that conform to the Manager interface and the Employee interface.




interface Employee{
    id:string;
    name:string;
    position:string;
    salary:number;
}



interface Manager extends Employee{
    teamSize:number;
}


let obj_1: Manager={
    id:"1",
    name:"Saqib Uzair",
    position:"Backend Engineer",
    salary:50000,
    teamSize:50,
}


console.log(obj_1.name);
console.log(obj_1.position);