// Create two types:

//     Teacher with a teach() method.
//     Student with a study() method.
//     Define an intersection type TeachingAssistant that combines both. Instantiate an object of this type.


type Teacher = {
    teach(name:string):string
}

type Student = {
    study(name:string):string
}