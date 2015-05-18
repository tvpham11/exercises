// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(num1, num2){
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else {
    return "Both numbers are equal.";
  }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){
  if (num1 > (num2 && num3)) {
    return num1;
  } else if (num2 > (num1 && num3)) {
    return num2;
  } else if (num3 > (num1 && num2)) {
    return num3;
  } else {
    return "All numbers are equal."
  }
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    return true;
  } else {
    return false;
  }
}

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------


function rovarspraket(phrase){
  var newphrase = "";
  for (var i = 0; i < phrase.length; i++) {
    var letter = phrase[i];
    newphrase += (letter);
    if (letter !== "a" && letter !== "e" && letter !== "i" && letter !== "o" && letter !== "u") {
      newphrase += ("o" + letter);
    } else {
      newphrase += (letter);
    }
  }
  return newphrase;
}


// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum (numArray) {
  var total = 0;
  for (var i = 0; i < numArray.length; i++)
    total += numArray[i];
    return total;
}

/*function sum(numArray){
  var answer = numArray.reduce(function(a,b) {
       return a + b;
   });
 return answer;
}*/

function multiply(numArray){
  var total = 1;
  for (var i = 0; i < numArray.length; i++)
    total *= numArray[i];
    return total;
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
  var newString = "";
  for (var i = string.length - 1; i >= 0; i--) {
    var letter = string[i];
    newString += letter;
  }
  return newString;
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
  var longestLength = 0;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longestLength) {
      longestLength = words[i].length;
    }
  }
  return longestLength;
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
  var longWords = [];
    for (var j = 0; j < words.length; j++) {
      if (words[j].length > i) {
        longWords.push(words[j]);
      }
    }
    return longWords;
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
  var frequency = {};
  for (var i = 0; i < string.length; i++) {
    var letter = string.charAt(i);
    if (frequency[letter]) {
      frequency[letter]++;
    } else {
      frequency[letter] = 1;
    }
  }
  return frequency;
}
