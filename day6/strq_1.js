// Problem 1:
// Write a function that capitalizes the first letter of each word in a given string.

// Example:
// Input: "hello world"
// Output: "Hello World"
function capitalizeLetter(str){

    let capitalizedString = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalizedString;

}

let str = "hello world"

console.log(capitalizeLetter(str));