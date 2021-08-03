class CheckingAccount extends Account {
	constructor(overdraftLimit, number) {
		super(number);
		this._overdraftLimit = overdraftLimit;
	}
	setOverdraftLimit(variable) {
		this._overdraft = variable;
	}
	getOverdraftLimit() {
		return this._overdraftLimit;
	}
	withdraw(amount) {
		if (amount <= 0) {
			throw new RangeError("Withdraw amount has to be greater than zero");
		}
		if (amount > this._balance + this._overdraftLimit) {
			throw Error("Insufficient funds");
		}
		this._balance -= amount;
	}
	endOfMonth() {
		if (this.getBalance() < 0) {
			return `Warning, low balance CheckingAccount ${this.getNumber()}: balance: ${this.getBalance()} overdraft limit: ${this._overdraftLimit}`;
		}
		return "";
	}

	toString() {
		return "Checking Account " + this.getNumber() + ": balance " + this.getBalance() + ": overdraft limit " + this._overdraftLimit;
	}

}