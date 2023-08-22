// 9. Implement a function that converts an array of strings into a single string by concatenating all the elements with a specified separator.

// Example:
// Input: \["Hello", "World", "JavaScript"\], "-"
// Output: "Hello-World-JavaScript"

function  joinArrayWithSeparetor(strings, separator){

    let concatenatedString = strings.join(separator);

      return  concatenatedString;
}
let inputArray=["Hello", "World", "JavaScript"];

let separator="-";

let concatenatedResult=joinArrayWithSeparetor(inputArray,  separator);

 console.log(concatenatedResult);


