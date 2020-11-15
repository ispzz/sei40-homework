
const name = 'Emily';
let checkingAmount = 0;
let savingsAmount = 0;



  // Update display colour to red if balance is $0 otherwise grey
  const updateBackground = function(accountType){
    if (accountType === 'savings'){
      accountID = '#balance2';
    } else {
      accountID = '#balance1';
    }

    if(bank.checkAccountBalance(name, accountType) <= 0){
      $(accountID).addClass('zero-background');
      $(accountID).removeClass('money-background');
    } else {
      $(accountID).addClass('money-background');
      $(accountID).removeClass('zero-background');
    }
  }; // updateBackground()

  const updateAccountDisplay = function(accountType){
    const balance = bank.checkAccountBalance(name, accountType);

    if (accountType === 'savings'){
      accountID = '#balance2';
    } else {
      accountID = '#balance1';
    }

    $(`${accountID}`).text(`$${balance}`);
    updateBackground(accountType);

  }; // updateAccountDisplay()

  const updateATMDisplay = function(){
    updateAccountDisplay('savings');
    updateAccountDisplay('checking');
  }; // updateAccountDisplays()

  const createAccount = function(){
    bank.addAccount(name, savingsAmount, 'savings');
    bank.addAccount(name, checkingAmount, 'checking');

    // Display initial balance
    updateATMDisplay();
  }; // createAccount()

  // Get value from input
  const getInput = function(){
    return this.value;
  }; // getInput()



$(document).ready(function(){
  // DISPLAY
  createAccount();

  // Get input value
  $(`#checkingAmount`).on('keyup', function(){
     checkingAmount = $(this).val();
  });

  $(`#savingsAmount`).on('keyup', function(){
      savingsAmount = $(this).val();
  });

  // Deposit money
  $('#checkingDeposit').on('click', function(){
    bank.deposit(name, parseInt(checkingAmount), 'checking');
    updateATMDisplay();
  });
  $('#savingsDeposit').on('click', function(){
    bank.deposit(name, parseInt(savingsAmount), 'savings');
    updateATMDisplay();
  });

  // Withdraw money
  $('#checkingWithdraw').on('click', function(){
    bank.withdraw(name, parseInt(checkingAmount), 'checking');
    updateATMDisplay();
  });
  $('#savingsWithdraw').on('click', function(){
    bank.withdraw(name, parseInt(savingsAmount), 'savings');
    updateATMDisplay();
  });

});
