// Intersection with Readonly Properties


interface ReadonlyUser{
    readonly id: number;
    readonly name: string;
}


interface EditableUser{
    email: string;
    password: string;
}

type CompleteUser = ReadonlyUser & EditableUser;

let cu: CompleteUser = {
    id: 20,
    name: "saqib",
    email: "saqibuzair@gmail.com",
    password: "metroll123"
}

console.log(cu);
// cu.id = 23;
// cu.name = "johnson";
cu.email = "xyz@gmail.com";
cu.password = "password123";

console.log(cu)