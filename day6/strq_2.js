// Problem 2:
// Write a function that checks if a given string ends with a specific suffix.

// Example:
// Input: "Hello, World!"
// Suffix: "!"
// Output: true


function endsWithSuffix(inputString, suffix) {
    return inputString.endsWith(suffix);
}


const input = "Hello, World!";
const suffix = "!";
const result = endsWithSuffix(input, suffix);
console.log(result); 
