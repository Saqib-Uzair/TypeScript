interface Person {
    name: string;
    age: number;
}

interface Employee{
    id: number;
    department: string;
}


type EmployeePerson = Person & Employee;


let ep: EmployeePerson={
    name:"Saqib Uzair",
    age: 25,
    id: 25,
    department: "Development"
}


console.log(ep)