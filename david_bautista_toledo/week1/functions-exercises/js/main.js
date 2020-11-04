
console.log("functions JS loaded!");

// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?
//
// Write a function named tellFortune that:
//
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// returns a string that looks like this: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments; each time you call the function, capture the return value of the function (the string) in a new variable, and on a new line, print out the contents of the variable
//

const tellFortune = function(numberOfChildren,partnersname,geoLocation,jobTitle){
  return fortune = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnersname} with ${numberOfChildren} kidos`;
    };

const result=tellFortune(5,"Betty","Sydney","Software developer");
console.log(result);

// The Puppy Age Calculator
// You know how old your dog is in human years, but what about dog years? Calculate it!
//
// Write a function named calculateDogAge that:
//
// takes 1 argument: your puppy's age.
// calculates your dog's human-equivalent age based on the conversion rate of 7 human years to 1 dog year.
// returns a string that looks like this: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.
// Call that function 3 times with 3 different values for the puppy's age; each time you call the function, capture the return value of the function (the string) in a new variable, and on a new line, print out the contents of the variable
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

const dogAgeInDogYears = function(dogsAge){
  return dogsformula = `Your dog is ${dogsAge*7} in dogs years`;
};

const result2=dogAgeInDogYears(3);
console.log(result2);



// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//
// Write a function named calculateSupply that:
//
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a fixed maximum age).
// returns a string that looks like this: "You will need NN to last you until the ripe old age of X"
// Call that function 3 times with 3 different values for the arguments; each time you call the function, capture the return value of the function (the string) in a new variable, and on a new line, print out the contents of the variable
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

const calculateSupply = function (age,amountXday) {
  return calculate = `You will need ${(90-age)*amountXday*365} to last you until the ripe old age of 90`;
};

const totalAmount = calculateSupply(25,10);
console.log(totalAmount);


// The Temperature Converter
// It's hot out! Let's make a converter.
//
// Create a function called celsiusToFahrenheit which:
//
// Takes a celsius temperature as its argument.
//
// Converts it to fahrenheit and returns this value from the function
//
// Call the funtion this way:
//
// Create a variable called celsius and store a temperature value in it
// Call the celsiusToFahrenheit function and pass the celsius variable as the argument.
// Capture the return value of the function into a new variable, and use both this variable and your original celsius input variable to print out a result like "XX°C is YY°F".
// Now do the reverse calculation by creating a function called fahrenheitToCelsius. Pass a variable called fahrenheit into this function when you call it.
//
// BONUS: prompt the user for the temperatures to convert, instead of hardcoding them into variables.

const celsius 
