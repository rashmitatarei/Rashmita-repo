//Write a function that checks if a given string contains only numeric characters.

// Example:
// Input: "12345"
// Output: true

function containsOnlyNumericCharacters(inputString){
    return /^[0-9]+$/.test(inputString);
}

let input = "12345"
let output = containsOnlyNumericCharacters(input);
console.log(output);


