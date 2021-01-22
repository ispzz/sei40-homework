console.log ('Js.Loaded!')

// Do your exercises here

// Exercise 1

const numberOfchildren="10";
const partnersName="Alice";
const geographicLocation="Sydney";
const jobTitle="Engineer";

const future = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfchildren} kids.`;

console.log (future)

// console.log ("You will be a " + jobTitle + " in " + geographicLocation + " and married to " + partnersName + " with " + numberOfchildren + " kids. ");


// Exercise 2

  const currentYear = 2020;
  const birthYear = 1985;

  const ageAfterBirthday = currentYear - birthYear;
  const ageBeforeBirthday = currentYear - birthYear - 1;

  const ageOutPut = `You are either ${ageAfterBirthday} or ${ageBeforeBirthday}`

  console.log( ageOutPut);

// Exercise 3

  const currentAge = 60;
  const maxAge = 100;
  const amountPerDay = 5;

  const yearsRemaining = maxAge - currentAge;
  const amountPerYear = amountPerDay * 365;
  const totalSnacksRequired = amountPerYear * yearsRemaining;

  const snacks = `You will need ${totalSnacksRequired} snacks to last you until the ripe old age of ${maxAge}`

  console.log(snacks)

  // Exercise 4

  const radius = 6;
  const diameter = radius * 2;
  const circumference = 3.14 * diameter;

  console.log(` The radius of this circle is ${radius}m and the diameter of this circle is ${diameter}m which means the area of the circle would be ${circumference}m^2`)



  // Exercise 5

  const celsius = 123;
  const fahrenheit = celsius * 1.8 + 32;

  //formulae = b = a * 1.8 + 32

  console.log(fahrenheit)
