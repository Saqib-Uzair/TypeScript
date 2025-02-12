function identity<T>(arg: T): T {
    return arg;
}


let output1 = identity<string>("Hello Generic");

let output2 = identity<number>(25);

console.log(output1);
console.log(output2);