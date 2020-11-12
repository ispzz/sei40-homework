/*
  --------------------
  THE CASH REGISTER
  --------------------
*/


// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// // Input
// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// // Output
// cashRegister(cartForParty); // 60.55

const shoppingCart = {
  'rotten fruit': '2.50',
  umbrella: '1.20',
  'frozen eskimo sand': '4.05',
  'discombobulated nectarines': '7.40'
}; // shoppingCart

const cashRegister = function(shoppingCart){
  let totalCost = 0;

  for(let key in shoppingCart){
    totalCost += parseFloat(shoppingCart[key]);
  }//for
  return Number(Math.round(totalCost + 'e2') + 'e-2'); // Ensure 2 decimal places
}; // cashRegister();

console.log(`Total cost: $${cashRegister(shoppingCart).toFixed(2)}`);
console.log(cashRegister(shoppingCart))
