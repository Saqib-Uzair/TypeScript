interface Person{
    name:string;
    contact: number;
}

let boy: Readonly<Person>={
    name: 'saqib',
    contact: 12345
};

boy.name = "Uzair";
console.log(boy.name);
console.log(boy.contact);