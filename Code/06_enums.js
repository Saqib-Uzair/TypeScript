var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
    Direction[Direction["left"] = 3] = "left";
    Direction[Direction["right"] = 4] = "right";
})(Direction || (Direction = {}));
var Yes_NO;
(function (Yes_NO) {
    Yes_NO[Yes_NO["yes"] = 1] = "yes";
    Yes_NO[Yes_NO["no"] = 0] = "no";
})(Yes_NO || (Yes_NO = {}));
console.log(Yes_NO);
console.log(Direction);
