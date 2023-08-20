// 3. Question: Given an array of strings `['apple', 'banana', 'cherry', 'date']`, write a loop to concatenate all the strings and return the resulting string.
//    Example:
//    Input: `['apple', 'banana', 'cherry', 'date']`
//    Output: `'applebananacherrydate'`

const strings = ['apple', 'banana', 'cherry', 'date'];
let result = '';

for (let i = 0; i < strings.length; i++) {
    result += strings[i];
}

console.log(result);          
