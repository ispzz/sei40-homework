console.log('Bank Account');

const bank = {
  accounts: [],

  // Create account with initial balance and account type (Savings or checking)
  addAccount: function(name, initialDeposit = 0, accountType = 'savings'){

    this.accounts.push({
      name: name,
      currentBalance: initialDeposit,
      accountType: accountType});

    console.log(`Your ${accountType} account has been added. Thanks ${name}. Your deposit was $${initialDeposit}.`);
  }, // addAccount()

  findAccount: function(name, accountType){
    for (let i = 0; i < this.accounts.length; i++){
      if ((this.accounts[i].name.toLowerCase() === name.toLowerCase()) && (this.accounts[i].accountType.toLowerCase() === accountType.toLowerCase())){
        return this.accounts[i];
      }
    } // for
  }, // findAccount()

  checkAccountBalance: function(name, accountType) {
    const balance = this.findAccount(name, accountType).currentBalance;
    return balance;
  }, // checkAccountBalance()


  deposit: function(name, amount, accountType){
    const account = this.findAccount(name, accountType);

    account.currentBalance += amount;

    return account.currentBalance;
  }, // deposit()


  withdraw: function(name, amount, accountType){
    let targetAccount;
    let transferAccount;

    if (accountType.toLowerCase() === 'savings'){
      targetAccount = this.findAccount(name, 'savings');
      transferAccount = this.findAccount(name, 'checking');
    } else {
      targetAccount = this.findAccount(name, 'checking');
      transferAccount = this.findAccount(name, 'savings');
    }

    if (targetAccount.currentBalance - amount >= 0){
      targetAccount.currentBalance -= amount;
      return targetAccount.currentBalance;
    }

    if ((targetAccount.currentBalance + transferAccount.currentBalance) - amount >= 0){
      const transferAmount = Math.abs(targetAccount.currentBalance - amount);
      console.log('Transfer amount:', transferAmount);

      this.transfer(name, transferAmount, transferAccount.accountType, targetAccount.accountType);

      console.log('Balance in checking after transfer:', targetAccount.currentBalance)

      targetAccount.currentBalance = 0;

      console.log('Balance in savings after transfer:', transferAccount.currentBalance)

      return targetAccount.currentBalance;
    }
  }, // withdraw()

  transfer: function(name, amount, withdrawAccount, depositAccount){
    this.withdraw(name, amount, withdrawAccount);
    this.deposit(name, amount, depositAccount);
    console.log(`Money was transfered from ${withdrawAccount} to ${depositAccount}`)
    return true;
  }, // transfer()
}; // bank



const runTests = function(){
  bank.addAccount('Jarrod', 10, 'savings');
  bank.addAccount('Jarrod', 10, 'checking');

  console.log(`Savings balance before withdrawal:`, bank.checkAccountBalance('Jarrod','savings'));
  console.log(`Checkings balance before withdrawal:`, bank.checkAccountBalance('Jarrod','checking'));


  // bank.withdraw('Jarrod', 15, 'savings');
  console.log(`Withdrawing $5 from savings`, bank.withdraw('Jarrod', 15, 'savings'));

  console.log(`Savings balance after withdrawal:`, bank.checkAccountBalance('Jarrod','savings'));
  console.log(`Checkings balance after withdrawal should be $5 but is:`, bank.checkAccountBalance('Jarrod','checking'));
} // runTests()
