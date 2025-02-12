var Company;
(function (Company) {
    var HR;
    (function (HR) {
        function getEmployeeCount() {
            return 50;
        }
        HR.getEmployeeCount = getEmployeeCount;
    })(HR = Company.HR || (Company.HR = {}));
    var IT;
    (function (IT) {
        function getDevelopersCount() {
            return 30;
        }
        IT.getDevelopersCount = getDevelopersCount;
    })(IT = Company.IT || (Company.IT = {}));
})(Company || (Company = {}));
console.log(Company.HR.getEmployeeCount());
console.log(Company.IT.getDevelopersCount());
