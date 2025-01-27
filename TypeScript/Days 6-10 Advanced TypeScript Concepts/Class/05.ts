class Student{
    roll:number;
    name: string;


    constructor(roll:number,name:string){
        this.roll = roll;
        this.name = name;
    }

    stud_name():string{
        return this.name;
    }

    stud_roll():number{
        return this.roll;
    }

    
}

const nikil = new Student (27,"Nikil");
console.log(nikil.stud_name(),nikil.stud_roll());
