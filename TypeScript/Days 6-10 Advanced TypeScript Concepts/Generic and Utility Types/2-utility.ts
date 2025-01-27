// Required utility example

interface Employee{
    name: string;
    id: number;
    age?: number;
}

let emp:Required<Employee>={
    name:"saqib",
    id: 25,
    age:25

};

console.log(emp.name);
console.log(emp.age);
console.log(emp.id);