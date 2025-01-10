// Define two types, Shape and Color, where both types have a name property but with different types. Create an intersection type and try to define an object of this type.



type Shape = {
    name: string
}

type Color = {
    name: number
  
}

type combinedType = Shape & Color;

let both_obj = {
    name: "Saqib",
    name: 25, 
    // An object literal cannot have multiple properties with the same name
    
}
