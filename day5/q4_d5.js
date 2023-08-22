// 4. Write a function that takes two arrays as input and combines them into a single array.

// Example:
// Input: \[1, 2, 3\], \["a", "b", "c"\]
// Output: \[1, 2, 3, "a", "b", "c"\]

// let num1=[1,2,3,];
// let num2=["a","b","c"];
// let num3=[...num1,...num2];
// console.log(num3)



function combineArray(array1,array2){

    let combinedArray=array1.concat(array2);

return combinedArray;
}
let array1=[1,2,3,];

let array2=["a","b","c"];

let combinedResult=combineArray(array1,array2);

console.log(combinedResult);

