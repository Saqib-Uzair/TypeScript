// Type Guards allow you to narrow down the type of a variable within a conditional block.
function add(a, b) {
    if (typeof a == "number" && typeof b == "number") {
        return a + b;
    }
    if (typeof a == "string" && typeof b == "string") {
        return a.concat(b);
    }
}
console.log(add("Saqib", " Uzair"));
console.log(add(1, 2));
