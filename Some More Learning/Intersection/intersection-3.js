// Intersection with Readonly Properties
var cu = {
    id: 20,
    name: "saqib",
    email: "saqibuzair@gmail.com",
    password: "metroll123"
};
console.log(cu);
// cu.id = 23;
// cu.name = "johnson";
cu.email = "xyz@gmail.com";
cu.password = "password123";
console.log(cu);
