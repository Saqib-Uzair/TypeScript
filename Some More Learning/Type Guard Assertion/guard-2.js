function printLength(input) {
    if (typeof input == "string") {
        console.log(input.length);
    }
    else {
        console.log(input);
    }
}
printLength("Hello guys chae p lo");
printLength([1, 2, 3, 4, 5]);
