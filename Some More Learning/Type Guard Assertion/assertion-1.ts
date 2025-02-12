// type assertion as keyword

let someValue: any = "Type Assertion";
let strLength: number = (someValue as string).length;

console.log(strLength);