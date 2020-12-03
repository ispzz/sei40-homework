/*
1. Listen to the click event on each button
2. Get the value of the input field
3. Send value back to atm.js
4. Receive data/response from atm.js
5. Render response on the page
*/
const $inputs = $('.account input');
const $buttons = $('input[type="button"]');
const $checkingBalance = $('#checkingBalance');
const $savingsBalance = $('#savingsBalance');
const $noticeBanner = $('.notice');

$inputs.attr('disabled', true);
$('.balance').addClass('zero');

//display transaction notification
const notify = function(status, notice){
  if(status === 'error'){
    $noticeBanner.addClass('error');
  } else {
    $noticeBanner.removeClass('error');
  }

  $noticeBanner.html(notice);
  $noticeBanner.css({visibility:'visible', opacity: 1});
  $noticeBanner.delay(2000).fadeTo('slow', 0);
}




//observe selected account and update displayed balance
$('#account-list').on('change', function(){
  $inputs.attr('disabled', false);

  if($(this).val() !== 'null'){
    const balance = Bank.getBalance($('#account-list').val());
    $checkingBalance.html('$' + balance.checking.toFixed(2));
    $savingsBalance.html('$' + balance.savings.toFixed(2));
    $('.balance').change();
  } else {
    $inputs.attr('disabled', true);
  }
});

//observe balance changes and change background
$('.balance').change(function(){
  const $balance = $(this);
  if($balance.html() === '$0.00'){
    $balance.addClass('zero');
  } else {
    $balance.removeClass('zero');
  }
})

//process deposit or withdrawal transactions onClick
$buttons.on('click', function(){
  const accType = $(this).attr('id');;
  const accOperation = $(this).attr('value');
  const accNumber = $('#account-list').val();

  const conditional = accType.startsWith('checking'); //js to change to jquery
  const $amount = conditional ? $('#checkingAmount') : $('#savingsAmount');
  const amount = $amount.val();
  $amount.val('');

  const response = Bank.processsTrxn(accType, accOperation, accNumber, amount);

  if(renderResponse(response)){
    notify('success', 'Your transaction went through.');
    $('.balance').change();
    return 'Completed Transaction'
  };

  notify('error', 'There was a problem with your transaction.');
  $('.balance').change();
  return 'Completed Transaction'
})

//display  and format account balance
const renderResponse = function(response){
  const $mainAcc = $('#' + response.accType + 'Balance');

  if(response.overdraft && response.status){
    $mainAcc.html('$0.00');

    const $overdraftAcc = $('#' + response.overdraftAcc + 'Balance');
    $overdraftAcc.html('$' + response.balance.toFixed(2));
    return true;

  } else if(response.status){
    $mainAcc.html('$' + response.balance.toFixed(2));
    return true;
  }
  return false;
}

//create a new account
$('#createAccount').on('click', function(){
  const $name = $('#name');
  const name = $name.val();
  $name.val('');

  if(name === '') {
    alert('You need to input the account name.');
    return;
  }
  const newAccount = Bank.createAccount(name);
  populateSelect(newAccount);
})

//update account selection with newly created account
const populateSelect = function(account){
  const $select = $('#account-list');
  const $option = $('<option>');

  $option.attr('value', account.accountNumber);
  $option.text(`${account.accountName} (acc no: ${account.accountNumber})`);
  $select.append($option);
  notify('success', 'Your account was succesfully created.')
}
