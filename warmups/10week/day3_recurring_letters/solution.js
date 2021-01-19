const recurrLetter = (sentence) => {
    const letterCount = {};
    let largestScore = 0
    let largestScoreChar = ''

    // split the sentence to remove the spaces
    // split returns an array so we use .join
    const newSen = sentence.split(' ').join('');
    console.log(newSen);

    // Loop through each letter
    newSen.split('').forEach(char => {
        // console.log(char);
        // If the character exists in our object then increment the value
        // else if the character doesnt exist then add it with a value of 1
        if ( letterCount[char] ) {
            letterCount[char]++;
            // console.log(letterCount);
        } else {
            letterCount[char] = 1
        }
    })

    // Once the above loop is done I now have and object which all the letters and the amount of times they appear
    // e.g. 
    // {
    //     T: 1,
    //     h: 4,
    //     e: 3,
    //     q: 1,
    //     u: 2,
    // }
    // Loop through the object so I can compare the scores of each letter
    for(let char in letterCount) {
        console.log(`key: ${char} value: ${letterCount[char]}`);
        // letterCount[char] returns the value of that particular key
        const score = letterCount[char];
        // we created a variable called largestScore which stores the current largest score in the loop
        // we also store the letter in a variable
        if ( score > largestScore ) {
            // console.log(`current largest score: ${largestScore}`)
            largestScoreChar = char;
            largestScore = score;
            // console.log(`updated largest score: ${largestScore}, largest score char: ${largestScoreChar}`);
        }
    }

    console.log(`The recurring letter of '${sentence}' is '${largestScoreChar}'`);
}
// recurrLetter('The quick brown fox jumps over the lazy dog');

const capLetter = (str, letter) => {
    // if the string has uppercase letters maybe you want to change them?
    // we don't have to worry about spaces here but I want all my letters to be lowercased
    // because "a" === "A" will return false
    const strArr = str.toLowerCase().split('');
    // console.log(strArr);

    // A variable to store my new sentence
    newStrArr = [];

    // Loop through each of the letters
    // if the current letter === the letter that occurs the most 
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === letter){
          strArr[i] = strArr[i].toUpperCase();
        }
        newStrArr.push(strArr[i]);
    }

    return newStrArr.join('');
}

console.log(capLetter('The quick brown fox jumps over the lazy dog', 'o'))