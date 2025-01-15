var Student = /** @class */ (function () {
    function Student(roll, name) {
        this.roll = roll;
        this.name = name;
    }
    Student.prototype.stud_name = function () {
        return this.name;
    };
    Student.prototype.stud_roll = function () {
        return this.roll;
    };
    return Student;
}());
var nikil = new Student(27, "Nikil");
console.log(nikil.stud_name(), nikil.stud_roll());
