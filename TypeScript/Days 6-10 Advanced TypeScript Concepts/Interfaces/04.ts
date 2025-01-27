// Optional Properties

// Create an interface named Product with the following properties:

//     id: a number
//     name: a string
//     price: a number
//     description: an optional string


interface Product {
    id: number,
    price: number,
    description?: string 
}


const kinderjoy:Product ={
    id:1,
    price: 500, 

}
const lollipop:Product={
    id:2,
    price: 10,
    description: "Lollipop"
}

function prod1(kinderjoy:Product){
    console.log(kinderjoy.id)
    console.log(kinderjoy.price)
}

prod1(kinderjoy)