abstract class Shape{

    abstract area():number;
    abstract perimeter():number;
}


class Rectangle extends Shape{
    width:number;
    height:number;

    constructor(width,height){
        super ();
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }

    perimeter(): number {
        return 2 * (this.width+this.height);
    }
}

const ins_rec  = new Rectangle(5,10);

console.log(ins_rec.area());
console.log(ins_rec.perimeter());