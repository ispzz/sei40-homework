console.log('JS loaded!');
// Part 1, Rectangle
// Given a rectangle object like the one below, write the following functions:
//
// isSquare(rect) - Returns whether the rectangle is a square or not
// area(rect) - Returns the area of the rectangle
// perimeter(rect) - Returns the perimeter of the rectangle
// //
const rectangle ={
  width: 4,
  height: 4,
};

for( const key in rectangle){
  console.log(key)
};
  //
  // const isSquare = function(){
  // const index1 = rectangle[0];
  // const index2 = rectangle[1];
  // console.log(rectangle[0],rectangle[1]);
  // };
  //   isSquare();
  //






//
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
// There is only one bank. This bank is an object, which contains an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
const bank = {
  accounts: [
    { name: "Sadness",
      accountNum: "123",
      accountValue: 1
    },
    { name: "Joy",
      accountNum: "321",
      accountValue: 2
    },
    { name: "Disgust",
      accountNum: "666",
      accountValue: 3
    }
  ],
  getBankGrandTotal: function(){
    let grandTotal = 0;
    for(i = 0; i < this.accounts.length; i++){
      const currentAccount = this.accounts[i];
      console.log(currentAccount.accountValue);
      grandTotal += currentAccount.accountValue;
    }//for

    console.log(`in getBankGrandTotal(${grandTotal})`);
    return grandTotal;
  },//end of getBankGrandTotal
}; //bank object
const total = bank.getBankGrandTotal();
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
// // Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
const findAccount = function(accountSearch,dollarValue){
  for(let i =0; i< bank.accounts.length ;i++){
  const accountsIndex = bank.accounts[i];
    if(bank.accounts[i].accountNum === accountSearch){
      const newBalance = bank.accounts[i].accountValue = bank.accounts[i].accountValue+ dollarValue;
      // if(bank.accounts[i].accountValue <=0){
      //   console.log("unable to transfer")
      // }
      // break;
      console.log(`You selected account Number: ${accountSearch}, it's new value is ${newBalance}`);
      return `Account: ${accountSearch}, New Balance: ${newBalance}`;
      break;
    }
    // const selectAccount = bank.accounts.accountNum;
    // console.log(selectAccount);
  }
};
findAccount("666", 2);

const addAccount = function(aName,aNum,aVal){
  bank.accounts.push({name:aName,accountNum:aNum,accountValue:aVal});
  console.log(bank.accounts);
  return bank.accounts;
};
addAccount("Anger","851",100);
//   const newBalance = bank.accounts[0].accountNum + dollarValue
//   bank.accounts[0].accountNum
// }
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Tips
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
