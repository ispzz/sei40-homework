


let newBalance=null;

// debugger;
const bank = {
  accounts: [
    { name: "checking",
      accountValue: 0
    },
    { name: "savings",
      accountValue: 0
    },
  ],
  updateDisplayChecking: function(){
      if(bank.accounts[0].accountValue <0){
        console.log(` checking account is zero`, newBalance);
        $('div#balance1').addClass('zero').removeClass('balance');
        $("#balance1").text('$0');
      }else{
        console.log(' checking account is above zero');
        $('div#balance1').removeClass('zero').addClass('balance');
        $("#balance1").text(bank.accounts[0].accountValue);
        }
      },///end updateDisplayChecking

  updateDisplaySavings: function(){
      if(bank.accounts[1].accountValue <0){
          console.log(` savings account is zero`);
          $('div#balance2').addClass('zero').removeClass('balance');
          $("#balance2").text('$0');
      }else{
        console.log(' savings account is above zero');
        $('div#balance2').removeClass('zero').addClass('balance')
        $("#balance2").text(bank.accounts[1].accountValue);
        }
    },//end updateDisplaySavings

  findAccount: function(accountSearch,dollarValue){
      for(let i =0; i< bank.accounts.length ;i++){
        const accountsIndex = bank.accounts[i];
        console.log(accountsIndex.name);
        console.log(accountsIndex.accountValue);

        if(accountsIndex.name === accountSearch){
        const sum = bank.accounts[i].accountValue+ dollarValue;
        newBalance = bank.accounts[i].accountValue = sum;

          if(newBalance <=0){
            const $print = $('#written-display');
            $print.html(`You have been unsucessful with your transaction today due to insufficient funds.`);
            $print.css('backgroundColor', '#FF0000');
            $print.css('borderRadius', '20px');
            console.log("unable to transfer");
            if(bank.accounts[i].name === 'checking'){
              let overDraft  = (bank.accounts[1].accountValue + newBalance);
              bank.accounts[1].accountValue = overDraft;
              $("#balance2").text(bank.accounts[1].accountValue);

            }else{
              let overDraft  = bank.accounts[0].accountValue + newBalance;
              bank.accounts[0].accountValue = overDraft;
              $("#balance2").text(bank.accounts[0].accountValue);
              }///end of overDraft if

          this.updateDisplayChecking();
          this.updateDisplaySavings();
          return `Account: ${accountSearch}, New Balance: ${newBalance}`;

          }else{
            console.log(`You selected the ${accountSearch} account, it's new value is ${newBalance}`);
            if(dollarValue < 0){
            const $print = $('#written-display');
            $print.html(`You have sucessfully withdrawn $${Math.abs(dollarValue)} from your ${accountSearch}.`);
            $print.css('backgroundColor', '#EEEEEE');
            $print.css('borderRadius', '20px');
            $print.css('border', '2px solid grey');
          }else{
            const $print = $('#written-display');
            $print.html(`You have sucessfully deposited $${dollarValue} into your ${accountSearch}.`);
            $print.css('backgroundColor', '#EEEEEE');
            $print.css('borderRadius', '20px');
            $print.css('border', '2px solid grey');

          }
            this.updateDisplayChecking();
            this.updateDisplaySavings();
            return `Account: ${accountSearch}, New Balance: ${newBalance}`;

          }//end of acount balance 0 if


                    }///end of which account if
                  }///end of bank account loop
                },///end of find account
  // console.log(`running account functions`);
  // console.log( `visually updating balance`);



  eventListeners: [
        $("#checkingDeposit").on('click', function(){
          const imputValue = parseInt($('#checkingAmount').val());
          // $('checkingAmount').val("");
          console.log(`imput`,imputValue);
          bank.findAccount("checking", imputValue);
          // const $print = $('#written-display');
          // $print.html(`You have sucessfully deposited $${imputValue} into your Checking Account.`);
          // $print.css('backgroundColor', '#EEEEEE');
          // $print.css('borderRadius', '20px');
          // $print.css('border', '2px solid grey');
        }),

        $("#savingsDeposit").on('click', function(){
          const imputValue = parseInt($('#savingsAmount').val());
          // $('savingsAmount').val("");
          console.log(`imput`,imputValue);
          bank.findAccount("savings", imputValue);
          // const $print = $('#written-display');
          // $print.html(`You have sucessfully deposited $${imputValue} into your Savings Account.`);
          // $print.css('backgroundColor', '#EEEEEE');
          // $print.css('borderRadius', '20px');
          // $print.css('border', '2px solid grey');
          }),

        $("#checkingWithdraw").on('click', function(){
          const imputValue = parseInt($('#checkingAmount').val());
          // $('checkingAmount').val("");
          console.log(`imput`,-(imputValue));
          bank.findAccount("checking", -(imputValue));
          // const $print = $('#written-display');
          // $print.html(`You have sucessfully withdrawn $${imputValue} from your Checking Account.`);
          // $print.css('backgroundColor', '#EEEEEE');
          // $print.css('borderRadius', '20px');
          // $print.css('border', '2px solid grey');
          }),

        $("#savingsWithdraw").on('click', function(){
          const imputValue = parseInt($('#savingsAmount').val());
          // imputValue.text.val("");
          console.log(`imput`,-(imputValue));
          bank.findAccount("savings", -(imputValue));
          // const $print = $('#written-display');
          // $print.html(`You have sucessfully withdrawn $${imputValue} from your Savings Account.`);
          // $print.css('backgroundColor', '#EEEEEE');
          // $print.css('borderRadius', '20px');
          // $print.css('border', '2px solid grey');
        }),
  ],

};//// end of bank



//
//
