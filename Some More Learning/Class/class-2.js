var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        return this.balance + amount;
    };
    BankAccount.prototype.withdraw = function (drawn) {
        return this.balance - drawn;
    };
    return BankAccount;
}());
var user = new BankAccount("123abfsejkr", 100000);
// console.log(user.deposit(5000));
console.log(user.withdraw(1000));
