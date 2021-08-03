class SavingsAccount extends Account {
	constructor(interest, number) {
		super(number);
		this._interest = interest;
	}
	setInterest(inte) {
		this._interest = inte;
	}
	getInterest() {
		return this._interest;
	}
	addInterest() {
		this.deposit(this.getBalance() * this.getInterest() / 100);
	}
	endOfMonth() {
		this.addInterest();
		return `Interest added SavingsAccount ${this.getNumber()}: balance: ${this.getBalance()} interest: ${this._interest}`;
	}

	toString() {
		return "Savings Account " + this.getNumber() + ": balance " + this.getBalance() + ": intreset " + this.getInterest();
	}
}