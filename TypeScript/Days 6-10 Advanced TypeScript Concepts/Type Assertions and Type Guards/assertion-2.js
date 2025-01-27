// You're working on a user management system and need to handle user data safely. Implement the following:
function getUserProfile() {
    return {
        id: 234,
        name: "Saqib",
        email: "saqibuzair@gmail.com",
        isAdmin: true
    };
}
var data = getUserProfile();
var user = data;
console.log(user.name);
console.log(user.email);
console.log(user.id);
console.log(user.isAdmin);
