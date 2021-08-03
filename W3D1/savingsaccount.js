class SavingsAccount extends Account {
	constructor(interest, number) {
		super(number);
		this.interest = interest;
	}
	setInterest(inte) {
		this.interest = inte;
	}
	getInterest() {
		return this.interest;
	}
	addInterest() {
		this.deposit(this.balance * (this.interest / 100));
	}
	endOfMonth() {
		this.addInterest();
		return `Interest added SavingsAccount ${this.getNumber()}: balance: ${this.getBalance()} interest: ${this._intreset}`;
	}

	toString() {
		return "Savings Account " + this.getNumber() + ": balance " + this.getBalance() + ": intreset " + this.getInterest();
	}
}