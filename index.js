function isPalindrome(word) {
  // Write your algorithm here
  const arrayOfLetters = word.split('');
  const reverseLetters = arrayOfLetters.reverse()
  const reverseString  = reverseLetters.join('')

  if (word == reverseString){

    return true

  } else {
    return false
  }
}

/* 
  Function isPalindrome has to take a string as a parameter. If the string is palindrome, the function should return true.
   If not then the function should return false
*/
/*
  The function takes the word and splits each letter into an array, then the array is reversed.
   The array is then joined again into a word. Then we compare if the original word is the same as the reversed word.
    If true then it returns true, or else it will return false
*/
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log('Expecting: false')
  console.log('=>', isPalindrome('slow'));

    //✓ returns false for 'ab'

  console.log('Expecting: true')
  console.log('=>', isPalindrome('abba'));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("");
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
