// Write a TypeScript class called Person with properties name and age. Implement a constructor that initializes these properties when a Person object is created. Then, create a derived class Employee that extends Person. Override the constructor of the Employee class to include an additional property employeeId.  



class Person{
    name:string;
    age:number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}

class Employee extends Person{
    
    employeeId:number;
    constructor(name:string,age:number,employeeId:number){
        super(name,age);
        this.employeeId=employeeId;
    }
}

const emp = new Employee("Saqib",25,25);

console.log(emp.name);
console.log(emp.age);
console.log(emp.employeeId);