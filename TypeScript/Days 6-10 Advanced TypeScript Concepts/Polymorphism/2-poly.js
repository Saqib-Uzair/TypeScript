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
var Shape = /** @class */ (function () {
    function Shape(l, w) {
        this.l = l;
        this.w = w;
    }
    Shape.prototype.calculateArea = function (l, w) {
    };
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calculateArea = function (l, w) {
        return l * w;
    };
    return Rectangle;
}(Shape));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.calculateArea = function (l, w) {
        return l * w;
    };
    return Circle;
}(Shape));
var shape_obj = new Shape(1, 2);
function printArea(shape_obj) {
    shape_obj.calculateArea();
}
var rec_obj = new Rectangle(1, 2);
var circ_obj = new Circle(1, 2);
console.log(rec_obj.calculateArea(1, 2));
console.log(circ_obj.calculateArea(1, 2));
