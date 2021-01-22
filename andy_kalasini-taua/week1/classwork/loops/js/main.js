console.log('loop exercises');


// The even/odd reporter

// Write a for loop that will iterate from 0 to 20. For each iteration,
// it will check if the current number is even or odd, and report that to
// the screen (e.g. "2 is even").

for (let i = 0; i < 20; i++){
  console.log (i);

if( i % 2 === 0){
  console.log(`${i} is even.`);
}else{
  console.log(`${i} is odd`);
}

}



// Multiplication Tables
// Write a for loop that will iterate from 0 to 10. For each iteration of
// the for loop, it will multiply the number by 9 and log the
// result (e.g. "2 * 9 = 18").
//
// Bonus: Use a nested for loop to show the tables for every multiplier
// from 1 to 10 (100 results total).


for(let i = 0; i<= 10; i++){

  for(let j = 0; j<= 10; j++){
  console.log(`${i} * ${j} = ${ i * 9}`);
  }
  

}
