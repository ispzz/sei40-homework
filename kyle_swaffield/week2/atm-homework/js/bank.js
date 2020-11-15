//back end

//    1. Keep track of the checking and savings balances somewhere
//    2. Add functionality so that a user can deposit money into one of the bank accounts.
//    3. Add functionality so that a user can withdraw money from one of the bank accounts.
//    4. Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
//    5. What happens when the user wants to withdraw more money from the checking account than is in the account? These accounts have overdraft protection, so if a withdrawal can be covered by the balances in both accounts, take the checking balance down to $0 and take the rest of the withdrawal from the savings account. If the withdrawal amount is more than the combined account balance, ignore it.
const bank = {
  checkBalance : 0,
  saveBalance :0,

  deposit : function(amount,account){
    if(account === 'check'){
      this.checkBalance = this.checkBalance + amount;
      return true;
    }else if(account === 'save'){
      this.saveBalance = this.saveBalance + amount;
      return true;
    }else{
      return false;
    }
  },

  withdrawl : function(amount,account){
    const cheBal = this.checkBalance;
    const savBal = this.saveBalance;
    const totBal = cheBal + savBal;
    let accBal = this.accountBalance(account);

    if((totBal-amount) > 0){
      if((account === 'check') && ((accBal - amount) > 0)){
        this.checkBalance = cheBal - amount;
        return true;
      }else if((account === 'check') && ((accBal - amount) < 0)){
        this.saveBalance = (cheBal - amount)+savBal;
        this.checkBalance = 0;
        return true;
      }else if(account === 'save' && ((accBal - amount) > 0)){
        this.saveBalance = savBal - amount;
        return true;
      }else if((account === 'save') && ((accBal - amount) < 0)){
        this.checkBalance = (savBal - amount)+cheBal;
        this.saveBalance = 0;
        return true;
      }
      else{
        return false;
      }
    }else{
      return false;
    }
  },

  accountBalance: function(account){ //checks the account balance on either check or savings
    if(account === 'check'){
      return this.checkBalance;
    }else if(account === 'save'){
      return this.saveBalance;
    }
    else{
      return false;
    }
  },
  totalBalance: function(){ //checks the combines balance in both accounts
    const totalBalance = this.checkBalance + this.saveBalance;
    if(totalBalance > 0){
      return totalBalance;
    }else{
      return false;
    }
  },
}
