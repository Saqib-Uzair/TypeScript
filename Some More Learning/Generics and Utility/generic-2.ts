function firstString<T>(arr: string[]):string{
    return arr[0];
}


function firstNumber<T>(arr: number[]):number{
    return arr[0];
}


let fs = firstString<string>(["hello","world","this","is","saqib"]);

let fn = firstNumber<number>([1,2,3,4,5]);

console.log(fs);
console.log(fn);