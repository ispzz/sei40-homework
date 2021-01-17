// Even & Odd sums
const evenOddSums = (array) => {
    // then add the numbers to their even or odd score/total
    let evenSum = 0
    let oddSum = 0

    // Loop through the array and find out if a number is even or odd
    // array.forEach(num => {
    //     // console.log(num);
    //     // if a number divided by 2 has a remainder of 0 then it's even e.g. num % 2 === 0
    //     if (num % 2 === 0) {
    //         // is an even number!
    //         evenSum += num;
    //         // console.log(`${num} is even!`)
    //     } else {
    //         // is an odd number!
    //         oddSum += num;
    //         // console.log(`${num} is odd!`)
    //     }
    // }) // end of array.forEach

    // Ternary version
    array.forEach(num => (( num % 2 === 0 ) ? evenSum += num : (oddSum += num)));

    // return sums 
    return [evenSum, oddSum];
}
// console.log(evenOddSums([50, 60, 60, 45, 71]));

// Multiplication table
const multiTable = () => {
    // you might need two loops
    // first i'll need to get the numbers 1-12
    // then I want to output the multiplication table of each of those numbers e.g.
    // 12 x 0 = 0
    // 12 x 1 = 12
    // 12 x 2 = 24
    // 12 x 3 = 36
    for (let i = 0; i <= 12; i++) {
        console.log(`---- ${i} ----`);
        for (let j = 0; j <= 12; j++) {
            let sum = i * j;
            console.log(`${i} x ${j} = ${sum}`)
        }
    }
}
// multiTable();

const tableBonus = () => {
    const out = [];
    for (let i = 0; i <= 12; i++) {
        const row = [];
        for (let j = 0; j <= 12; j++) {
            let sum = i * j;
            row.push(sum);
        }
        out.push(row);
    }
    return out;
}

console.log(tableBonus());
console.table(tableBonus());

// Extra
// Solution using Array() and .map
const anotherTable = () => {
    // the below is like const genNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12];
    const genNums = () => [...Array(13).keys()];
	return genNums().map((row) => genNums().map((num) => row * num));
}
console.table(anotherTable());