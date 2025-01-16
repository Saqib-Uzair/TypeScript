// function printVar<T>(arg:T):T{
//     return arg;
// }

// console.log(printVar(10));
// console.log(printVar("A String example of generics"));
// console.log(printVar(true));


function random<U>(arg:U):U{
    return arg;
}


console.log(random(100));
console.log(random(true));
console.log(random("String of generics"));
console.log(random(false));