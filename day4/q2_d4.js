// 2. Create a function that checks if a given number is even or odd. It should return "Even" if the number is even, and "Odd" if it's odd.

// Example:
// Input: 7
// Output: "Odd"

function checkEvenOrOdd(number){
    if(number %2 === 0){
        return "Even";
    } else {
        return "Odd";
    }
}
const inputNum=7;
const ans=checkEvenOrOdd(inputNum);
console.log(ans);



