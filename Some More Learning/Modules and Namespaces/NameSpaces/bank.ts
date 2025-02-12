// Practice Exercise

//     Create a Bank namespace.
//         Inside, create an Account class with:
//             accountNumber (number)
//             balance (number)
//             deposit(amount: number) method
//         Create an instance and deposit money.


namespace Bank{
    export class Account{
        accountNumber: number;
        balance: number;


        constructor(accountNumber,balance){
            this.accountNumber = accountNumber;
            this.balance = balance;
        }

        deposit(amount: number){
            amount = this.balance + amount;
            console.log(amount);
        }
    }
}

const acc = new Bank.Account(313213,100000);

acc.deposit(5000);