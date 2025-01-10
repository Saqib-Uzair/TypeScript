type personalData = {
    name: string
    age: number
}

type officialData = {
    email: string
    status: string
}


type person = personalData & officialData;


let personObj = {
    name: "Saqib Uzair",
    age:25,
    email: "saqibuzair@gmail.com",
    status: "CEO"
}

console.log(personObj.name)
console.log(personObj.age)