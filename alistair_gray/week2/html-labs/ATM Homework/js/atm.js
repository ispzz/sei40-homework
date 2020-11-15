const gaBank = {

  bankAccounts: [
    {accName: 'Alistair',
    checkingBalance: 50,
  savingsBalance: 100}
  ],

  newBankAcc: function(newAccName){
    this.bankAccounts.push({accName: newAccName, checkingBalance: 0, savingsBalance: 0})
  }, // end of new account function

  deposit: function(name, account, money){
    let acc = null;
    for(let i = 0; i < this.bankAccounts.length; i++){
      if(this.bankAccounts[i].accName === name){
        acc = this.bankAccounts[i];
        break;
      }
    }
    if (acc === null){
      console.log (`Account not found`)
    } else if(account === "checkingBalance"){
      acc.checkingBalance += money;
      console.log(`${name}, your deposit of $${money} into your checking account has been successful`);
      console.log(`New balance: ${acc.checkingBalance}`)
    } else if(account === "savingsBalance"){
      acc.savingsBalance += money;
      console.log(`${name}, your deposit of $${money} into your savings account has been successful`)
      console.log(`New balance: ${acc.savingsBalance}`)
    }
  }, // end of deposit function

  withdraw: function(name, account, money){
    let acc = null;
    for(let i = 0; i < this.bankAccounts.length; i++){
      if(this.bankAccounts[i].accName === name){
        acc = this.bankAccounts[i]
        break;
      }
    }
    if (acc === null){
      console.log (`Not found.`)
    } else {
      let totalWithdraw = 0;
      if(account === "checkingBalance"){
        if(acc.checkingBalance > money){
          acc.checkingBalance -= money
          console.log(`${name}, your withdrawal of $${money} has been successful.`)
          console.log(`New balance: ${acc.checkingBalance}`)
        } else {
          totalWithdraw = acc.checkingBalance - money
          acc.checkingBalance = 0;
          acc.savingsBalance += totalWithdraw;
          if(acc.savingsBalance > 0){
            console.log(`${name}, your withdrawal of ${money} exceeded your checking account, ${Math.abs(totalWithdraw)} has been deducted from your savings account`);
          } else {
            console.log('Sorry you are too broke to withdraw');
          }
        }
        if(account === "savingsBalance"){
      if(acc.savingsBalance > money){
        acc.savingsBalance -= money
        console.log(`${name}, your withdrawal of $${money} has been successful.`)
        console.log(`New balance: ${acc.savingsBalance}`)
      } else {
        totalWithdraw = acc.savingsBalance - money
        acc.savingsBalance = 0;
        acc.checkingBalance += totalWithdraw
        if(acc.checkingBalance > 0){
          console.log(`${name}, your withdrawal of ${money} exceeded your savings account, ${Math.abs(totalWithdraw)} has been deducted from your checking account`);
        } else {
          console.log('Sorry you are too broke to withdraw');
        }
      }
    }
  }
  }
} // end of withdraw function
}; // end of gaBank object


// Checking Balance DOM
$('#balance1').text(`$${gaBank.bankAccounts[0].checkingBalance}`);

// Savings Balance DOM
$('#balance2').text(`$${gaBank.bankAccounts[0].savingsBalance}`);

// Checking DOM Event Input Listener - Deposit

$('#checkingDeposit').on('click', function(){
  const inputChk = $('#checkingAmount').val()
  const newDep = parseInt(inputChk);
  gaBank.deposit('Alistair', 'checkingBalance', newDep)
  $('#balance1').text(`$${gaBank.bankAccounts[0].checkingBalance}`);
});

$('#checkingWithdraw').on('click', function(){
  const inputChk = $('#checkingAmount').val()
  const newWid = parseInt(inputChk);
  gaBank.withdraw('Alistair', 'checkingBalance', newWid)
  $('#balance1').text(`$${gaBank.bankAccounts[0].checkingBalance}`);
  $('#balance2').text(`$${gaBank.bankAccounts[0].savingsBalance}`);
});

$('#savingsDeposit').on('click', function(){
  const inputSav = $('#savingsAmount').val()
  const newDep = parseInt(inputSav);
  gaBank.deposit('Alistair', 'savingsBalance', newDep)
  $('#balance2').text(`$${gaBank.bankAccounts[0].savingsBalance}`);
});

$('#savingsWithdraw').on('click', function(){
  const inputSav = $('#savingsAmount').val()
  const newWid = parseInt(inputSav);
  gaBank.withdraw('Alistair', 'savingsBalance', newWid)
  $('#balance2').text(`$${gaBank.bankAccounts[0].savingsBalance}`);
  $('#balance1').text(`$${gaBank.bankAccounts[0].checkingBalance}`);
});
