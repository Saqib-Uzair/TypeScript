// typeof type guard example 
function printValue(value) {
    if (typeof value == "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
printValue("Hello World");
printValue(1231);
