console.log("The global result is:" + globalResult);
}
CheckingAccount();
console.log(globalResult);
let checkingBalance = 0;

var balance = 0; //set initial balance.

	function checkingAmount() {
		alert('Your current balance is: '+balance);
		atm();
	}

	function checkingDeposit() {
		var deposit = parseFloat(prompt('How much would you like to deposit?'));
		if (isNaN(deposit) || deposit === '') {
			alert('Error: please enter a number!');
			make_deposit();
		} else {
			balance += deposit;
			get_balance();
		}
	}

	function make_withdrawal() {
		var withdrawal = parseFloat(prompt('How much would you like to withdrawal?'));
		if (isNaN(withdrawal) || withdrawal === '') {
			alert('Error: please enter a number!');
			make_withdrawal();
		} else {
			balance -= withdrawal;
			get_balance();
		}
	}

	function error() {
		alert('Error: accepted numbers are 1 through 4.');
		atm();
	}

	function exit() {
		var confirm_leave = confirm('You have selected exit.');
		if (confirm_leave) {
			window.close();
		} else {
			atm();
		}
	}

	function atm() {

		var choice = parseInt(prompt('Select a choice 1.) Balance 2.) Deposit 3.) Withdrawal 4.) Exit')); //prompt user for choice.

		if (choice === 1) {
			get_balance();
		} else if (choice === 2) {
			make_deposit();
		} else if (choice === 3) {
			make_withdrawal();
		} else if (choice === 4) {
			exit();
		} else {
			error();
		}
	}

	atm();

const
function checkingAccount
let checkingBalance = 0;

$(function() {

		var balance 			= 	0.0,
				amountInput 	= 	$('#amount'),
				balanceArea 	= 	$('#balance'),
				choiceSelect  = 	$('#choice'),
				submitBtn 		= 	$('#submit'),
				atmForm 			= 	$('#atm');

		function do_transaction(action) {

			var amount = parseFloat(amountInput.val());

			if (isNaN(amount) || amount === '') {
				balanceArea.text('Fool don\'t be playin!');
			} else {
				if(action === 'deposit') {
					balance += amount;
				} else if (action === 'withdrawal') {
					balance -= amount;
				}
				balanceArea.text('balance: $'+balance);
			}
		}

		atmForm.submit(function() {

			var choice = choiceSelect.val();

			if (choice === 'deposit') {
				do_transaction(choice);
			} else if (choice === 'withdrawal') {
				do_transaction(choice);
			}
			return false;
		});

		////////// Select Menu Aesthetics //////////

		amountInput.hide();
		submitBtn.hide();

		choiceSelect.change(function() {

			var choice = choiceSelect.val();

			if (choice === 'deposit' || choice === 'withdrawal') {
				amountInput.show().val('');
				submitBtn.show();
			} else {
				amountInput.hide().val('');
				submitBtn.hide();
			}
		});
	});


  (function( global, factory ) {

  	if ( typeof module === "object" && typeof module.exports === "object" ) {
  		module.exports = global.document ?
  	  factory( global, true ) :
  		function( w ) {
  		if ( !w.document ) {
  		throw new Error( "jQuery requires a window with a document" );
  		}
  		return factory( w );
  			};
  	} else {
  		factory( global );
  	}

  // Pass this if window is not defined yet
  }(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

  // Can't do this because several apps including ASP.NET trace
  // the stack via arguments.caller.callee and Firefox dies if
  // you try to trace through "use strict" call chains. (#13335)
  // Support: Firefox 18+
  //
<h1>Checking</h1>
<div class="balance" id="balance1">$0</div>
<input id="checkingAmount" type="text" placeholder="enter an amount" />
<input id="checkingDeposit" type="button" value="Deposit" />
<input id="checkingWithdraw" type="button" value="Withdraw" />
</div>
<div class="account" id="savingsAccount">
<h1>Savings</h1>
<div class="balance" id="balance2">$0</div>
<input id="savingsAmount" type="text" placeholder="enter an amount" />
<input id="savingsDeposit" type="button" value="Deposit" />
<input id="savingsWithdraw" type="button" value="Withdraw" />
</div>
<div class="clear"></div>
