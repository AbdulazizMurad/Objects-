//task1
let book = {
  Title: "JavaScript: The Definitive Guide",
  Author: "David Flanagan",
  PublishedYear: 2020,
  Genre: "Programming",
};
//task2
console.log(book.Title);
console.log(book["PublishedYear"]);
//task3
book.pageCount = 1096;
//Task 4) The book has been assigned an ISBN number. Add a property 'ISBN' with a value "978-1491952023".
book.ISBN = "978 - 1491952023";
//Task 5) Modify the 'publishedYear' to 2021 as a new edition has been released.
book.PublishedYear = 2021;
console.log(book);
//Task 6) Modify the 'author' property to hold an array of two authors: "David Flanagan" and "Another Author".
book.Author = ["David Flanagan", "Abdulaziz Murad"];
console.log(book);
// Task 7) Add a 'reviews' property to the 'book' object, which will store an array of review objects.
//         Each review object should have 'reviewer' and 'comment' properties.
//         Start with one review: {reviewer: "Book Critic", comment: "A comprehensive guide to JavaScript."}.
let review1 = {
  reviewer: "Book Critic",
  comment: "A comprehensive guide to JavaScript.",
};
let review2 = {
  reviewer: "Book opinion",
  comment: "A great book.",
};
book.reviews = [review1, review2];
console.log(book);
