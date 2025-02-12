// Practice Exercise
//     Create a Bank namespace.
//         Inside, create an Account class with:
//             accountNumber (number)
//             balance (number)
//             deposit(amount: number) method
//         Create an instance and deposit money.
var Bank;
(function (Bank) {
    var Account = /** @class */ (function () {
        function Account(accountNumber, balance) {
            this.accountNumber = accountNumber;
            this.balance = balance;
        }
        Account.prototype.deposit = function (amount) {
            amount = this.balance + amount;
            console.log(amount);
        };
        return Account;
    }());
    Bank.Account = Account;
})(Bank || (Bank = {}));
var acc = new Bank.Account(313213, 100000);
acc.deposit(5000);
