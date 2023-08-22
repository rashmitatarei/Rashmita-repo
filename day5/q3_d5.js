// 3. Implement a function that finds the maximum value in an array of numbers and returns it.

// Example:
// Input: \[8, 2, 10, 4, 6\]
// Output: 10

// let input=[8,2,10,4,6]
// let max=Math.max(...input);
// console.log(max)


function findMaxValue(numbers){

    let maxValue = numbers[0];

for (let i=0; i<numbers.length; i++){

    if(numbers[i]>maxValue){

        maxValue=numbers[i];
    }
}
   return maxValue;
}
   let inputArray=[8,2,10,4,6];

let maxValue=findMaxValue(inputArray);

console.log(maxValue);