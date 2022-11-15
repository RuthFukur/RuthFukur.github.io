class CheckingAccount extends Account{
    constructor(number,amount) {
        super(number);
        this._amount=amount;
    }
    getOverdraft(){
        return this._amount
    }
    setOverdraft(amount){
        this._amount=amount
    }
    endOfMonth() {
        if (this.getBalance() < 0) {
            return `Warning, low balance CheckingAccount ${this.getNumber()}: balance: ${this.getBalance()} overdraft limit: ${this.overdraft}`;
        }
        return "";
    }
    toString() {
        return "Account " + this._number + ": balance " + this._balance + ": overdraft amount" + this._amount;
    }
}