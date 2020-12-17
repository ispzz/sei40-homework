
// create our arrays we want to use so the code is cleaner
const arrayOne = ["one", "two", "three", "four"];
const arrayTwo = ["Hello", ["World", 42]];
const arrayThree = [["Hello", ["World", 42] ], [45]];

/*--------------------------------------------------------------*/

const reverseArray = function(array) {
    const reversed = [];

    // SOLUTION 1
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push( array[ i ] );
    };
    return reversed;

    // SOLUTION 2
    for (let i = 0; i < array.length; i++) {
        reversed.unshift(array[ i ]);
    }
    return reversed;
}
console.log(reverseArray(arrayOne));

/*--------------------------------------------------------------*/

const flattenArray = function(array) {
    let flattenedArray = [];

    // SOLUTION 1
    for (let i = 0; i < array.length; i++) {
        if ( Array.isArray(array[ i ]) ) {
            // for (let j = 0; j < array[ i ].length; j++) {
            //     flattenedArray.push(array[i][j]);
            // }

            flattenedArray = flattenedArray.concat(array[i]);
        } else {
            flattenedArray.push(array[i]);
        }
    } // end of first loop

    // SOLUTION 2
    flattenedArray = array.reduce(function(total, currentElement) { 
        return total.concat(currentElement);
    }, []);
    return flattenedArray;

    // SOLUTION 2.1 (refactored a lil)
    return array.reduce((total, elem) => { 
        return total.concat(elem);
    }, []);

    // SOLUTION USING ARROW FUNCTION
    return arrays.reduce((total, elem) => total.concat(elem));
};
console.log(flattenArray(arrayTwo));

/*--------------------------------------------------------------*/

const flattenBonus = function(array) {
    // SOLUTION 1 - .FLAT HAHA
    return array.flat( Infinity );

    // SOLUTION 2 - REDUCE
    return array.reduce((total, elem) => {
        if (Array.isArray(elem)) {
            return total.concat(flattenBonus(elem));
        } else {
            return total.concat(elem);
        }
    }, []);

    // SOLUTION 2.1 - REFACTORED
    return array.reduce((total, elem) => Array.isArray(elem) ? total.concat(flattenBonus(elem)) : total.concat(elem), []);

    // SOLUTION 2.3 - The above is still sort of long so I can refactor it further
    return array.reduce((total, elem) => total.concat(Array.isArray(elem) ? flattenBonus(elem) : elem), []);

}
console.log(flattenBonus(arrayThree));