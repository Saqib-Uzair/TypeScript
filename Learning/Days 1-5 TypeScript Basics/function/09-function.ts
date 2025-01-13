// Implement a function that finds the maximum number


function findMax(x:number, y:number): any {

    if (x>y){
        return x+" Greater than "+y;
    }
    else if (x<y){
        return y+" Greater than "+x
    }
}

let maxNum:number = findMax(10,5);
console.log(maxNum)