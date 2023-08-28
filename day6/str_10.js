 //Problem 10:
// Write a function that splits a given string into an array of substrings based on a specified delimiter.

// Example:
// Input: "apple,banana,orange"
// Delimiter: ","
// Output: \["apple", "banana", "orange"\]



function customSplit(inputString, delimiter) {
    return inputString.split(delimiter);
}


const input = "apple,banana,orange";
const delimiter = ",";
const result = customSplit(input, delimiter);
console.log(result); 
