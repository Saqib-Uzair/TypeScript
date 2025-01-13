class Person{
 name: string;
 age: number;
 
 constructor(name:string,age:number){
    this.name= name;
    this.age = age;
 }

 display():void{
    console.log(this.name,this.age);
 }
}


const person1 = new Person ("saqib",25);
person1.display();