console.log("JavaScript Bank");

// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank:
// There is only one bank. This bank is an object, which contains an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts:
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Tips:
// Don't overthink this. Shorter code is probably the answer.

const bankOfGringotts = {

  wizardAccounts: [

  {accName: "harry", currentBalance: 400},
  {accName: "hermoine", currentBalance: 300},
  {accName: "ronald", currentBalance: 200}

],
  newBankAcc: function(newAccName){
    this.wizardAccounts.push({accName: newAccName, currentBalance: 0})
  },
  deposit: function(name, money){
    let acc = null;
    for(let i = 0; i < this.wizardAccounts.length; i++){
      if(this.wizardAccounts[i].accName === name){
        acc = this.wizardAccounts[i]
        break;
      }
    }
    if (acc === null){
      console.log (`Not found. Please consult The Ministry of Magic for further details`)
    } else {
      acc.currentBalance += money;
      console.log(`Fellow wizard, ${name}, your deposit of $${money} has been successful`)
      console.log(`New balance: ${acc.currentBalance}`)
    }
  },
  withdraw: function(name, money){
    let acc = null;
    for(let i = 0; i < this.wizardAccounts.length; i++){
      if(this.wizardAccounts[i].accName === name){
        acc = this.wizardAccounts[i]
        break;
      }
    }
    if (acc === null){
      console.log (`Not found. Please consult The Ministry of Magic for further details`)
    } else {
      if(acc.currentBalance > money){
        acc.currentBalance -= money
        console.log(`Fellow wizard, ${name}, your withdrawal of $${money} has been successful.`)
        console.log(`New balance: ${acc.currentBalance}`)
      } else {
        console.log(`Fellow wizard, ${name}, your withdrawal of $${money} has been unsuccessful as the withdrawal exceeded your currentBalance of ${acc.currentBalance} `)
      }
    }
  },
}; // object bankOfGringotts

bankOfGringotts.newBankAcc("neville"); // function to create an accounts
bankOfGringotts.deposit("neville", 30); // function to deposit
bankOfGringotts.withdraw("neville", 20); // function to withdraw
