// Create a Student class that extends the Person class. Add the following:
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     A property grade (number).
//     A method study that logs a message like: "<name> is studying in grade <grade>."
var Person = /** @class */ (function () {
    function Person(stud_name, grade) {
        this.grade = grade;
        this.name = stud_name;
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.study = function () {
        console.log(this.name, "is studying in Grade", this.grade);
    };
    return Student;
}(Person));
var obj_stud_class = new Student("Saqib Uzair", 12);
obj_stud_class.study();
