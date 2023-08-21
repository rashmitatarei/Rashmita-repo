// 5. Implement a function that calculates the factorial of a given number. The factorial of a number is the product of all positive integers less than or equal to that number.

// Example:
// Input: 5
// Output: 120
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  const input = 5;
  const output = factorial(input);
  console.log(output); 
  