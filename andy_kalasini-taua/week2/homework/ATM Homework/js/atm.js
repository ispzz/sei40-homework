cost bank = {
  checkBalance: 0,
  saveBalance: 0,

  deposit: function(amount, account){
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

withdrawl: function (amount, account)
  
