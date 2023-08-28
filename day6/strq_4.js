// Problem 4:
// Write a function that replaces all occurrences of a specified character in a string with another character.

// Example:
// Input: "Hello, World!"
// Character to replace: "o"
// Replacement character: "x"
// Output: "Hellx, Wxrld!"


function replaceCharacter(inputString, charToReplace, replacementChar) {
    return inputString.split(charToReplace).join(replacementChar);
}


const input = "Hello, World!";
const charToReplace = "o";
const replacementChar = "x";
const result = replaceCharacter(input, charToReplace, replacementChar);
console.log(result); 
