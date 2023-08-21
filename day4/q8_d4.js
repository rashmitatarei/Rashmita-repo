// 8. Implement a function that checks if a given word is a palindrome. A palindrome is a word that reads the same backward as forward.

// Example:
// Input: "racecar"
// Output: true


function isPalindrome(word) {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
  }
  
  const input = "racecar";
  const output = isPalindrome(input);
  console.log(output); 
  