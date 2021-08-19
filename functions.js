
//////////////////PROBLEM 1////////////////////
/*
  Create a function called 'sum' that takes in two parameters, 'num1' and 'num2'. 
  The function should return the sum of the two parameters.
*/

//CODE HERE

// must add num1 + num2 in the return statement. 
function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(10, 20));

//////////////////PROBLEM 2////////////////////
/*
  Create a function called 'greaterThanFive' that takes in a single parameter called 'number'. 
  Check to see if 'number' is greater than 5.
  If it is, return a true boolean. 
  If it's not, return a false boolean.
*/

//CODE HERE

function greaterThanFive(number) {
  if(number > 5) {
    return true;
  } else {
    return false;
  }
}

console.log(greaterThanFive(3));
//////////////////PROBLEM 3////////////////////
/*
  Create a function called 'findZWords' that takes in one parameter, 'word'. 
  Your function should check to see if the name begins with the letter "Z"
  If the name does begin with Z, return the string: 'the name begins with Z'. 
  If the name does not begin with Z, return the string: 'the name does not begin with Z'.
*/

//CODE HERE


// replace the world.length with word[0]
// with the return statement, make it a string like this: return `word begins with a z`
// else 
// return ``the word does not begin with a z


function findZWords(word) {
  word = word.toLowerCase();
  if(word.length === 1 && word.match(/[a-z]/i)) {
    return `the word begins with a Z`;
  } else {
  return `the word does not begin with a Z`;
  }
}

console.log('Zebra');

// function findZWords(word) {

// you can use 
// word = word.toLowerCase() 
// or 
// word.startsWith(`z`)          must be inside the if statement for it to work. 

//   if(word.length === `Z`) { 
//      return word.length === 1 && word.match(/[a-z]/i);
//   }
// }



//////////////////PROBLEM 4////////////////////
/*
  Create a function called 'iLove' that takes in two string parameters, 'name' and 'love'. 
  Have the function take the two parameters and return a string that says 
  "NAMEPARAM loves LOVEPARAM" with the appropriate parameters in the string. e.g. "Joseph loves music"
*/

//CODE HERE

function iLove(name, love) {
  return `${name} loves ${love}`
}

console.log(iLove(`Chris`, `music`));
