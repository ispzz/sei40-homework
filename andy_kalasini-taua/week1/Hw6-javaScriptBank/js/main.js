console.log('Homework 6 Js Loaded!');

// JavaScript Bank


// Bank

// There is only one bank. This bank is an object, which contains an array of accounts.
// The bank needs a method that will return the total sum of money in the accounts.
// It also needs an addAccount method that will enroll a new account at the bank and
// add it to the array of accounts. There is no need to create additional functions of
// the bank to delete accounts, etc.
// The bank has many accounts. Accounts should be objects that all share a set of
// common functionality.
// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit
// or withdraw from an account to change the balance.
// There is no need to write a user interface. Make sure functions return values --
// you may also have your functions console.log() values to help you see your code working.
// You should write a basic story through a series of JavaScript commands that shows
// that the methods do indeed work as expected:

const javaBank =[
    { accName: 'Andy',  accBalance: 300, },
    { accName: 'Alice', accBalance: 600, },
    { accName: 'Allen', accBalance: 400, }
  ];

for(let i = 0; i < javaBank.length;i++){
    console.log (javaBank[i]);
}

// add some accounts, show the total balance,


// make some deposits and withdrawals, show the new total balance.



// Bonus
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// Addition
