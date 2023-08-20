// 6. Question: Write a program that takes an array of numbers and returns a new array containing only the even numbers using a loop.

//    Example:
//    Input: `[1, 2, 3, 4, 5, 6]`
//    Output: `[2, 4, 6]`

   const num=[1,2,3,4,5,6];
   const evenNum=[];
   for(let i=0; i<num.length ; i++){
    if(num[i] %2 ===0){
    evenNum.push(num[i]);
    }
   }
   console.log(evenNum);  