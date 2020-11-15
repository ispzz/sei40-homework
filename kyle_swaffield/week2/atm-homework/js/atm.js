
// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// When the balance of the bank account is $0 the background of that bank account should be red. It should be gray when there is money in the account.
// Make sure there is overdraft protection going both ways.
// Are there ways to refactor your code to make it DRYer?

//variables
const $checkBalance = $('#balance1');
const $saveBalance = $('#balance2');
const $checkValue = $('#checkingAmount');
const $saveValue = $('#savingsAmount');
const $checkDepPress = $('#checkingDeposit');
const $saveDepPress = $('#savingsDeposit');
const $checkWithPress = $('#checkingWithdraw');
const $saveWithPress = $('#savingsWithdraw');
let amount = 0;

//refresh bank balances
$('body').mouseover(function(){
  $checkBalance.html('$' + bank.checkBalance);
  if(bank.checkBalance === 0){
    $checkBalance.css('background-color','#F52F4F');
  }else{
    $checkBalance.css('background-color','#FFFFFF');
  }
  $saveBalance.html('$' + bank.saveBalance);
  if(bank.saveBalance === 0){
    $saveBalance.css('background-color','#F52F4F');
  }else{
    $saveBalance.css('background-color','#FFFFFF');
  }
});
//end refresh bank balances
//set initial value to zero on text fields
const $onFocusCheck = $checkValue.on('focus',function(){
  $checkValue.attr('value',0);
});
const $offFocusCheck = $checkValue.on('focusout',function(){
  $checkValue.attr('value','')
});
const $onFocusSave = $saveValue.on('focus',function(){
  $saveValue.attr('value',0);
});
const $offFocusSave = $saveValue.on('focusout',function(){
  $saveValue.attr('value','')
});
//end set initial value to zero on text fields

//Deposit
$checkDepPress.on('click',function(){
  amount = parseInt($checkValue.val());
  bank.deposit(amount,'check');
  $checkBalance.html('$' + bank.checkBalance);
  $checkValue.val('');
  amount = 0;
});
$saveDepPress.on('click',function(){
  amount = parseInt($saveValue.val());
  bank.deposit(amount,'save');
  $saveBalance.html('$' + bank.saveBalance);
  $saveValue.val('');
  amount = 0;
});
//end Deposit

//withdrawl
$checkWithPress.on('click',function(){
  amount = parseInt($checkValue.val());
  if(bank.withdrawl(amount,'check') === false){
    alert("Insufficent Funds!");
  }else{
    $checkBalance.html('$' + bank.checkBalance);
  };
  $checkValue.val('');
  amount = 0;
});
$saveWithPress.on('click',function(){
  amount = parseInt($saveValue.val());
  if(bank.withdrawl(amount,'save') === false){
    alert("Insufficent Funds!");
  }else{
    $saveBalance.html('$' + bank.saveBalance);
  };
  $saveValue.val('');
  amount = 0;
});
//end Withdraw
