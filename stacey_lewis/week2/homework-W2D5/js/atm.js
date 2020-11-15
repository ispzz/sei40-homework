console.log('atm JS log');


//2 parts of code.

//________________JS code section_______________________

//withdraw function


// function 1: withdraw (formInputA,formInputB, balanceA, balanceB)
//------if amount to deposit (formInputA, formInputB) is less than amount in account (balanceA) + (balanceB); DONE
//------------if(formInputA > formInputB)
//---------------take the amount from balanceA (up to the balance), then the left over from balanceB, otherwise do the opposite.
//------else - error message.
// debugger;

const bank = {
  checkingBalance: 0,
  savingsBalance: 0,

  errorMsg: 'false',
  remainder: 0,
  amount: 0,
  account: 0,
  otherAccount: 0,

  depositFunction: function(amount,accountType) {
    if(accountType === 'checking') {
    //add conditional to set the values based on the class
    this.checkingBalance += parseInt(amount);
    }
    else {
      this.savingsBalance += parseInt(amount);
    }
  }, //depositFunction

  withdrawFunction: function(amount,accountType) {
    //set which account using.
    if(accountType === 'checking') {
      this.account = bank.checkingBalance;
      this.otherAccount = bank.savingsBalance;
    } // end checking if
    else {
      this.account = bank.savingsBalance;
      this.otherAccount = bank.checkingBalance;
    }
    if (this.account + this.otherAccount >= parseInt(amount)) {
      this.remainder = 0;
      if (parseInt(amount) <= this.account) { //check if it will have a remainder.
        this.account -= parseInt(amount);
      } //end if
        else {
          this.remainder = parseInt(amount)-this.account;
          this.account = 0;
        } //end else
        this.otherAccount -= this.remainder;
      } //end if
      else {
        bank.errorMsg = true;
      } //end else

      if(accountType === 'checking') {
        bank.checkingBalance = this.account;
        bank.savingsBalance = this.otherAccount;
      } // end checking if
      else {
        bank.savingsBalance = this.account;
        bank.checkingBalance = this.otherAccount;
      }

  }, // withdrawFunction

  emptyAccountAlert: function () {
    if(this.checkingBalance === 0) {
      $('#balance1').css('background-color','red');
    }
    if(this.checkingBalance > 0) {
      $('#balance1').css('background-color','grey');
    }
    if(this.savingsBalance === 0) {
      $('#balance2').css('background-color','red');
    }
    if(this.savingsBalance > 0) {
      $('#balance2').css('background-color','grey');
    } //end emptyAccountAlert
  },

  updateHTML: function () {
    $('#balance2').html('$' + this.savingsBalance);
    $('#balance1').html('$' + this.checkingBalance);
    this.emptyAccountAlert();
    document.querySelector('#checkingAmount').value ="";
    document.querySelector('#savingsAmount').value ="";
    // if (errorMsg === true) {
      //append note about no balance
  }, //updateHTML

}; //end bank



//click checking deposit
$('#checkingDeposit').on('click', function (ev) {
  const accountType = 'checking';
  const $input = $('#checkingAmount').val();
  bank.depositFunction($input,accountType);
  bank.updateHTML();
});
//click checking withdraw
$('#checkingWithdraw').on('click', function (ev) {
  const accountType = 'checking';
  const $input = $('#checkingAmount').val();
  bank.withdrawFunction($input,accountType);
  bank.updateHTML();
});
//click savingsDeposit
$('#savingsDeposit').on('click', function (ev) {
  const accountType = 'savings';
  const $input = $('#savingsAmount').val();
  bank.depositFunction($input,accountType);
  bank.updateHTML();
});
//click savingsDeposit
$('#savingsWithdraw').on('click', function (ev) {
  const accountType = 'savings';
  const $input = $('#savingsAmount').val();
  bank.withdrawFunction($input,accountType);
  bank.updateHTML();
});









//function 2: deposit (formInputA,formInputB, balanceA, balanceB)
// ---------FormInputA into balanceA, visa versa

// Title: GA ATM App
// Summary
// This lab will help you practice JavaScript functions and manipulating the DOM with jQuery.
// You'll be selecting elements, manipulating HTML, and manipulating style along with building out the logic using JavaScript.
// Objectives:
// DOM selection, appending, removal, updating
// code organisation: separation of concerns, i.e. display logic vs. business logic
// Specification:
// Keep track of the checking and savings balances somewhere
// Add functionality so that a user can deposit money into one of the bank accounts.
// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// Add functionality so that a user can withdraw money from one of the bank accounts.
// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
// When the balance of the bank account is $0 the background of that bank account should be red. It should be gray when there is money in the account.
// What happens when the user wants to withdraw more money from the checking account than is in the account? These accounts have overdraft protection, so if a withdrawal can be covered by the balances in both accounts, take the checking balance down to $0 and take the rest of the withdrawal from the savings account. If the withdrawal amount is more than the combined account balance, ignore it.
// Make sure there is overdraft protection going both ways.
// Are there ways to refactor your code to make it DRYer?
// Separation of Concerns
// Spend some time thinking about the following before you even start writing code: can you separate
//
// the GUI code (event handlers for form input or buttons)
// from
//
// the banking code (deposit and withdrawal between accounts, checking for overdraft etc)
// as much as possible?
//
// Ideally you would be able to test all the banking functions from the console, and then connect them to the GUI code with the minimum amount of overlap or points of contact.
//
// These two parts of the system (display logic and business logic) should know as little as possible about each other.
