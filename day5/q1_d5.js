// 1. Write a function that takes an array of numbers as input and returns the sum of all the numbers.

// Example:
// Input: \[1, 2, 3, 4, 5\]
// Output: 15

// function calculateSum(numbers){
//     let sum=0;
//     for(let i=o ;  i < number.length ;  i++){
//         sum+=number[i]
//     }
//     return sum;
  
// }
// const inputArray=[1,2,3,4,5];
// const OutputSum=calculateSum(inputArray);
// console.log(OutputSum);



function calculateSum(numbers) {

    let sum = 0;
  
    
    for (let i = 0; i < numbers.length; i++) {
      
      sum += numbers[i];
    }
  
    
    return sum;
  }
  

  const inputArray = [1, 2, 3, 4, 5];
  
  
  const outputSum = calculateSum(inputArray);
  
  
  console.log(outputSum);
  












