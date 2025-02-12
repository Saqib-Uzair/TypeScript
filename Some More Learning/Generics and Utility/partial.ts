// Partial utility


interface User{
    name: string;
    age: number;
}

type PartialUser = Partial<User>;

const user: PartialUser = {
    name: "smith",
    age:25
};

console.log(user);