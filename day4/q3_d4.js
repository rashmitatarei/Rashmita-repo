// 3. Write a function that takes an array of numbers as a parameter and returns the largest number in the array.

// Example:
// Input: \[4, 9, 2, 6, 1\]
// Output: 9



function findLargestNumber(numbers) {
    let largest = numbers[0]; // Assume the first number is the largest
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > largest) {
        largest = numbers[i];
      }
    }
  
    return largest;
  }
  
  // Example usage:
  const numberArray = [4, 9, 2, 6, 1];
  const largestNumber = findLargestNumber(numberArray);
  console.log(largestNumber); // Output: 9
  