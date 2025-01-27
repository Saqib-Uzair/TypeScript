// Readonly property


interface Employee {
    readonly id: number,
    readonly name: string
}

const emp1: Employee={
    id: 25,
    name: "Saqib"
}

console.log(emp1.id)
console.log(emp1.name)