// I didn't comment out any solutions so it'd be easier to read
// create our arrays we want to use so the code is cleaner
const arrayOne = ["one", "two", "three", "four"];
const arrayTwo = ["Hello", ["World", 42]];
const arrayThree = [["Hello", ["World", 42] ], [45]];

/*--------------------------------------------------------------*/

const reverseArray = function(array) {
    // a new array to store the reversed result
    const reversed = [];

    // SOLUTION 1 - LOOPING BACKWARDS
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[ i ]);
        reversed.push( array[ i ] );
    };
    return reversed;

    // SOLUTION 2 - UNSHIFT()
    for (let i = 0; i < array.length; i++) {
        reversed.unshift(array[ i ]);
    }
    return reversed;
}
console.log(reverseArray(arrayOne));

/*--------------------------------------------------------------*/

const flattenArray = function(array) {
    // Add the elements within the array to a new array
    let flattenedArray = [];

    // SOLUTION 1
    // Iterate through the array and check whether the current element
    // is an array and if so then concatenate / push that onto 
    // the flattenedArray. If the current element is not an array
    // then just push it onto flattenedArray.
    for (let i = 0; i < array.length; i++) {

        if ( Array.isArray(array[ i ]) ) {
            // for (let j = 0; j < array[ i ].length; j++) {
            //     flattenedArray.push(array[i][j]);
            // }

            flattenedArray = flattenedArray.concat(array[i]);
        } else {
            flattenedArray.push(array[i]);
        } // end if

    } // end of first loop

    // SOLUTION 2
    // Reduce uses a function that takes in two arguments:
    // the accumulator (total) & current element.
    // The accumulator is basically the starting point or total value.
    // Total is the starting point and current element is each
    // iteration or element of the array, in this case.
    // We can then concatenate the current elem into total.
    // Finally the square brackets on line 65 set the initial
    // value to an array. If I didn't have that then the output
    // would be = HelloWorld, 42
    flattenedArray = array.reduce(function(total, currentElement) { 
        return total.concat(currentElement);
    }, []);
    return flattenedArray;

    // SOLUTION 2.1 USING ARROW FUNCTION
    return array.reduce((total, elem) => { 
        return total.concat(elem);
    }, []);

    // SOLUTION REFACTORED A LIL | ONE LINER
    return arrays.reduce((total, elem) => total.concat(elem));
};
console.log(flattenArray(arrayTwo));

/*--------------------------------------------------------------*/

// FLATTEN MULTI LEVEL ARRAYS - [["Hello", ["World", 42] ], [45]]
const flattenBonus = function(array) {

    // SOLUTION 1 - .FLAT HAHA
    // using Infinity to get the max level depth of the array
    return array.flat( Infinity );

    // Here are some magical solutions
    // They're magical because it's something you haven't
    // been taught yet. SOO You don't need to understand
    // these solutions YET.
    // There will be a session in a few weeks where this will be
    // explained in detailed. So, don't ask me about them until
    // it has been explained in class.
    // I thought I'd just show you how you might answer this
    // as you progress in the course so don't try too hard to
    // figure out what is going on here. 
    // Basically, we are calling the function within itself 🤔

    // ✨
    // SOLUTION 2 - REDUCE
    return array.reduce((total, elem) => {
        if (Array.isArray(elem)) {
            return total.concat(flattenBonus(elem));
        } else {
            return total.concat(elem);
        }
    }, []);

    // ✨✨ 
    // SOLUTION 2.1 - REFACTORED
    return array.reduce((total, elem) => Array.isArray(elem) ? total.concat(flattenBonus(elem)) : total.concat(elem), []);

    // ✨✨✨ 
    // SOLUTION 2.3 - The above is still sort of long so I can refactor it further
    return array.reduce((total, elem) => total.concat(Array.isArray(elem) ? flattenBonus(elem) : elem), []);

}; // end of flatten bonus

console.log(flattenBonus(arrayThree));