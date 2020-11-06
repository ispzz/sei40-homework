
console.log(`Homework Week 1, day 4`);
console.log(`----------Geometry Function Lab----------`);

//
// Geometry Function Lab
// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle


const rectangleA = {
  length: 5,
  width: 4
};

const isSquare = function (l,w) {
  if (l === w) {
    return true;
  } //end if
}; //end isSquare()

const area = function (l,w) {
  return l * w;
}; //end area()

const perimeter = function (l,w) {
  return (l*2) + (w*2);
}; //end perimeter()

const rectangleTest = function (l,w) {
  if (isSquare(l,w)) {
    console.log('This is a square, not a rectangle');
  } // end if
  else {
    console.log(`The rectangle area is ${area(l,w)}, and perimeter is  ${perimeter(l,w)}`);
  } //end else
}; //end rectangleTest()

rectangleTest(rectangleA.length,rectangleA.width);


// console.log(`----------Part 2, Triangle----------`);

// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };


console.log(`----------The Cash Register----------`);
// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// Input

let totalPrice = 0;

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

for (const key in cartForParty) {
  totalPrice = Number(cartForParty[key]) + totalPrice;
};

console.log(`Your bill is ${totalPrice}`);


//
// // Output
// cashRegister(cartForParty)); // 60.55

console.log(`----------JavaScript Bank----------`);

// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
// Accounts have a current balance and owner's name.

// const oneBank = [
//   {
//   accountName: 'Stacey',
//   accountBalance: 23.45
//   },
//   {
//     accountName: 'Tim' ,
//     accountBalance:  2345678.43
//
//   },
//   {
//     accountName: 'Noah',
//     accountBalance:  7654.23
//
//   },
//   {
//     accountName: 'Sam',
//     accountBalance: 67.43
//
//   }
// ]; //end oneBankOnePower array


const bankAction = {

  oneBank: [
    {
    accountName: 'Stacey',
    accountBalance: 23.45
    },
    {
      accountName: 'Tim' ,
      accountBalance:  2345678.43

    },
    {
      accountName: 'Noah',
      accountBalance:  7654.23

    },
    {
      accountName: 'Sam',
      accountBalance: 67.43

    }
  ], //end oneBankOnePower array


  withdrawDeposit: function (formName,formAmount) {
    for (let i =0; i < bankAction.oneBank.length; i++) {
       if ( bankAction.oneBank[i].accountName === formName
       && bankAction.oneBank[i].accountBalance + formAmount >= 0 ) {
         bankAction.oneBank[i].accountBalance = bankAction.oneBank[i].accountBalance + formAmount;
         console.log(`Thanks ${bankAction.oneBank[i].accountName}, your updated balance is ${bankAction.oneBank[i].accountBalance}`);
       } //end if
       else if ( bankAction.oneBank[i].accountName === formName
         && bankAction.oneBank[i].accountBalance + formAmount < 0 ) {
           console.log(`Sorry ${bankAction.oneBank[i].accountName}, you don't have enough money in your account. Your account balance is ${bankAction.oneBank[i].accountBalance}`);
         } //end else if
     }; //end for
  }, //end withdraw()

  checkBalances: function () {
  for (let i =0; i < bankAction.oneBank.length; i++) {
     console.log(`${bankAction.oneBank[i].accountName} has a balance of ${bankAction.oneBank[i].accountBalance}`);
   }; //end for
  }, //end checkBalances()

  removeAccount: function (formName) {
    for (let i =0; i < bankAction.oneBank.length; i++) {
       if (bankAction.oneBank[i].accountName === formName) {
         console.log(`Sorry to see you go ${bankAction.oneBank[i].accountName}, here is the remaining ${bankAction.oneBank[i].accountBalance} of your account`);
         bankAction.oneBank.splice(i,1);
       } // end if
     }; // end for
  }, //end removeAccount()

  addAccount: function (formName,formAmount) {
    bankAction.oneBank.push( { accountName:formName, accountBalance:formAmount });
    console.log(`Thanks ${formName}, an account has been created in your name with a balance of ${formAmount}`);
  }//end addAccount ()

}; //end bankAction ()


bankAction.checkBalances();
bankAction.withdrawDeposit('Stacey',43);
bankAction.withdrawDeposit('Noah',-353);
bankAction.withdrawDeposit('Sam',-100);
bankAction.removeAccount('Stacey');
bankAction.checkBalances();
bankAction.addAccount('Julie',20);
bankAction.checkBalances();

// console.log(`The current balances of account holders in the bank are as follows: ${oneBank[]})


//You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.


//example withdrawal and show balance of account of user
//example of deposit and show balance of user account

//
// Tips
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
