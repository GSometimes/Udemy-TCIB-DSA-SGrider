// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// simplest solution
// function reverse(str) {
//     let splitStr = str.split("").reverse().join("")

//     return splitStr
// }

// without reverse method
function reverse(str) {
    // create empty string called 'reversed'
    let reversed = ""

    // write a FOR loop to iterate through string and pass characters to the start of the string
    for (let character of str) {
        reversed = character + reversed;
        debugger;
    }

    // return reversedStr variable
    return reversed
}

// with reduce  *fancy solution*
// function reverse(str) {
//     // debugger statement
//     // debugger;
//   // take str and turn it into array
//   // use reduce method to condense down to single string value
//   return str.split('').reduce((rev, char) => char + rev, '');
// }


reverse('asdf') // needed to test debugger 

module.exports = reverse;