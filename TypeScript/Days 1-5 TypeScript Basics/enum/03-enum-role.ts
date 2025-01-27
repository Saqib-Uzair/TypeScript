
enum Role {
    Admin="ADMIN",
    User="USER",
    Guest="GUEST",
}

const input = "ADMIN";

function isAdmin(role: any): boolean {
    // return Object.keys(Role).includes(role);
    return (Object.keys(Role) as string[]).includes(role);

}

console.log(isAdmin("ADMIN"))
