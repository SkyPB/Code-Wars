/* 
You are given an array of book objects, each containing information about a book including its title, author, and publication year. Your task is to organize the books by their publication year and then alphabetically by title within each year.
Write a function called 'organizedBooksByYear' that takes an array of book objects as input and returns a new array of objects where books are organized by year and sorted alphabetically by title within each year.
Each book object has the following structure:
{
    title: "Book Title",
    author: "Author Name",
    year: Publication_Year
}
Your function should return an array of objects where each object represents a year and contains an array of books published in that year, sorted alphabetically by title.
Example Input:
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "Frankenstein", author: "Mary Shelley", year: 1818 }
];

const organizedBooks = [
    { year: 1813, books: [{ title: "Pride and Prejudice", author: "Jane Austen" }] },
    { year: 1818, books: [{ title: "Frankenstein", author: "Mary Shelley" }] },
    { year: 1925, books: [{ title: "The Great Gatsby", author: "F. Scott Fitzgerald" }] },
    { year: 1949, books: [{ title: "1984", author: "George Orwell" }] },
    { year: 1951, books: [{ title: "The Catcher in the Rye", author: "J.D. Salinger" }] },
    { year: 1960, books: [{ title: "To Kill a Mockingbird", author: "Harper Lee" }] }
];
*/

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "Frankenstein", author: "Mary Shelley", year: 1818 },
];

let sortedArr = [];
const organizedBooks = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    // const newArr = newArr.push(arr.year);
    sortedArr = arr.sort((a, b) => a.year - b.year);
  }
  return sortedArr;
};

console.log(organizedBooks(books));
