// Exercise 1: Days of the Week
// Define an enum called Days to represent days of the week starting from Monday = 1.
// Access the value for Wednesday.
// Perform a reverse lookup to find the name for the value 5.
var Days;
(function (Days) {
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
    Days[Days["Sunday"] = 7] = "Sunday";
})(Days || (Days = {}));
console.log(Days.Wednesday);
console.log("Reverse Lookup");
console.log(Days[5]);
