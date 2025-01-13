// Exercise 1: Days of the Week
// Define an enum called Days to represent days of the week starting from Monday = 1.
// Access the value for Wednesday.
// Perform a reverse lookup to find the name for the value 5.


enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

console.log(Days.Wednesday);
console.log("Reverse Lookup");
console.log(Days[5]);