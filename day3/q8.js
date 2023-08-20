// 8. Question: Write a program that takes an array of strings and returns a new array with all the strings converted to uppercase using a loop.

//    Example:
//    Input: `['apple', 'banana', 'cherry']`
//    Output: `['APPLE', 'BANANA', 'CHERRY']`


const strings = ['apple', 'banana', 'cherry'];
const uppercaseStrings = [];

for (let i = 0; i < strings.length; i++) {
    uppercaseStrings.push(strings[i].toUpperCase());
}

console.log(uppercaseStrings);    