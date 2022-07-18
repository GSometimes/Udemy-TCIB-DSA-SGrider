// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// my attempt
// function palindrome(str) {
//   // set palindrome to false by default
//   let pali = false;

//   // compare reversed str to str
//   // if reversed str equals str then palindrome = true
//   if (str.split('').reverse().join('') === str) {
//     pali = true;
//   }

//   return pali;
// }

// // common method
// function palindrome(str) {
//     //reverse string
//   const reversed = str.split('').reverse().join('');
  
//   // will return a boolean value depending on condition
//   return str === reversed;
// }

// alternate solution without reversal
function palindrome(str) {
    // split string and use .every() method
    return str.split("").every((char, i) => {
        // return comparison with element and element on opposite end of array
        return char === str[str.length - i - 1];
    })
}

module.exports = palindrome;
