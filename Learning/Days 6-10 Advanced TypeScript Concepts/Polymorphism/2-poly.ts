class Shape{
    l:number;
    w:number;

    constructor(l:number, w: number){
        this.l = l;
        this.w = w;
    }
    
    calculateArea(l:number, w:number):void{

    }
}


class Rectangle extends Shape{

    calculateArea(l: number, w: number): number {
        return l*w;
    }

}

class Circle extends Shape{
    calculateArea(l: number, w: number): number {
        return l*w;
    }
}

const shape_obj = new Shape(1,2);

function printArea(shape_obj){
    shape_obj.calculateArea();
}

const rec_obj = new Rectangle(1,2);
const circ_obj = new Circle(1,2);

console.log(rec_obj.calculateArea(1,2));
console.log(circ_obj.calculateArea(1,2));