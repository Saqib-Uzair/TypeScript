// Create a Student class that extends the Person class. Add the following:

//     A property grade (number).
//     A method study that logs a message like: "<name> is studying in grade <grade>."


class Person{
    name:string;
    grade:number;


    constructor(stud_name:string,grade:number){
        this.grade = grade;
        this.name = stud_name;
    }

}

class Student extends Person{
    
    study():void{
        console.log(this.name,"is studying in Grade",this.grade)
    }
}

const obj_stud_class = new Student("Saqib Uzair", 12);
obj_stud_class.study();
