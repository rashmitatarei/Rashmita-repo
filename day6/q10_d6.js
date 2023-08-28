// 10. Problem: Implement a function that takes an array of numbers as input and returns the maximum value using the spread operator.

// Example:
// Input: \[8, 2, 10, 4, 6\]
// Output: 10

 
function findMaxvalue(numbers){

    return Math.max(...numbers);
}
let numbeArray=[8,2, 10, 4, 6];

let maxvalue=findMaxvalue(numbeArray);

console.log(maxvalue);
