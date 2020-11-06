console.log('Begin the Wk1 Thursday homework!');

// Geometry Function Lab
// Part 1, Rectangle
// Given a rectangle object like the one below, write the following functions:
//
// isSquare(rect) - Returns whether the rectangle is a square or not
// area(rect) - Returns the area of the rectangle
// perimeter(rect) - Returns the perimeter of the rectangle
// const rectangle = {
//   length: 4,
//   width: 4
// };
// In other words, these functions should take as their only argument a single object with the same keys (length, width) as the rectangle object above, and use that object to make the calculations.

const rectangle = {
  length: 4,
  width: 4
};

const isSquare = function(rect) {
  if(rect.length === rect.width) {
    return `The rectangle is a square with sides equal to ${rect.length}.`;
  } else {
    return `The rectangle is not a square, it has a length of ${rect.length} and a width of ${rect.width}.`;
  }
} //isSquare()

const area = function(rect) {
  return rect.length * rect.width;
} //area()

const perimeter = function(rect) {
  return 2 * rect.length + 2 * rect.width;
} //perimeter()


// Part 2, Triangle
// Given a triangle object like the one below, write the following functions:
//
// isEquilateral(tri) - Returns whether the triangle is equilateral or not
// isIsosceles(tri) - Returns whether the triangle is isosceles or not
// area(tri) - Returns the area of the Triangle
// isObtuse(tri) - Returns whether the triangle is obtuse or not
// const triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// As above, these functions should take a single object as an argument, which will have the same keys as the triangle above, and which you will use for your calcuations.

const triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const isEquilateral = function(tri) {
  if(tri.sideA === tri.sideB === tri.sideC) {
    return `The triangle is an equilateral with sides equal to ${tri.sideA}.`;
  } else {
    return `The triangle is not an equalateral.`;
  }
} //isEquilateral()

const isIsosceles = function(tri) {
  if(tri.sideA === tri.sideB || tri.sideA === tri.sideC || tri.sideB === tri.sideC) {
    return `The triagle is an isosceles with two equal sides.`;
  } else {
    return `The triangle is not an isosceles.`;
  }
} //isIsosceles()

const triArea = function(tri) {
  const perimeter = tri.sideA + tri.sideB + tri.sideC;
  const p = perimeter/2
  return Math.sqrt(p * (p - tri.sideA) * (p - tri.sideB) * (p - tri.sideC));
} //triArea()

const isObtuse = function(tri) {
  let largestSide;
  for(const key in triangle) {
    if(key > largestSide) {
      largestSide = key;
    } //if
  } //for
} //isObtuse()


// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
// There is only one bank. This bank is an object, which contains an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
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
// Additional
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.

const bank = {
  accounts: [
    {
      name: 'Anne Murphy',
      currentBal: 10984
    },
    {
      name: 'Catherine O\'Hara',
      currentBal: 1524
    },
    {
      name: 'Daniel Levy',
      currentBal: 537
    }
  ],
  locateAccount: function(name) {
    for(let i = 0; i < this.accounts.length; i++) {
      if(this.accounts[i].name === name) {
        return i;
      } //if
    } //for
  }, //locateAccount()

  sumCash: function() {
    let totalBalance = 0;
    for(let i = 0; i < this.accounts.length; i++) {
      totalBalance += this.accounts[i].currentBal;
    } //for
    console.log(`The total balance of all accounts is ${totalBalance.toFixed(2)}`);
    return totalBalance.toFixed(2);
  }, //sumCash()

  addAccount: function(name, oBalance) {
    this.accounts.push({name: name, currentBal: oBalance});
  }, //addAccount()

  withdrawCash: function(name, amount) {
    if(this.accounts[this.locateAccount(name)].currentBal >= amount) {
      this.accounts[this.locateAccount(name)].currentBal -= amount;
    } else {
      console.log(`You do not have enough funds to make this transaction.`);
    }
  }, //withdrawCash()

  depositCash: function(name, amount) {
    this.accounts[this.locateAccount(name)].currentBal += amount;
  }, //depositCash()

  transfer: function(fromAccount, toAccount, amount) {
    if(this.accounts[this.locateAccount(fromAccount)].currentBal >= amount) {
      this.withdrawCash(fromAccount, amount);
      this.depositCash(toAccount, amount);
    } else {
      console.log(`You do not have enough funds to make this transaction.`);
    }
  } //transfer()
} //bank{}
