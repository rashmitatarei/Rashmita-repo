// 9. Question: Given an array of objects representing students, each with properties `name` and `age`, write a loop to find the youngest student.

//    Example:
//    Input: `[{ name: 'Alice', age: 20 }, { name: 'Bob', age: 18 }, { name: 'Charlie', age: 22 }]`
//    Output: `{ name: 'Bob', age: 18 }`

const students = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 18 },
    { name: 'Charlie', age: 22 }
];

let youngestStudent = students[0]; 

for (let i = 1; i < students.length; i++) {
    if (students[i].age < youngestStudent.age) {
        youngestStudent = students[i];
    }
}

console.log(youngestStudent); 

