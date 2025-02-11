var Temperature = /** @class */ (function () {
    function Temperature(_celsius) {
        this._celsius = _celsius;
    }
    Object.defineProperty(Temperature.prototype, "celsius", {
        // getter method celsius
        get: function () {
            return this._celsius;
        },
        // setter method celsius
        set: function (value) {
            this._celsius = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Temperature.prototype, "fahrenheit", {
        // getter method fahrenheit 
        get: function () {
            return ((this._celsius * 9 / 5) + 32);
        },
        // setter method fahrenheit
        set: function (f_c) {
            f_c = ((f_c - 32) * 5 / 9);
            this._celsius = f_c;
        },
        enumerable: false,
        configurable: true
    });
    return Temperature;
}());
var temp = new Temperature(0);
console.log(temp.celsius);
console.log(temp.fahrenheit);
