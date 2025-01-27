

class Account{
    private balance:number;


    constructor (initial_balance:number){
        this.balance = initial_balance;
    }

    disp():number{
        return this.balance;
    }
}

const acc = new Account(250000);
console.log(acc.disp())