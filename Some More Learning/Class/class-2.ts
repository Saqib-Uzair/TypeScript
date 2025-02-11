class BankAccount{
    private accountNumber: string;
    protected balance: number;


    constructor (accountNumber,balance){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount:number):number{
        return this.balance + amount;
    }

    withdraw(drawn:number):number{
        return this.balance - drawn;
    }
}

let user = new BankAccount("123abfsejkr", 100000);

// console.log(user.deposit(5000));
console.log(user.withdraw(1000));