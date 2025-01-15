// Write a TypeScript program that creates a class called Shape with properties color and a method draw(). This program prints a message indicating that the shape is being drawn. Then, create a derived class Circle that extends Shape. Override the draw() method in the Circle class to provide a specific implementation for drawing a circle.



class Shape{
    color:string;

    constructor(color:string){
        this.color = color;
    }

    draw(){
        console.log("The",this.color,"shape is drawing");
    }
}

class Circle extends Shape{
    
    constructor(color:string){
        super(color);
        this.color=color;
        
    }
    draw(){
        console.log("The",this.color,"Circle is drawing")
    }
}

let obj_circle = new Circle("RED BLACK");
obj_circle.draw();

