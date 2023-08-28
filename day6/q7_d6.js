// 7. Problem: Implement a function that receives an array and a value. Use the spread operator to create a new array with the value added at the beginning.

// Example:
// Input: \[1, 2, 3\], 0
// Output: \[0, 1, 2, 3\]

function addValueAtBegining(arr , value){
    return [value , ...arr];
}
let originalArray=[1,2,3,4];

let newValue=0;
let newArray=addValueAtBegining(originalArray, newValue)

console.log( newArray);


