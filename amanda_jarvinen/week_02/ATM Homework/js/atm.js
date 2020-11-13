console.log('ATM');

const name = 'Zara';
let checkingAmount = 0;
let savingsAmount = 0;

// Update display colour to red if balance is $0 otherwise grey
const updateBackground = function(accountType){
  if(bank.checkAccountBalance(name, accountType) === 0){
    $(`#${accountType}Account.balance`).addClass('zero-background');
  } else {
    $(`#${accountType}Account.balance`).addClass('money-background');
  }
}; // updateBackground()

const updateDisplay = function(accountType){
  const balance = bank.checkAccountBalance(name, accountType);

  if (accountType === 'savings'){
    accountID = '#balance2';
  } else {
    accountID = '#balance1';
  }

  // const accountID = `#${accountType}Account.balance`;

  $(`${accountID}`).text(`$${balance}`);

  console.log('Display:', accountType);
  console.log('Balance:', balance);

  updateBackground(accountType);
}; // updateDisplay()

const createAccount = function(){
  bank.addAccount(name, savingsAmount, 'savings');
  bank.addAccount(name, checkingAmount, 'checking');


  // Display initial balance
  updateDisplay('checking');
  updateDisplay('savings');
}; // createAccount()



// Get value from input
const getInput = function(){
  console.log(`amount user inputed:`, this.value)
  return this.value;
}; // getInput()






// Display logic
createAccount();
const balance = bank.checkAccountBalance(name, 'checking');
// $(`#${accountType}Account.balance`).text(`$${balance}`);
$('balance1').text(`$`+ balance);


// Get input value
$(`#checkingAmount`).on('keyup', function(){
  console.log('Checking amount', $(this).val());
   checkingAmount = $(this).val();
});

$(`#savingsAmount`).on('keyup', function(){
    console.log('Savings amount', $(this).val());
    savingsAmount = $(this).val();
});

// Deposit money
$('#checkingDeposit').on('click', function(){
  console.log('checking amount:', checkingAmount);
  const updatedBalance = bank.deposit(name, parseInt(checkingAmount), 'checking');
  console.log('UpdatedBalance after deposit:', updatedBalance);
  updateDisplay('checking');
  updateDisplay('savings');
});
$('#savingsDeposit').on('click', function(){
  const updatedBalance = bank.deposit(name, parseInt(savingsAmount), 'savings');
  updateDisplay('checking');
  updateDisplay('savings');
});

// Withdraw money
$('#checkingWithdraw').on('click', function(){
  const updatedBalance = bank.withdraw(name, parseInt(checkingAmount), 'checking');
  updateDisplay('checking');
  updateDisplay('savings');
});
$('#savingsWithdraw').on('click', function(){
  const updatedBalance = bank.withdraw(name, parseInt(savingsAmount), 'savings');
  updateDisplay('checking');
  updateDisplay('savings');
});





//
//
//
//
//
// $('#checkingDeposit').on('click', deposit(event, 'checking', 10));
// // $('#savingsDeposit').on('click', deposit('savings', $('#savingsAmount').text()));
// //
// // // Withdraw money
// // $('#checkingWithdraw').on('click', withdraw('checking', $('#checkingAmount').text()));
// // $('#savingsWithdraw').on('click', withdraw('savings', $('#savingsAmount').text()));
// // Deposit money
// const deposit = function(this, accountType, amount){
//   // if (accountType === 'checking'){
//   //   const amount = checkingInput;
//   // } else {
//   //   const amount = savingsInput;
//   // }
//   console.log(`Deposit pressed on ${accountType}`)
//
//   const updatedBalance = bank.deposit(name, parseInt(amount), `${accountType}`);
//
//   updateDisplay(`${accountType}`);
// } // deposit()
//
// // Withdraw money
// const withdraw = function(event, accountType, amount){
//   // if (accountType === 'checking'){
//   //   const amount = checkingInput;
//   // } else {
//   //   const amount = savingsInput;
//   // }
//   console.log(`Withdraw pressed on ${accountType}`)
//
//   const updatedBalance = bank.withdraw(name, parseInt(amount), `${accountType}`);
//
//   updateDisplay(accountType);
// } // deposit()
