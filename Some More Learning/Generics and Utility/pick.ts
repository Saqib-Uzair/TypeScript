interface Product{
    id: number;
    name: string;
    price: number;
    category: string;
}

type PickProduct = Pick<Product,"name" | "price">;

const Preview: PickProduct ={
    name:"Laptop",
    price:10000
}

console.log(Preview);