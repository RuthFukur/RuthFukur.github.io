class SavingsAccount extends Account{
    constructor(number,interest){
        super(number);
        this._interest= interest
    }
    setInterest(interest){
        this._interest=interest;
    }
    getInterest(){
        return this._interest;
    }
    addInterest(){
         let iR =this._balance * (this._interest / 100)
        super.deposit(iR);
        return iR;
    }
    endOfMonth() {
        this.addInterest();
        return `Interest added SavingsAccount ${this.getNumber()}: balance: ${this.getBalance()} interest: ${this._intreset}`;
    }
    
    toString() {
        return "Savings Account: balance " + this.getNumber() + ": balance " + this.getBalance() + ": intereset " + this.getInterest() + "%";}
}