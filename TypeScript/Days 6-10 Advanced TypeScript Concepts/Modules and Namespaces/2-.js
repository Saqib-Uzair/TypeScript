var SomeNameSpcae;
(function (SomeNameSpcae) {
    var SomeClass = /** @class */ (function () {
        function SomeClass() {
        }
        return SomeClass;
    }());
    SomeNameSpcae.SomeClass = SomeClass;
    function some_funct(a, b) {
        console.log(a + b);
    }
    SomeNameSpcae.some_funct = some_funct;
    some_funct("Saqib", "-Uzair");
})(SomeNameSpcae || (SomeNameSpcae = {}));
