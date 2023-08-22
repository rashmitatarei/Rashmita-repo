// 10. Write a function that takes an object representing a person and returns a greeting message using their name and age.

// Example:
// Input: { name: "Alice", age: 30 }
// Output: "Hello, Alice! You are 30 years old."


function createGreeting(person) {
    const greeting = `Hello, ${person.name}! You are ${person.age} years old.`;
    return greeting;
  }
  
  
  const personObject = { name: "Alice", age: 30 };

  const greetingMessage = createGreeting(personObject);
  

  console.log(greetingMessage); 
  