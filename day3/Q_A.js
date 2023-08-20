// ## Assignment Day -3 (Control Flow and Logic)

// 1. Question: Given an array of numbers `[1, 2, 3, 4, 5]`, write a loop to calculate the sum of all the numbers in the array.

//    Example:
//    Input: `[1, 2, 3, 4, 5]`
//    Output: `15`

const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);               // Outputs: 15

        

// 2. Question: Write a program that takes an array of names and logs each name to the console using a loop.

//    Example:
//    Input: `['Alice', 'Bob', 'Charlie']`
//    Output:

//    ```
//    Alice
//    Bob
//    Charlie
//    ```
/*
const names = ['Alice', 'Bob', 'Charlie'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}/*


// 3. Question: Given an array of strings `['apple', 'banana', 'cherry', 'date']`, write a loop to concatenate all the strings and return the resulting string.
//    Example:
//    Input: `['apple', 'banana', 'cherry', 'date']`
//    Output: `'applebananacherrydate'`
/*
const strings = ['apple', 'banana', 'cherry', 'date'];
let result = '';

for (let i = 0; i < strings.length; i++) {
    result += strings[i];
}

console.log(result); // Outputs: 'applebananacherrydate'           */




// 4. Question: Write a program that takes an object representing a student's grades, where the keys are subject names and the values are the corresponding grades. Use a loop to calculate the average grade.

//    Example:
//    Input: `{ math: 90, science: 80, history: 95 }`
//    Output: `88.33333333333333`


/*const grades = { math: 90, science: 80, history: 95 };
let totalGrades = 0;
let numberOfSubjects = 0;

for (const subject in grades) {
    if (grades.hasOwnProperty(subject)) {
        totalGrades += grades[subject];
        numberOfSubjects++;
    }
}

const averageGrade = totalGrades / numberOfSubjects;
console.log(averageGrade); // Outputs: 88.33333333333333   */     


// 5. Question: Given an array of objects representing books, each with properties `title` and `author`, write a loop to log the title and author of each book to the console.

//    Example:
//    Input: `[{ title: 'Book 1', author: 'Author 1' }, { title: 'Book 2', author: 'Author 2' }]`
//    Output:

//    ```
//    Book 1 by Author 1
//    Book 2 by Author 2
//    ```

/*
const books = [
    { title: 'Book 1', author: 'Author 1' },
    { title: 'Book 2', author: 'Author 2' }
];

for (let i = 0; i < books.length; i++) {
    const book = books[i];
    console.log(`${book.title} by ${book.author}`);
}
*/


// 6. Question: Write a program that takes an array of numbers and returns a new array containing only the even numbers using a loop.

//    Example:
//    Input: `[1, 2, 3, 4, 5, 6]`
//    Output: `[2, 4, 6]`
/*
   const numbers=[1,2,3,4,5,6];
   const evenNumbers=[];
   for(let i=0; i<numbers.length ; i++){
    if(numbers[i] %2 ===0){
    evenNumbers.push(numbers[i]);
    }
   }
   console.log(evenNumbers);  */


// 7. Question: Given an object representing a shopping cart with properties `item1`, `item2`, and `item3`, write a loop to calculate the total price of all the items.

//    Example:
//    Input: `{ item1: 10, item2: 20, item3: 15 }`
//    Output: `45`
   
/*
const shoppingCart = { item1: 10, item2: 20, item3: 15 };
let totalPrice = 0;

for (const item in shoppingCart) {
    if (shoppingCart.hasOwnProperty(item)) {
        totalPrice += shoppingCart[item];
    }
}

console.log(totalPrice); // Outputs: 45           */

 




// 8. Question: Write a program that takes an array of strings and returns a new array with all the strings converted to uppercase using a loop.

//    Example:
//    Input: `['apple', 'banana', 'cherry']`
//    Output: `['APPLE', 'BANANA', 'CHERRY']`

/*
const strings = ['apple', 'banana', 'cherry'];
const uppercaseStrings = [];

for (let i = 0; i < strings.length; i++) {
    uppercaseStrings.push(strings[i].toUpperCase());
}

console.log(uppercaseStrings); // Outputs: ['APPLE', 'BANANA', 'CHERRY']    */




// 9. Question: Given an array of objects representing students, each with properties `name` and `age`, write a loop to find the youngest student.

//    Example:
//    Input: `[{ name: 'Alice', age: 20 }, { name: 'Bob', age: 18 }, { name: 'Charlie', age: 22 }]`
//    Output: `{ name: 'Bob', age: 18 }`

/*const students = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 18 },
    { name: 'Charlie', age: 22 }
];

let youngestStudent = students[0]; // Assume the first student is the youngest

for (let i = 1; i < students.length; i++) {
    if (students[i].age < youngestStudent.age) {
        youngestStudent = students[i];
    }
}

console.log(youngestStudent); // Outputs: { name: 'Bob', age: 18 }    */





// 10. Question: Write a program that takes an object representing a recipe with properties `name`, `ingredients`, and `instructions`. Use a loop to log each ingredient and its corresponding instruction to the console.

//    Example:
//    Input: `{ name: 'Chocolate Cake', ingredients: ['flour', 'sugar', 'cocoa powder'], instructions: ['Mix dry ingredients', 'Add wet ingredients', 'Bake in the oven'] }`
//    Output:

//    ```
//    Ingredient: flour, Instruction: Mix dry ingredients
//    Ingredient: sugar, Instruction: Add wet ingredients
//    Ingredient: cocoa powder, Instruction: Bake in the oven
//    ```
/*const recipe = {
    name: 'Chocolate Cake',
    ingredients: ['flour', 'sugar', 'cocoa powder'],
    instructions: ['Mix dry ingredients', 'Add wet ingredients', 'Bake in the oven']
};

for (let i = 0; i < recipe.ingredients.length; i++) {
    const ingredient = recipe.ingredients[i];
    const instruction = recipe.instructions[i];
    console.log(`Ingredient: ${ingredient}, Instruction: ${instruction}`);
}  */
