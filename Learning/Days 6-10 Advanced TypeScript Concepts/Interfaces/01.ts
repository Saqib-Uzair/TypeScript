// Area example of interface with height and widht
// calculate the area of a rectangle

interface Rectange{
    height: number,
    width: number
}

const Area: Rectange={
    height: 20,
    width: 10
}

console.log(Area.height*Area.width);