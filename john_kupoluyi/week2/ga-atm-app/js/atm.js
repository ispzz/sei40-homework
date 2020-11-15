const Account = function(name){
  this.accountName = name;
  this.accountNumber = '' + Math.floor(Math.random() * 1000000000);
  this.checking = 0;
  this.savings = 0;
}

const Bank = {
  accounts: [], //name, account number, balance

  createAccount: function(name){
    const newAccount = new Account(name);
    this.accounts.push(newAccount);
    return newAccount;
  }, //addAccount()

  processsTrxn: function(accType, accOperation, accNumber, amount = 0){
    accType = accType.slice(0, accType.length - accOperation.length);

    if(accOperation.toLowerCase() === 'deposit'){
      return this.makeDeposit(accNumber, amount, accType);
    }
    return this.makeWithdrawal(accNumber, amount, accType);
  }, //processsTransaction()

  makeDeposit: function(accNum, amount, accType){
    const account = this.getAccount(accNum);
    const isNumber = /^\d+$/.test(amount);

    if(account && isNumber){
      account[accType] += parseFloat(amount);
      return {status: true, balance: account[accType], accType: accType};
    }

    return {status: false};
  }, //makeDeposit()

  makeWithdrawal: function(accNum, amount, accType){
    const account = this.getAccount(accNum);
    const isNumber = /^\d+$/.test(amount);
    amount = parseFloat(amount);

    if(account && isNumber){
      if(account[accType] >= amount){
        account[accType] -= amount;
        return {status: true, balance: account[accType], accType: accType}
      }
      return this.tryOverdraft(account, accType, amount);
    }
    return {status: false};
  }, //makeWithdrawals()

  tryOverdraft: function(account, accType, amount){
    let overdraftBalance;
    let overdraftAcc;

    if(account){
      const totalBalance = account.savings + account.checking;

      if(totalBalance >= amount){
        amount -= account[accType];
        account[accType] = 0;

        switch(accType){
          case 'savings':{
            account.checking -= amount;
            overdraftBalance = account.checking;
            overdraftAcc = 'checking';
            break;
          }
          case 'checking':{
            account.savings -= amount;
            overdraftBalance = account.savings;
            overdraftAcc = 'savings';
            break;
          }
        }
        return {status: true, balance: overdraftBalance, accType: accType, overdraft: true, overdraftAcc: overdraftAcc};
      }
    }
    return {status: false};
  }, //tryOverdraft()

  getAccount: function(accNum){
    return this.accounts.find(function(el){
      return el.accountNumber === accNum;
    })
  }, //getAccount()

  getBalance: function(accNum){
    const account = this.getAccount(accNum);
    return {savings: account.savings, checking: account.checking};
  }
}
