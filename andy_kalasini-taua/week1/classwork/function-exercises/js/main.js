console.log('Functions JS loaded!');

// The Fortune Teller ====================================

const tellFortune = function (numChildren, partnersName, location, jobTitle)
{
   const output = `You will be a ${jobTitle} in ${location}, and married to ${partnersName} with ${numChildren} kids.`;
   return output;

}; //end of tellFortune

    const fortune = tellFortune( '5', 'Craigsy', 'Sydney', 'pro surfer' );
    const fortune2 = tellFortune( '3', 'Michelle', 'Sydney', 'plumber');
    const fortune3 = tellFortune( '7', 'Dannielle', 'Melbourne', 'carpenter');

      console.log(fortune);
      console.log(fortune2);
      console.log(fortune3);


// The Puppy Age Calculator ======================================

const calculateDogAge = function(puppyAge, conversionRate)
{
   const humanAge = puppyAge * conversionRate;
   return `Your dog is ${humanAge} years old in dog years.`;
   return output;

}; //end of calculateDogAge

    const dogAge = calculateDogAge( 2, 7 );
    const dogAge1 = calculateDogAge( 5, 7 );
    const dogAge2 = calculateDogAge( 3, 7 );

      console.log(dogAge);
      console.log(dogAge1);
      console.log(dogAge2);


// The lifetime supply =======================================

const calculateSupply = function(currentAge, amountPerDay)
{
  const amountConsumed = (100 - currentAge) * (365 * amountPerDay);

   return `You will need ${amountConsumed} to last you until the ripe old age of 100`
   return output;

}; //end of calculateSupply

      const supply = calculateSupply(35, 5);
      const supply1 = calculateSupply(56, 2);
      const supply2 = calculateSupply(63, 8);

        console.log(supply)
        console.log(supply1)
        console.log(supply2)



// The temperature converter ====================================

const celsiusToFahrenheit = function(celsius, fahrenheit)
{
  const fahren = celsius * 1.8 + 32;
  return `${celsius}${'\u00B0'}celsius is ${fahren}${'\u00B0'}fahrenheit`
  return output;

}; //end of celsiusToFahrenheit

  const answer0 = celsiusToFahrenheit(23, 34);
  console.log(answer0)


const fahrenheitToCelsius = function(fahrenheit, celsius)
{
  const fahren = celsius * 1.8 + 32;
  return `${fahren}${'\u00B0'}fahrenheit is ${celsius}${'\u00B0'}celsius`
  return output;

}; //end of fahrenheitToCelsius

  const answer1 = fahrenheitToCelsius(23, 34);
  console.log(answer1)
