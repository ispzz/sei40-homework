/*
  --------------------
  JAVASCRIPT BANK
  --------------------
*/

// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
// There is only one bank. This bank is an object, which contains an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Tips
// Don't overthink this. Shorter code is probably the answer.
console.log(`==========================`)
console.log(`WELCOME TO JAVASCRIPT BANK`)
console.log(`   🤑 We love money 🤑   `)
console.log(`==========================`)
console.log(`\nYour options:\n
- bank.balance() because you're poor and we're rich;\n
- bank.enroll() to join the family;\n
- bank.deposit(yourName, amount) to give us more money;\n
- bank.withdraw(yourName, amount) because you hate us\n\n`)

const bank = {
  accounts: [{name:'Bart Simpson', currentBalance: 1000}],
  balance: function(){
    let totalSumOfMoney = 0;

    for (let i = 0; i < this.accounts.length; i++){
      totalSumOfMoney += this.accounts[i].currentBalance;
    } // for

    console.log(`There is $${totalSumOfMoney.toFixed(2)} in the bank.`);
    return totalSumOfMoney;
  },
  addAccount: function(name, initialDeposit){
    const currentBalance = initialDeposit;
    this.accounts.push({name, currentBalance});
    console.log(`Your account has been added. Thanks ${name}`);
  },
  deposit: function(accountName, amount){
    let account;

    for (let i = 0; i < this.accounts.length; i++){
      if (this.accounts[i].name === accountName){
        account = this.accounts[i];
      }
    }// for

    account.currentBalance += amount;

    console.log(`You deposited $${amount.toFixed(2)} into ${account.name}'s account. New balance: $${account.currentBalance.toFixed(2)}`);
    return account.currentBalance;
  },
  withdraw: function(accountName, amount){
    let account;

    for (let i = 0; i < this.accounts.length; i++){
      if (this.accounts[i].name === accountName){
        account = this.accounts[i];
      }
    }

    account.currentBalance -= amount;

    console.log(`You withdrew $${amount.toFixed(2)} from ${account.name}'s account. New balance: $${account.currentBalance.toFixed(2)}`);
    return account.currentBalance;
  }
}; // bank

bank.balance();
bank.addAccount(`Peggy Hill`, 100);
bank.addAccount(`Bill Dauterive`, 2.50);
console.log(bank.deposit(`Bart Simpson`,20));
console.log(bank.deposit(`Peggy Hill`,50));
console.log(bank.withdraw(`Bart Simpson`,20));
console.log(bank.withdraw(`Peggy Hill`,50));
bank.balance();
