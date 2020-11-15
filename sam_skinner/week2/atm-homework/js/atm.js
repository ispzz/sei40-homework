console.log('Am I working?!');



//display logic
let checkBal = 0;
let savBal = 0;





//business logic
const accountChange = function(account) {
  if(account === 'savings') {
    return parseInt($('#savingsAmount').val());
  } else {
    return parseInt($('#checkingAmount').val());
  }
} //accountChange()

const checkBalance = function() {
  if(savBal === 0) {
    $balanceS.css('background-color', 'red');
  } else if(savBal > 0) {
    $balanceS.css('background-color', '#E3E3E3');
  }
  if(checkBal === 0) {
    $balanceC.css('background-color', 'red');
  } else if(checkBal > 0) {
    $balanceC.css('background-color', '#E3E3E3');
  }
} //checkBalance()

const $balanceC = $('#balance1');
const $balanceS = $('#balance2');

const makeWithdrawal = function(account) {
  if(account === 'savings') {
    if(savBal >= accountChange('savings')) {
      savBal -= accountChange('savings');
      $balanceS.html(`$${savBal}`);
    } else if (savBal + checkBal >= accountChange('savings')) {
      checkBal -= (accountChange('savings') - savBal);
      savBal -= savBal;
      $balanceS.html(`$${savBal}`);
      $balanceC.html(`$${checkBal}`);
    }
  } else {
    if(checkBal >= accountChange('checking')) {
      checkBal -= accountChange('checking');
      $balanceC.html(`$${checkBal}`);
    } else if (checkBal + savBal >= accountChange('checking')) {
      savBal -= (accountChange('checking') - checkBal);
      checkBal -= checkBal;
      $balanceC.html(`$${checkBal}`);
      $balanceS.html(`$${savBal}`);
    }
  }
  checkBalance();
} //makeWithdrawal()


//Checking Account---------------
//Deposit-----
$('#checkingDeposit').on('click', function() {
  checkBal += accountChange('checking');
  $balanceC.html(`$${checkBal}`);
  checkBalance();
});

//Withdrawal-----
$('#checkingWithdraw').on('click', function() {
  makeWithdrawal('checking');
});


//Savings Account----------------
//Deposit-----
$('#savingsDeposit').on('click', function() {
  savBal += accountChange('savings');
  $balanceS.html(`$${savBal}`);
  checkBalance();
});

//Withdrawal-----
$('#savingsWithdraw').on('click', function() {
  makeWithdrawal('savings');
});

checkBalance();
