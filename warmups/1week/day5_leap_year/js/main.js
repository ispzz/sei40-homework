

// Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:

// Every year that is evenly divisible by 4
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400

// Test Data... Make sure it is working!

// - 1997 is not a leap year, it should return false
// - 1996 is a leap year, it should return true
// - 1900 is not a leap year, it should return false
// - 2000 is a leap year, it should return true

// Version 1
const isLeapYear = function( year ) {
    
    // Every year that is evenly divisible by 4
    if ( year % 4 === 0 ) {

        if ( year % 100 !== 0) { // If the year is divisible by 4 and NOT divisible by 100 then it is a leap year
            return true;
        } else if ( year % 400 === 0 ) { // If the year is divisible by 4 and IS ALSO divisible by 400 then it is a leap year (return true)
            return true;
        } else { // If the above conditions aren't met then it is not a leap year
            return false;
        }

    } else { // If the year is not divisible by 4 then it is NOT a leap year
        return false;
    }

};

console.log(isLeapYear( 1997 ));
console.log(isLeapYear( 1996 ));
console.log(isLeapYear( 1900 ));
console.log(isLeapYear( 2000 ));
console.log(isLeapYear( 1600 ));


// Version 2 - still readable but not as repetitive
const isLeapYear2 = function( year ) {

    if ( year % 4 === 0 ) {

        // because both conditions in the 1st version return true we can refactor it into one using an OR || operator
        if ( year % 100 !== 0 || year % 400 === 0 ) {
            return true;
        } else {
            return false;
        }

    } else {
        return false;
    }

};


// Version 3
const isLeapYear3 = function( year ) {

    // if the year is divisible by 4 AND (&&) is not divisible 100 OR (||) is divisible by 400 then return
    if ( year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ) {
        return true;
    } else {
        return false;
    }

};

// Version 4 - MAGIC that you don't need to understand right now
const isLeapYear4 = function( year ) {

    // return true if the year is divisible by 4 AND (&&) is not divisible 100 OR (||) is divisible by 400
    return (year % 4 === 0) && ( (year % 100 !== 0) || (year % 400 === 0)  );

};

console.log(isLeapYear4( 1997 ));
console.log(isLeapYear4( 1996 ));
console.log(isLeapYear4( 1900 ));
console.log(isLeapYear4( 2000 ));