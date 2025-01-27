// partial utility 

interface Point{
    x: number;
    y:number;
}

let pointPart : Partial<Point>={}; //  all the properties are optional
pointPart.x=10;
pointPart.y=20;

console.log(pointPart.x);
console.log(pointPart.y);