// 6. Write a function that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string. Return the count.

// Example:
// Input: "hello world"
// Output: 3
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }
  
    return count;
  }
  
  const input = "hello world";
  const output = countVowels(input);
  console.log(output); 
  