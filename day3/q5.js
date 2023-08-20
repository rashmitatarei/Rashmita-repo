//5. Question: Given an array of objects representing books, each with properties `title` and `author`, write a loop to log the title and author of each book to the console.

//    Example:
//    Input: `[{ title: 'Book 1', author: 'Author 1' }, { title: 'Book 2', author: 'Author 2' }]`
//    Output:

//    ```
//    Book 1 by Author 1
//    Book 2 by Author 2
//    ```


const books = [
    { title: 'Book 1', author: 'Author 1' },
    { title: 'Book 2', author: 'Author 2' }
];

for (let i = 0; i < books.length; i++) {
    const book = books[i];
    console.log(`${book.title} by ${book.author}`);
}


