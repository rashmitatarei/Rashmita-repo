// 4. Problem: Implement a function that receives an array of numbers and uses destructuring assignment to return the first and last elements of the array in a new array.

// Example:
// Input: \[1, 2, 3, 4, 5\]
// Output: \[1, 5\]

/*let arr = [1, 2, 3, 4, 5];

 let [a, b, c , d, f,...rest] = arr;

console.log([a,f])*/
//  OR

function getFirstAndLast(arr) {
    const [first, ...rest] = arr;
    const last = rest.pop();
    return [first, last];
}


const numbers = [1, 2, 3, 4, 5];
const result = getFirstAndLast(numbers);
console.log(result);  


