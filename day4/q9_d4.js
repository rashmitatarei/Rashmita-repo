// 9. Write a function that takes an array of numbers as a parameter and returns a new array with only the even numbers from the original array.

// Example:
// Input: \[3, 6, 8, 9, 12\]
// Output: \[6, 8, 12\]



function filterEvenNumbers(arr) {
    const evenNumbers = arr.filter(number => number % 2 === 0);
    return evenNumbers;
  }
  
  const input = [3, 6, 8, 9, 12];
  const output = filterEvenNumbers(input);
  console.log(output); 
  