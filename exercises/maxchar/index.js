// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // create empty object
  const charMap = {};
  // helper variables
  let max = 0;
  let maxChar = '';

  // iterate over string
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  // iterate through character map
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;

// anything inside of string is considered a "unique" character
// take string and convert it to an object
// assign keys within the object that are letters
// the value of the key is the count of the characters in the string
