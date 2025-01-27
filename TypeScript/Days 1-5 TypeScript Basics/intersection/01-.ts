// Define two types Person and Employee. Create an intersection type EmployeeDetails that combines them. Then, define an object of type EmployeeDetails.

type Person = {
    name:string
    age: number
    cast: string
}

type Employee = {
    id: number
    email: string
    contact: string
    status: string

}


type EmployeeDetails = Person & Employee;

let EmployeeDetails = { 
    name:"Saqib Uzair",
    age: 40,
    cast: "Arain",
    id: 25,
    email: "saqibbhai@gmail.com",
    contact: "0313131313",
    staus: "IT Head"
}


console.log(EmployeeDetails.name)
console.log(EmployeeDetails.id)
console.log(EmployeeDetails.age)
console.log(EmployeeDetails.cast)
console.log(EmployeeDetails.email)

