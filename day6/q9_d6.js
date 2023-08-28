// 9. Problem: Write a function that receives an object with properties for name, age, and country. Use destructuring assignment with default values to set the country to "Unknown" if it's not provided.

// Example:
// Input: { name: "John", age: 25 }
// Output: { name: "John", age: 25, country: "Unknown" }




function addIsNewproperty({name , age , country="Unknown"}){
   return {name , age , country} ;
}

let originalinfo = {name: "John", age: 25 };
let processedInfo = addIsNewproperty(originalinfo);
console.log(processedInfo);