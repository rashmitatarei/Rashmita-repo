// 2. Create a function that takes an array of strings as input and returns a new array with the strings in uppercase.

// Example:
// Input: \["apple", "banana", "kiwi"\]
// Output: \["APPLE", "BANANA", "KIWI"\]

function convertToUpperCase(strings){
    
    let upperCaseStrings=[];

    for(let i=0; i<strings.length; i++){

   let  upperCaseString = strings[i].toUpperCase();

   upperCaseStrings.push(upperCaseString )
} 
         return upperCaseStrings ;
}

const inputArray=["apple","banana","kiwi"];
const outputArray=convertToUpperCase(inputArray);
console.log(outputArray);

