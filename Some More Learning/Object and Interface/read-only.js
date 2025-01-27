// Read-Only Properties
// Create an interface Book with the following properties:
;
var book = {
    title: "Back-End Development",
    author: "John",
    publishedYear: 2025,
    isbn: "1234abcd",
};
//book.isbn="123432123123"
// cannot assign to 'isbn' because it is a read-only property.ts(2540)
console.log(book.title);
console.log(book.author);
console.log(book.publishedYear);
console.log(book.isbn);
