export class User{
    name: string;
    age: number;

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greet(user:User):string{
        return ("Hello "+user.name);
    }
}