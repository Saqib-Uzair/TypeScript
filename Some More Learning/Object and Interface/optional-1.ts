// Optional Properties
// Create an interface called Car with the following properties:

// make (string)
// model (string)
// year (number)
// color (string, optional)
// ownerName (string, optional)
// Then, create a few Car objects with and without optional properties.



interface Car{
    make:string;
    model:string;
    year: number;
    color?:string;
    ownerName?: string;
};

let vigo:Car ={
    make:"Make",
    model:"Model",
    year: 2025,
}

let v8:Car = {
    make:"Make",
    model:"Model",
    year:2022,
    color:"White",
    ownerName:"Mohsin"
}

console.log("Vigo:",vigo);
console.log("Landcruser:",v8);