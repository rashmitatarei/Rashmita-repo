//8. Problem: Create a function that takes a variable number of arguments using the rest operator and returns their sum.

// Example:
// Input: 1, 2, 3, 4, 5
// Output: 15


function sumOfNumbers(...rest) {
    let sum = 0;
    
    rest.forEach((ele) => {
      sum = sum + ele;
    });
    return sum;
  }
  
  console.log(sumOfNumbers(1,2,3, 4,5))