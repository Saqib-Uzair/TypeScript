var Sum;
(function (Sum) {
    function add(a, b) {
        console.log(a + b);
    }
    Sum.add = add;
    add(1, 2);
})(Sum || (Sum = {}));
