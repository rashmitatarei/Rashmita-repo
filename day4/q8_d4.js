// 8. Implement a function that checks if a given word is a palindrome. A palindrome is a word that reads the same backward as forward.

// Example:
// Input: "racecar"
// Output: true in javascript

function isPalindrome(word) {
    const length = word.length;
    for (let i = 0; i < length / 2; i++) {
      if (word[i] !== word[length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  const input = "racecar";
  const output = isPalindrome(input);
  console.log(output); // Output: true
  