// Create a numeric enum Direction with values for:
//     Up = 10
//     Down = 20
//     Left = 30
//     Right = 40
//     Print the value for Left.
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 10] = "Up";
    Direction[Direction["Down"] = 20] = "Down";
    Direction[Direction["Left"] = 30] = "Left";
    Direction[Direction["Right"] = 40] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Left);
