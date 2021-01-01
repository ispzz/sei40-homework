console.log('Js Loaded!');
console.log('IF/STATEMENTS');

// What number's bigger =============================================

// const num1 = Math.random(Math.random()*10).toFixed(1);
// const num2 = Math.random(Math.random()*10).toFixed(1);
//
// if (num1){
//   console.log(`${num1}`);
// }
// if (num2){
//   console.log(`${num2}`);
// } //end of if statement
//
// if (num1 > num2){
//   console.log(`${num1} is the greater number of the two numbers shown above`);
// } else if (num2 > num1){
//   console.log(`${num2} is the greater number of the two numbers shown above`);
// } else {
//   console.log('Please refresh again!');
// } //end of if statement

// The World Translator ==============================================

// const languages = ['English', 'French', 'Samoan', 'Italian'];
// const random = Math.floor(Math.random() * languages.length);
//
// if (languages[random] === 'English') {
//   console.log('Hello World from England');
// } else if (languages[random] === 'French'){
//   console.log('Bonjour le monde from France');
// } else if (languages[random] === 'Samoan'){
//   console.log('Talofa Lava from Samoa');
// } else if (languages[random] === 'Italian'){
//   console.log('Ciao mondo from Italy');
// }

//The grade assigner ============================================

// A = 90 - 100
// B = 80 - 89
// C = 50 - 79
// D = 30 - 49
// F = 20 - 29

// const x = 83;
//
// if (x > 90 & x <= 100){
//   console.log('YAY you got an A');
// } else if (x >= 80 & x <= 89){
//   console.log('YAY you got a B');
// } else if (x >= 50 & x <= 79){
//   console.log('Atleast you passed you got a C');
// } else if (x >= 30 & x <= 49){
//   console.log('Better luck next time you got a D');
// } else if (x >= 20 & x <= 29){
//   console.log('Lets try again you got an F');
// }

// The Pluralizer ==========================================================

const x2 = ["dog's", "cat's", "cow's", "snake's", "rabbit's"]
const x3 = ['dog', 'cat', 'cow', 'snake', 'rabbit']
const y2 = ['one', 'two', 'three', 'four', 'five']

const random2 = Math.floor(Math.random() * x2.length);
const random3 = Math.floor(Math.random() * y2.length);
const random4 = Math.floor(Math.random() * x3.length);

if (y2[random3]=='one') {
  console.log(`Congratulations!! you have been prized with ${y2[random3]} ${x3[random4]}`);
} else {
 console.log(`Congratulations!! you have been prized with ${y2[random3]} ${x2[random2]}`);
}



























//Which numbers bigger ==============================================

// const x = 5;
// const y = 10;
//
// if (x > y){
//   console.log(`The greater number of ${x} and ${y} is ${x}`);
// } else if (x < y){
//   console.log(`The greater number of ${x} and ${y} is ${y}`);
// }
