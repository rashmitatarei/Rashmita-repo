//4. Question: Write a program that takes an object representing a student's grades, where the keys are subject names and the values are the corresponding grades. Use a loop to calculate the average grade.

//    Example:
//    Input: `{ math: 90, science: 80, history: 95 }`
//    Output: `88.33333333333333`


const grades = { math: 90, science: 80, history: 95 };
let totalGrades = 0;
let numOfSubjects = 0;

for (const subject in grades) {
    if (grades.hasOwnProperty(subject)) {
        totalGrades += grades[subject];
        numOfSubjects++;
    }
}

const averageGrade = totalGrades / numOfSubjects;
console.log(averageGrade); 