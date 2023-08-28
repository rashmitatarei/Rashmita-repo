//5. Problem: Write a function that takes an object as input and destructures its properties to extract the name and age. Return a formatted string with this information.

// Example:
// Input: { name: "John", age: 25 }
// Output: "My name is John and I am 25 years old."


function  formatPersonInfo(person){
  let {name , age} = person;

  return `My name is${name}  and I am ${age} years old `
}
let personinfo={name:"jhon" ,age:"25"};

let formatstring=formatPersonInfo(personinfo);

console.log(formatstring)







