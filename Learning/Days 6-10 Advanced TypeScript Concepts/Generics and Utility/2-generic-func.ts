// Write a generic function that returns an array of any type.

function gene_func<U>(value:U[]){
    return value;
}


console.log(gene_func([1,2,3,4]));
console.log(gene_func(["saqib","Uzair","Bashir","Ahmed"]));
console.log(gene_func([true,true,false,false]));