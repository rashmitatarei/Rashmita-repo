// 7. Write a function that takes an array of numbers as input and returns a new array containing only the even numbers.

// Example:
// Input: \[1, 2, 3, 4, 5, 6\]
// Output: \[2, 4, 6\]

function filterEvenNumbers(numbers) {
    
    const evenNumbersArray = numbers.filter(number => number % 2 === 0);
  
    
    return evenNumbersArray;
  }
  
  
  const inputArray = [1, 2, 3, 4, 5, 6];
  
  
  const evenNumbersResult = filterEvenNumbers(inputArray);
  
  
  console.log(evenNumbersResult); 
  