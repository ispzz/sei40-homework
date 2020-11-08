console.log('The javascript has loaded!');

// Do your exercises here:

// Geometry Part 1
const rectangle = {
  length: 4,
  width: 4
};

const isSquare = function(rect){
  if(rect.length === rect.width){
    return true;
  }
  return false;
}; //isSquare()

const rectArea = function(rect){
  return rect.length * rect.width;
}; //rectArea()

const rectPerimeter = function(rect){
  return 2 * (rect.length + rect.width);
}; //rectPerimeter()

console.log('rectangle:', rectangle);
console.log('isSquare:', isSquare(rectangle));
console.log('rectArea:', rectArea(rectangle));
console.log('rectPerimeter:', rectPerimeter(rectangle));
console.log('============================================');

// Geometry Part 2
const triangle = {
  sideA: 5,
  sideB: 5,
  sideC: 5
};

const isEquilateral = function(tri){
  if(tri.sideA === tri.sideB && tri.sideB === tri.sideC){
    return true;
  }
  return false;
}; // isEquilateral()

const isIsosceles = function(tri){
  let flag = 0;
  let keys = Object.keys(tri);

  for(let i = 0; i < keys.length - 1; i++){
    for(let j = i + 1; j < keys.length; j++){
      if(tri[keys[i]] === tri[keys[j]]){
        flag += 1;
      }
    }
  }

  if(flag === 1){
    return true;
  }
  return false;
}; //isIsosceles()

const triangleArea = function(tri){
  let heron = calculateHeron(tri);
  let result = heron;

  for(const key in tri){
    result *= (heron - tri[key]);
  }

  return Math.sqrt(result).toFixed(2);
}; // triArea()

const calculateHeron = function(tri){
  return (tri.sideA + tri.sideB + tri.sideC) / 2;
}; //calculateHeron()


const isObtuse = function(tri){
  if(tri.sideC < tri.sideA + tri.sideB){
    const squareTri = {};
    for(const key in tri){
      squareTri[key] = tri[key] ** 2;
    }

    if(squareTri.sideC > squareTri.sideA + squareTri.sideB){
      return true;
    }
  }
  return false;
} //isObtuse()

console.log('triangle:', triangle);
console.log('isEquilateral:', isEquilateral(triangle));
console.log('isIsosceles:', isIsosceles(triangle));
console.log('triangleArea:', triangleArea(triangle));
console.log('isObtuse:', isObtuse(triangle));
console.log('============================================');


// The Cash Register
const cart = {
  banana: '1.25',
  handkerchief: '0.99',
  tshirt: '25.01',
  apple: '0.60',
  nalgene: '10.34',
  proteinShake: '22.36'
};

const cashRegister = function(cart){
  let sum = 0;

  for(const key in cart){
    sum += parseFloat(cart[key]);
  }
  return sum;
}; //cashRegister()


// Javascript Bank
const Bank = {
  accounts: [], //name, account number, balance

  addAccount: function(name, balance){
    const newAccount = {
      accountName: name,
      accountNumber: Math.floor(Math.random() * 1000000000),
      accountBalance: balance
    };
    this.accounts.push(newAccount);
    return newAccount;
  }, //addAccount()

  makeDeposit: function(accNum, amount){
    let allAccounts = this.accounts;
    for(let i = 0; i < allAccounts.length; i++){
      if(allAccounts[i].accountNumber === accNum){
        allAccounts[i].accountBalance += amount;
        return true;
      }
    }
    return false;
  }, //makeDeposit()

  makeWithdrawals: function(accNum, amount){
    let allAccounts = this.accounts;
    for(let i = 0; i < allAccounts.length; i++){
      if(allAccounts[i].accountNumber === accNum){
        if(allAccounts[i].accountBalance >= amount){
          allAccounts[i].accountBalance -= amount;
          return true;
        } else {
          return 'You have insufficient funds.';
        }
      }
    }
    return false;
  }, //makeWithdrawals()

  makeTransfer: function(originAcc, destAcc, amount){
    let initiateTransfer = this.makeWithdrawals(originAcc, amount);

    if( initiateTransfer === true){
      this.makeDeposit(destAcc, amount);
    }
    return initiateTransfer;
  }, // makeTransfer()

  getAggregateBalance: function(){
    let aggregateBalance = 0;
    let allAccounts = this.accounts;

    for(let i = 0; i < allAccounts.length; i++){
      aggregateBalance += allAccounts[i].accountBalance;
    }
    return aggregateBalance;
  } // getAggregateBalance()
}


// Credit Card Verification
const validateCreditCard = function(){
  
}
