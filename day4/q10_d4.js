// 10. Create a function that calculates the sum of all the numbers in a given array.

// Example:
// Input: \[2, 4, 6, 8\]
// Output: 20


// function calculateSum(arr) {
//     const sum = arr.reduce((total, number) => total + number, 0);
//     return sum;
//   }
  
//   const input = [2, 4, 6, 8];
//   const output = calculateSum(input);
//   console.log(output); 
  
function calculateSum(arr) {
    const sum = arr.reduce((total, number) => total + number, 0);
    return sum;
  }
  
  const input = [2, 4, 6, 8];
  const output = calculateSum(input);
  console.log(output); 
  