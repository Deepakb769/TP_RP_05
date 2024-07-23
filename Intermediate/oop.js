class BankAccount{
    constructor(name,accountNumber,email,contact,amount){
        this.name = name;
        this.accountNumber = accountNumber;
        this.email = email;
        this.contact = contact;
        this.amount = amount;
    }
}

const deepakAccount = new BankAccount("Deepak",97486483,"dbohra23@gmail.com",95743542378,"18500")

console.log(deepakAccount)