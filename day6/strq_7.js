// Problem 7:
// Write a function that removes all leading and trailing whitespace from a given string.

// Example:
// Input: "  Hello, World!  "
// Output: "Hello, World!"


function removesLeadingWhitespece(inputString){
    return inputString . trim();
}

let Input ="  Hello, World!  ";
let Output = removesLeadingWhitespece(Input);
console.log(Output );
