// Serge answers 'Sure.' if you ask him a question.
//
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//
// He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// He answers 'Whatever.' to anything else.
//
// Create a function that takes an input and returns Serge's response.

const sergeAnswers = function(str){
//empty string
  if(typeof str === 'undefined'){
    return "Fine. Be that way!";
  }
  if( str === ''){
    return "Fine. Be that way!";
  }
  const lastChar = str[str.length - 1];
  const firstThreeChar = [str[0],str[1],str[2]];
  //console.log(lastChar);
  //Upper case
  let counter = 0;
  for(let i = 0; i <= 2; i++){
       if (!isNaN(str[i] * 1)){
          return 'Why you talking in numbers?';
        }
        else {
          if (firstThreeChar[1] == firstThreeChar[1].toUpperCase()){
             counter ++;
           }
        }
    }
  if(counter >= 2){
    return "Woah, chill out!"
  }
  //question mark
  if(lastChar === "?"){
    return "Sure.";
  }

  return "Whatever!!";

};

console.log(sergeAnswers());
console.log(sergeAnswers(""));
console.log(sergeAnswers("Test"));
console.log(sergeAnswers("Test?"));
console.log(sergeAnswers("TEST?"));
