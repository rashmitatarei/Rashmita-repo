// 1. Problem: Create a function that takes two numbers as parameters and uses the "let" keyword to swap their values. Return the swapped values.

// Example:
// Input: 3, 5
// Output: 5, 3

function swapValues(a,b) {
    let temp = a;
    a = b;
    b = temp;
    return [a,b] ;
}


let num1 = 3;
let num2 = 5;
console.log("Before swapping", num1, num2);
[num1 , num2]  = swapValues(num1,num2);
console.log("After swapping", num1 ,num2);


















