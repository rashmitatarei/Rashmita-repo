// 6. Problem: Create a function that concatenates two arrays using the spread operator.

// Example:
// Input: \[1, 2, 3\], \[4, 5, 6\]
// Output: \[1, 2, 3, 4, 5, 6\]

function  concatenatesArray(arr1 ,arr2){

    return[...arr1,...arr2];
}
let arry1=[1,2,3,];
let arry2=[4,5,6];

let concatenatedArray=concatenatesArray(arry1 ,arry2);
console.log(concatenatedArray);