
console.log('JS loaded!')

// Do your excercises here:
// exercise#1 Fortune teller

const numberOfChildren="N";
const partnersName="Z";
const geoLocation="Y";
const jobTitle="X";
//const fortune ="You will be a "+jobTitle+" in "+geoLocation+", and married to "+partnersName+ " with "+numberOfChildren+ " kids";

//string interpolation
const fortune = `You will be a ${jobTitle} in ${geoLocation} and married to ${partnersName} with ${numberOfChildren} kids`;

console.log(fortune)

//exercise#2 Age calculator

const currentYear=2020;
const birthYear="1987";
const currentAge=currentYear-birthYear;
const currentAge1=currentAge-1;
console.log("They are either "+currentAge+" or "+ currentAge1);

//exercise#3 LifeTime Supply calculator
const currentAge2020=33;
const maxAge=90;
const estAmount=2;
const totalToEat=`You will need a total of ${(maxAge-currentAge2020)*estAmount*365} to last until the ripe old age of ${maxAge}`;

console.log(totalToEat);

//exercise#4
const celsiusTemp=47;
const farenheitTempSol=(celsiusTemp*9/5)+32;
console.log(celsiusTemp+"°C is "+farenheitTempSol.toFixed(1)+"°F.");
const farenheitTemp=116;
const celsiusTempSol=(farenheitTemp-32)*5/9;
console.log(farenheitTemp+"°F is "+celsiusTempSol.toFixed(1)+"°C");
