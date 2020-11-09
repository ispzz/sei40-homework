
console.log("JS Loaded");

// Do your exercises here:

// The Fortune Teller

console.log("The Fortune Teller");

const tellFortune = function(numChildren, namePartner, geoLocation, jobTitle){

  const fortuneOutput = (`You will be an ${jobTitle} in ${geoLocation}, and married to ${namePartner} with ${numChildren} kids`);

  return(fortuneOutput);
};

const fortune= tellFortune(2, "Daniela", "Geelong", "Author");

console.log(fortune);

// Puppy Age Calculator

console.log("Puppy Age Calculator");

const myPuppyAge = function (dogAge, humanConv){
  const dogAgeConv = dogAge * humanConv;

    console.log(`Your doggie is ${dogAge} years old in dog years!`);

    console.log(`Or ${dogAgeConv} in human years!`);
}

myPuppyAge(6, 7);
