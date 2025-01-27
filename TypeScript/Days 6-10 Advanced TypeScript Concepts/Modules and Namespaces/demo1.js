var Sub;
(function (Sub) {
    function minus(a, b) {
        console.log(a - b);
    }
    Sub.minus = minus;
    minus(10, 5);
})(Sub || (Sub = {}));
