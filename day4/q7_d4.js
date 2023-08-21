// 7. Create a function that takes an array of strings as a parameter and returns a new array with only the elements that have a length greater than 5.

// Example:
// Input: \["apple", "banana", "pear", "kiwi", "orange"\]
// Output: \["banana", "orange"\]



function filterStringsByLength(arr) {
    const result = arr.filter(str => str.length > 5);
    return result;
  }
  
  const input = ["apple", "banana", "pear", "kiwi", "orange"];
  const output = filterStringsByLength(input);
  console.log(output);
  