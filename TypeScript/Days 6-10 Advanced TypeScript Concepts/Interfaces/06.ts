// Read-Only Properties

// Define an interface Book with these properties:

//     title: a string
//     author: a string
//     ISBN: a read-only string
//     Create an object of type Book and try modifying the ISBN property to see what happens.


interface Book {
    title: string,
    author: string,
    readonly ISBN: string
}

const book1:Book={title:"TypeScript", author:"Saqib",ISBN:"0987654321"}
console.log(book1.title)
console.log(book1.author)
book1.ISBN="2345678";