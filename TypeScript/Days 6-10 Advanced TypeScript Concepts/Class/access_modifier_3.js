var Account = /** @class */ (function () {
    function Account(initial_balance) {
        this.balance = initial_balance;
    }
    Account.prototype.disp = function () {
        return this.balance;
    };
    return Account;
}());
var acc = new Account(250000);
console.log(acc.disp());
