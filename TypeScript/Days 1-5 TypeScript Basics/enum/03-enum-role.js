var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
var input = "ADMIN";
function isAdmin(role) {
    // return Object.keys(Role).includes(role);
    return Object.keys(Role).includes(role);
}
console.log(isAdmin("ADMIN"));
