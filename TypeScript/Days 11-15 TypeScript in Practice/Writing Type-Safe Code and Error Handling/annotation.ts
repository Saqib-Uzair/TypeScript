function add(a:number, b:number):number{
    return a+b;
}

let sum =  add(1,2);

// let sum_another = add(1,"2"); 

// Error: Argument of type 'string' is not assignable to parameter of type 'number'.

console.log(sum);